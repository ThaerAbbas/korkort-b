"use client";

import { useState } from "react";
import { questions } from "@/data/questions";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [saved, setSaved] = useState<number[]>([]);
  const [onlySaved, setOnlySaved] = useState(false);

  const list = onlySaved
    ? questions.filter((q) => saved.includes(q.id))
    : questions;

  const question = list[index];

  function answerQuestion(choice: number) {
    if (!question || answers[question.id] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [question.id]: choice }));
  }

  function next(step: number) {
    setIndex((i) => Math.max(0, Math.min(list.length - 1, i + step)));
  }

  function toggleSaved() {
    if (!question) return;
    setSaved((prev) =>
      prev.includes(question.id)
        ? prev.filter((id) => id !== question.id)
        : [...prev, question.id],
    );
  }

  if (!question) {
    return (
      <main className="mobile-app">
        <h1>📚 Körkort B</h1>
        <p>ما حفظت أي سؤال للمراجعة لسا.</p>
        <button
          onClick={() => {
            setOnlySaved(false);
            setIndex(0);
          }}
        >
          رجوع لكل الأسئلة
        </button>
      </main>
    );
  }

  const selected = answers[question.id];
  const answered = selected !== undefined;

  return (
    <main className="mobile-app">
      <header className="mobile-header">
        <span>🚗 Körkort B</span>
        <span>التيوري السويدي</span>
      </header>

      <div className="toolbar">
        <button
          onClick={() => {
            setOnlySaved(!onlySaved);
            setIndex(0);
          }}
        >
          {onlySaved ? "كل الأسئلة" : `المحفوظة ⭐ ${saved.length}`}
        </button>
        <span>
          {index + 1} / {list.length}
        </span>
      </div>

      <div className="progress">
        <div style={{ width: `${((index + 1) / list.length) * 100}%` }} />
      </div>

      <section className="question-card">
        <span className="category">{question.category}</span>

        <h2>{question.questionSv}</h2>
        <p className="arabic-question" dir="rtl">
          {question.questionAr}
        </p>

        <div className="answers">
          {question.options.map((option, i) => {
            const correct = question.correctIndex === i;
            const isSelected = selected === i;

            let style = "";
            if (answered && correct) style = "correct";
            else if (answered && isSelected) style = "incorrect";

            return (
              <button
                key={i}
                className={`answer ${style}`}
                onClick={() => answerQuestion(i)}
                disabled={answered}
              >
                <span className="letter">{String.fromCharCode(65 + i)}</span>
                <span className="answer-text">
                  <span>{option.sv}</span>
                  <span dir="rtl">{option.ar}</span>
                </span>
                {answered && correct && <b>✓</b>}
                {answered && isSelected && !correct && <b>✕</b>}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="explanation">
            <strong>
              {selected === question.correctIndex
                ? "إجابة صحيحة! 🎉"
                : "مو صحيح، راجع الجواب الصحيح"}
            </strong>
            <p>{question.explanationSv}</p>
            <p dir="rtl">{question.explanationAr}</p>
          </div>
        )}

        <button className="save-question" onClick={toggleSaved}>
          {saved.includes(question.id)
            ? "★ إزالة من المحفوظات"
            : "☆ حفظ للمراجعة"}
        </button>

        <div className="navigation">
          <button disabled={index === 0} onClick={() => next(-1)}>
            السابق ←
          </button>
          <button disabled={index === list.length - 1} onClick={() => next(1)}>
            التالي →
          </button>
        </div>
      </section>

      <p className="disclaimer">أسئلة تدريبية وليست أسئلة الامتحان الرسمية.</p>
    </main>
  );
}
