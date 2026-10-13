"use client";

import { useEffect, useMemo, useState } from "react";
import { questions, type Category, type Question } from "@/data/questions";

type View = "study" | "saved" | "mistakes" | "examIntro" | "exam" | "examResults";
type ExamRun = {
  items: Question[];
  answers: Record<number, number>;
  unscoredIds: number[];
  endsAt: number;
};

const EXAM_QUESTION_COUNT = 70;
const EXAM_TIME_SECONDS = 50 * 60;
const EXAM_UNSCORED_COUNT = 5;
const PASS_SCORE = 52;
const STORAGE_ANSWERS = "korkort-b-answers";
const STORAGE_SAVED = "korkort-b-saved";
const STORAGE_MISTAKES = "korkort-b-mistakes";

const categories: { value: Category | "Alla"; label: string }[] = [
  { value: "Alla", label: "كل المواضيع | Alla ämnen" },
  { value: "Trafikregler", label: "قواعد المرور | Trafikregler" },
  { value: "Vägmärken", label: "إشارات المرور | Vägmärken" },
  { value: "Trafiksäkerhet", label: "السلامة المرورية | Trafiksäkerhet" },
  { value: "Miljö", label: "البيئة | Miljö" },
  { value: "Fordonskännedom", label: "معرفة السيارة | Fordonskännedom" },
];

