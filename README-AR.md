# تحديث Körkort B — بنك تدريب ومراجعة واختبار تجريبي

هذه حزمة استبدال لمشروع Next.js الحالي `korkort-b`. تشمل 400 سؤال تدريبية سويدية/عربية، رسومات SVG، وضع دراسة مع شرح فوري، أسئلة محفوظة، مراجعة الأخطاء، واختباراً تجريبياً بوقت.

## ما الذي تغيّر؟

- الحفاظ على 400 سؤال ومعرّفات ثابتة، وإضافة `reviewStatus: "draft"` لكل سؤال كي يكون واضحاً أن المحتوى لم يُعتمد بعد كمحتوى تجاري مُراجع بنداً بنداً.
- إصلاح سؤال مكرر عن الانزلاق المائي ليصبح سؤالاً مختلفاً عن أسباب زيادة خطر الانزلاق المائي.
- وضع الدراسة: جواب صحيح/خاطئ وشرح سويدي وعربي ورسمة عند توفرها.
- حفظ الإجابات والمحفوظات والأخطاء في `localStorage` على الجهاز نفسه، مع الحفاظ على مفاتيح التخزين السابقة للتوافق.
- وضع مراجعة للأسئلة الخاطئة وإمكانية إعادة الإجابة عليها.
- اختبار تجريبي: 70 سؤالاً، مؤقّت 50 دقيقة، خمسة أسئلة غير محتسبة مخفية أثناء الحل، ونتيجة من 65 مع حد تدريب 52. هذه محاكاة تعليمية وليست مطابقة لأسئلة Trafikverket أو بديلاً عن الامتحان الرسمي.
- إضافة روابط رسمية للمراجعة، وتحديث عنوان التطبيق وبيانات الموبايل.
- إعداد تصدير Next.js الثابت والنشر إلى GitHub Pages للمستودع `ThaerAbbas/korkort-b`.

## طريقة تركيب الملفات

من ملف ZIP، انسخ الملفات التالية إلى جذر مشروعك المحلي `korkort-b` واستبدل الملفات الموجودة:

- `src/app/page.tsx`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/data/questions.ts`
- مجلد `public/questions/` كاملاً
- `next.config.ts`
- `.github/workflows/deploy.yml`

لا تستبدل `package.json` أو `package-lock.json`؛ اترك ملفات الاعتماديات الحالية كما هي. إذا كان ملف الإعداد عندك اسمه `next.config.js` أو `next.config.mjs` بدلاً من `next.config.ts`، لا تترك إعدادين معاً؛ استبدل ملف الإعداد الموجود فقط بالمحتوى المناسب لصيغته أو أخبر المساعد باسمه.

## اختبار محلي

من التيرمنال داخل مجلد المشروع:

```powershell
npm ci
npm run build
```

يجب أن يُنشئ البناء مجلد `out`. إذا ظهر خطأ، لا ترفع التغييرات حتى يُصلح.

## الرفع إلى GitHub Pages

بعد نسخ الملفات:

```powershell
git status
git add .
git commit -m "Improve Körkort B study and mock exam"
git push origin main
```

إذا قال Git إنه لا توجد تغييرات جديدة للـ commit، راجع `git status` ثم نفّذ `git push origin main` عند الحاجة.

في GitHub افتح `Settings → Pages`، واجعل Source هو `GitHub Actions`. افتح `Actions` وتأكد من نجاح عملية `Deploy Körkort B to GitHub Pages`.

الرابط المتوقع:

`https://thaerabbas.github.io/korkort-b/`

## الحفظ والخصوصية

الإجابات والمحفوظات والأخطاء تُحفظ محلياً في المتصفح. لا يوجد حساب مستخدم أو مزامنة بين الأجهزة أو قاعدة بيانات في هذه النسخة. مسح بيانات المتصفح أو تبديل الجهاز قد يزيل التقدم.

## توثيق المحتوى قبل البيع

الأسئلة والرسومات مواد تدريبية أصلية وليست بنك Trafikverket الرسمي ولا يُدّعى أنها أسئلة سنوات سابقة. حالياً كل سؤال موسوم `reviewStatus: "draft"`. لا تغيّر الوسم إلى `verified` حتى يراجع شخص مختص نص السؤال وخياراته والإجابة والترجمة والمرجع القانوني، ثم يضيف `sourceUrl` و`sourceTitle` و`reviewedAt` الفعلية.

مرجع الاختبار الرسمي يذكر 70 سؤالاً و50 دقيقة و52 نقطة للنجاح، مع خمسة أسئلة تجريبية لا تدخل في النتيجة. قد تختلف تفاصيل تنظيم الامتحان بمرور الوقت، لذا راجع المصدر قبل أي إطلاق تجاري:

- Trafikverket — Personbil och lätt lastbil: https://www.trafikverket.se/korkort/ta-korkort/personbil-och-latt-lastbil/
- Transportstyrelsen — Övergångsställe: https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/Generella-trafikregler/Overgangsstalle/
- Transportstyrelsen — Högerregeln: https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/Generella-trafikregler/Hogerregeln/
- Transportstyrelsen — Hastighet: https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/
- Transportstyrelsen — Vinterdäck: https://www.transportstyrelsen.se/sv/vagtrafik/Fordon/Fordonsregler/Dack/vinterdack/