const categoryLabels: Record<Category, string> = {
  Trafikregler: "قواعد المرور | Trafikregler",
  Vägmärken: "إشارات المرور | Vägmärken",
  Trafiksäkerhet: "السلامة المرورية | Trafiksäkerhet",
  Miljö: "البيئة | Miljö",
  Fordonskännedom: "معرفة السيارة | Fordonskännedom",
};

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatTime(totalSeconds: number): string {
  const mins = Math.floor(Math.max(0, totalSeconds) / 60);
  const secs = Math.max(0, totalSeconds) % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function QuestionImage({ question }: { question: Question }) {
  if (!question.image) return null;
  return (
    <figure className="question-visual">
      <img src={question.image} alt={`Illustration: ${question.questionSv}`} loading="lazy" />
      <figcaption>رسم توضيحي للتعلّم · Illustrativ bild, inte ett officiellt provfoto eller en officiell skyltkopia.</figcaption>
    </figure>
  );
}

export default function Home() {
  const [view, setView] = useState<View>("study");
  const [category, setCategory] = useState<Category | "Alla">("Alla");
  const [studyIndex, setStudyIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const storedAnswers = window.localStorage.getItem(STORAGE_ANSWERS);
      return storedAnswers ? JSON.parse(storedAnswers) : {};
    } catch {
      return {};
    }
  });
  const [savedIds, setSavedIds] = useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const storedSaved = window.localStorage.getItem(STORAGE_SAVED);
      return storedSaved ? JSON.parse(storedSaved) : [];
    } catch {
      return [];
    }
  });
  const [mistakeIds, setMistakeIds] = useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const storedMistakes = window.localStorage.getItem(STORAGE_MISTAKES);
      if (storedMistakes) return JSON.parse(storedMistakes);

      const storedAnswers = window.localStorage.getItem(STORAGE_ANSWERS);
      const parsedAnswers = storedAnswers ? JSON.parse(storedAnswers) : {};
      return questions
        .filter((q) => parsedAnswers[q.id] !== undefined && parsedAnswers[q.id] !== q.correctIndex)
        .map((q) => q.id);
    } catch {
      return [];
    }
  });
  const [examRun, setExamRun] = useState<ExamRun | null>(null);
  const [examIndex, setExamIndex] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(EXAM_TIME_SECONDS);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_ANSWERS, JSON.stringify(answers));
    window.localStorage.setItem(STORAGE_SAVED, JSON.stringify(savedIds));
    window.localStorage.setItem(STORAGE_MISTAKES, JSON.stringify(mistakeIds));
  }, [answers, savedIds, mistakeIds]);

  const studyList = useMemo(() => {
    let result = questions;
    if (view === "saved") result = result.filter((q) => savedIds.includes(q.id));
    else if (view === "mistakes") result = result.filter((q) => mistakeIds.includes(q.id));
    if (category !== "Alla") result = result.filter((q) => q.category === category);
    const search = searchText.trim().toLocaleLowerCase();
    if (search) {
      result = result.filter((q) =>
        [q.questionSv, q.questionAr, q.category, ...q.options.flatMap((o) => [o.sv, o.ar])]
          .some((text) => text.toLocaleLowerCase().includes(search))
      );
    }
    return result;
  }, [view, category, savedIds, mistakeIds, searchText]);

  const studyPosition = Math.min(studyIndex, Math.max(0, studyList.length - 1));
  const currentQuestion = studyList[studyPosition];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;
  const currentAnswered = currentAnswer !== undefined;
  const overallCorrect = questions.filter((q) => answers[q.id] === q.correctIndex).length;
  const endTime = examRun?.endsAt;

  useEffect(() => {
    if (view !== "exam" || endTime === undefined) return;
    const tick = () => {
      const seconds = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
      setRemainingSeconds(seconds);
      if (seconds <= 0) setView("examResults");
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, [view, endTime]);

  function changeView(next: View) {
    if (next === "exam" || next === "examResults") return;
    setView(next);
    setStudyIndex(0);
    setSearchText("");
  }

  function chooseStudyAnswer(optionIndex: number) {
    if (!currentQuestion || currentAnswered) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionIndex }));
    setMistakeIds((prev) => optionIndex === currentQuestion.correctIndex
      ? prev.filter((id) => id !== currentQuestion.id)
      : prev.includes(currentQuestion.id) ? prev : [...prev, currentQuestion.id]
    );
  }

  function toggleSaved(id: number) {
    setSavedIds((prev) => prev.includes(id) ? prev.filter((savedId) => savedId !== id) : [...prev, id]);
  }

  function moveStudy(step: number) {
    setStudyIndex((index) => Math.max(0, Math.min(studyList.length - 1, index + step)));
  }

  function startExam() {
    const items = shuffle(questions).slice(0, Math.min(EXAM_QUESTION_COUNT, questions.length));
    const unscoredIds = shuffle(items).slice(0, Math.min(EXAM_UNSCORED_COUNT, items.length)).map((q) => q.id);
    setExamRun({ items, answers: {}, unscoredIds, endsAt: Date.now() + EXAM_TIME_SECONDS * 1000 });
    setExamIndex(0);
    setRemainingSeconds(EXAM_TIME_SECONDS);
    setView("exam");
  }

  function answerExamQuestion(optionIndex: number) {
    if (!examRun) return;
    const question = examRun.items[examIndex];
    if (!question) return;
    setExamRun((prev) => prev ? { ...prev, answers: { ...prev.answers, [question.id]: optionIndex } } : prev);
  }

  function finishExam() {
    if (!examRun) return;
    const unanswered = examRun.items.filter((q) => examRun.answers[q.id] === undefined).length;
    const confirmed = unanswered === 0 || window.confirm(
      `لم تجب عن ${unanswered} سؤالاً. إنهاء الاختبار الآن؟ | ${unanswered} frågor är obesvarade. Avsluta provet?`
    );
    if (confirmed) setView("examResults");
  }

  function resetProgress() {
    if (!window.confirm("هل تريد حذف كل الإجابات والمحفوظات والأخطاء من هذا الجهاز؟ | Radera alla svar, sparade frågor och misstag från den här enheten?")) return;
    setAnswers({});
    setSavedIds([]);
    setMistakeIds([]);
    setStudyIndex(0);
  }

  const examQuestion = examRun?.items[examIndex];
  const scoredExamItems = examRun ? examRun.items.filter((q) => !examRun.unscoredIds.includes(q.id)) : [];
  const examScore = examRun ? scoredExamItems.filter((q) => examRun.answers[q.id] === q.correctIndex).length : 0;
  const examAnswered = examRun ? examRun.items.filter((q) => examRun.answers[q.id] !== undefined).length : 0;
  const examPassed = examScore >= PASS_SCORE;
  const scoredQuestionsByCategory = examRun ? (Object.keys(categoryLabels) as Category[]).map((cat) => {
    const items = scoredExamItems.filter((q) => q.category === cat);
    const correct = items.filter((q) => examRun.answers[q.id] === q.correctIndex).length;
    return { category: cat, correct, total: items.length };
  }) : [];

  return (
    <main className="mobile-app">
      <header className="mobile-header">
        <div className="brand"><span className="brand-mark">B</span><span className="brand-name">Körkort B</span></div>
        <span className="header-ar">التيوري السويدي</span>
      </header>

      {view !== "exam" && view !== "examResults" && (
        <>
          <section className="summary">
            <p className="eyebrow">SVENSKA + ARABISKA</p>
            <h1>دراسة التيوري <span>خطوة بخطوة</span></h1>
            <p className="summary-sub">400 سؤال تدريبي باللغتين مع رسومات توضيحية وشرح ومراجعة للأخطاء.</p>
            <div className="summary-stats">
              <div><strong>{questions.length}</strong><span>سؤال | frågor</span></div>
              <div><strong>{Object.keys(answers).length}</strong><span>تمت الإجابة | besvarade</span></div>
              <div><strong>{overallCorrect}</strong><span>صحيحة | rätt</span></div>
            </div>
          </section>

          <nav className="mode-nav" aria-label="Study modes">
            <button className={view === "study" ? "mode-button active" : "mode-button"} onClick={() => changeView("study")}>كل الأسئلة<br/><small>Alla frågor</small></button>
            <button className={view === "saved" ? "mode-button active" : "mode-button"} onClick={() => changeView("saved")}>المحفوظة ★<br/><small>Sparade</small></button>
            <button className={view === "mistakes" ? "mode-button active" : "mode-button"} onClick={() => changeView("mistakes")}>أخطائي ↻<br/><small>Misstag</small></button>
            <button className={view === "examIntro" ? "mode-button active" : "mode-button"} onClick={() => changeView("examIntro")}>اختبار تجريبي<br/><small>Övningsprov</small></button>
          </nav>
        </>
      )}

      {view === "examIntro" && (
        <section className="question-card intro-card">
          <span className="tag">SIMULERAT ÖVNINGSPROV · اختبار تدريبي</span>
          <h2>اختبر نفسك مثل إطار الامتحان الحقيقي</h2>
          <p className="arabic-question" dir="rtl">70 سؤالاً في 50 دقيقة. لن يظهر التصحيح أثناء الاختبار. خمسة أسئلة تدريبية مخفية لن تدخل في النتيجة، والحد التدريبي للنجاح 52 من 65.</p>
          <div className="exam-rules">
            <p><strong>70 frågor</strong><span>إجمالي الأسئلة</span></p>
            <p><strong>50 minuter</strong><span>الوقت المحدد</span></p>
            <p><strong>52 / 65</strong><span>حد النجاح في المحاكاة</span></p>
          </div>
          <p className="warning-note">هذا اختبار محاكاة من بنكنا التدريبي، وليس اختبار Trafikverket الرسمي أو أسئلته الأصلية.</p>
          <button className="primary-button full-button" onClick={startExam}>ابدأ الاختبار | Starta provet</button>
        </section>
      )}

      {(view === "study" || view === "saved" || view === "mistakes") && (
        <>
          <div className="controls">
            <label className="select-label"><span>الموضوع | Ämne</span>
              <select value={category} onChange={(e) => { setCategory(e.target.value as Category | "Alla"); setStudyIndex(0); }}>
                {categories.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
              </select>
            </label>
            <label className="search-label"><span>بحث | Sök</span><input value={searchText} onChange={(e) => { setSearchText(e.target.value); setStudyIndex(0); }} placeholder="كلمة أو مصطلح..." /></label>
          </div>
          <div className="list-caption">
            <span>{view === "saved" ? "الأسئلة المحفوظة | Sparade frågor" : view === "mistakes" ? "الأسئلة التي أخطأت فيها | Mina misstag" : "أسئلة تدريبية | Övningsfrågor"}</span>
            <span>{studyList.length} سؤال</span>
          </div>
          {currentQuestion ? (
            <>
              <div className="progress-line"><div style={{ width: `${((studyPosition + 1) / studyList.length) * 100}%` }} /></div>
              <section className="question-card">
                <div className="question-top"><span className="tag">{categoryLabels[currentQuestion.category]}</span><span className="q-count">{studyPosition + 1} / {studyList.length}</span></div>
                <h2>{currentQuestion.questionSv}</h2>
                <p className="arabic-question" dir="rtl">{currentQuestion.questionAr}</p>
                <QuestionImage question={currentQuestion} />
                <div className="answers">
                  {currentQuestion.options.map((option, optionIndex) => {
                    const correct = optionIndex === currentQuestion.correctIndex;
                    const chosen = currentAnswer === optionIndex;
                    const status = currentAnswered && correct ? "correct" : currentAnswered && chosen ? "incorrect" : "";
                    return <button key={`${currentQuestion.id}-${optionIndex}`} className={`answer ${status}`} disabled={currentAnswered} onClick={() => chooseStudyAnswer(optionIndex)}>
                      <span className="letter">{String.fromCharCode(65 + optionIndex)}</span>
                      <span className="answer-copy"><span>{option.sv}</span><span dir="rtl">{option.ar}</span></span>
                      {currentAnswered && correct && <b className="result-mark">✓</b>}
                      {currentAnswered && chosen && !correct && <b className="result-mark">✕</b>}
                    </button>;
                  })}
                </div>
                {currentAnswered && <div className={`explanation ${currentAnswer === currentQuestion.correctIndex ? "good" : "needs-review"}`}>
                  <strong>{currentAnswer === currentQuestion.correctIndex ? "إجابة صحيحة! · Rätt svar!" : "راجع الإجابة الصحيحة · Läs förklaringen"}</strong>
                  <p>{currentQuestion.explanationSv}</p><p dir="rtl">{currentQuestion.explanationAr}</p>
                  {currentQuestion.sourceUrl && <a className="rule-source" href={currentQuestion.sourceUrl} target="_blank" rel="noreferrer">اقرأ الموضوع من المصدر الرسمي: {currentQuestion.sourceTitle ?? "Transportstyrelsen"} ↗</a>}
                </div>}
                <button className={`save-question ${savedIds.includes(currentQuestion.id) ? "saved" : ""}`} onClick={() => toggleSaved(currentQuestion.id)}>{savedIds.includes(currentQuestion.id) ? "★ إزالة من المحفوظات" : "☆ حفظ للمراجعة"}</button>
                {view === "mistakes" && currentAnswered && <button className="retry-question" onClick={() => setAnswers((prev) => { const next = { ...prev }; delete next[currentQuestion.id]; return next; })}>أعد الإجابة على هذا السؤال | Försök igen</button>}
                <div className="navigation"><button disabled={studyPosition === 0} onClick={() => moveStudy(-1)}>← السابق</button><button disabled={studyPosition >= studyList.length - 1} onClick={() => moveStudy(1)}>التالي →</button></div>
              </section>
            </>
          ) : (
            <section className="question-card empty-state"><div className="empty-icon">✓</div><h2>ما في أسئلة هون حالياً</h2><p dir="rtl">إذا ما عندك أسئلة محفوظة أو أخطاء، اختر كل الأسئلة للمتابعة.</p><button className="primary-button" onClick={() => changeView("study")}>عرض كل الأسئلة</button></section>
          )}
        </>
      )}

      {view === "exam" && examRun && examQuestion && (
        <>
          <header className="exam-header">
            <button className="text-button" onClick={finishExam}>إنهاء</button>
            <div className={`timer ${remainingSeconds <= 300 ? "timer-warning" : ""}`} aria-live="polite">◷ {formatTime(remainingSeconds)}</div>
            <span className="q-count">{examIndex + 1} / {examRun.items.length}</span>
          </header>
          <div className="progress-line"><div style={{ width: `${((examIndex + 1) / examRun.items.length) * 100}%` }} /></div>
          <section className="question-card exam-card">
            <div className="question-top"><span className="tag">{categoryLabels[examQuestion.category]}</span><span className="q-count">{examAnswered} / {examRun.items.length} مجاب</span></div>
            <h2>{examQuestion.questionSv}</h2>
            <p className="arabic-question" dir="rtl">{examQuestion.questionAr}</p>
            <QuestionImage question={examQuestion} />
            <div className="answers">
              {examQuestion.options.map((option, optionIndex) => {
                const selected = examRun.answers[examQuestion.id] === optionIndex;
                return <button key={`${examQuestion.id}-${optionIndex}`} className={`answer ${selected ? "exam-selected" : ""}`} onClick={() => answerExamQuestion(optionIndex)}>
                  <span className="letter">{String.fromCharCode(65 + optionIndex)}</span>
                  <span className="answer-copy"><span>{option.sv}</span><span dir="rtl">{option.ar}</span></span>
                  {selected && <b className="result-mark">●</b>}
                </button>;
              })}
            </div>
            <div className="navigation exam-navigation">
              <button disabled={examIndex === 0} onClick={() => setExamIndex((i) => Math.max(0, i - 1))}>← السابق</button>
              {examIndex < examRun.items.length - 1
                ? <button onClick={() => setExamIndex((i) => Math.min(examRun.items.length - 1, i + 1))}>التالي →</button>
                : <button onClick={finishExam}>إنهاء الاختبار | Avsluta</button>}
            </div>
          </section>
          <p className="exam-footnote">لن يظهر التصحيح حتى تنهي الاختبار. يمكنك تغيير إجابتك قبل التسليم.</p>
        </>
      )}

      {view === "examResults" && examRun && (
        <section className="question-card results-card">
          <div className={`result-circle ${examPassed ? "passed" : "failed"}`}>{examScore}<small> / {scoredExamItems.length}</small></div>
          <p className="eyebrow centered">RESULTAT · النتيجة</p>
          <h1 className="result-title">{examPassed ? "أحسنت! وصلت لحد النجاح التدريبي" : "لسه بدك شوية تدريب"}</h1>
          <p className="arabic-question centered" dir="rtl">{examPassed ? "نتيجتك وصلت إلى حد النجاح في هذه المحاكاة. تابع التدريب حتى تثبّت معلوماتك." : "راجع الأخطاء والمواضيع التي تحتاج إلى تحسين، ثم جرّب مرة ثانية."}</p>
          <div className="result-summary"><div><strong>{examScore} / {scoredExamItems.length}</strong><span>النتيجة المحتسبة</span></div><div><strong>{examAnswered} / {examRun.items.length}</strong><span>أسئلة أجبت عنها</span></div><div><strong>52</strong><span>حد النجاح التدريبي</span></div></div>
          <h3 className="breakdown-title">النتيجة حسب الموضوع | Resultat per ämne</h3>
          <div className="breakdown">{scoredQuestionsByCategory.map((item) => <div key={item.category} className="breakdown-row"><span>{item.category}</span><strong>{item.correct} / {item.total}</strong></div>)}</div>
          <p className="warning-note">محاكاة تدريبية فقط. في الامتحان الرسمي، أسئلة الاختبار التجريبية وكيفية احتسابها تحددها Trafikverket؛ هذه النتيجة ليست ضماناً للنجاح في الامتحان الحقيقي.</p>
          <div className="result-actions"><button className="primary-button full-button" onClick={() => { setView("mistakes"); setCategory("Alla"); setStudyIndex(0); }}>راجع الأخطاء | Repetera misstag</button><button className="secondary-button full-button" onClick={startExam}>اختبار جديد | Nytt prov</button><button className="text-button full-button" onClick={() => { setView("study"); setStudyIndex(0); setCategory("Alla"); }}>العودة للدراسة</button></div>
        </section>
      )}

      {view !== "exam" && view !== "examResults" && (
        <>
          <section className="sources-card">
            <h3>مصادر رسمية للمراجعة | Officiella källor</h3>
            <p>هذه الروابط تساعدك على التحقق من القواعد. الأسئلة والرسومات هنا مواد تدريبية أصلية وليست أسئلة Trafikverket الرسمية، ولم تُعتمد بعد كمحتوى تجاري مُراجع بنداً بنداً.</p>
            <a href="https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/" target="_blank" rel="noreferrer">Trafikverket – امتحان B ومجالاته ↗</a>
            <a href="https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/Generella-trafikregler/Overgangsstalle/" target="_blank" rel="noreferrer">Transportstyrelsen – ممرات المشاة ↗</a>
            <a href="https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/Generella-trafikregler/Hogerregeln/" target="_blank" rel="noreferrer">Transportstyrelsen – قاعدة الأولوية لليمين ↗</a>
            <a href="https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/" target="_blank" rel="noreferrer">Transportstyrelsen – السرعة وتكييفها ↗</a>
            <a href="https://www.transportstyrelsen.se/sv/vagtrafik/Fordon/Fordonsregler/Dack/vinterdack/" target="_blank" rel="noreferrer">Transportstyrelsen – الإطارات الشتوية ↗</a>
          </section>
          <footer className="app-footer">
            <p>مواد تدريبية للمذاكرة، وليست بنك أسئلة Trafikverket الرسمي.</p>
            <p>Övningsmaterial – inte Trafikverkets officiella frågebank.</p>
            <button onClick={resetProgress}>حذف كل التقدم من هذا الجهاز | Radera studieprogress</button>
          </footer>
        </>
      )}
    </main>
  );
}
