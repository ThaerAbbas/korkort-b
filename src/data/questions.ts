export type Category =
  | "Trafikregler"
  | "Vägmärken"
  | "Trafiksäkerhet"
  | "Miljö"
  | "Fordonskännedom";

export type Question = {
  id: number;
  category: Category;
  questionSv: string;
  questionAr: string;
  options: { sv: string; ar: string }[];
  correctIndex: number;
  explanationSv: string;
  explanationAr: string;
};

// 200 bilingual practice questions. IDs are fixed by category:
// Trafikregler 1001-1040, Vägmärken 2001-2040,
// Trafiksäkerhet 3001-3040, Miljö 4001-4040,
// Fordonskännedom 5001-5040.
// These are original practice questions, not official Trafikverket exam questions.
export const questions: Question[] = [
  {
    "id": 1001,
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra vid ett obevakat övergångsställe när en gående vill passera?",
    "questionAr": "ماذا تفعل عند ممر مشاة غير محكوم بإشارة عندما يريد أحد المشاة العبور؟",
    "options": [
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      },
      {
        "sv": "Ignorera skyltar eller signaler",
        "ar": "تجاهل الإشارات أو العلامات"
      },
      {
        "sv": "Köra vidare även om du riskerar att skapa fara",
        "ar": "المتابعة حتى لو كنت تخاطر بالتسبب في خطر"
      },
      {
        "sv": "Sänka farten och lämna den gående möjlighet att passera",
        "ar": "تخفيف السرعة وإتاحة المجال للمشاة للعبور"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Vid obevakade övergångsställen har förare väjningsplikt mot gående.",
    "explanationAr": "عند ممر المشاة غير المحكوم بإشارة، يجب على السائق إعطاء الأولوية للمشاة."
  },
  {
    "id": 1002,
    "category": "Trafikregler",
    "questionSv": "Vad innebär högerregeln när två fordons kurser skär varandra och inget annat reglerar situationen?",
    "questionAr": "ماذا تعني قاعدة الأولوية لليمين عندما تتقاطع مسارات مركبتين ولا توجد قاعدة أخرى؟",
    "options": [
      {
        "sv": "Följa andra trafikanter även om det verkar osäkert",
        "ar": "اتباع مستخدمي الطريق الآخرين حتى لو بدا الأمر غير آمن"
      },
      {
        "sv": "Anta att andra alltid lämnar företräde",
        "ar": "افتراض أن الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Lämna företräde åt fordonet som kommer från höger",
        "ar": "إعطاء الأولوية للمركبة القادمة من اليمين"
      },
      {
        "sv": "Öka farten och hoppas att det går bra",
        "ar": "زيادة السرعة والأمل بأن تسير الأمور جيداً"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Högerregeln gäller där inget vägmärke eller annan regel anger något annat.",
    "explanationAr": "تُطبّق قاعدة اليمين عندما لا توجد إشارة أو قاعدة أخرى تنظم الأولوية."
  },
  {
    "id": 1003,
    "category": "Trafikregler",
    "questionSv": "Vad kräver en stoppskylt?",
    "questionAr": "ماذا تفرض إشارة STOP؟",
    "options": [
      {
        "sv": "Stanna helt och fortsätt först när det kan ske säkert",
        "ar": "التوقف تماماً والمتابعة فقط عندما يكون ذلك آمناً"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون استخدام الإشارة"
      },
      {
        "sv": "Bromsa hårt utan att först bedöma trafiken",
        "ar": "الفرملة بقوة دون تقييم حركة المرور أولاً"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Stopplikt innebär ett fullständigt stopp, inte bara att sakta ner.",
    "explanationAr": "واجب التوقف يعني توقفاً كاملاً، وليس مجرد تخفيف السرعة."
  },
  {
    "id": 1004,
    "category": "Trafikregler",
    "questionSv": "Vad betyder rött ljus i en trafiksignal?",
    "questionAr": "ماذا يعني الضوء الأحمر في إشارة المرور؟",
    "options": [
      {
        "sv": "Ignorera skyltar eller signaler",
        "ar": "تجاهل الإشارات أو العلامات"
      },
      {
        "sv": "Köra vidare även om du riskerar att skapa fara",
        "ar": "المتابعة حتى لو كنت تخاطر بالتسبب في خطر"
      },
      {
        "sv": "Stanna före stopplinjen eller signalen",
        "ar": "التوقف قبل خط الوقوف أو الإشارة"
      },
      {
        "sv": "Följa andra trafikanter även om det verkar osäkert",
        "ar": "اتباع مستخدمي الطريق الآخرين حتى لو بدا الأمر غير آمن"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Rött ljus betyder att du ska stanna.",
    "explanationAr": "الضوء الأحمر يعني وجوب التوقف."
  },
  {
    "id": 1005,
    "category": "Trafikregler",
    "questionSv": "Vad bör du göra när trafiksignalen blir gul och du kan stanna säkert?",
    "questionAr": "ماذا ينبغي أن تفعل عندما تصبح إشارة المرور صفراء ويمكنك التوقف بأمان؟",
    "options": [
      {
        "sv": "Stanna före stopplinjen",
        "ar": "التوقف قبل خط الوقوف"
      },
      {
        "sv": "Öka farten och hoppas att det går bra",
        "ar": "زيادة السرعة والأمل بأن تسير الأمور جيداً"
      },
      {
        "sv": "Anta att andra alltid lämnar företräde",
        "ar": "افتراض أن الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون استخدام الإشارة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Gult ljus betyder normalt att du ska stanna om du kan göra det säkert.",
    "explanationAr": "يعني الضوء الأصفر عادةً التوقف إذا أمكن ذلك بأمان."
  },
  {
    "id": 1006,
    "category": "Trafikregler",
    "questionSv": "Vad ska du kontrollera innan du byter körfält?",
    "questionAr": "ماذا يجب أن تتحقق منه قبل تغيير المسار؟",
    "options": [
      {
        "sv": "Bromsa hårt utan att först bedöma trafiken",
        "ar": "الفرملة بقوة دون تقييم حركة المرور أولاً"
      },
      {
        "sv": "Ignorera skyltar eller signaler",
        "ar": "تجاهل الإشارات أو العلامات"
      },
      {
        "sv": "Speglar, döda vinkeln och att körfältsbytet kan göras säkert",
        "ar": "المرايا والمنطقة العمياء وإمكانية تغيير المسار بأمان"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Kontrollera omgivningen och signalera innan du byter körfält.",
    "explanationAr": "تحقق من محيطك واستخدم الإشارة قبل تغيير المسار."
  },
  {
    "id": 1007,
    "category": "Trafikregler",
    "questionSv": "När bör du signalera inför en sväng?",
    "questionAr": "متى ينبغي أن تستخدم الغماز قبل الانعطاف؟",
    "options": [
      {
        "sv": "Köra vidare även om du riskerar att skapa fara",
        "ar": "المتابعة حتى لو كنت تخاطر بالتسبب في خطر"
      },
      {
        "sv": "Anta att andra alltid lämnar företräde",
        "ar": "افتراض أن الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Följa andra trafikanter även om det verkar osäkert",
        "ar": "اتباع مستخدمي الطريق الآخرين حتى لو بدا الأمر غير آمن"
      },
      {
        "sv": "I god tid före svängen",
        "ar": "قبل الانعطاف بوقت مناسب"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Tydlig och tidig signalering hjälper andra trafikanter att förstå din avsikt.",
    "explanationAr": "الإشارة الواضحة والمبكرة تساعد الآخرين على فهم نيتك."
  },
  {
    "id": 1008,
    "category": "Trafikregler",
    "questionSv": "Vad är viktigt när du kör in i en cirkulationsplats?",
    "questionAr": "ما المهم عند دخول الدوار؟",
    "options": [
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون استخدام الإشارة"
      },
      {
        "sv": "Anpassa farten och lämna företräde enligt skyltning och regler",
        "ar": "تخفيف السرعة وإعطاء الأولوية وفق الإشارات والقواعد"
      },
      {
        "sv": "Öka farten och hoppas att det går bra",
        "ar": "زيادة السرعة والأمل بأن تسير الأمور جيداً"
      },
      {
        "sv": "Bromsa hårt utan att först bedöma trafiken",
        "ar": "الفرملة بقوة دون تقييم حركة المرور أولاً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Läs skyltningen, anpassa farten och visa hänsyn till trafiken i cirkulationsplatsen.",
    "explanationAr": "اقرأ الإشارات وخفف السرعة وراعِ حركة المرور داخل الدوار."
  },
  {
    "id": 1009,
    "category": "Trafikregler",
    "questionSv": "Vad ska du tänka på när du lämnar en cirkulationsplats?",
    "questionAr": "ما الذي ينبغي الانتباه إليه عند الخروج من الدوار؟",
    "options": [
      {
        "sv": "Ignorera skyltar eller signaler",
        "ar": "تجاهل الإشارات أو العلامات"
      },
      {
        "sv": "Köra vidare även om du riskerar att skapa fara",
        "ar": "المتابعة حتى لو كنت تخاطر بالتسبب في خطر"
      },
      {
        "sv": "Kontrollera omgivningen och signalera tydligt när det är lämpligt",
        "ar": "مراقبة المحيط واستخدام الغماز بوضوح عندما يكون مناسباً"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Planera utfarten och var uppmärksam på gående och cyklister.",
    "explanationAr": "خطط للخروج وانتبه للمشاة وراكبي الدراجات."
  },
  {
    "id": 1010,
    "category": "Trafikregler",
    "questionSv": "Vad gör du när du kör in på en motorväg via accelerationsfältet?",
    "questionAr": "ماذا تفعل عند دخول الطريق السريع عبر مسار التسارع؟",
    "options": [
      {
        "sv": "Öka farten och hoppas att det går bra",
        "ar": "زيادة السرعة والأمل بأن تسير الأمور جيداً"
      },
      {
        "sv": "Anpassa hastigheten och hitta en säker lucka utan att tvinga andra att bromsa",
        "ar": "اضبط السرعة وابحث عن فراغ آمن دون إجبار الآخرين على الفرملة"
      },
      {
        "sv": "Anta att andra alltid lämnar företräde",
        "ar": "افتراض أن الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Följa andra trafikanter även om det verkar osäkert",
        "ar": "اتباع مستخدمي الطريق الآخرين حتى لو بدا الأمر غير آمن"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Använd accelerationsfältet för att anpassa farten och gå in när det är säkert.",
    "explanationAr": "استخدم مسار التسارع لمواءمة السرعة وادخل عندما يكون ذلك آمناً."
  },
  {
    "id": 1011,
    "category": "Trafikregler",
    "questionSv": "Vad bör du göra inför en avfart från motorvägen?",
    "questionAr": "ماذا ينبغي أن تفعل قبل مخرج الطريق السريع؟",
    "options": [
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      },
      {
        "sv": "Planera i god tid, placera dig rätt och signalera",
        "ar": "التخطيط مبكراً والتمركز في المسار الصحيح واستخدام الغماز"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون استخدام الإشارة"
      },
      {
        "sv": "Bromsa hårt utan att först bedöma trafiken",
        "ar": "الفرملة بقوة دون تقييم حركة المرور أولاً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "God planering minskar sena filbyten och plötsliga inbromsningar.",
    "explanationAr": "التخطيط الجيد يقلل تغيير المسارات في اللحظة الأخيرة والفرملة المفاجئة."
  },
  {
    "id": 1012,
    "category": "Trafikregler",
    "questionSv": "Hur bör du agera när en buss signalerar att den ska lämna en hållplats på en väg med högst 50 km/h?",
    "questionAr": "كيف تتصرف عندما تشير حافلة إلى مغادرة المحطة على طريق حد السرعة فيه 50 كم/ساعة أو أقل؟",
    "options": [
      {
        "sv": "Ignorera skyltar eller signaler",
        "ar": "تجاهل الإشارات أو العلامات"
      },
      {
        "sv": "Följa andra trafikanter även om det verkar osäkert",
        "ar": "اتباع مستخدمي الطريق الآخرين حتى لو بدا الأمر غير آمن"
      },
      {
        "sv": "Sänka farten och ge bussen möjlighet att köra ut",
        "ar": "تخفيف السرعة وإتاحة المجال للحافلة للخروج"
      },
      {
        "sv": "Köra vidare även om du riskerar att skapa fara",
        "ar": "المتابعة حتى لو كنت تخاطر بالتسبب في خطر"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "På sådana vägar ska förare lämna bussen möjlighet att lämna hållplatsen, om det kan ske utan fara.",
    "explanationAr": "على هذه الطرق ينبغي إتاحة المجال للحافلة لمغادرة المحطة إذا أمكن ذلك دون خطر."
  },
  {
    "id": 1013,
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra när järnvägsövergångens röda ljus blinkar?",
    "questionAr": "ماذا تفعل عندما تومض الأضواء الحمراء عند معبر السكة الحديد؟",
    "options": [
      {
        "sv": "Öka farten och hoppas att det går bra",
        "ar": "زيادة السرعة والأمل بأن تسير الأمور جيداً"
      },
      {
        "sv": "Stanna och vänta tills signalen tillåter passage",
        "ar": "التوقف والانتظار حتى تسمح الإشارة بالعبور"
      },
      {
        "sv": "Anta att andra alltid lämnar företräde",
        "ar": "افتراض أن الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون استخدام الإشارة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Rött blinkande ljus vid järnvägsövergång betyder att du inte får passera.",
    "explanationAr": "الضوء الأحمر الوامض عند معبر السكة يعني أنه لا يجوز العبور."
  },
  {
    "id": 1014,
    "category": "Trafikregler",
    "questionSv": "Hur bör du reagera när ett utryckningsfordon närmar sig med blåljus och siren?",
    "questionAr": "كيف تتصرف عندما تقترب مركبة طوارئ بأضواء زرقاء وصفارة؟",
    "options": [
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      },
      {
        "sv": "Bromsa hårt utan att först bedöma trafiken",
        "ar": "الفرملة بقوة دون تقييم حركة المرور أولاً"
      },
      {
        "sv": "Ignorera skyltar eller signaler",
        "ar": "تجاهل الإشارات أو العلامات"
      },
      {
        "sv": "Göra plats så snart det kan ske säkert",
        "ar": "إفساح الطريق بأسرع ما يمكن عندما يكون ذلك آمناً"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Underlätta passage utan att skapa en ny trafikfara eller blockera olämpligt.",
    "explanationAr": "سهّل مرورها دون التسبب بخطر جديد أو إغلاق الطريق بطريقة غير مناسبة."
  },
  {
    "id": 1015,
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra om mobilen ringer medan du kör och du behöver hantera den?",
    "questionAr": "ماذا تفعل إذا رن الهاتف أثناء القيادة واحتجت إلى التعامل معه؟",
    "options": [
      {
        "sv": "Anta att andra alltid lämnar företräde",
        "ar": "افتراض أن الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Följa andra trafikanter även om det verkar osäkert",
        "ar": "اتباع مستخدمي الطريق الآخرين حتى لو بدا الأمر غير آمن"
      },
      {
        "sv": "Köra vidare även om du riskerar att skapa fara",
        "ar": "المتابعة حتى لو كنت تخاطر بالتسبب في خطر"
      },
      {
        "sv": "Låta bli att hantera den eller stanna säkert först",
        "ar": "عدم التعامل معه أو التوقف بأمان أولاً"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Mobilanvändning får inte påverka körningen; hantera inte telefonen på ett riskfyllt sätt.",
    "explanationAr": "يجب ألا يؤثر استخدام الهاتف على القيادة؛ لا تتعامل معه بطريقة خطرة."
  },
  {
    "id": 1016,
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra innan du svänger vänster över mötande trafik?",
    "questionAr": "ماذا تفعل قبل الانعطاف يساراً عبر حركة المرور القادمة؟",
    "options": [
      {
        "sv": "Bedöma avstånd och hastighet och vänta tills svängen kan göras säkert",
        "ar": "تقدير المسافة والسرعة والانتظار حتى يصبح الانعطاف آمناً"
      },
      {
        "sv": "Öka farten och hoppas att det går bra",
        "ar": "زيادة السرعة والأمل بأن تسير الأمور جيداً"
      },
      {
        "sv": "Bromsa hårt utan att först bedöma trafiken",
        "ar": "الفرملة بقوة دون تقييم حركة المرور أولاً"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون استخدام الإشارة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Du måste lämna tillräckligt utrymme för mötande trafik och får inte tvinga den att bromsa.",
    "explanationAr": "يجب ترك مساحة كافية للمركبات المقابلة وعدم إجبارها على الفرملة."
  },
  {
    "id": 1017,
    "category": "Trafikregler",
    "questionSv": "Vad är utfartsregeln när du kör ut från en bensinstation eller parkeringsplats till vägen?",
    "questionAr": "ما قاعدة الخروج عندما تغادر محطة وقود أو موقفاً إلى الطريق؟",
    "options": [
      {
        "sv": "Lämna företräde åt trafiken på vägen",
        "ar": "إعطاء الأولوية لحركة المرور على الطريق"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      },
      {
        "sv": "Ignorera skyltar eller signaler",
        "ar": "تجاهل الإشارات أو العلامات"
      },
      {
        "sv": "Köra vidare även om du riskerar att skapa fara",
        "ar": "المتابعة حتى لو كنت تخاطر بالتسبب في خطر"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Den som kör ut från exempelvis en fastighet, parkering eller bensinstation har väjningsplikt.",
    "explanationAr": "على من يخرج من عقار أو موقف أو محطة وقود إعطاء الأولوية."
  },
  {
    "id": 1018,
    "category": "Trafikregler",
    "questionSv": "Vad bör du göra om kön framför en korsning är stillastående och du riskerar att blockera korsningen?",
    "questionAr": "ماذا تفعل إذا كان الطابور أمام تقاطع متوقفاً وقد تعيق التقاطع؟",
    "options": [
      {
        "sv": "Vänta före korsningen tills det finns plats på andra sidan",
        "ar": "الانتظار قبل التقاطع حتى تتوفر مساحة بعده"
      },
      {
        "sv": "Följa andra trafikanter även om det verkar osäkert",
        "ar": "اتباع مستخدمي الطريق الآخرين حتى لو بدا الأمر غير آمن"
      },
      {
        "sv": "Anta att andra alltid lämnar företräde",
        "ar": "افتراض أن الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Öka farten och hoppas att det går bra",
        "ar": "زيادة السرعة والأمل بأن تسير الأمور جيداً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Kör inte in i en korsning om du riskerar att bli stående och hindra korsande trafik.",
    "explanationAr": "لا تدخل التقاطع إذا كنت ستتوقف داخله وتعيق حركة المرور المتقاطعة."
  },
  {
    "id": 1019,
    "category": "Trafikregler",
    "questionSv": "Vad gäller när polis dirigerar trafiken vid en korsning?",
    "questionAr": "ما الذي يجب اتباعه عندما ينظم شرطي حركة المرور عند تقاطع؟",
    "options": [
      {
        "sv": "Bromsa hårt utan att först bedöma trafiken",
        "ar": "الفرملة بقوة دون تقييم حركة المرور أولاً"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون استخدام الإشارة"
      },
      {
        "sv": "Följa polisens anvisningar",
        "ar": "اتباع تعليمات الشرطي"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Polisens anvisningar går före vanliga trafiksignaler och vägmärken i situationen.",
    "explanationAr": "تتقدم تعليمات الشرطي على إشارات المرور والعلامات المعتادة في تلك الحالة."
  },
  {
    "id": 1020,
    "category": "Trafikregler",
    "questionSv": "Vad bör du göra när du backar ut från en parkeringsruta?",
    "questionAr": "ماذا ينبغي أن تفعل عند الرجوع للخلف للخروج من موقف؟",
    "options": [
      {
        "sv": "Köra vidare även om du riskerar att skapa fara",
        "ar": "المتابعة حتى لو كنت تخاطر بالتسبب في خطر"
      },
      {
        "sv": "Ignorera skyltar eller signaler",
        "ar": "تجاهل الإشارات أو العلامات"
      },
      {
        "sv": "Följa andra trafikanter även om det verkar osäkert",
        "ar": "اتباع مستخدمي الطريق الآخرين حتى لو بدا الأمر غير آمن"
      },
      {
        "sv": "Kontrollera noggrant åt alla håll och backa mycket försiktigt",
        "ar": "فحص جميع الاتجاهات بعناية والرجوع بحذر شديد"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Vid backning har föraren ansvar för att manövern kan ske utan fara eller hinder.",
    "explanationAr": "السائق مسؤول عن التأكد من أن الرجوع للخلف لا يسبب خطراً أو إعاقة."
  },
  {
    "id": 1021,
    "category": "Trafikregler",
    "questionSv": "Vad ska du tänka på när du kör förbi en cyklist?",
    "questionAr": "ماذا ينبغي أن تراعي عند تجاوز راكب دراجة؟",
    "options": [
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون استخدام الإشارة"
      },
      {
        "sv": "Hålla ett säkert sidavstånd och bara passera när det är lämpligt",
        "ar": "ترك مسافة جانبية آمنة والتجاوز فقط عندما يكون مناسباً"
      },
      {
        "sv": "Öka farten och hoppas att det går bra",
        "ar": "زيادة السرعة والأمل بأن تسير الأمور جيداً"
      },
      {
        "sv": "Anta att andra alltid lämnar företräde",
        "ar": "افتراض أن الآخرين سيعطون الأولوية دائماً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Cyklisten kan vingla eller behöva väja för hinder; lämna gott om utrymme.",
    "explanationAr": "قد ينحرف راكب الدراجة أو يتجنب عائقاً؛ اترك مساحة كافية."
  },
  {
    "id": 1022,
    "category": "Trafikregler",
    "questionSv": "Vad gör du om ett vägmärke och en tillfällig anvisning vid vägarbete verkar skilja sig åt?",
    "questionAr": "ماذا تفعل إذا بدا أن إشارة الطريق والتعليمات المؤقتة عند الأعمال تختلفان؟",
    "options": [
      {
        "sv": "Följa den aktuella tillfälliga trafikregleringen och vara extra uppmärksam",
        "ar": "اتباع تنظيم المرور المؤقت الحالي والانتباه أكثر"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      },
      {
        "sv": "Ignorera skyltar eller signaler",
        "ar": "تجاهل الإشارات أو العلامات"
      },
      {
        "sv": "Bromsa hårt utan att först bedöma trafiken",
        "ar": "الفرملة بقوة دون تقييم حركة المرور أولاً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Tillfälliga anordningar kan reglera trafiken vid vägarbete; följ dem noggrant.",
    "explanationAr": "قد تنظم التجهيزات المؤقتة حركة المرور أثناء أعمال الطريق؛ اتبعها بدقة."
  },
  {
    "id": 1023,
    "category": "Trafikregler",
    "questionSv": "Hur bör du köra när du närmar dig ett backkrön med skymd sikt?",
    "questionAr": "كيف تقود عند الاقتراب من قمة مرتفع تحجب الرؤية؟",
    "options": [
      {
        "sv": "Sänka farten så att du kan stanna inom den sträcka du ser",
        "ar": "تخفيف السرعة لتتمكن من التوقف ضمن المسافة المرئية"
      },
      {
        "sv": "Köra vidare även om du riskerar att skapa fara",
        "ar": "المتابعة حتى لو كنت تخاطر بالتسبب في خطر"
      },
      {
        "sv": "Följa andra trafikanter även om det verkar osäkert",
        "ar": "اتباع مستخدمي الطريق الآخرين حتى لو بدا الأمر غير آمن"
      },
      {
        "sv": "Anta att andra alltid lämnar företräde",
        "ar": "افتراض أن الآخرين سيعطون الأولوية دائماً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Du måste kunna stanna för hinder som går att förutse inom den synliga vägsträckan.",
    "explanationAr": "يجب أن تتمكن من التوقف أمام العوائق المتوقعة ضمن الجزء الذي تراه من الطريق."
  },
  {
    "id": 1024,
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra när du möter ett stort fordon på en smal väg?",
    "questionAr": "ماذا تفعل عندما تقابل مركبة كبيرة على طريق ضيق؟",
    "options": [
      {
        "sv": "Bromsa hårt utan att först bedöma trafiken",
        "ar": "الفرملة بقوة دون تقييم حركة المرور أولاً"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون استخدام الإشارة"
      },
      {
        "sv": "Öka farten och hoppas att det går bra",
        "ar": "زيادة السرعة والأمل بأن تسير الأمور جيداً"
      },
      {
        "sv": "Sänka farten och samarbeta så att mötet sker säkert",
        "ar": "تخفيف السرعة والتعاون ليمر الطرفان بأمان"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Anpassa farten och placeringen efter vägens bredd och sikten.",
    "explanationAr": "اضبط السرعة والموقع حسب عرض الطريق والرؤية."
  },
  {
    "id": 1025,
    "category": "Trafikregler",
    "questionSv": "Hur bör du välja hastighet när väg, väder eller sikt försämras?",
    "questionAr": "كيف تختار السرعة عندما تسوء حالة الطريق أو الطقس أو الرؤية؟",
    "options": [
      {
        "sv": "Köra vidare även om du riskerar att skapa fara",
        "ar": "المتابعة حتى لو كنت تخاطر بالتسبب في خطر"
      },
      {
        "sv": "Ignorera skyltar eller signaler",
        "ar": "تجاهل الإشارات أو العلامات"
      },
      {
        "sv": "Sänka hastigheten så att du behåller kontroll och kan stanna säkert",
        "ar": "خفض السرعة للحفاظ على السيطرة والقدرة على التوقف بأمان"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Hastigheten ska alltid anpassas till väg, väder, sikt, fordon och trafik.",
    "explanationAr": "يجب دائماً ضبط السرعة وفق الطريق والطقس والرؤية والمركبة وحركة المرور."
  },
  {
    "id": 1026,
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra om du närmar dig en korsning där sikten skyms av parkerade bilar?",
    "questionAr": "ماذا تفعل عند تقاطع تحجب السيارات المتوقفة الرؤية فيه؟",
    "options": [
      {
        "sv": "Öka farten och hoppas att det går bra",
        "ar": "زيادة السرعة والأمل بأن تسير الأمور جيداً"
      },
      {
        "sv": "Anta att andra alltid lämnar företräde",
        "ar": "افتراض أن الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Följa andra trafikanter även om det verkar osäkert",
        "ar": "اتباع مستخدمي الطريق الآخرين حتى لو بدا الأمر غير آمن"
      },
      {
        "sv": "Köra långsamt och vara beredd att stanna",
        "ar": "القيادة ببطء والاستعداد للتوقف"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Dålig sikt kräver låg hastighet och beredskap att stanna.",
    "explanationAr": "الرؤية السيئة تتطلب سرعة منخفضة والاستعداد للتوقف."
  },
  {
    "id": 1027,
    "category": "Trafikregler",
    "questionSv": "Vad innebär väjningsplikt vid ett väjningspliktsmärke?",
    "questionAr": "ماذا يعني واجب إعطاء الأولوية عند إشارة إعطاء الأولوية؟",
    "options": [
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون استخدام الإشارة"
      },
      {
        "sv": "Bromsa hårt utan att först bedöma trafiken",
        "ar": "الفرملة بقوة دون تقييم حركة المرور أولاً"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      },
      {
        "sv": "Sänka farten eller stanna och släppa fram trafiken på den korsande vägen",
        "ar": "تخفيف السرعة أو التوقف والسماح لحركة المرور على الطريق المتقاطع بالمرور"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Du får fortsätta först när det kan ske utan fara eller hinder.",
    "explanationAr": "يمكنك المتابعة فقط عندما يكون ذلك دون خطر أو إعاقة."
  },
  {
    "id": 1028,
    "category": "Trafikregler",
    "questionSv": "Vad bör du göra om du missar din avfart på motorvägen?",
    "questionAr": "ماذا تفعل إذا فاتك مخرج الطريق السريع؟",
    "options": [
      {
        "sv": "Fortsätta till nästa avfart",
        "ar": "المتابعة إلى المخرج التالي"
      },
      {
        "sv": "Ignorera skyltar eller signaler",
        "ar": "تجاهل الإشارات أو العلامات"
      },
      {
        "sv": "Köra vidare även om du riskerar att skapa fara",
        "ar": "المتابعة حتى لو كنت تخاطر بالتسبب في خطر"
      },
      {
        "sv": "Följa andra trafikanter även om det verkar osäkert",
        "ar": "اتباع مستخدمي الطريق الآخرين حتى لو بدا الأمر غير آمن"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Gör aldrig en plötslig sväng eller backa på motorvägen för att nå en avfart.",
    "explanationAr": "لا تنعطف فجأة ولا ترجع للخلف على الطريق السريع للوصول إلى المخرج."
  },
  {
    "id": 1029,
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra när du närmar dig en skolskjuts eller buss där barn stiger av?",
    "questionAr": "ماذا تفعل عند الاقتراب من حافلة مدرسية أو حافلة ينزل منها أطفال؟",
    "options": [
      {
        "sv": "Anta att andra alltid lämnar företräde",
        "ar": "افتراض أن الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Sänka farten kraftigt och vara beredd på barn nära vägen",
        "ar": "تخفيف السرعة كثيراً والاستعداد لوجود أطفال قرب الطريق"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون استخدام الإشارة"
      },
      {
        "sv": "Öka farten och hoppas att det går bra",
        "ar": "زيادة السرعة والأمل بأن تسير الأمور جيداً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Barn kan röra sig oväntat; anpassa hastigheten och var beredd att stanna.",
    "explanationAr": "قد يتحرك الأطفال بشكل مفاجئ؛ اضبط السرعة واستعد للتوقف."
  },
  {
    "id": 1030,
    "category": "Trafikregler",
    "questionSv": "Hur bör du agera när du kör in i ett bostadsområde med många gående?",
    "questionAr": "كيف تتصرف عند دخول منطقة سكنية فيها كثير من المشاة؟",
    "options": [
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      },
      {
        "sv": "Ignorera skyltar eller signaler",
        "ar": "تجاهل الإشارات أو العلامات"
      },
      {
        "sv": "Bromsa hårt utan att först bedöma trafiken",
        "ar": "الفرملة بقوة دون تقييم حركة المرور أولاً"
      },
      {
        "sv": "Köra lugnt och vara beredd på att människor korsar vägen",
        "ar": "القيادة بهدوء والاستعداد لعبور الناس الطريق"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Visa särskild hänsyn och anpassa hastigheten där gående kan finnas.",
    "explanationAr": "أظهر عناية خاصة واضبط السرعة في الأماكن التي قد يوجد فيها مشاة."
  },
  {
    "id": 1031,
    "category": "Trafikregler",
    "questionSv": "Vad ska du tänka på när du passerar en stillastående bil vid vägkanten?",
    "questionAr": "ما الذي ينبغي مراعاته عند المرور بجانب سيارة متوقفة على جانب الطريق؟",
    "options": [
      {
        "sv": "Följa andra trafikanter även om det verkar osäkert",
        "ar": "اتباع مستخدمي الطريق الآخرين حتى لو بدا الأمر غير آمن"
      },
      {
        "sv": "Köra vidare även om du riskerar att skapa fara",
        "ar": "المتابعة حتى لو كنت تخاطر بالتسبب في خطر"
      },
      {
        "sv": "Anta att andra alltid lämnar företräde",
        "ar": "افتراض أن الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Hålla avstånd och vara beredd på att en dörr öppnas eller någon kliver ut",
        "ar": "ترك مسافة والاستعداد لاحتمال فتح باب أو خروج شخص"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "En person kan komma ut mellan fordon; passera med säker marginal.",
    "explanationAr": "قد يخرج شخص بين المركبات؛ تجاوز مع ترك هامش أمان."
  },
  {
    "id": 1032,
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra innan du kör om ett fordon?",
    "questionAr": "ماذا تفعل قبل تجاوز مركبة؟",
    "options": [
      {
        "sv": "Kontrollera sikt, mötande trafik, speglar och att omkörningen är tillåten",
        "ar": "فحص الرؤية وحركة المرور المقابلة والمرايا والتأكد من أن التجاوز مسموح"
      },
      {
        "sv": "Öka farten och hoppas att det går bra",
        "ar": "زيادة السرعة والأمل بأن تسير الأمور جيداً"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون استخدام الإشارة"
      },
      {
        "sv": "Bromsa hårt utan att först bedöma trafiken",
        "ar": "الفرملة بقوة دون تقييم حركة المرور أولاً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Omkörning ska bara ske när den är laglig och kan genomföras utan risk.",
    "explanationAr": "لا يتم التجاوز إلا إذا كان قانونياً ويمكن تنفيذه دون خطر."
  },
  {
    "id": 1033,
    "category": "Trafikregler",
    "questionSv": "Vad gör du om mötande trafik dyker upp när du planerat en omkörning?",
    "questionAr": "ماذا تفعل إذا ظهرت مركبة مقابلة أثناء التخطيط للتجاوز؟",
    "options": [
      {
        "sv": "Avstå från omkörningen eller avbryta den säkert",
        "ar": "الامتناع عن التجاوز أو إنهاؤه بأمان"
      },
      {
        "sv": "Köra vidare även om du riskerar att skapa fara",
        "ar": "المتابعة حتى لو كنت تخاطر بالتسبب في خطر"
      },
      {
        "sv": "Ignorera skyltar eller signaler",
        "ar": "تجاهل الإشارات أو العلامات"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Det är viktigare att ha tillräckligt med utrymme än att fullfölja en omkörning.",
    "explanationAr": "الأهم هو توفر مساحة كافية، وليس إكمال التجاوز."
  },
  {
    "id": 1034,
    "category": "Trafikregler",
    "questionSv": "Hur ska du agera när du kör ut från en gård över en gångbana?",
    "questionAr": "كيف تتصرف عند الخروج من مدخل عقار عبر رصيف للمشاة؟",
    "options": [
      {
        "sv": "Följa andra trafikanter även om det verkar osäkert",
        "ar": "اتباع مستخدمي الطريق الآخرين حتى لو بدا الأمر غير آمن"
      },
      {
        "sv": "Öka farten och hoppas att det går bra",
        "ar": "زيادة السرعة والأمل بأن تسير الأمور جيداً"
      },
      {
        "sv": "Anta att andra alltid lämnar företräde",
        "ar": "افتراض أن الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Köra mycket försiktigt och lämna gående företräde",
        "ar": "القيادة بحذر شديد وإعطاء المشاة الأولوية"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Trafikanter som kör ut över en gångbana måste vara särskilt försiktiga och lämna gående utrymme.",
    "explanationAr": "يجب على الخارجين عبر ممر المشاة توخي الحذر وإفساح المجال للمشاة."
  },
  {
    "id": 1035,
    "category": "Trafikregler",
    "questionSv": "Vad bör du göra när trafikljuset är grönt men korsningen är blockerad?",
    "questionAr": "ماذا تفعل عندما تكون الإشارة خضراء لكن التقاطع مزدحم ومسدود؟",
    "options": [
      {
        "sv": "Bromsa hårt utan att först bedöma trafiken",
        "ar": "الفرملة بقوة دون تقييم حركة المرور أولاً"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون استخدام الإشارة"
      },
      {
        "sv": "Vänta tills du kan köra igenom utan att blockera korsningen",
        "ar": "الانتظار حتى تتمكن من العبور دون إعاقة التقاطع"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Grönt ljus betyder inte att du ska köra in om du blir stående och blockerar korsande trafik.",
    "explanationAr": "الضوء الأخضر لا يعني الدخول إذا كنت ستتوقف وتعيق المرور المتقاطع."
  },
  {
    "id": 1036,
    "category": "Trafikregler",
    "questionSv": "Vad är säkrast när du närmar dig en rondell med flera körfält?",
    "questionAr": "ما التصرف الأكثر أماناً عند الاقتراب من دوار متعدد المسارات؟",
    "options": [
      {
        "sv": "Ignorera skyltar eller signaler",
        "ar": "تجاهل الإشارات أو العلامات"
      },
      {
        "sv": "Läsa skyltarna, planera körfält och kontrollera omgivningen",
        "ar": "قراءة الإشارات وتخطيط المسار ومراقبة المحيط"
      },
      {
        "sv": "Köra vidare även om du riskerar att skapa fara",
        "ar": "المتابعة حتى لو كنت تخاطر بالتسبب في خطر"
      },
      {
        "sv": "Följa andra trafikanter även om det verkar osäkert",
        "ar": "اتباع مستخدمي الطريق الآخرين حتى لو بدا الأمر غير آمن"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Körfältsvalet beror på skyltning, vägmarkeringar och vart du ska.",
    "explanationAr": "يعتمد اختيار المسار على الإشارات والعلامات الأرضية والوجهة."
  },
  {
    "id": 1037,
    "category": "Trafikregler",
    "questionSv": "Vad gör du om en fotgängare redan befinner sig på ett obevakat övergångsställe?",
    "questionAr": "ماذا تفعل إذا كان أحد المشاة موجوداً بالفعل على ممر غير محكوم؟",
    "options": [
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون استخدام الإشارة"
      },
      {
        "sv": "Öka farten och hoppas att det går bra",
        "ar": "زيادة السرعة والأمل بأن تسير الأمور جيداً"
      },
      {
        "sv": "Anta att andra alltid lämnar företräde",
        "ar": "افتراض أن الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Lämna gående företräde och stanna vid behov",
        "ar": "إعطاء المشاة الأولوية والتوقف عند الحاجة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Förare ska lämna gående möjlighet att passera vid obevakat övergångsställe.",
    "explanationAr": "يجب على السائق إتاحة المجال للمشاة عند الممر غير المحكوم."
  },
  {
    "id": 1038,
    "category": "Trafikregler",
    "questionSv": "Hur ska du agera när du kör på en väg där sikten begränsas av kraftigt regn?",
    "questionAr": "كيف تتصرف على طريق تقل فيه الرؤية بسبب المطر الغزير؟",
    "options": [
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      },
      {
        "sv": "Bromsa hårt utan att först bedöma trafiken",
        "ar": "الفرملة بقوة دون تقييم حركة المرور أولاً"
      },
      {
        "sv": "Ignorera skyltar eller signaler",
        "ar": "تجاهل الإشارات أو العلامات"
      },
      {
        "sv": "Sänka farten och öka avståndet",
        "ar": "تخفيف السرعة وزيادة المسافة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Regn kan försämra sikten och väggreppet och kräver anpassad hastighet.",
    "explanationAr": "قد يقلل المطر الرؤية والتماسك، لذا يجب تعديل السرعة."
  },
  {
    "id": 1039,
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra om du upptäcker att du ligger i fel körfält inför en sväng?",
    "questionAr": "ماذا تفعل إذا اكتشفت أنك في المسار الخطأ قبل الانعطاف؟",
    "options": [
      {
        "sv": "Anta att andra alltid lämnar företräde",
        "ar": "افتراض أن الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Följa andra trafikanter även om det verkar osäkert",
        "ar": "اتباع مستخدمي الطريق الآخرين حتى لو بدا الأمر غير آمن"
      },
      {
        "sv": "Fortsätta säkert och välja en ny väg i stället för att göra en farlig manöver",
        "ar": "المتابعة بأمان واختيار طريق آخر بدلاً من مناورة خطرة"
      },
      {
        "sv": "Köra vidare även om du riskerar att skapa fara",
        "ar": "المتابعة حتى لو كنت تخاطر بالتسبب في خطر"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Undvik plötsliga filbyten eller svängar som kan överraska andra.",
    "explanationAr": "تجنب تغيير المسار أو الانعطاف المفاجئ الذي قد يفاجئ الآخرين."
  },
  {
    "id": 1040,
    "category": "Trafikregler",
    "questionSv": "Varför behöver du kontrollera döda vinkeln även om du har speglar?",
    "questionAr": "لماذا يجب فحص المنطقة العمياء رغم وجود المرايا؟",
    "options": [
      {
        "sv": "Öka farten och hoppas att det går bra",
        "ar": "زيادة السرعة والأمل بأن تسير الأمور جيداً"
      },
      {
        "sv": "Bromsa hårt utan att först bedöma trafiken",
        "ar": "الفرملة بقوة دون تقييم حركة المرور أولاً"
      },
      {
        "sv": "Fordon och trafikanter kan vara osynliga i speglarna",
        "ar": "قد تكون مركبات ومستخدمو الطريق غير مرئيين في المرايا"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون استخدام الإشارة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Speglar täcker inte alla områden runt bilen; kontrollera döda vinkeln vid behov.",
    "explanationAr": "لا تغطي المرايا كل المناطق حول السيارة؛ افحص المنطقة العمياء عند الحاجة."
  },
  {
    "id": 2001,
    "category": "Vägmärken",
    "questionSv": "Vad betyder en röd åttakantig skylt med ordet STOP?",
    "questionAr": "ماذا تعني إشارة حمراء مثمنة مكتوب عليها STOP؟",
    "options": [
      {
        "sv": "Märket betyder att du ska öka farten",
        "ar": "تعني الإشارة أنه يجب زيادة السرعة"
      },
      {
        "sv": "Du kan följa GPS i stället för aktuell skyltning",
        "ar": "يمكنك اتباع GPS بدلاً من إشارات الطريق الحالية"
      },
      {
        "sv": "Märket betyder att du alltid får köra först",
        "ar": "تعني الإشارة أنك تستطيع المرور أولاً دائماً"
      },
      {
        "sv": "Stanna helt före fortsatt körning",
        "ar": "التوقف الكامل قبل متابعة القيادة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Stoppskylten innebär fullständig stopplikt.",
    "explanationAr": "إشارة STOP تعني وجوب التوقف الكامل."
  },
  {
    "id": 2002,
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett upp-och-nedvänt triangelformat vägmärke med röd kant?",
    "questionAr": "ماذا تعني إشارة مثلثة مقلوبة ذات حافة حمراء؟",
    "options": [
      {
        "sv": "Märket kan alltid ignoreras om vägen ser tom ut",
        "ar": "يمكن تجاهل الإشارة دائماً إذا بدا الطريق خالياً"
      },
      {
        "sv": "Märket gäller bara när det finns polis på plats",
        "ar": "تسري الإشارة فقط عندما يوجد شرطي في المكان"
      },
      {
        "sv": "Märket gäller bara för fordon bakom dig",
        "ar": "تسري الإشارة فقط على المركبات خلفك"
      },
      {
        "sv": "Väjningsplikt",
        "ar": "إعطاء الأولوية"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Märket anger att du ska lämna företräde enligt reglerna.",
    "explanationAr": "تشير الإشارة إلى واجب إعطاء الأولوية وفق القواعد."
  },
  {
    "id": 2003,
    "category": "Vägmärken",
    "questionSv": "Vad betyder en rund skylt med röd kant och talet 40?",
    "questionAr": "ماذا تعني إشارة دائرية ذات حافة حمراء والرقم 40؟",
    "options": [
      {
        "sv": "Märket ger en rekommendation som aldrig behöver följas",
        "ar": "تقدم الإشارة توصية لا يلزم اتباعها أبداً"
      },
      {
        "sv": "Märket betyder att du alltid får köra först",
        "ar": "تعني الإشارة أنك تستطيع المرور أولاً دائماً"
      },
      {
        "sv": "Märket ersätter alltid behovet av att vara uppmärksam",
        "ar": "تلغي الإشارة دائماً الحاجة إلى الانتباه"
      },
      {
        "sv": "Högsta tillåtna hastighet är 40 km/h där märket gäller",
        "ar": "أقصى سرعة مسموحة هي 40 كم/ساعة حيث تسري الإشارة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Hastighetsmärket anger den högsta tillåtna hastigheten, men du kan behöva köra långsammare.",
    "explanationAr": "تحدد إشارة السرعة الحد الأعلى المسموح، وقد تحتاج إلى سرعة أقل."
  },
  {
    "id": 2004,
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett blått runt vägmärke med en vit pil?",
    "questionAr": "ماذا تعني إشارة دائرية زرقاء عليها سهم أبيض؟",
    "options": [
      {
        "sv": "Märket betyder att du ska öka farten",
        "ar": "تعني الإشارة أنه يجب زيادة السرعة"
      },
      {
        "sv": "Märket gäller bara när det finns polis på plats",
        "ar": "تسري الإشارة فقط عندما يوجد شرطي في المكان"
      },
      {
        "sv": "Du kan följa GPS i stället för aktuell skyltning",
        "ar": "يمكنك اتباع GPS بدلاً من إشارات الطريق الحالية"
      },
      {
        "sv": "Du måste följa den angivna riktningen",
        "ar": "يجب اتباع الاتجاه المحدد"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Blå runda påbudsmärken visar en riktning eller handling som är obligatorisk.",
    "explanationAr": "توضح الإشارات الزرقاء الدائرية اتجاهاً أو إجراءً إلزامياً."
  },
  {
    "id": 2005,
    "category": "Vägmärken",
    "questionSv": "Vad betyder en blå parkeringsskylt med ett vitt P?",
    "questionAr": "ماذا تعني إشارة موقف زرقاء عليها حرف P أبيض؟",
    "options": [
      {
        "sv": "Märket gäller bara för fordon bakom dig",
        "ar": "تسري الإشارة فقط على المركبات خلفك"
      },
      {
        "sv": "Märket kan alltid ignoreras om vägen ser tom ut",
        "ar": "يمكن تجاهل الإشارة دائماً إذا بدا الطريق خالياً"
      },
      {
        "sv": "Parkering enligt de villkor som anges på eventuella tilläggstavlor",
        "ar": "الوقوف وفق الشروط الموضحة في اللوحات الإضافية إن وجدت"
      },
      {
        "sv": "Märket ger en rekommendation som aldrig behöver följas",
        "ar": "تقدم الإشارة توصية لا يلزم اتباعها أبداً"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Kontrollera tilläggstavlor för tider, avgifter och andra villkor.",
    "explanationAr": "تحقق من اللوحات الإضافية لمعرفة الأوقات والرسوم والشروط الأخرى."
  },
  {
    "id": 2006,
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett triangelformat varningsmärke?",
    "questionAr": "ماذا تعني إشارة تحذير مثلثة؟",
    "options": [
      {
        "sv": "Märket ersätter alltid behovet av att vara uppmärksam",
        "ar": "تلغي الإشارة دائماً الحاجة إلى الانتباه"
      },
      {
        "sv": "Märket betyder att du alltid får köra först",
        "ar": "تعني الإشارة أنك تستطيع المرور أولاً دائماً"
      },
      {
        "sv": "Det finns en fara eller ett förhållande som kräver extra uppmärksamhet",
        "ar": "هناك خطر أو ظرف يتطلب انتباهاً إضافياً"
      },
      {
        "sv": "Märket betyder att du ska öka farten",
        "ar": "تعني الإشارة أنه يجب زيادة السرعة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Varningsmärken förbereder dig på en fara längre fram.",
    "explanationAr": "تهيئك إشارات التحذير لخطر في الطريق أمامك."
  },
  {
    "id": 2007,
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett runt vägmärke med röd kant och en bilsymbol?",
    "questionAr": "ماذا تعني إشارة دائرية ذات حافة حمراء ورمز سيارة؟",
    "options": [
      {
        "sv": "Märket gäller bara för fordon bakom dig",
        "ar": "تسري الإشارة فقط على المركبات خلفك"
      },
      {
        "sv": "Följ förbudet eller begränsningen som symbolen anger",
        "ar": "اتباع المنع أو القيد الذي يشير إليه الرمز"
      },
      {
        "sv": "Märket gäller bara när det finns polis på plats",
        "ar": "تسري الإشارة فقط عندما يوجد شرطي في المكان"
      },
      {
        "sv": "Du kan följa GPS i stället för aktuell skyltning",
        "ar": "يمكنك اتباع GPS بدلاً من إشارات الطريق الحالية"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Runda förbudsmärken med röd kant visar att något är förbjudet eller begränsat.",
    "explanationAr": "تشير علامات المنع الدائرية ذات الحافة الحمراء إلى فعل محظور أو مقيّد."
  },
  {
    "id": 2008,
    "category": "Vägmärken",
    "questionSv": "Vad visar en tilläggstavla under ett vägmärke?",
    "questionAr": "ماذا توضح لوحة إضافية أسفل إشارة الطريق؟",
    "options": [
      {
        "sv": "När, var eller för vilka trafikanter huvudmärket gäller",
        "ar": "متى وأين ولأي مستخدمي الطريق تسري الإشارة الرئيسية"
      },
      {
        "sv": "Märket ersätter alltid behovet av att vara uppmärksam",
        "ar": "تلغي الإشارة دائماً الحاجة إلى الانتباه"
      },
      {
        "sv": "Märket ger en rekommendation som aldrig behöver följas",
        "ar": "تقدم الإشارة توصية لا يلزم اتباعها أبداً"
      },
      {
        "sv": "Märket kan alltid ignoreras om vägen ser tom ut",
        "ar": "يمكن تجاهل الإشارة دائماً إذا بدا الطريق خالياً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Tilläggstavlor preciserar hur huvudmärket ska tolkas.",
    "explanationAr": "توضح اللوحات الإضافية كيفية تفسير الإشارة الرئيسية."
  },
  {
    "id": 2009,
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som visar att huvudled börjar?",
    "questionAr": "ماذا تعني إشارة بدء طريق رئيسي؟",
    "options": [
      {
        "sv": "Märket betyder att du alltid får köra först",
        "ar": "تعني الإشارة أنك تستطيع المرور أولاً دائماً"
      },
      {
        "sv": "Du kör in på en huvudled och ska följa reglerna för den",
        "ar": "أنت تدخل طريقاً رئيسياً ويجب اتباع قواعده"
      },
      {
        "sv": "Du kan följa GPS i stället för aktuell skyltning",
        "ar": "يمكنك اتباع GPS بدلاً من إشارات الطريق الحالية"
      },
      {
        "sv": "Märket betyder att du ska öka farten",
        "ar": "تعني الإشارة أنه يجب زيادة السرعة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Huvudledsmärket anger att vägen är huvudled tills den upphör eller annat gäller.",
    "explanationAr": "تشير علامة الطريق الرئيسي إلى أن الطريق رئيسي حتى تنتهي صلاحيته أو تنطبق قاعدة أخرى."
  },
  {
    "id": 2010,
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som visar att huvudleden upphör?",
    "questionAr": "ماذا تعني إشارة انتهاء الطريق الرئيسي؟",
    "options": [
      {
        "sv": "Reglerna för huvudled upphör från den angivna platsen",
        "ar": "تنتهي قواعد الطريق الرئيسي من المكان المحدد"
      },
      {
        "sv": "Märket gäller bara för fordon bakom dig",
        "ar": "تسري الإشارة فقط على المركبات خلفك"
      },
      {
        "sv": "Märket kan alltid ignoreras om vägen ser tom ut",
        "ar": "يمكن تجاهل الإشارة دائماً إذا بدا الطريق خالياً"
      },
      {
        "sv": "Märket gäller bara när det finns polis på plats",
        "ar": "تسري الإشارة فقط عندما يوجد شرطي في المكان"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Efter märket behöver du följa de regler och prioriteringar som gäller där.",
    "explanationAr": "بعد الإشارة يجب اتباع قواعد الأولوية المعمول بها في المكان."
  },
  {
    "id": 2011,
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett blått rektangulärt informationsmärke?",
    "questionAr": "ماذا تعني إشارة معلومات مستطيلة زرقاء؟",
    "options": [
      {
        "sv": "Märket ersätter alltid behovet av att vara uppmärksam",
        "ar": "تلغي الإشارة دائماً الحاجة إلى الانتباه"
      },
      {
        "sv": "Det ger information eller vägledning enligt symbolen",
        "ar": "إنها تقدم معلومات أو إرشادات وفق الرمز"
      },
      {
        "sv": "Märket betyder att du alltid får köra först",
        "ar": "تعني الإشارة أنك تستطيع المرور أولاً دائماً"
      },
      {
        "sv": "Märket ger en rekommendation som aldrig behöver följas",
        "ar": "تقدم الإشارة توصية لا يلزم اتباعها أبداً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Läs symbolen och eventuell text för att förstå informationen.",
    "explanationAr": "اقرأ الرمز والنص إن وجد لفهم المعلومات."
  },
  {
    "id": 2012,
    "category": "Vägmärken",
    "questionSv": "Vad ska du göra när du ser en varningsskylt för barn?",
    "questionAr": "ماذا تفعل عند رؤية إشارة تحذير من وجود أطفال؟",
    "options": [
      {
        "sv": "Märket gäller bara när det finns polis på plats",
        "ar": "تسري الإشارة فقط عندما يوجد شرطي في المكان"
      },
      {
        "sv": "Du kan följa GPS i stället för aktuell skyltning",
        "ar": "يمكنك اتباع GPS بدلاً من إشارات الطريق الحالية"
      },
      {
        "sv": "Märket betyder att du ska öka farten",
        "ar": "تعني الإشارة أنه يجب زيادة السرعة"
      },
      {
        "sv": "Sänka farten och vara beredd på barn nära eller på vägen",
        "ar": "تخفيف السرعة والاستعداد لوجود أطفال قرب الطريق أو عليه"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Barn kan röra sig oväntat; var extra uppmärksam.",
    "explanationAr": "قد يتحرك الأطفال بشكل مفاجئ؛ انتبه أكثر."
  },
  {
    "id": 2013,
    "category": "Vägmärken",
    "questionSv": "Vad betyder en varningsskylt för vilt?",
    "questionAr": "ماذا تعني إشارة تحذير من الحيوانات البرية؟",
    "options": [
      {
        "sv": "Märket kan alltid ignoreras om vägen ser tom ut",
        "ar": "يمكن تجاهل الإشارة دائماً إذا بدا الطريق خالياً"
      },
      {
        "sv": "Märket gäller bara för fordon bakom dig",
        "ar": "تسري الإشارة فقط على المركبات خلفك"
      },
      {
        "sv": "Vilt kan finnas på eller nära vägen",
        "ar": "قد توجد حيوانات برية على الطريق أو قربه"
      },
      {
        "sv": "Märket ger en rekommendation som aldrig behöver följas",
        "ar": "تقدم الإشارة توصية لا يلزم اتباعها أبداً"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Sänk farten och håll uppsikt längs vägkanterna.",
    "explanationAr": "خفف السرعة وراقب جانبي الطريق."
  },
  {
    "id": 2014,
    "category": "Vägmärken",
    "questionSv": "Vad innebär en skylt som varnar för halt väglag?",
    "questionAr": "ماذا تعني إشارة التحذير من طريق زلق؟",
    "options": [
      {
        "sv": "Väggreppet kan vara nedsatt och körningen måste anpassas",
        "ar": "قد يكون التماسك ضعيفاً ويجب تعديل القيادة"
      },
      {
        "sv": "Märket ersätter alltid behovet av att vara uppmärksam",
        "ar": "تلغي الإشارة دائماً الحاجة إلى الانتباه"
      },
      {
        "sv": "Märket betyder att du ska öka farten",
        "ar": "تعني الإشارة أنه يجب زيادة السرعة"
      },
      {
        "sv": "Märket betyder att du alltid får köra först",
        "ar": "تعني الإشارة أنك تستطيع المرور أولاً دائماً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Undvik hastiga manövrer och anpassa hastighet och avstånd.",
    "explanationAr": "تجنب المناورات المفاجئة واضبط السرعة والمسافة."
  },
  {
    "id": 2015,
    "category": "Vägmärken",
    "questionSv": "Vad betyder en varningsskylt för vägarbete?",
    "questionAr": "ماذا تعني إشارة التحذير من أعمال الطريق؟",
    "options": [
      {
        "sv": "Du kan följa GPS i stället för aktuell skyltning",
        "ar": "يمكنك اتباع GPS بدلاً من إشارات الطريق الحالية"
      },
      {
        "sv": "Märket gäller bara för fordon bakom dig",
        "ar": "تسري الإشارة فقط على المركبات خلفك"
      },
      {
        "sv": "Märket gäller bara när det finns polis på plats",
        "ar": "تسري الإشارة فقط عندما يوجد شرطي في المكان"
      },
      {
        "sv": "Arbeten kan påverka körfält, vägyta eller trafiken",
        "ar": "قد تؤثر الأعمال في المسارات أو سطح الطريق أو حركة المرور"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Var beredd på tillfälliga begränsningar och personer nära vägen.",
    "explanationAr": "استعد لقيود مؤقتة ولوجود أشخاص قرب الطريق."
  },
  {
    "id": 2016,
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för järnvägsövergång?",
    "questionAr": "ماذا تعني إشارة التحذير من معبر سكة حديد؟",
    "options": [
      {
        "sv": "Du närmar dig en plats där järnvägstrafik kan korsa vägen",
        "ar": "أنت تقترب من مكان قد تعبر فيه القطارات الطريق"
      },
      {
        "sv": "Märket kan alltid ignoreras om vägen ser tom ut",
        "ar": "يمكن تجاهل الإشارة دائماً إذا بدا الطريق خالياً"
      },
      {
        "sv": "Märket ger en rekommendation som aldrig behöver följas",
        "ar": "تقدم الإشارة توصية لا يلزم اتباعها أبداً"
      },
      {
        "sv": "Märket ersätter alltid behovet av att vara uppmärksam",
        "ar": "تلغي الإشارة دائماً الحاجة إلى الانتباه"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Var uppmärksam på signaler, bommar och tåg.",
    "explanationAr": "انتبه للإشارات والحواجز والقطارات."
  },
  {
    "id": 2017,
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som visar enkelriktad trafik?",
    "questionAr": "ماذا تعني إشارة طريق باتجاه واحد؟",
    "options": [
      {
        "sv": "Trafiken ska färdas i den angivna riktningen",
        "ar": "يجب أن تسير حركة المرور في الاتجاه المحدد"
      },
      {
        "sv": "Märket betyder att du ska öka farten",
        "ar": "تعني الإشارة أنه يجب زيادة السرعة"
      },
      {
        "sv": "Du kan följa GPS i stället för aktuell skyltning",
        "ar": "يمكنك اتباع GPS بدلاً من إشارات الطريق الحالية"
      },
      {
        "sv": "Märket betyder att du alltid får köra först",
        "ar": "تعني الإشارة أنك تستطيع المرور أولاً دائماً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Kör inte mot den tillåtna färdriktningen.",
    "explanationAr": "لا تقد بعكس اتجاه السير المسموح."
  },
  {
    "id": 2018,
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som förbjuder infart?",
    "questionAr": "ماذا تعني إشارة منع الدخول؟",
    "options": [
      {
        "sv": "Märket gäller bara för fordon bakom dig",
        "ar": "تسري الإشارة فقط على المركبات خلفك"
      },
      {
        "sv": "Märket kan alltid ignoreras om vägen ser tom ut",
        "ar": "يمكن تجاهل الإشارة دائماً إذا بدا الطريق خالياً"
      },
      {
        "sv": "Du får inte köra in från det hållet",
        "ar": "لا يجوز الدخول من ذلك الاتجاه"
      },
      {
        "sv": "Märket gäller bara när det finns polis på plats",
        "ar": "تسري الإشارة فقط عندما يوجد شرطي في المكان"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Välj en annan tillåten väg i stället för att passera märket.",
    "explanationAr": "اختر طريقاً آخر مسموحاً بدلاً من تجاوز الإشارة."
  },
  {
    "id": 2019,
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som anger gångbana?",
    "questionAr": "ماذا تعني إشارة ممر مشاة؟",
    "options": [
      {
        "sv": "Märket ersätter alltid behovet av att vara uppmärksam",
        "ar": "تلغي الإشارة دائماً الحاجة إلى الانتباه"
      },
      {
        "sv": "Märket betyder att du alltid får köra först",
        "ar": "تعني الإشارة أنك تستطيع المرور أولاً دائماً"
      },
      {
        "sv": "Ytan är avsedd för gående enligt märket",
        "ar": "المساحة مخصصة للمشاة وفق الإشارة"
      },
      {
        "sv": "Märket ger en rekommendation som aldrig behöver följas",
        "ar": "تقدم الإشارة توصية لا يلزم اتباعها أبداً"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Visa hänsyn och var uppmärksam där gående rör sig.",
    "explanationAr": "راعِ المشاة وانتبه في الأماكن المخصصة لحركتهم."
  },
  {
    "id": 2020,
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som anger cykelbana?",
    "questionAr": "ماذا تعني إشارة مسار دراجات؟",
    "options": [
      {
        "sv": "Ytan är avsedd för cykeltrafik enligt märket",
        "ar": "المساحة مخصصة لحركة الدراجات وفق الإشارة"
      },
      {
        "sv": "Märket gäller bara när det finns polis på plats",
        "ar": "تسري الإشارة فقط عندما يوجد شرطي في المكان"
      },
      {
        "sv": "Du kan följa GPS i stället för aktuell skyltning",
        "ar": "يمكنك اتباع GPS بدلاً من إشارات الطريق الحالية"
      },
      {
        "sv": "Märket betyder att du ska öka farten",
        "ar": "تعني الإشارة أنه يجب زيادة السرعة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Var uppmärksam på hur cykelbanan ansluter till korsningar och övergångar.",
    "explanationAr": "انتبه لكيفية اتصال مسار الدراجات بالتقاطعات والمعابر."
  },
  {
    "id": 2021,
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som visar cykelöverfart?",
    "questionAr": "ماذا تعني إشارة معبر دراجات؟",
    "options": [
      {
        "sv": "Det markerar en cykelöverfart där särskilda regler gäller",
        "ar": "إنها تحدد معبر دراجات تسري عليه قواعد خاصة"
      },
      {
        "sv": "Märket gäller bara för fordon bakom dig",
        "ar": "تسري الإشارة فقط على المركبات خلفك"
      },
      {
        "sv": "Märket kan alltid ignoreras om vägen ser tom ut",
        "ar": "يمكن تجاهل الإشارة دائماً إذا بدا الطريق خالياً"
      },
      {
        "sv": "Märket ger en rekommendation som aldrig behöver följas",
        "ar": "تقدم الإشارة توصية لا يلزم اتباعها أبداً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Anpassa hastigheten och följ reglerna för cykelöverfarten.",
    "explanationAr": "اضبط السرعة واتبع قواعد معبر الدراجات."
  },
  {
    "id": 2022,
    "category": "Vägmärken",
    "questionSv": "Vad ska du göra när ett vägmärke anger förbud mot omkörning?",
    "questionAr": "ماذا تفعل عندما تشير علامة الطريق إلى منع التجاوز؟",
    "options": [
      {
        "sv": "Inte köra om så länge förbudet gäller",
        "ar": "عدم التجاوز ما دام المنع سارياً"
      },
      {
        "sv": "Märket betyder att du ska öka farten",
        "ar": "تعني الإشارة أنه يجب زيادة السرعة"
      },
      {
        "sv": "Märket ersätter alltid behovet av att vara uppmärksam",
        "ar": "تلغي الإشارة دائماً الحاجة إلى الانتباه"
      },
      {
        "sv": "Märket betyder att du alltid får köra först",
        "ar": "تعني الإشارة أنك تستطيع المرور أولاً دائماً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Förbudsmärket begränsar omkörning enligt de villkor som anges.",
    "explanationAr": "تقيّد إشارة المنع التجاوز وفق الشروط المحددة."
  },
  {
    "id": 2023,
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som förbjuder stannande eller parkering?",
    "questionAr": "ماذا تعني إشارة منع التوقف أو الوقوف؟",
    "options": [
      {
        "sv": "Följa det angivna förbudet och kontrollera eventuella tilläggstavlor",
        "ar": "اتباع المنع المحدد والتحقق من اللوحات الإضافية"
      },
      {
        "sv": "Du kan följa GPS i stället för aktuell skyltning",
        "ar": "يمكنك اتباع GPS بدلاً من إشارات الطريق الحالية"
      },
      {
        "sv": "Märket gäller bara när det finns polis på plats",
        "ar": "تسري الإشارة فقط عندما يوجد شرطي في المكان"
      },
      {
        "sv": "Märket gäller bara för fordon bakom dig",
        "ar": "تسري الإشارة فقط على المركبات خلفك"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Olika märken reglerar stannande och parkering på olika sätt; läs märket noggrant.",
    "explanationAr": "تختلف إشارات التوقف والوقوف؛ اقرأ الإشارة بعناية."
  },
  {
    "id": 2024,
    "category": "Vägmärken",
    "questionSv": "Vad innebär ett vägmärke med rekommenderad hastighet?",
    "questionAr": "ماذا تعني إشارة السرعة الموصى بها؟",
    "options": [
      {
        "sv": "Märket ger en rekommendation som aldrig behöver följas",
        "ar": "تقدم الإشارة توصية لا يلزم اتباعها أبداً"
      },
      {
        "sv": "Märket kan alltid ignoreras om vägen ser tom ut",
        "ar": "يمكن تجاهل الإشارة دائماً إذا بدا الطريق خالياً"
      },
      {
        "sv": "Den anger en rekommendation som måste vägas mot förhållandena",
        "ar": "إنها تعرض سرعة موصى بها يجب مراعاة الظروف معها"
      },
      {
        "sv": "Märket ersätter alltid behovet av att vara uppmärksam",
        "ar": "تلغي الإشارة دائماً الحاجة إلى الانتباه"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "En rekommendation ersätter inte kravet att anpassa hastigheten efter situationen.",
    "explanationAr": "التوصية لا تلغي ضرورة ضبط السرعة وفق الظروف."
  },
  {
    "id": 2025,
    "category": "Vägmärken",
    "questionSv": "Vad bör du göra när du ser en skylt om smalare väg?",
    "questionAr": "ماذا تفعل عند رؤية إشارة تضييق الطريق؟",
    "options": [
      {
        "sv": "Du kan följa GPS i stället för aktuell skyltning",
        "ar": "يمكنك اتباع GPS بدلاً من إشارات الطريق الحالية"
      },
      {
        "sv": "Märket betyder att du alltid får köra först",
        "ar": "تعني الإشارة أنك تستطيع المرور أولاً دائماً"
      },
      {
        "sv": "Märket betyder att du ska öka farten",
        "ar": "تعني الإشارة أنه يجب زيادة السرعة"
      },
      {
        "sv": "Sänka farten och vara beredd på möte eller ändrad körlinje",
        "ar": "تخفيف السرعة والاستعداد لمرور مركبات مقابلة أو لتغيّر مسار السير"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Vägens bredd minskar, så planera passagen försiktigt.",
    "explanationAr": "يقل عرض الطريق، لذا خطط للمرور بحذر."
  },
  {
    "id": 2026,
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för kurva?",
    "questionAr": "ماذا تعني إشارة التحذير من منعطف؟",
    "options": [
      {
        "sv": "Märket gäller bara för fordon bakom dig",
        "ar": "تسري الإشارة فقط على المركبات خلفك"
      },
      {
        "sv": "Märket kan alltid ignoreras om vägen ser tom ut",
        "ar": "يمكن تجاهل الإشارة دائماً إذا بدا الطريق خالياً"
      },
      {
        "sv": "Märket gäller bara när det finns polis på plats",
        "ar": "تسري الإشارة فقط عندما يوجد شرطي في المكان"
      },
      {
        "sv": "Vägen svänger och farten kan behöva sänkas",
        "ar": "الطريق ينعطف وقد يلزم تخفيف السرعة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Anpassa farten innan kurvan och håll bilen under kontroll.",
    "explanationAr": "اضبط السرعة قبل المنعطف وحافظ على السيطرة على السيارة."
  },
  {
    "id": 2027,
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för ojämn väg?",
    "questionAr": "ماذا تعني إشارة التحذير من طريق غير مستوٍ؟",
    "options": [
      {
        "sv": "Märket ersätter alltid behovet av att vara uppmärksam",
        "ar": "تلغي الإشارة دائماً الحاجة إلى الانتباه"
      },
      {
        "sv": "Märket betyder att du alltid får köra först",
        "ar": "تعني الإشارة أنك تستطيع المرور أولاً دائماً"
      },
      {
        "sv": "Märket ger en rekommendation som aldrig behöver följas",
        "ar": "تقدم الإشارة توصية لا يلزم اتباعها أبداً"
      },
      {
        "sv": "Vägytan kan vara ojämn och kräva lägre fart",
        "ar": "قد يكون سطح الطريق غير مستوٍ ويتطلب سرعة أقل"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Sänk farten och var uppmärksam på hur bilen reagerar.",
    "explanationAr": "خفف السرعة وانتبه إلى استجابة السيارة."
  },
  {
    "id": 2028,
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för kö eller köbildning?",
    "questionAr": "ماذا تعني إشارة التحذير من طابور أو ازدحام؟",
    "options": [
      {
        "sv": "Märket betyder att du ska öka farten",
        "ar": "تعني الإشارة أنه يجب زيادة السرعة"
      },
      {
        "sv": "Märket gäller bara när det finns polis på plats",
        "ar": "تسري الإشارة فقط عندما يوجد شرطي في المكان"
      },
      {
        "sv": "Var beredd på långsammare eller stillastående trafik",
        "ar": "استعد لحركة بطيئة أو متوقفة"
      },
      {
        "sv": "Du kan följa GPS i stället för aktuell skyltning",
        "ar": "يمكنك اتباع GPS بدلاً من إشارات الطريق الحالية"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Håll avstånd och undvik att närma dig kön för snabbt.",
    "explanationAr": "حافظ على المسافة وتجنب الاقتراب من الطابور بسرعة."
  },
  {
    "id": 2029,
    "category": "Vägmärken",
    "questionSv": "Vad gör du när du ser en hastighetsbegränsning som är lägre än vägens vanliga gräns?",
    "questionAr": "ماذا تفعل عندما ترى حداً للسرعة أقل من الحد المعتاد للطريق؟",
    "options": [
      {
        "sv": "Märket kan alltid ignoreras om vägen ser tom ut",
        "ar": "يمكن تجاهل الإشارة دائماً إذا بدا الطريق خالياً"
      },
      {
        "sv": "Följa den skyltade begränsningen och anpassa farten ytterligare vid behov",
        "ar": "اتباع الحد المعلن وتخفيض السرعة أكثر عند الحاجة"
      },
      {
        "sv": "Märket gäller bara för fordon bakom dig",
        "ar": "تسري الإشارة فقط على المركبات خلفك"
      },
      {
        "sv": "Märket ger en rekommendation som aldrig behöver följas",
        "ar": "تقدم الإشارة توصية لا يلزم اتباعها أبداً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Den skyltade gränsen gäller där den är tillämplig, men kan vara för hög för rådande förhållanden.",
    "explanationAr": "يسري الحد المعلن في موضعه، لكنه قد يكون أعلى من المناسب للظروف الحالية."
  },
  {
    "id": 2030,
    "category": "Vägmärken",
    "questionSv": "Vad bör du tänka på när en tilläggstavla visar vissa tider?",
    "questionAr": "ما الذي ينبغي مراعاته عندما تحدد لوحة إضافية أوقاتاً معينة؟",
    "options": [
      {
        "sv": "Kontrollera om regeln gäller vid den aktuella tiden",
        "ar": "التحقق مما إذا كانت القاعدة سارية في الوقت الحالي"
      },
      {
        "sv": "Märket betyder att du ska öka farten",
        "ar": "تعني الإشارة أنه يجب زيادة السرعة"
      },
      {
        "sv": "Märket ersätter alltid behovet av att vara uppmärksam",
        "ar": "تلغي الإشارة دائماً الحاجة إلى الانتباه"
      },
      {
        "sv": "Märket betyder att du alltid får köra först",
        "ar": "تعني الإشارة أنك تستطيع المرور أولاً دائماً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Tider på tilläggstavlor kan avgöra när en regel eller begränsning gäller.",
    "explanationAr": "قد تحدد الأوقات على اللوحات الإضافية متى تسري القاعدة أو القيود."
  },
  {
    "id": 2031,
    "category": "Vägmärken",
    "questionSv": "Vad innebär ett märke som förbjuder trafik med en viss fordonstyp?",
    "questionAr": "ماذا تعني إشارة منع مرور نوع معين من المركبات؟",
    "options": [
      {
        "sv": "Fordonstypen som visas omfattas av förbudet enligt märket",
        "ar": "نوع المركبة الموضح مشمول بالمنع وفق الإشارة"
      },
      {
        "sv": "Märket gäller bara när det finns polis på plats",
        "ar": "تسري الإشارة فقط عندما يوجد شرطي في المكان"
      },
      {
        "sv": "Märket gäller bara för fordon bakom dig",
        "ar": "تسري الإشارة فقط على المركبات خلفك"
      },
      {
        "sv": "Du kan följa GPS i stället för aktuell skyltning",
        "ar": "يمكنك اتباع GPS بدلاً من إشارات الطريق الحالية"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Läs symbolen och eventuella undantag på tilläggstavlor.",
    "explanationAr": "اقرأ الرمز وأي استثناءات على اللوحات الإضافية."
  },
  {
    "id": 2032,
    "category": "Vägmärken",
    "questionSv": "Vad ska du göra om ett vägmärke är delvis skymt?",
    "questionAr": "ماذا تفعل إذا كانت إشارة الطريق محجوبة جزئياً؟",
    "options": [
      {
        "sv": "Märket ersätter alltid behovet av att vara uppmärksam",
        "ar": "تلغي الإشارة دائماً الحاجة إلى الانتباه"
      },
      {
        "sv": "Märket kan alltid ignoreras om vägen ser tom ut",
        "ar": "يمكن تجاهل الإشارة دائماً إذا بدا الطريق خالياً"
      },
      {
        "sv": "Märket ger en rekommendation som aldrig behöver följas",
        "ar": "تقدم الإشارة توصية لا يلزم اتباعها أبداً"
      },
      {
        "sv": "Köra försiktigt och söka efter annan information utan att chansa",
        "ar": "القيادة بحذر والبحث عن معلومات أخرى دون تخمين"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Anpassa körningen när informationen är osäker och prioritera säkerheten.",
    "explanationAr": "عدّل قيادتك عندما تكون المعلومات غير واضحة واجعل السلامة أولوية."
  },
  {
    "id": 2033,
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som anger återvändsgata?",
    "questionAr": "ماذا تعني إشارة طريق مسدود؟",
    "options": [
      {
        "sv": "Märket betyder att du alltid får köra först",
        "ar": "تعني الإشارة أنك تستطيع المرور أولاً دائماً"
      },
      {
        "sv": "Märket betyder att du ska öka farten",
        "ar": "تعني الإشارة أنه يجب زيادة السرعة"
      },
      {
        "sv": "Vägen saknar genomfart för vanlig trafik i den angivna riktningen",
        "ar": "الطريق لا يتيح المرور إلى جهة أخرى بالاتجاه المحدد"
      },
      {
        "sv": "Du kan följa GPS i stället för aktuell skyltning",
        "ar": "يمكنك اتباع GPS بدلاً من إشارات الطريق الحالية"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Planera färdvägen och kör inte in med antagandet att du kan passera igenom.",
    "explanationAr": "خطط للطريق ولا تدخل بافتراض أنك ستتمكن من المرور إلى الجهة الأخرى."
  },
  {
    "id": 2034,
    "category": "Vägmärken",
    "questionSv": "Vad visar en skylt med information om sjukhus eller första hjälpen?",
    "questionAr": "ماذا توضح إشارة معلومات عن مستشفى أو إسعافات أولية؟",
    "options": [
      {
        "sv": "Märket kan alltid ignoreras om vägen ser tom ut",
        "ar": "يمكن تجاهل الإشارة دائماً إذا بدا الطريق خالياً"
      },
      {
        "sv": "Märket gäller bara för fordon bakom dig",
        "ar": "تسري الإشارة فقط على المركبات خلفك"
      },
      {
        "sv": "Märket gäller bara när det finns polis på plats",
        "ar": "تسري الإشارة فقط عندما يوجد شرطي في المكان"
      },
      {
        "sv": "Den visar service eller en plats med den angivna funktionen",
        "ar": "توضح خدمة أو مكاناً يؤدي الوظيفة المحددة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Informationsmärken hjälper dig hitta service; kör ändå uppmärksamt.",
    "explanationAr": "تساعدك إشارات المعلومات على العثور على الخدمات؛ واصل القيادة بانتباه."
  },
  {
    "id": 2035,
    "category": "Vägmärken",
    "questionSv": "Vad ska du göra när skyltar visar en tillfällig omledning?",
    "questionAr": "ماذا تفعل عندما تشير اللوحات إلى تحويلة مؤقتة؟",
    "options": [
      {
        "sv": "Märket ger en rekommendation som aldrig behöver följas",
        "ar": "تقدم الإشارة توصية لا يلزم اتباعها أبداً"
      },
      {
        "sv": "Märket betyder att du alltid får köra först",
        "ar": "تعني الإشارة أنك تستطيع المرور أولاً دائماً"
      },
      {
        "sv": "Följa omledningen och vara uppmärksam på förändrad vägdragning",
        "ar": "اتباع التحويلة والانتباه إلى تغيّر مسار الطريق"
      },
      {
        "sv": "Märket ersätter alltid behovet av att vara uppmärksam",
        "ar": "تلغي الإشارة دائماً الحاجة إلى الانتباه"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Tillfälliga omledningar kan leda via andra körfält eller vägar.",
    "explanationAr": "قد توجه التحويلات المؤقتة إلى مسارات أو طرق أخرى."
  },
  {
    "id": 2036,
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som anger att motorväg börjar?",
    "questionAr": "ماذا تعني إشارة بداية الطريق السريع؟",
    "options": [
      {
        "sv": "Märket gäller bara när det finns polis på plats",
        "ar": "تسري الإشارة فقط عندما يوجد شرطي في المكان"
      },
      {
        "sv": "Märket betyder att du ska öka farten",
        "ar": "تعني الإشارة أنه يجب زيادة السرعة"
      },
      {
        "sv": "Du kan följa GPS i stället för aktuell skyltning",
        "ar": "يمكنك اتباع GPS بدلاً من إشارات الطريق الحالية"
      },
      {
        "sv": "Särskilda regler för motorväg gäller från den angivna platsen",
        "ar": "تسري قواعد خاصة بالطريق السريع ابتداءً من المكان المحدد"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Kontrollera vilka fordon som får köra där och använd på- och avfarter korrekt.",
    "explanationAr": "تحقق من المركبات المسموح بها واستخدم مداخل ومخارج الطريق بصورة صحيحة."
  },
  {
    "id": 2037,
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som anger att motorväg upphör?",
    "questionAr": "ماذا تعني إشارة نهاية الطريق السريع؟",
    "options": [
      {
        "sv": "Märket gäller bara för fordon bakom dig",
        "ar": "تسري الإشارة فقط على المركبات خلفك"
      },
      {
        "sv": "Motorvägsreglerna upphör och du måste anpassa dig till den nya vägmiljön",
        "ar": "تنتهي قواعد الطريق السريع ويجب التكيف مع بيئة الطريق الجديدة"
      },
      {
        "sv": "Märket ger en rekommendation som aldrig behöver följas",
        "ar": "تقدم الإشارة توصية لا يلزم اتباعها أبداً"
      },
      {
        "sv": "Märket kan alltid ignoreras om vägen ser tom ut",
        "ar": "يمكن تجاهل الإشارة دائماً إذا بدا الطريق خالياً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Var uppmärksam på ändrade korsningar, hastigheter och andra trafikanter.",
    "explanationAr": "انتبه إلى تغيّر التقاطعات والسرعات ومستخدمي الطريق الآخرين."
  },
  {
    "id": 2038,
    "category": "Vägmärken",
    "questionSv": "Vad bör du göra när en skylt visar risk för fallande sten?",
    "questionAr": "ماذا تفعل عندما تحذر إشارة من تساقط الصخور؟",
    "options": [
      {
        "sv": "Märket betyder att du alltid får köra först",
        "ar": "تعني الإشارة أنك تستطيع المرور أولاً دائماً"
      },
      {
        "sv": "Märket betyder att du ska öka farten",
        "ar": "تعني الإشارة أنه يجب زيادة السرعة"
      },
      {
        "sv": "Märket ersätter alltid behovet av att vara uppmärksam",
        "ar": "تلغي الإشارة دائماً الحاجة إلى الانتباه"
      },
      {
        "sv": "Sänka farten och vara uppmärksam på vägen och vägkanten",
        "ar": "تخفيف السرعة والانتباه للطريق وجانبه"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Håll uppsikt och anpassa körningen till risken som skylten anger.",
    "explanationAr": "راقب الطريق واضبط القيادة وفق الخطر الذي تشير إليه العلامة."
  },
  {
    "id": 2039,
    "category": "Vägmärken",
    "questionSv": "Vad bör du göra när du ser en skylt för viltstängsel eller djurpassage?",
    "questionAr": "ماذا تفعل عند رؤية إشارة سياج للحيوانات البرية أو عبورها؟",
    "options": [
      {
        "sv": "Du kan följa GPS i stället för aktuell skyltning",
        "ar": "يمكنك اتباع GPS بدلاً من إشارات الطريق الحالية"
      },
      {
        "sv": "Vara uppmärksam på djur och följa informationen på märket",
        "ar": "الانتباه للحيوانات واتباع المعلومات الموجودة على الإشارة"
      },
      {
        "sv": "Märket gäller bara när det finns polis på plats",
        "ar": "تسري الإشارة فقط عندما يوجد شرطي في المكان"
      },
      {
        "sv": "Märket gäller bara för fordon bakom dig",
        "ar": "تسري الإشارة فقط على المركبات خلفك"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Djur kan finnas nära vägen även där ett stängsel leder dem mot särskilda passager.",
    "explanationAr": "قد توجد الحيوانات قرب الطريق حتى عندما يوجهها السياج إلى معابر محددة."
  },
  {
    "id": 2040,
    "category": "Vägmärken",
    "questionSv": "Varför ska du inte enbart följa GPS när vägmärken visar en annan väg?",
    "questionAr": "لماذا لا ينبغي اتباع GPS وحده عندما تشير اللوحات إلى طريق مختلف؟",
    "options": [
      {
        "sv": "Vägmärken och aktuella trafikanvisningar ska följas",
        "ar": "يجب اتباع إشارات الطريق والتعليمات المرورية الحالية"
      },
      {
        "sv": "Märket kan alltid ignoreras om vägen ser tom ut",
        "ar": "يمكن تجاهل الإشارة دائماً إذا بدا الطريق خالياً"
      },
      {
        "sv": "Märket ger en rekommendation som aldrig behöver följas",
        "ar": "تقدم الإشارة توصية لا يلزم اتباعها أبداً"
      },
      {
        "sv": "Märket ersätter alltid behovet av att vara uppmärksam",
        "ar": "تلغي الإشارة دائماً الحاجة إلى الانتباه"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "GPS-information kan vara föråldrad; följ aktuell skyltning.",
    "explanationAr": "قد تكون معلومات GPS قديمة؛ اتبع الإشارات الحالية."
  },
  {
    "id": 3001,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad påverkar reaktionssträckans längd?",
    "questionAr": "ما الذي يؤثر في طول مسافة رد الفعل؟",
    "options": [
      {
        "sv": "Bilens hastighet och förarens reaktionstid",
        "ar": "سرعة السيارة وزمن استجابة السائق"
      },
      {
        "sv": "Köra närmare andra fordon",
        "ar": "القيادة أقرب إلى المركبات الأخرى"
      },
      {
        "sv": "Öka farten för att snabbt passera risken",
        "ar": "زيادة السرعة لتجاوز الخطر بسرعة"
      },
      {
        "sv": "Ignorera trötthet och försöka hålla ut",
        "ar": "تجاهل التعب ومحاولة الاستمرار"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Högre hastighet eller längre reaktionstid ger längre reaktionssträcka.",
    "explanationAr": "تزيد السرعة الأعلى أو زمن الاستجابة الأطول مسافة رد الفعل."
  },
  {
    "id": 3002,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad händer normalt med bromssträckan när hastigheten ökar?",
    "questionAr": "ماذا يحدث عادة لمسافة الفرملة عندما تزداد السرعة؟",
    "options": [
      {
        "sv": "Den ökar kraftigt",
        "ar": "تزداد بشكل كبير"
      },
      {
        "sv": "Fortsätta i samma fart oavsett förhållanden",
        "ar": "الاستمرار بالسرعة نفسها مهما كانت الظروف"
      },
      {
        "sv": "Titta bort från vägen för att kontrollera något",
        "ar": "إبعاد النظر عن الطريق للتحقق من شيء"
      },
      {
        "sv": "Göra plötsliga styr- och bromsrörelser",
        "ar": "إجراء حركات توجيه وفرملة مفاجئة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Bromssträckan påverkas av hastighet, väglag, däck och bromsar.",
    "explanationAr": "تتأثر مسافة الفرملة بالسرعة وحالة الطريق والإطارات والفرامل."
  },
  {
    "id": 3003,
    "category": "Trafiksäkerhet",
    "questionSv": "Varför behöver du hålla avstånd till bilen framför?",
    "questionAr": "لماذا تحتاج إلى ترك مسافة أمان مع السيارة الأمامية؟",
    "options": [
      {
        "sv": "Räkna med att andra alltid upptäcker dig",
        "ar": "افتراض أن الآخرين يلاحظونك دائماً"
      },
      {
        "sv": "För att hinna reagera och bromsa om något händer",
        "ar": "لكي تتمكن من الاستجابة والفرملة إذا حدث شيء"
      },
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنية السيارة تحل كل المواقف"
      },
      {
        "sv": "Köra närmare andra fordon",
        "ar": "القيادة أقرب إلى المركبات الأخرى"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Avstånd ger en säkerhetsmarginal om trafiken ändras snabbt.",
    "explanationAr": "توفر المسافة هامش أمان إذا تغيرت حركة المرور بسرعة."
  },
  {
    "id": 3004,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad är säkrast om du känner dig mycket trött under körningen?",
    "questionAr": "ما الأكثر أماناً إذا شعرت بتعب شديد أثناء القيادة؟",
    "options": [
      {
        "sv": "Öka farten för att snabbt passera risken",
        "ar": "زيادة السرعة لتجاوز الخطر بسرعة"
      },
      {
        "sv": "Stanna på en säker plats och vila",
        "ar": "التوقف في مكان آمن والراحة"
      },
      {
        "sv": "Ignorera trötthet och försöka hålla ut",
        "ar": "تجاهل التعب ومحاولة الاستمرار"
      },
      {
        "sv": "Göra plötsliga styr- och bromsrörelser",
        "ar": "إجراء حركات توجيه وفرملة مفاجئة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Trötthet försämrar uppmärksamhet och reaktion; fortsätt inte när du är sömnig.",
    "explanationAr": "يضعف التعب الانتباه ورد الفعل؛ لا تواصل القيادة وأنت نعسان."
  },
  {
    "id": 3005,
    "category": "Trafiksäkerhet",
    "questionSv": "Hur påverkar alkohol körförmågan?",
    "questionAr": "كيف يؤثر الكحول على القدرة على القيادة؟",
    "options": [
      {
        "sv": "Räkna med att andra alltid upptäcker dig",
        "ar": "افتراض أن الآخرين يلاحظونك دائماً"
      },
      {
        "sv": "Fortsätta i samma fart oavsett förhållanden",
        "ar": "الاستمرار بالسرعة نفسها مهما كانت الظروف"
      },
      {
        "sv": "Titta bort från vägen för att kontrollera något",
        "ar": "إبعاد النظر عن الطريق للتحقق من شيء"
      },
      {
        "sv": "Det försämrar omdöme, uppmärksamhet och reaktion",
        "ar": "يضعف الحكم والانتباه ورد الفعل"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Alkohol påverkar förmågan att bedöma risker även om föraren känner sig opåverkad.",
    "explanationAr": "يؤثر الكحول في تقدير المخاطر حتى لو شعر السائق أنه غير متأثر."
  },
  {
    "id": 3006,
    "category": "Trafiksäkerhet",
    "questionSv": "Varför är droger och vissa läkemedel en risk i trafiken?",
    "questionAr": "لماذا تشكل المخدرات وبعض الأدوية خطراً في المرور؟",
    "options": [
      {
        "sv": "Ignorera trötthet och försöka hålla ut",
        "ar": "تجاهل التعب ومحاولة الاستمرار"
      },
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنية السيارة تحل كل المواقف"
      },
      {
        "sv": "Köra närmare andra fordon",
        "ar": "القيادة أقرب إلى المركبات الأخرى"
      },
      {
        "sv": "De kan påverka vakenhet, omdöme och reaktionsförmåga",
        "ar": "قد تؤثر على اليقظة والحكم وسرعة الاستجابة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Läs läkemedelsinformationen och kör inte om din förmåga är nedsatt.",
    "explanationAr": "اقرأ معلومات الدواء ولا تقد إذا كانت قدرتك متأثرة."
  },
  {
    "id": 3007,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad bör du göra när du kör i tät dimma?",
    "questionAr": "ماذا ينبغي أن تفعل عند القيادة في ضباب كثيف؟",
    "options": [
      {
        "sv": "Sänka hastigheten och använda belysning som passar sikten",
        "ar": "تخفيف السرعة واستخدام الإضاءة المناسبة للرؤية"
      },
      {
        "sv": "Titta bort från vägen för att kontrollera något",
        "ar": "إبعاد النظر عن الطريق للتحقق من شيء"
      },
      {
        "sv": "Öka farten för att snabbt passera risken",
        "ar": "زيادة السرعة لتجاوز الخطر بسرعة"
      },
      {
        "sv": "Göra plötsliga styr- och bromsrörelser",
        "ar": "إجراء حركات توجيه وفرملة مفاجئة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Anpassa farten efter sikten och öka avståndet till andra fordon.",
    "explanationAr": "اضبط السرعة حسب الرؤية وزد المسافة عن المركبات الأخرى."
  },
  {
    "id": 3008,
    "category": "Trafiksäkerhet",
    "questionSv": "Hur ska du köra på en isig väg?",
    "questionAr": "كيف تقود على طريق جليدي؟",
    "options": [
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنية السيارة تحل كل المواقف"
      },
      {
        "sv": "Mjukt, långsamt och med extra stort avstånd",
        "ar": "بسلاسة وببطء وبمسافة أكبر"
      },
      {
        "sv": "Fortsätta i samma fart oavsett förhållanden",
        "ar": "الاستمرار بالسرعة نفسها مهما كانت الظروف"
      },
      {
        "sv": "Räkna med att andra alltid upptäcker dig",
        "ar": "افتراض أن الآخرين يلاحظونك دائماً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Undvik kraftig bromsning och hastiga styrutslag när greppet är dåligt.",
    "explanationAr": "تجنب الفرملة القوية وحركات المقود المفاجئة عند ضعف التماسك."
  },
  {
    "id": 3009,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad ska du göra om bilen börjar vattenplana?",
    "questionAr": "ماذا تفعل إذا بدأت السيارة بالانزلاق فوق الماء؟",
    "options": [
      {
        "sv": "Släppa gasen försiktigt och undvika plötsliga styr- eller bromsrörelser",
        "ar": "رفع القدم عن الوقود تدريجياً وتجنب التوجيه أو الفرملة المفاجئة"
      },
      {
        "sv": "Köra närmare andra fordon",
        "ar": "القيادة أقرب إلى المركبات الأخرى"
      },
      {
        "sv": "Ignorera trötthet och försöka hålla ut",
        "ar": "تجاهل التعب ومحاولة الاستمرار"
      },
      {
        "sv": "Öka farten för att snabbt passera risken",
        "ar": "زيادة السرعة لتجاوز الخطر بسرعة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Vattenplaning minskar kontakten mellan däcken och vägen; reagera mjukt.",
    "explanationAr": "يقلل الانزلاق المائي تماس الإطارات بالطريق؛ استجب بسلاسة."
  },
  {
    "id": 3010,
    "category": "Trafiksäkerhet",
    "questionSv": "Varför är barn nära vägen en särskild risk?",
    "questionAr": "لماذا يشكل الأطفال قرب الطريق خطراً خاصاً؟",
    "options": [
      {
        "sv": "De kan agera oväntat och ha svårt att bedöma trafik",
        "ar": "قد يتصرفون بشكل غير متوقع ويصعب عليهم تقدير حركة المرور"
      },
      {
        "sv": "Göra plötsliga styr- och bromsrörelser",
        "ar": "إجراء حركات توجيه وفرملة مفاجئة"
      },
      {
        "sv": "Fortsätta i samma fart oavsett förhållanden",
        "ar": "الاستمرار بالسرعة نفسها مهما كانت الظروف"
      },
      {
        "sv": "Titta bort från vägen för att kontrollera något",
        "ar": "إبعاد النظر عن الطريق للتحقق من شيء"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Sänk farten och var beredd att stanna där barn vistas.",
    "explanationAr": "خفف السرعة واستعد للتوقف في الأماكن التي يوجد فيها أطفال."
  },
  {
    "id": 3011,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad bör du tänka på när du kör nära cyklister?",
    "questionAr": "ما الذي ينبغي مراعاته عند القيادة قرب راكبي الدراجات؟",
    "options": [
      {
        "sv": "Köra närmare andra fordon",
        "ar": "القيادة أقرب إلى المركبات الأخرى"
      },
      {
        "sv": "Ge dem gott om utrymme och räkna med att de kan behöva väja",
        "ar": "إعطاؤهم مساحة كافية وتوقع حاجتهم لتفادي عائق"
      },
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنية السيارة تحل كل المواقف"
      },
      {
        "sv": "Räkna med att andra alltid upptäcker dig",
        "ar": "افتراض أن الآخرين يلاحظونك دائماً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Cyklister är oskyddade och kan påverkas av gropar, vind eller hinder.",
    "explanationAr": "راكبو الدراجات غير محميين وقد يتأثرون بالحفر أو الرياح أو العوائق."
  },
  {
    "id": 3012,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad gör du när mötande helljus bländar dig?",
    "questionAr": "ماذا تفعل عندما يبهرك الضوء العالي للمركبة المقابلة؟",
    "options": [
      {
        "sv": "Göra plötsliga styr- och bromsrörelser",
        "ar": "إجراء حركات توجيه وفرملة مفاجئة"
      },
      {
        "sv": "Ignorera trötthet och försöka hålla ut",
        "ar": "تجاهل التعب ومحاولة الاستمرار"
      },
      {
        "sv": "Sänka farten och rikta blicken mot vägkanten utan att tappa kontrollen",
        "ar": "تخفيف السرعة وتوجيه النظر نحو حافة الطريق دون فقدان السيطرة"
      },
      {
        "sv": "Öka farten för att snabbt passera risken",
        "ar": "زيادة السرعة لتجاوز الخطر بسرعة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Undvik att stirra in i ljuset och anpassa körningen tills sikten återhämtas.",
    "explanationAr": "تجنب التحديق في الضوء واضبط القيادة حتى تتحسن الرؤية."
  },
  {
    "id": 3013,
    "category": "Trafiksäkerhet",
    "questionSv": "Varför är bilbälte viktigt även vid låg hastighet?",
    "questionAr": "لماذا حزام الأمان مهم حتى عند السرعات المنخفضة؟",
    "options": [
      {
        "sv": "Titta bort från vägen för att kontrollera något",
        "ar": "إبعاد النظر عن الطريق للتحقق من شيء"
      },
      {
        "sv": "Det minskar risken att skadas vid en kollision eller kraftig inbromsning",
        "ar": "يقلل خطر الإصابة عند التصادم أو الفرملة القوية"
      },
      {
        "sv": "Fortsätta i samma fart oavsett förhållanden",
        "ar": "الاستمرار بالسرعة نفسها مهما كانت الظروف"
      },
      {
        "sv": "Räkna med att andra alltid upptäcker dig",
        "ar": "افتراض أن الآخرين يلاحظونك دائماً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Bilbälte ska användas korrekt under hela resan.",
    "explanationAr": "يجب استخدام حزام الأمان بطريقة صحيحة طوال الرحلة."
  },
  {
    "id": 3014,
    "category": "Trafiksäkerhet",
    "questionSv": "Hur ska ett nackskydd vara inställt?",
    "questionAr": "كيف ينبغي ضبط مسند الرأس؟",
    "options": [
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنية السيارة تحل كل المواقف"
      },
      {
        "sv": "Ignorera trötthet och försöka hålla ut",
        "ar": "تجاهل التعب ومحاولة الاستمرار"
      },
      {
        "sv": "Köra närmare andra fordon",
        "ar": "القيادة أقرب إلى المركبات الأخرى"
      },
      {
        "sv": "Så att det ger bra stöd för huvudet och minskar risken för nackskador",
        "ar": "بحيث يدعم الرأس جيداً ويقلل خطر إصابات الرقبة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Rätt inställt nackskydd kan minska risken för nackskador vid påkörning bakifrån.",
    "explanationAr": "قد يقلل مسند الرأس المضبوط بشكل صحيح خطر إصابات الرقبة عند الاصطدام من الخلف."
  },
  {
    "id": 3015,
    "category": "Trafiksäkerhet",
    "questionSv": "Varför ska du använda rätt skyddsutrustning för barn i bilen?",
    "questionAr": "لماذا يجب استخدام مقعد أو وسيلة حماية مناسبة للأطفال في السيارة؟",
    "options": [
      {
        "sv": "Öka farten för att snabbt passera risken",
        "ar": "زيادة السرعة لتجاوز الخطر بسرعة"
      },
      {
        "sv": "Titta bort från vägen för att kontrollera något",
        "ar": "إبعاد النظر عن الطريق للتحقق من شيء"
      },
      {
        "sv": "Barnets skydd måste passa barnets storlek och användas korrekt",
        "ar": "يجب أن تناسب وسيلة الحماية حجم الطفل وأن تستخدم بشكل صحيح"
      },
      {
        "sv": "Göra plötsliga styr- och bromsrörelser",
        "ar": "إجراء حركات توجيه وفرملة مفاجئة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Följ anvisningarna för barnskydd och bilens utrustning.",
    "explanationAr": "اتبع تعليمات مقاعد الأطفال وتجهيزات السيارة."
  },
  {
    "id": 3016,
    "category": "Trafiksäkerhet",
    "questionSv": "Hur påverkar en tung last bilens köregenskaper?",
    "questionAr": "كيف تؤثر الحمولة الثقيلة على خصائص قيادة السيارة؟",
    "options": [
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنية السيارة تحل كل المواقف"
      },
      {
        "sv": "Fortsätta i samma fart oavsett förhållanden",
        "ar": "الاستمرار بالسرعة نفسها مهما كانت الظروف"
      },
      {
        "sv": "Den kan påverka bromsning, styrning och stabilitet",
        "ar": "قد تؤثر على الفرملة والتوجيه والثبات"
      },
      {
        "sv": "Räkna med att andra alltid upptäcker dig",
        "ar": "افتراض أن الآخرين يلاحظونك دائماً"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Last påverkar fordonets viktfördelning och kan öka riskerna vid undanmanöver.",
    "explanationAr": "تؤثر الحمولة في توزيع الوزن وقد تزيد المخاطر عند المناورة لتفادي شيء."
  },
  {
    "id": 3017,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad ska du göra om du närmar dig en olycksplats?",
    "questionAr": "ماذا تفعل عند الاقتراب من موقع حادث؟",
    "options": [
      {
        "sv": "Köra närmare andra fordon",
        "ar": "القيادة أقرب إلى المركبات الأخرى"
      },
      {
        "sv": "Ignorera trötthet och försöka hålla ut",
        "ar": "تجاهل التعب ومحاولة الاستمرار"
      },
      {
        "sv": "Sänka farten, hålla avstånd och följa eventuella anvisningar",
        "ar": "تخفيف السرعة وترك مسافة واتباع أي تعليمات"
      },
      {
        "sv": "Öka farten för att snabbt passera risken",
        "ar": "زيادة السرعة لتجاوز الخطر بسرعة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Var uppmärksam på räddningspersonal, skadade och plötsliga stopp.",
    "explanationAr": "انتبه لفرق الإنقاذ والمصابين والتوقف المفاجئ."
  },
  {
    "id": 3018,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad är ett säkert första steg om du själv blir inblandad i en olycka?",
    "questionAr": "ما الخطوة الأولى الآمنة إذا تعرضت لحادث؟",
    "options": [
      {
        "sv": "Titta bort från vägen för att kontrollera något",
        "ar": "إبعاد النظر عن الطريق للتحقق من شيء"
      },
      {
        "sv": "Göra plötsliga styr- och bromsrörelser",
        "ar": "إجراء حركات توجيه وفرملة مفاجئة"
      },
      {
        "sv": "Stanna på ett säkert sätt och förhindra ytterligare fara",
        "ar": "التوقف بطريقة آمنة ومنع وقوع خطر إضافي"
      },
      {
        "sv": "Fortsätta i samma fart oavsett förhållanden",
        "ar": "الاستمرار بالسرعة نفسها مهما كانت الظروف"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Säkra platsen och larma vid behov innan du utsätter dig själv för risk.",
    "explanationAr": "أمّن المكان واطلب المساعدة عند الحاجة قبل تعريض نفسك للخطر."
  },
  {
    "id": 3019,
    "category": "Trafiksäkerhet",
    "questionSv": "Varför är det viktigt att anpassa hastigheten i mörker?",
    "questionAr": "لماذا من المهم ضبط السرعة في الظلام؟",
    "options": [
      {
        "sv": "Köra närmare andra fordon",
        "ar": "القيادة أقرب إلى المركبات الأخرى"
      },
      {
        "sv": "Du kan upptäcka hinder senare än i dagsljus",
        "ar": "قد تكتشف العوائق في وقت متأخر مقارنة بالنهار"
      },
      {
        "sv": "Räkna med att andra alltid upptäcker dig",
        "ar": "افتراض أن الآخرين يلاحظونك دائماً"
      },
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنية السيارة تحل كل المواقف"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Kör så att du kan stanna inom den sträcka du faktiskt kan överblicka.",
    "explanationAr": "قد بطريقة تتيح لك التوقف ضمن المسافة التي تستطيع رؤيتها فعلاً."
  },
  {
    "id": 3020,
    "category": "Trafiksäkerhet",
    "questionSv": "Hur bör du köra i kraftigt regn?",
    "questionAr": "كيف تقود في المطر الغزير؟",
    "options": [
      {
        "sv": "Sänka farten, öka avståndet och undvika hastiga manövrer",
        "ar": "تخفيف السرعة وزيادة المسافة وتجنب المناورات المفاجئة"
      },
      {
        "sv": "Öka farten för att snabbt passera risken",
        "ar": "زيادة السرعة لتجاوز الخطر بسرعة"
      },
      {
        "sv": "Ignorera trötthet och försöka hålla ut",
        "ar": "تجاهل التعب ومحاولة الاستمرار"
      },
      {
        "sv": "Göra plötsliga styr- och bromsrörelser",
        "ar": "إجراء حركات توجيه وفرملة مفاجئة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Vatten kan minska greppet och regn kan försämra sikten.",
    "explanationAr": "قد يقلل الماء التماسك وقد يضعف المطر الرؤية."
  },
  {
    "id": 3021,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad bör du göra om du börjar tappa koncentrationen på en lång resa?",
    "questionAr": "ماذا تفعل إذا بدأت تفقد التركيز في رحلة طويلة؟",
    "options": [
      {
        "sv": "Titta bort från vägen för att kontrollera något",
        "ar": "إبعاد النظر عن الطريق للتحقق من شيء"
      },
      {
        "sv": "Fortsätta i samma fart oavsett förhållanden",
        "ar": "الاستمرار بالسرعة نفسها مهما كانت الظروف"
      },
      {
        "sv": "Räkna med att andra alltid upptäcker dig",
        "ar": "افتراض أن الآخرين يلاحظونك دائماً"
      },
      {
        "sv": "Ta en paus på en säker plats",
        "ar": "أخذ استراحة في مكان آمن"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Planerade pauser kan motverka trötthet och förbättra uppmärksamheten.",
    "explanationAr": "قد تساعد الاستراحات المخطط لها على مقاومة التعب وتحسين الانتباه."
  },
  {
    "id": 3022,
    "category": "Trafiksäkerhet",
    "questionSv": "Varför är det farligt att använda telefonen medan du kör?",
    "questionAr": "لماذا يعد استخدام الهاتف أثناء القيادة خطيراً؟",
    "options": [
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنية السيارة تحل كل المواقف"
      },
      {
        "sv": "Köra närmare andra fordon",
        "ar": "القيادة أقرب إلى المركبات الأخرى"
      },
      {
        "sv": "Det tar uppmärksamhet från vägen och trafiken",
        "ar": "لأنه يصرف الانتباه عن الطريق وحركة المرور"
      },
      {
        "sv": "Ignorera trötthet och försöka hålla ut",
        "ar": "تجاهل التعب ومحاولة الاستمرار"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Distraktion kan göra att du missar signaler, faror eller förändringar i trafiken.",
    "explanationAr": "قد يجعلك التشتت تفوت الإشارات أو المخاطر أو تغيرات المرور."
  },
  {
    "id": 3023,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad ska du tänka på när du passerar hästar på vägen?",
    "questionAr": "ما الذي ينبغي مراعاته عند المرور بجانب خيول على الطريق؟",
    "options": [
      {
        "sv": "Sänka farten och passera lugnt med stort avstånd",
        "ar": "تخفيف السرعة والمرور بهدوء مع ترك مسافة كبيرة"
      },
      {
        "sv": "Öka farten för att snabbt passera risken",
        "ar": "زيادة السرعة لتجاوز الخطر بسرعة"
      },
      {
        "sv": "Göra plötsliga styr- och bromsrörelser",
        "ar": "إجراء حركات توجيه وفرملة مفاجئة"
      },
      {
        "sv": "Titta bort från vägen för att kontrollera något",
        "ar": "إبعاد النظر عن الطريق للتحقق من شيء"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Hästar kan reagera plötsligt på ljud och närhet; visa hänsyn.",
    "explanationAr": "قد تتفاعل الخيول فجأة مع الصوت والقرب؛ أظهر المراعاة."
  },
  {
    "id": 3024,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad bör du göra när sikten skyms av snö som blåser över vägen?",
    "questionAr": "ماذا تفعل عندما تحجب الثلوج المتطايرة الرؤية؟",
    "options": [
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنية السيارة تحل كل المواقف"
      },
      {
        "sv": "Sänka farten kraftigt och stanna säkert om sikten blir otillräcklig",
        "ar": "تخفيف السرعة كثيراً والتوقف بأمان إذا أصبحت الرؤية غير كافية"
      },
      {
        "sv": "Räkna med att andra alltid upptäcker dig",
        "ar": "افتراض أن الآخرين يلاحظونك دائماً"
      },
      {
        "sv": "Fortsätta i samma fart oavsett förhållanden",
        "ar": "الاستمرار بالسرعة نفسها مهما كانت الظروف"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Fortsätt inte i en hastighet som gör att du inte kan upptäcka hinder i tid.",
    "explanationAr": "لا تواصل بسرعة تمنعك من اكتشاف العوائق في الوقت المناسب."
  },
  {
    "id": 3025,
    "category": "Trafiksäkerhet",
    "questionSv": "Varför är det viktigt att kontrollera döda vinkeln?",
    "questionAr": "لماذا من المهم فحص المنطقة العمياء؟",
    "options": [
      {
        "sv": "Öka farten för att snabbt passera risken",
        "ar": "زيادة السرعة لتجاوز الخطر بسرعة"
      },
      {
        "sv": "Köra närmare andra fordon",
        "ar": "القيادة أقرب إلى المركبات الأخرى"
      },
      {
        "sv": "Ignorera trötthet och försöka hålla ut",
        "ar": "تجاهل التعب ومحاولة الاستمرار"
      },
      {
        "sv": "En annan trafikant kan finnas där utan att synas i speglarna",
        "ar": "قد يوجد مستخدم طريق آخر هناك دون أن يظهر في المرايا"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "En snabb kontroll över axeln kan avslöja trafikanter som speglarna inte visar.",
    "explanationAr": "قد يكشف النظر السريع فوق الكتف مستخدمي الطريق الذين لا تظهرهم المرايا."
  },
  {
    "id": 3026,
    "category": "Trafiksäkerhet",
    "questionSv": "Hur bör du agera om bilen bakom ligger mycket nära?",
    "questionAr": "كيف تتصرف إذا كانت السيارة خلفك قريبة جداً؟",
    "options": [
      {
        "sv": "Behålla lugnet, öka avståndet framåt och undvika plötsliga inbromsningar",
        "ar": "الحفاظ على الهدوء وزيادة المسافة أمامك وتجنب الفرملة المفاجئة"
      },
      {
        "sv": "Fortsätta i samma fart oavsett förhållanden",
        "ar": "الاستمرار بالسرعة نفسها مهما كانت الظروف"
      },
      {
        "sv": "Titta bort från vägen för att kontrollera något",
        "ar": "إبعاد النظر عن الطريق للتحقق من شيء"
      },
      {
        "sv": "Göra plötsliga styr- och bromsrörelser",
        "ar": "إجراء حركات توجيه وفرملة مفاجئة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Skapa större marginal framåt så att du kan bromsa mjukt vid behov.",
    "explanationAr": "اصنع هامشاً أكبر أمامك كي تتمكن من الفرملة بسلاسة عند الحاجة."
  },
  {
    "id": 3027,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad är särskilt viktigt vid körning nära äldre eller personer med nedsatt rörlighet?",
    "questionAr": "ما المهم خصوصاً عند القيادة قرب كبار السن أو ذوي الحركة المحدودة؟",
    "options": [
      {
        "sv": "Ge extra tid och utrymme och var beredd att stanna",
        "ar": "إعطاء وقت ومساحة إضافيين والاستعداد للتوقف"
      },
      {
        "sv": "Köra närmare andra fordon",
        "ar": "القيادة أقرب إلى المركبات الأخرى"
      },
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنية السيارة تحل كل المواقف"
      },
      {
        "sv": "Räkna med att andra alltid upptäcker dig",
        "ar": "افتراض أن الآخرين يلاحظونك دائماً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Alla gående kan behöva olika lång tid för att korsa vägen.",
    "explanationAr": "قد يحتاج المشاة إلى أوقات مختلفة لعبور الطريق."
  },
  {
    "id": 3028,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad gör du om du märker att en förare framför kör osäkert?",
    "questionAr": "ماذا تفعل إذا لاحظت أن السائق أمامك يقود بطريقة غير آمنة؟",
    "options": [
      {
        "sv": "Öka farten för att snabbt passera risken",
        "ar": "زيادة السرعة لتجاوز الخطر بسرعة"
      },
      {
        "sv": "Göra plötsliga styr- och bromsrörelser",
        "ar": "إجراء حركات توجيه وفرملة مفاجئة"
      },
      {
        "sv": "Öka avståndet och undvika att pressa eller provocera föraren",
        "ar": "زيادة المسافة وتجنب الضغط على السائق أو استفزازه"
      },
      {
        "sv": "Ignorera trötthet och försöka hålla ut",
        "ar": "تجاهل التعب ومحاولة الاستمرار"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Större avstånd ger tid att reagera om fordonet gör oväntade manövrer.",
    "explanationAr": "توفر المسافة الأكبر وقتاً للاستجابة إذا قام السائق بمناورة مفاجئة."
  },
  {
    "id": 3029,
    "category": "Trafiksäkerhet",
    "questionSv": "Varför är hög hastighet extra riskfylld i en kurva?",
    "questionAr": "لماذا تكون السرعة العالية خطرة بشكل خاص في المنعطف؟",
    "options": [
      {
        "sv": "Fortsätta i samma fart oavsett förhållanden",
        "ar": "الاستمرار بالسرعة نفسها مهما كانت الظروف"
      },
      {
        "sv": "Räkna med att andra alltid upptäcker dig",
        "ar": "افتراض أن الآخرين يلاحظونك دائماً"
      },
      {
        "sv": "Greppet kan inte räcka till för att hålla bilen på rätt bana",
        "ar": "قد لا يكون التماسك كافياً لإبقاء السيارة على المسار الصحيح"
      },
      {
        "sv": "Titta bort från vägen för att kontrollera något",
        "ar": "إبعاد النظر عن الطريق للتحقق من شيء"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Sänk farten före kurvan i stället för att bromsa hårt mitt i den.",
    "explanationAr": "خفف السرعة قبل المنعطف بدلاً من الفرملة الشديدة داخله."
  },
  {
    "id": 3030,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad ska du göra om du blir bländad av lågt stående sol?",
    "questionAr": "ماذا تفعل إذا أبهرتك الشمس المنخفضة؟",
    "options": [
      {
        "sv": "Köra närmare andra fordon",
        "ar": "القيادة أقرب إلى المركبات الأخرى"
      },
      {
        "sv": "Sänka farten, hålla avstånd och använda solskydd vid behov",
        "ar": "تخفيف السرعة وترك مسافة واستخدام حاجب الشمس عند الحاجة"
      },
      {
        "sv": "Ignorera trötthet och försöka hålla ut",
        "ar": "تجاهل التعب ومحاولة الاستمرار"
      },
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنية السيارة تحل كل المواقف"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Bländning kan dölja fotgängare, signaler och hinder.",
    "explanationAr": "قد يخفي الوهج المشاة والإشارات والعوائق."
  },
  {
    "id": 3031,
    "category": "Trafiksäkerhet",
    "questionSv": "Varför kan en bil med släp vara mer riskfylld vid sidvind?",
    "questionAr": "لماذا قد تكون السيارة مع مقطورة أكثر عرضة للخطر في الرياح الجانبية؟",
    "options": [
      {
        "sv": "Göra plötsliga styr- och bromsrörelser",
        "ar": "إجراء حركات توجيه وفرملة مفاجئة"
      },
      {
        "sv": "Släpet kan påverkas av vinden och göra ekipaget mindre stabilt",
        "ar": "قد تتأثر المقطورة بالرياح وتجعل المجموعة أقل ثباتاً"
      },
      {
        "sv": "Öka farten för att snabbt passera risken",
        "ar": "زيادة السرعة لتجاوز الخطر بسرعة"
      },
      {
        "sv": "Titta bort från vägen för att kontrollera något",
        "ar": "إبعاد النظر عن الطريق للتحقق من شيء"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Sänk farten och håll ett stadigt grepp när vinden påverkar fordonet.",
    "explanationAr": "خفف السرعة وحافظ على تحكم ثابت عندما تؤثر الرياح في المركبة."
  },
  {
    "id": 3032,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad är säkrast när du närmar dig en olycka med räddningsfordon på plats?",
    "questionAr": "ما التصرف الأكثر أماناً عند الاقتراب من حادث توجد فيه مركبات إنقاذ؟",
    "options": [
      {
        "sv": "Räkna med att andra alltid upptäcker dig",
        "ar": "افتراض أن الآخرين يلاحظونك دائماً"
      },
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنية السيارة تحل كل المواقف"
      },
      {
        "sv": "Sänka farten, följa anvisningar och inte distrahera räddningspersonalen",
        "ar": "تخفيف السرعة واتباع التعليمات وعدم تشتيت فرق الإنقاذ"
      },
      {
        "sv": "Fortsätta i samma fart oavsett förhållanden",
        "ar": "الاستمرار بالسرعة نفسها مهما كانت الظروف"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Räddningspersonal behöver arbetsutrymme och trafiken kan ändras snabbt.",
    "explanationAr": "تحتاج فرق الإنقاذ إلى مساحة عمل وقد تتغير حركة المرور بسرعة."
  },
  {
    "id": 3033,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad ska du tänka på när du kör på en väg med växlande grepp, till exempel isfläckar?",
    "questionAr": "ما الذي ينبغي الانتباه إليه على طريق يتغير التماسك فيه، مثل بقع الجليد؟",
    "options": [
      {
        "sv": "Köra närmare andra fordon",
        "ar": "القيادة أقرب إلى المركبات الأخرى"
      },
      {
        "sv": "Köra mjukt och undvika plötsliga förändringar av fart eller riktning",
        "ar": "القيادة بسلاسة وتجنب التغيرات المفاجئة في السرعة أو الاتجاه"
      },
      {
        "sv": "Ignorera trötthet och försöka hålla ut",
        "ar": "تجاهل التعب ومحاولة الاستمرار"
      },
      {
        "sv": "Öka farten för att snabbt passera risken",
        "ar": "زيادة السرعة لتجاوز الخطر بسرعة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Greppet kan variera mellan vägpartier; mjuka rörelser minskar risken att tappa kontrollen.",
    "explanationAr": "قد يختلف التماسك بين أجزاء الطريق؛ الحركات السلسة تقلل خطر فقدان السيطرة."
  },
  {
    "id": 3034,
    "category": "Trafiksäkerhet",
    "questionSv": "Varför ska du inte lita på att fyrhjulsdrift gör halt väglag ofarligt?",
    "questionAr": "لماذا لا ينبغي الاعتماد على الدفع الرباعي باعتباره يجعل الطريق الزلق آمناً؟",
    "options": [
      {
        "sv": "Fortsätta i samma fart oavsett förhållanden",
        "ar": "الاستمرار بالسرعة نفسها مهما كانت الظروف"
      },
      {
        "sv": "Fyrhjulsdrift förbättrar inte automatiskt bromsgrepp eller sidgrepp",
        "ar": "الدفع الرباعي لا يحسن تلقائياً تماسك الفرملة أو التماسك الجانبي"
      },
      {
        "sv": "Göra plötsliga styr- och bromsrörelser",
        "ar": "إجراء حركات توجيه وفرملة مفاجئة"
      },
      {
        "sv": "Titta bort från vägen för att kontrollera något",
        "ar": "إبعاد النظر عن الطريق للتحقق من شيء"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Alla fordon behöver anpassad hastighet och tillräckligt avstånd på halt underlag.",
    "explanationAr": "تحتاج جميع المركبات إلى سرعة مناسبة ومسافة كافية على الأسطح الزلقة."
  },
  {
    "id": 3035,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad bör du göra om ett djur plötsligt springer ut framför bilen?",
    "questionAr": "ماذا تفعل إذا اندفع حيوان فجأة أمام السيارة؟",
    "options": [
      {
        "sv": "Köra närmare andra fordon",
        "ar": "القيادة أقرب إلى المركبات الأخرى"
      },
      {
        "sv": "Bromsa kontrollerat och håll bilen under kontroll",
        "ar": "الفرملة بشكل مسيطر عليه والحفاظ على التحكم بالسيارة"
      },
      {
        "sv": "Räkna med att andra alltid upptäcker dig",
        "ar": "افتراض أن الآخرين يلاحظونك دائماً"
      },
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنية السيارة تحل كل المواقف"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Undvik en panikmanöver som kan leda till kollision med mötande trafik eller hinder.",
    "explanationAr": "تجنب مناورة هلع قد تؤدي إلى اصطدام بحركة مقابلة أو عائق."
  },
  {
    "id": 3036,
    "category": "Trafiksäkerhet",
    "questionSv": "Varför ska alla i bilen använda bälte även när airbag finns?",
    "questionAr": "لماذا يجب على الجميع استخدام الحزام حتى مع وجود وسادة هوائية؟",
    "options": [
      {
        "sv": "Ignorera trötthet och försöka hålla ut",
        "ar": "تجاهل التعب ومحاولة الاستمرار"
      },
      {
        "sv": "Göra plötsliga styr- och bromsrörelser",
        "ar": "إجراء حركات توجيه وفرملة مفاجئة"
      },
      {
        "sv": "Airbagen är ett komplement och ersätter inte bilbältet",
        "ar": "الوسادة الهوائية عامل مساعد ولا تحل محل حزام الأمان"
      },
      {
        "sv": "Öka farten för att snabbt passera risken",
        "ar": "زيادة السرعة لتجاوز الخطر بسرعة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Bilbältet håller kroppen i rätt position och minskar skaderisken.",
    "explanationAr": "يثبت الحزام الجسم في الموضع المناسب ويقلل خطر الإصابة."
  },
  {
    "id": 3037,
    "category": "Trafiksäkerhet",
    "questionSv": "Hur kan du minska risken för påkörning bakifrån?",
    "questionAr": "كيف تقلل خطر الاصطدام بك من الخلف؟",
    "options": [
      {
        "sv": "Titta bort från vägen för att kontrollera något",
        "ar": "إبعاد النظر عن الطريق للتحقق من شيء"
      },
      {
        "sv": "Fortsätta i samma fart oavsett förhållanden",
        "ar": "الاستمرار بالسرعة نفسها مهما كانت الظروف"
      },
      {
        "sv": "Signalera i god tid och undvika onödigt hårda inbromsningar",
        "ar": "استخدام الإشارة مبكراً وتجنب الفرملة القوية غير الضرورية"
      },
      {
        "sv": "Räkna med att andra alltid upptäcker dig",
        "ar": "افتراض أن الآخرين يلاحظونك دائماً"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Tydliga signaler och planerad körning hjälper bakomvarande att reagera.",
    "explanationAr": "تساعد الإشارات الواضحة والقيادة المخططة السائقين خلفك على الاستجابة."
  },
  {
    "id": 3038,
    "category": "Trafiksäkerhet",
    "questionSv": "Vad bör du göra om sikten är så dålig att du inte kan köra säkert?",
    "questionAr": "ماذا تفعل إذا كانت الرؤية سيئة لدرجة لا تسمح بالقيادة بأمان؟",
    "options": [
      {
        "sv": "Ignorera trötthet och försöka hålla ut",
        "ar": "تجاهل التعب ومحاولة الاستمرار"
      },
      {
        "sv": "Köra närmare andra fordon",
        "ar": "القيادة أقرب إلى المركبات الأخرى"
      },
      {
        "sv": "Sakta ner ytterligare eller stanna på en säker plats",
        "ar": "تخفيف السرعة أكثر أو التوقف في مكان آمن"
      },
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنية السيارة تحل كل المواقف"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Du ska kunna upptäcka hinder och stanna inom den sträcka du kan överblicka.",
    "explanationAr": "يجب أن تتمكن من اكتشاف العوائق والتوقف ضمن المسافة المرئية."
  },
  {
    "id": 3039,
    "category": "Trafiksäkerhet",
    "questionSv": "Hur bör du närma dig vägarbetare som arbetar nära körbanan?",
    "questionAr": "كيف ينبغي أن تقترب من عمال الطريق الذين يعملون قرب مسار القيادة؟",
    "options": [
      {
        "sv": "Göra plötsliga styr- och bromsrörelser",
        "ar": "إجراء حركات توجيه وفرملة مفاجئة"
      },
      {
        "sv": "Öka farten för att snabbt passera risken",
        "ar": "زيادة السرعة لتجاوز الخطر بسرعة"
      },
      {
        "sv": "Titta bort från vägen för att kontrollera något",
        "ar": "إبعاد النظر عن الطريق للتحقق من شيء"
      },
      {
        "sv": "Sänka farten tydligt och följa tillfälliga anvisningar",
        "ar": "تخفيف السرعة بوضوح واتباع التعليمات المؤقتة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Vägarbete innebär att människor kan befinna sig nära trafiken och att körvägen kan ändras.",
    "explanationAr": "تعني أعمال الطريق أن أشخاصاً قد يكونون قريبين من حركة المرور وأن مسار القيادة قد يتغير."
  },
  {
    "id": 3040,
    "category": "Trafiksäkerhet",
    "questionSv": "Varför är det viktigt att anpassa avståndet när du kör bakom en motorcykel?",
    "questionAr": "لماذا من المهم تعديل المسافة عند القيادة خلف دراجة نارية؟",
    "options": [
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنية السيارة تحل كل المواقف"
      },
      {
        "sv": "Räkna med att andra alltid upptäcker dig",
        "ar": "افتراض أن الآخرين يلاحظونك دائماً"
      },
      {
        "sv": "För att ge utrymme för oväntade rörelser och säker bromsning",
        "ar": "لإتاحة مساحة للحركات المفاجئة والفرملة الآمنة"
      },
      {
        "sv": "Fortsätta i samma fart oavsett förhållanden",
        "ar": "الاستمرار بالسرعة نفسها مهما كانت الظروف"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Håll ett avstånd som ger tid att reagera om motorcyklisten bromsar eller väjer.",
    "explanationAr": "اترك مسافة تمنحك وقتاً للاستجابة إذا فرمل سائق الدراجة أو انحرف لتفادي شيء."
  },
  {
    "id": 4001,
    "category": "Miljö",
    "questionSv": "Hur kan planerad körning minska bränsleförbrukningen?",
    "questionAr": "كيف يمكن للقيادة المخططة أن تقلل استهلاك الوقود؟",
    "options": [
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حركة بلا حاجة"
      },
      {
        "sv": "Genom att undvika onödiga stopp, accelerationer och omvägar",
        "ar": "بتجنب التوقفات والتسارعات والطرق الالتفافية غير الضرورية"
      },
      {
        "sv": "Välja omvägar utan anledning",
        "ar": "اختيار طرق التفافية دون سبب"
      },
      {
        "sv": "Lämna bilvätskor på marken",
        "ar": "ترك سوائل السيارة على الأرض"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Framförhållning ger jämnare körning och kan minska energibehovet.",
    "explanationAr": "التخطيط المسبق يجعل القيادة أكثر سلاسة وقد يقلل الحاجة إلى الطاقة."
  },
  {
    "id": 4002,
    "category": "Miljö",
    "questionSv": "Vilket körsätt minskar ofta bränsleförbrukningen?",
    "questionAr": "أي أسلوب قيادة يقلل غالباً استهلاك الوقود؟",
    "options": [
      {
        "sv": "Bromsa sent och hårt i varje situation",
        "ar": "الفرملة المتأخرة والقوية في كل موقف"
      },
      {
        "sv": "Jämn fart och mjuka accelerationer",
        "ar": "سرعة منتظمة وتسارع سلس"
      },
      {
        "sv": "Transportera tung last som inte behövs",
        "ar": "نقل حمولة ثقيلة غير ضرورية"
      },
      {
        "sv": "Accelerera kraftigt mellan varje stopp",
        "ar": "التسارع بقوة بين كل توقف وآخر"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Undvik kraftiga accelerationer och onödiga inbromsningar.",
    "explanationAr": "تجنب التسارع القوي والفرملة غير الضرورية."
  },
  {
    "id": 4003,
    "category": "Miljö",
    "questionSv": "Varför är onödig tomgångskörning dålig?",
    "questionAr": "لماذا يعد تشغيل المحرك دون حركة بلا حاجة أمراً سيئاً؟",
    "options": [
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حركة بلا حاجة"
      },
      {
        "sv": "Köra fortare än förhållandena tillåter",
        "ar": "القيادة بسرعة أعلى مما تسمح به الظروف"
      },
      {
        "sv": "Den förbrukar bränsle och skapar utsläpp utan att bilen förflyttas",
        "ar": "تستهلك الوقود وتنتج انبعاثات دون أن تتحرك السيارة"
      },
      {
        "sv": "Ignorera däcktryck och service",
        "ar": "تجاهل ضغط الإطارات والصيانة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Stäng av motorn när det är lämpligt och säkert och följ gällande regler.",
    "explanationAr": "أطفئ المحرك عندما يكون ذلك مناسباً وآمناً واتبع القواعد السارية."
  },
  {
    "id": 4004,
    "category": "Miljö",
    "questionSv": "Hur kan rätt däcktryck påverka bränsleförbrukningen?",
    "questionAr": "كيف يؤثر ضغط الإطارات الصحيح في استهلاك الوقود؟",
    "options": [
      {
        "sv": "Det kan minska rullmotståndet och energibehovet",
        "ar": "يمكن أن يقلل مقاومة التدحرج والحاجة إلى الطاقة"
      },
      {
        "sv": "Välja omvägar utan anledning",
        "ar": "اختيار طرق التفافية دون سبب"
      },
      {
        "sv": "Lämna bilvätskor på marken",
        "ar": "ترك سوائل السيارة على الأرض"
      },
      {
        "sv": "Transportera tung last som inte behövs",
        "ar": "نقل حمولة ثقيلة غير ضرورية"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Kontrollera trycket enligt bilens rekommendationer.",
    "explanationAr": "افحص الضغط وفق توصيات السيارة."
  },
  {
    "id": 4005,
    "category": "Miljö",
    "questionSv": "Varför kan onödig last öka bränsleförbrukningen?",
    "questionAr": "لماذا يمكن أن تزيد الحمولة غير الضرورية استهلاك الوقود؟",
    "options": [
      {
        "sv": "Ignorera däcktryck och service",
        "ar": "تجاهل ضغط الإطارات والصيانة"
      },
      {
        "sv": "Bilen behöver mer energi för att flytta extra vikt",
        "ar": "تحتاج السيارة إلى طاقة أكبر لتحريك الوزن الإضافي"
      },
      {
        "sv": "Accelerera kraftigt mellan varje stopp",
        "ar": "التسارع بقوة بين كل توقف وآخر"
      },
      {
        "sv": "Bromsa sent och hårt i varje situation",
        "ar": "الفرملة المتأخرة والقوية في كل موقف"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Ta bort saker du inte behöver transportera.",
    "explanationAr": "أزل الأشياء التي لا تحتاج إلى نقلها."
  },
  {
    "id": 4006,
    "category": "Miljö",
    "questionSv": "Hur kan en takbox påverka bilen när du kör fortare?",
    "questionAr": "كيف يمكن لصندوق السقف أن يؤثر في السيارة عند السرعات الأعلى؟",
    "options": [
      {
        "sv": "Den ökar luftmotståndet och kan öka förbrukningen",
        "ar": "يزيد مقاومة الهواء وقد يرفع الاستهلاك"
      },
      {
        "sv": "Välja omvägar utan anledning",
        "ar": "اختيار طرق التفافية دون سبب"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حركة بلا حاجة"
      },
      {
        "sv": "Köra fortare än förhållandena tillåter",
        "ar": "القيادة بسرعة أعلى مما تسمح به الظروف"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Ta bort takboxen när den inte behövs.",
    "explanationAr": "أزل صندوق السقف عندما لا تكون بحاجة إليه."
  },
  {
    "id": 4007,
    "category": "Miljö",
    "questionSv": "Varför är det ofta bättre att förutse trafiken än att bromsa sent?",
    "questionAr": "لماذا يكون توقع حركة المرور غالباً أفضل من الفرملة المتأخرة؟",
    "options": [
      {
        "sv": "Transportera tung last som inte behövs",
        "ar": "نقل حمولة ثقيلة غير ضرورية"
      },
      {
        "sv": "Du kan släppa gasen tidigare och köra jämnare",
        "ar": "يمكنك رفع قدمك عن الوقود مبكراً والقيادة بسلاسة أكبر"
      },
      {
        "sv": "Bromsa sent och hårt i varje situation",
        "ar": "الفرملة المتأخرة والقوية في كل موقف"
      },
      {
        "sv": "Lämna bilvätskor på marken",
        "ar": "ترك سوائل السيارة على الأرض"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "God framförhållning minskar onödiga fartförändringar.",
    "explanationAr": "يقلل التوقع الجيد التغيرات غير الضرورية في السرعة."
  },
  {
    "id": 4008,
    "category": "Miljö",
    "questionSv": "Hur bör du använda växlarna för ekonomisk körning i en bil med manuell växellåda?",
    "questionAr": "كيف تستخدم الغيارات للقيادة الاقتصادية في سيارة يدوية؟",
    "options": [
      {
        "sv": "Köra fortare än förhållandena tillåter",
        "ar": "القيادة بسرعة أعلى مما تسمح به الظروف"
      },
      {
        "sv": "Accelerera kraftigt mellan varje stopp",
        "ar": "التسارع بقوة بين كل توقف وآخر"
      },
      {
        "sv": "Ignorera däcktryck och service",
        "ar": "تجاهل ضغط الإطارات والصيانة"
      },
      {
        "sv": "Välja en lämplig växel och undvika onödigt höga varvtal",
        "ar": "اختيار غيار مناسب وتجنب دورات المحرك العالية دون حاجة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Följ bilens rekommendationer och kör inte på ett sätt som belastar motorn olämpligt.",
    "explanationAr": "اتبع توصيات السيارة ولا تقد بطريقة تجهد المحرك بشكل غير مناسب."
  },
  {
    "id": 4009,
    "category": "Miljö",
    "questionSv": "Varför kan många korta resor med kall motor ge högre förbrukning?",
    "questionAr": "لماذا قد تؤدي الرحلات القصيرة الكثيرة والمحرك بارد إلى استهلاك أعلى؟",
    "options": [
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حركة بلا حاجة"
      },
      {
        "sv": "Välja omvägar utan anledning",
        "ar": "اختيار طرق التفافية دون سبب"
      },
      {
        "sv": "Motorn hinner ofta inte nå effektiv arbetstemperatur",
        "ar": "غالباً لا يصل المحرك إلى درجة حرارة التشغيل الفعالة"
      },
      {
        "sv": "Lämna bilvätskor på marken",
        "ar": "ترك سوائل السيارة على الأرض"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Samordna ärenden eller gå och cykla när det passar.",
    "explanationAr": "اجمع المهام في رحلة واحدة أو امشِ أو استخدم الدراجة عندما يناسب ذلك."
  },
  {
    "id": 4010,
    "category": "Miljö",
    "questionSv": "Hur kan samåkning gynna miljön?",
    "questionAr": "كيف يمكن لمشاركة السيارة أن تفيد البيئة؟",
    "options": [
      {
        "sv": "Flera personer kan resa med färre bilar",
        "ar": "يمكن لعدة أشخاص السفر بعدد أقل من السيارات"
      },
      {
        "sv": "Bromsa sent och hårt i varje situation",
        "ar": "الفرملة المتأخرة والقوية في كل موقف"
      },
      {
        "sv": "Accelerera kraftigt mellan varje stopp",
        "ar": "التسارع بقوة بين كل توقف وآخر"
      },
      {
        "sv": "Transportera tung last som inte behövs",
        "ar": "نقل حمولة ثقيلة غير ضرورية"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Färre bilresor kan minska energiåtgång, utsläpp och trängsel.",
    "explanationAr": "قد تقلل الرحلات الأقل عدد المركبات واستهلاك الطاقة والانبعاثات والازدحام."
  },
  {
    "id": 4011,
    "category": "Miljö",
    "questionSv": "När kan kollektivtrafik vara ett miljömässigt bra alternativ?",
    "questionAr": "متى يمكن أن يكون النقل العام خياراً جيداً للبيئة؟",
    "options": [
      {
        "sv": "Köra fortare än förhållandena tillåter",
        "ar": "القيادة بسرعة أعلى مما تسمح به الظروف"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حركة بلا حاجة"
      },
      {
        "sv": "Ignorera däcktryck och service",
        "ar": "تجاهل ضغط الإطارات والصيانة"
      },
      {
        "sv": "När flera resenärer kan ersätta separata bilresor",
        "ar": "عندما يحل عدة ركاب محل رحلات سيارات منفصلة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Buss och tåg kan minska resornas utsläpp per person beroende på beläggning och energislag.",
    "explanationAr": "قد تقلل الحافلات والقطارات الانبعاثات لكل شخص وفق الإشغال ومصدر الطاقة."
  },
  {
    "id": 4012,
    "category": "Miljö",
    "questionSv": "Varför är det bra att undvika onödiga accelerationer mot rött ljus?",
    "questionAr": "لماذا من الجيد تجنب التسارع غير الضروري باتجاه إشارة حمراء؟",
    "options": [
      {
        "sv": "Du slösar energi när du snart måste bromsa igen",
        "ar": "تهدر الطاقة عندما تضطر إلى الفرملة بعد قليل"
      },
      {
        "sv": "Transportera tung last som inte behövs",
        "ar": "نقل حمولة ثقيلة غير ضرورية"
      },
      {
        "sv": "Lämna bilvätskor på marken",
        "ar": "ترك سوائل السيارة على الأرض"
      },
      {
        "sv": "Välja omvägar utan anledning",
        "ar": "اختيار طرق التفافية دون سبب"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Läs trafiken långt fram och anpassa gasen i god tid.",
    "explanationAr": "راقب حركة المرور أمامك وعدّل دواسة الوقود مبكراً."
  },
  {
    "id": 4013,
    "category": "Miljö",
    "questionSv": "Hur påverkar hög hastighet ofta energiförbrukningen?",
    "questionAr": "كيف تؤثر السرعة العالية غالباً في استهلاك الطاقة؟",
    "options": [
      {
        "sv": "Ignorera däcktryck och service",
        "ar": "تجاهل ضغط الإطارات والصيانة"
      },
      {
        "sv": "Accelerera kraftigt mellan varje stopp",
        "ar": "التسارع بقوة بين كل توقف وآخر"
      },
      {
        "sv": "Bromsa sent och hårt i varje situation",
        "ar": "الفرملة المتأخرة والقوية في كل موقف"
      },
      {
        "sv": "Luftmotståndet ökar och energibehovet blir större",
        "ar": "تزداد مقاومة الهواء وتكبر الحاجة إلى الطاقة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "En måttlig, anpassad hastighet kan minska förbrukningen och förbättra säkerheten.",
    "explanationAr": "قد تقلل السرعة المعتدلة والمناسبة الاستهلاك وتحسن السلامة."
  },
  {
    "id": 4014,
    "category": "Miljö",
    "questionSv": "Varför ska bilen underhållas enligt tillverkarens rekommendationer?",
    "questionAr": "لماذا يجب صيانة السيارة وفق توصيات الشركة المصنعة؟",
    "options": [
      {
        "sv": "Köra fortare än förhållandena tillåter",
        "ar": "القيادة بسرعة أعلى مما تسمح به الظروف"
      },
      {
        "sv": "För att den ska fungera effektivt och säkert",
        "ar": "لكي تعمل بكفاءة وأمان"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حركة بلا حاجة"
      },
      {
        "sv": "Välja omvägar utan anledning",
        "ar": "اختيار طرق التفافية دون سبب"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Rätt underhåll kan upptäcka fel och hjälpa bilen att fungera som avsett.",
    "explanationAr": "قد تكشف الصيانة الصحيحة الأعطال وتساعد السيارة على العمل كما ينبغي."
  },
  {
    "id": 4015,
    "category": "Miljö",
    "questionSv": "Vad är en möjlig miljöfördel med att gå eller cykla korta sträckor?",
    "questionAr": "ما الفائدة البيئية المحتملة من المشي أو ركوب الدراجة للمسافات القصيرة؟",
    "options": [
      {
        "sv": "Transportera tung last som inte behövs",
        "ar": "نقل حمولة ثقيلة غير ضرورية"
      },
      {
        "sv": "Du undviker utsläpp från en bilresa",
        "ar": "تتجنب الانبعاثات الناتجة عن رحلة بالسيارة"
      },
      {
        "sv": "Lämna bilvätskor på marken",
        "ar": "ترك سوائل السيارة على الأرض"
      },
      {
        "sv": "Bromsa sent och hårt i varje situation",
        "ar": "الفرملة المتأخرة والقوية في كل موقف"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "För korta resor kan gång eller cykling vara alternativ om det är säkert och möjligt.",
    "explanationAr": "قد يكون المشي أو ركوب الدراجة بديلاً للرحلات القصيرة عندما يكون ذلك آمناً وممكناً."
  },
  {
    "id": 4016,
    "category": "Miljö",
    "questionSv": "Varför är det bra att samla flera ärenden i en resa?",
    "questionAr": "لماذا من الجيد جمع عدة مهام في رحلة واحدة؟",
    "options": [
      {
        "sv": "Ignorera däcktryck och service",
        "ar": "تجاهل ضغط الإطارات والصيانة"
      },
      {
        "sv": "Det kan minska det totala antalet körda kilometer",
        "ar": "قد يقلل إجمالي الكيلومترات المقطوعة"
      },
      {
        "sv": "Köra fortare än förhållandena tillåter",
        "ar": "القيادة بسرعة أعلى مما تسمح به الظروف"
      },
      {
        "sv": "Accelerera kraftigt mellan varje stopp",
        "ar": "التسارع بقوة بين كل توقف وآخر"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Färre separata resor kan minska bränsleförbrukning och utsläpp.",
    "explanationAr": "قد تقلل الرحلات المنفصلة الأقل من استهلاك الوقود والانبعاثات."
  },
  {
    "id": 4017,
    "category": "Miljö",
    "questionSv": "Hur påverkar lågt däcktryck ofta bilens rullmotstånd?",
    "questionAr": "كيف يؤثر ضغط الإطارات المنخفض غالباً على مقاومة التدحرج؟",
    "options": [
      {
        "sv": "Det kan öka rullmotståndet och förbrukningen",
        "ar": "قد يزيد مقاومة التدحرج والاستهلاك"
      },
      {
        "sv": "Lämna bilvätskor på marken",
        "ar": "ترك سوائل السيارة على الأرض"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حركة بلا حاجة"
      },
      {
        "sv": "Välja omvägar utan anledning",
        "ar": "اختيار طرق التفافية دون سبب"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Kontrollera däcktrycket regelbundet när däcken är kalla enligt instruktionerna.",
    "explanationAr": "افحص ضغط الإطارات بانتظام وهي باردة وفق التعليمات."
  },
  {
    "id": 4018,
    "category": "Miljö",
    "questionSv": "Varför kan hårda inbromsningar vara mindre energieffektiva?",
    "questionAr": "لماذا قد تكون الفرملة القوية أقل كفاءة في استهلاك الطاقة؟",
    "options": [
      {
        "sv": "Bromsa sent och hårt i varje situation",
        "ar": "الفرملة المتأخرة والقوية في كل موقف"
      },
      {
        "sv": "Transportera tung last som inte behövs",
        "ar": "نقل حمولة ثقيلة غير ضرورية"
      },
      {
        "sv": "Rörelseenergi går förlorad i stället för att körningen planeras jämnare",
        "ar": "تُفقد طاقة الحركة بدلاً من التخطيط لقيادة أكثر سلاسة"
      },
      {
        "sv": "Accelerera kraftigt mellan varje stopp",
        "ar": "التسارع بقوة بين كل توقف وآخر"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Håll uppsikt och lätta på gasen i god tid när trafiken saktar in.",
    "explanationAr": "راقب الطريق وارفع قدمك عن الوقود مبكراً عندما تخف سرعة المرور."
  },
  {
    "id": 4019,
    "category": "Miljö",
    "questionSv": "Vad är viktigt när du väljer en alternativ bränsle- eller drivlina?",
    "questionAr": "ما المهم عند اختيار نوع وقود أو نظام دفع بديل؟",
    "options": [
      {
        "sv": "Se till hela användningen, energikällan och bilens behov",
        "ar": "النظر إلى الاستخدام الكامل ومصدر الطاقة واحتياجات السيارة"
      },
      {
        "sv": "Ignorera däcktryck och service",
        "ar": "تجاهل ضغط الإطارات والصيانة"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حركة بلا حاجة"
      },
      {
        "sv": "Köra fortare än förhållandena tillåter",
        "ar": "القيادة بسرعة أعلى مما تسمح به الظروف"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Miljöpåverkan beror bland annat på energikälla, tillverkning och hur bilen används.",
    "explanationAr": "يتأثر الأثر البيئي بمصدر الطاقة والتصنيع وطريقة استخدام السيارة."
  },
  {
    "id": 4020,
    "category": "Miljö",
    "questionSv": "Varför ska spillolja och bilvätskor inte hällas i dagvattenbrunnar?",
    "questionAr": "لماذا لا ينبغي سكب الزيت والسوائل المستخدمة في مصارف مياه الأمطار؟",
    "options": [
      {
        "sv": "Transportera tung last som inte behövs",
        "ar": "نقل حمولة ثقيلة غير ضرورية"
      },
      {
        "sv": "De kan förorena vatten och mark",
        "ar": "قد تلوث المياه والتربة"
      },
      {
        "sv": "Lämna bilvätskor på marken",
        "ar": "ترك سوائل السيارة على الأرض"
      },
      {
        "sv": "Välja omvägar utan anledning",
        "ar": "اختيار طرق التفافية دون سبب"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Lämna farliga vätskor till rätt insamling eller återvinning.",
    "explanationAr": "سلّم السوائل الخطرة إلى جهة الجمع أو إعادة التدوير المناسبة."
  },
  {
    "id": 4021,
    "category": "Miljö",
    "questionSv": "Hur kan rätt motorolja och rätt service bidra till effektiv drift?",
    "questionAr": "كيف يمكن للزيت المناسب والصيانة الصحيحة أن يسهما في التشغيل الفعال؟",
    "options": [
      {
        "sv": "Ignorera däcktryck och service",
        "ar": "تجاهل ضغط الإطارات والصيانة"
      },
      {
        "sv": "Bromsa sent och hårt i varje situation",
        "ar": "الفرملة المتأخرة والقوية في كل موقف"
      },
      {
        "sv": "Accelerera kraftigt mellan varje stopp",
        "ar": "التسارع بقوة بين كل توقف وآخر"
      },
      {
        "sv": "De hjälper motorn att fungera enligt tillverkarens specifikationer",
        "ar": "يساعدان المحرك على العمل وفق مواصفات الشركة المصنعة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Använd rätt produkter och följ serviceintervallen i instruktionsboken.",
    "explanationAr": "استخدم المنتجات الصحيحة واتبع فترات الصيانة في دليل السيارة."
  },
  {
    "id": 4022,
    "category": "Miljö",
    "questionSv": "Varför kan en felaktig hjulinställning påverka miljön?",
    "questionAr": "لماذا قد يؤثر ضبط العجلات بشكل خاطئ في البيئة؟",
    "options": [
      {
        "sv": "Välja omvägar utan anledning",
        "ar": "اختيار طرق التفافية دون سبب"
      },
      {
        "sv": "Köra fortare än förhållandena tillåter",
        "ar": "القيادة بسرعة أعلى مما تسمح به الظروف"
      },
      {
        "sv": "Den kan öka däckslitage och rullmotstånd",
        "ar": "قد يزيد تآكل الإطارات ومقاومة التدحرج"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حركة بلا حاجة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Låt kontrollera bilen om däcken slits ojämnt eller bilen drar åt sidan.",
    "explanationAr": "افحص السيارة إذا تآكلت الإطارات بشكل غير متساوٍ أو انحرفت السيارة إلى جانب."
  },
  {
    "id": 4023,
    "category": "Miljö",
    "questionSv": "Hur kan du minska buller när du kör i ett bostadsområde?",
    "questionAr": "كيف تقلل الضوضاء عند القيادة في منطقة سكنية؟",
    "options": [
      {
        "sv": "Transportera tung last som inte behövs",
        "ar": "نقل حمولة ثقيلة غير ضرورية"
      },
      {
        "sv": "Köra mjukt och undvika onödiga accelerationer",
        "ar": "القيادة بسلاسة وتجنب التسارع غير الضروري"
      },
      {
        "sv": "Lämna bilvätskor på marken",
        "ar": "ترك سوائل السيارة على الأرض"
      },
      {
        "sv": "Bromsa sent och hårt i varje situation",
        "ar": "الفرملة المتأخرة والقوية في كل موقف"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Lugn körning och ett väl fungerande avgassystem minskar störningar.",
    "explanationAr": "تقلل القيادة الهادئة ونظام العادم السليم الإزعاج."
  },
  {
    "id": 4024,
    "category": "Miljö",
    "questionSv": "Vad bör du tänka på när du använder klimatanläggningen?",
    "questionAr": "ما الذي ينبغي مراعاته عند استخدام نظام التكييف؟",
    "options": [
      {
        "sv": "Accelerera kraftigt mellan varje stopp",
        "ar": "التسارع بقوة بين كل توقف وآخر"
      },
      {
        "sv": "Använda den efter behov och hålla bilen väl ventilerad",
        "ar": "استخدامه حسب الحاجة والحفاظ على تهوية السيارة"
      },
      {
        "sv": "Köra fortare än förhållandena tillåter",
        "ar": "القيادة بسرعة أعلى مما تسمح به الظروف"
      },
      {
        "sv": "Ignorera däcktryck och service",
        "ar": "تجاهل ضغط الإطارات والصيانة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Klimatanläggningen använder energi; använd den på ett rimligt sätt och kör säkert.",
    "explanationAr": "يستهلك التكييف الطاقة؛ استخدمه باعتدال وقد بأمان."
  },
  {
    "id": 4025,
    "category": "Miljö",
    "questionSv": "Varför kan en jämn hastighet vara mer ekonomisk än upprepade fartökningar?",
    "questionAr": "لماذا قد تكون السرعة المنتظمة أكثر اقتصاداً من الزيادات المتكررة في السرعة؟",
    "options": [
      {
        "sv": "Den minskar onödiga förändringar i energibehov",
        "ar": "تقلل التغيرات غير الضرورية في الحاجة إلى الطاقة"
      },
      {
        "sv": "Välja omvägar utan anledning",
        "ar": "اختيار طرق التفافية دون سبب"
      },
      {
        "sv": "Lämna bilvätskor på marken",
        "ar": "ترك سوائل السيارة على الأرض"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حركة بلا حاجة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Planera avstånd och hastighet efter trafiken framför.",
    "explanationAr": "خطط المسافة والسرعة وفق حركة المرور أمامك."
  },
  {
    "id": 4026,
    "category": "Miljö",
    "questionSv": "Vad är bäst när du ser att ett trafikljus långt fram slår om till rött?",
    "questionAr": "ما الأفضل عندما ترى إشارة بعيدة تتحول إلى الأحمر؟",
    "options": [
      {
        "sv": "Accelerera kraftigt mellan varje stopp",
        "ar": "التسارع بقوة بين كل توقف وآخر"
      },
      {
        "sv": "Transportera tung last som inte behövs",
        "ar": "نقل حمولة ثقيلة غير ضرورية"
      },
      {
        "sv": "Bromsa sent och hårt i varje situation",
        "ar": "الفرملة المتأخرة والقوية في كل موقف"
      },
      {
        "sv": "Släppa gasen i god tid och bromsa mjukt vid behov",
        "ar": "رفع القدم عن الوقود مبكراً والفرملة بسلاسة عند الحاجة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Framförhållning hjälper dig undvika onödig acceleration och hård bromsning.",
    "explanationAr": "يساعد التخطيط على تجنب التسارع غير الضروري والفرملة القوية."
  },
  {
    "id": 4027,
    "category": "Miljö",
    "questionSv": "Hur kan du minska påverkan från att köra ensam till jobbet varje dag?",
    "questionAr": "كيف تقلل الأثر البيئي للذهاب منفرداً بالسيارة إلى العمل يومياً؟",
    "options": [
      {
        "sv": "Ignorera däcktryck och service",
        "ar": "تجاهل ضغط الإطارات والصيانة"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حركة بلا حاجة"
      },
      {
        "sv": "Köra fortare än förhållandena tillåter",
        "ar": "القيادة بسرعة أعلى مما تسمح به الظروف"
      },
      {
        "sv": "Överväga samåkning, kollektivtrafik, cykel eller gång när det passar",
        "ar": "النظر في مشاركة السيارة أو النقل العام أو الدراجة أو المشي عندما يناسب"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Välj transportsätt efter avstånd, säkerhet och praktiska förutsättningar.",
    "explanationAr": "اختر وسيلة النقل وفق المسافة والسلامة والظروف العملية."
  },
  {
    "id": 4028,
    "category": "Miljö",
    "questionSv": "Varför är det viktigt att inte låta bilen stå på tomgång nära bostäder i onödan?",
    "questionAr": "لماذا من المهم عدم ترك السيارة تعمل دون حركة قرب المنازل بلا داعٍ؟",
    "options": [
      {
        "sv": "Det skapar utsläpp och buller för omgivningen",
        "ar": "لأنه ينتج انبعاثات وضوضاء للمحيط"
      },
      {
        "sv": "Transportera tung last som inte behövs",
        "ar": "نقل حمولة ثقيلة غير ضرورية"
      },
      {
        "sv": "Välja omvägar utan anledning",
        "ar": "اختيار طرق التفافية دون سبب"
      },
      {
        "sv": "Lämna bilvätskor på marken",
        "ar": "ترك سوائل السيارة على الأرض"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Stäng av motorn när situationen tillåter och följ lokala bestämmelser.",
    "explanationAr": "أطفئ المحرك عندما تسمح الظروف واتبع القواعد المحلية."
  },
  {
    "id": 4029,
    "category": "Miljö",
    "questionSv": "Hur påverkar en tung taklast bilens luftmotstånd och stabilitet?",
    "questionAr": "كيف تؤثر الحمولة الثقيلة على السقف في مقاومة الهواء وثبات السيارة؟",
    "options": [
      {
        "sv": "Den kan öka luftmotståndet och påverka köregenskaperna",
        "ar": "قد تزيد مقاومة الهواء وتؤثر على خصائص القيادة"
      },
      {
        "sv": "Bromsa sent och hårt i varje situation",
        "ar": "الفرملة المتأخرة والقوية في كل موقف"
      },
      {
        "sv": "Accelerera kraftigt mellan varje stopp",
        "ar": "التسارع بقوة بين كل توقف وآخر"
      },
      {
        "sv": "Ignorera däcktryck och service",
        "ar": "تجاهل ضغط الإطارات والصيانة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Fäst lasten säkert och transportera bara det som behövs.",
    "explanationAr": "ثبّت الحمولة بأمان ولا تنقل إلا ما تحتاج إليه."
  },
  {
    "id": 4030,
    "category": "Miljö",
    "questionSv": "Varför kan det vara bättre att sakta ner tidigt än att bromsa hårt sent?",
    "questionAr": "لماذا قد يكون التباطؤ المبكر أفضل من الفرملة القوية المتأخرة؟",
    "options": [
      {
        "sv": "Köra fortare än förhållandena tillåter",
        "ar": "القيادة بسرعة أعلى مما تسمح به الظروف"
      },
      {
        "sv": "Det ger jämnare körning och minskar onödiga energiförluster",
        "ar": "يوفر قيادة أكثر سلاسة ويقلل فقدان الطاقة غير الضروري"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حركة بلا حاجة"
      },
      {
        "sv": "Välja omvägar utan anledning",
        "ar": "اختيار طرق التفافية دون سبب"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Läs trafiken framför och planera inbromsningar.",
    "explanationAr": "راقب حركة المرور أمامك وخطط للفرملة."
  },
  {
    "id": 4031,
    "category": "Miljö",
    "questionSv": "Hur kan du minska miljöpåverkan när du tvättar bilen?",
    "questionAr": "كيف تقلل الأثر البيئي عند غسل السيارة؟",
    "options": [
      {
        "sv": "Lämna bilvätskor på marken",
        "ar": "ترك سوائل السيارة على الأرض"
      },
      {
        "sv": "Tvätta på en plats där vattnet renas och kemikalier hanteras rätt",
        "ar": "غسلها في مكان تُعالج فيه المياه وتُدار المواد الكيميائية بشكل صحيح"
      },
      {
        "sv": "Transportera tung last som inte behövs",
        "ar": "نقل حمولة ثقيلة غير ضرورية"
      },
      {
        "sv": "Bromsa sent och hårt i varje situation",
        "ar": "الفرملة المتأخرة والقوية في كل موقف"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Tvättvatten kan innehålla olja och kemikalier som inte bör nå dagvatten.",
    "explanationAr": "قد تحتوي مياه الغسيل على زيوت ومواد كيميائية لا ينبغي أن تصل إلى مصارف الأمطار."
  },
  {
    "id": 4032,
    "category": "Miljö",
    "questionSv": "Varför ska du undvika att varva motorn i onödan när bilen står still?",
    "questionAr": "لماذا ينبغي تجنب رفع دورات المحرك دون حاجة والسيارة متوقفة؟",
    "options": [
      {
        "sv": "Ignorera däcktryck och service",
        "ar": "تجاهل ضغط الإطارات والصيانة"
      },
      {
        "sv": "Det förbrukar bränsle och skapar utsläpp och buller",
        "ar": "يستهلك الوقود وينتج انبعاثات وضوضاء"
      },
      {
        "sv": "Köra fortare än förhållandena tillåter",
        "ar": "القيادة بسرعة أعلى مما تسمح به الظروف"
      },
      {
        "sv": "Accelerera kraftigt mellan varje stopp",
        "ar": "التسارع بقوة بين كل توقف وآخر"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Låt motorn arbeta endast när det behövs.",
    "explanationAr": "دع المحرك يعمل فقط عندما تكون هناك حاجة."
  },
  {
    "id": 4033,
    "category": "Miljö",
    "questionSv": "Vad kan en välplanerad rutt hjälpa dig att undvika?",
    "questionAr": "ما الذي يساعدك المسار المخطط جيداً على تجنبه؟",
    "options": [
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حركة بلا حاجة"
      },
      {
        "sv": "Onödiga omvägar, stress och extra bränsleförbrukning",
        "ar": "الطرق الالتفافية والتوتر واستهلاك الوقود الإضافي غير الضروري"
      },
      {
        "sv": "Lämna bilvätskor på marken",
        "ar": "ترك سوائل السيارة على الأرض"
      },
      {
        "sv": "Välja omvägar utan anledning",
        "ar": "اختيار طرق التفافية دون سبب"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Kontrollera rutten i förväg men följ alltid skyltningen under resan.",
    "explanationAr": "تحقق من المسار مسبقاً لكن اتبع إشارات الطريق أثناء الرحلة دائماً."
  },
  {
    "id": 4034,
    "category": "Miljö",
    "questionSv": "Varför är det viktigt att hålla motorn och avgasreningen i gott skick?",
    "questionAr": "لماذا من المهم الحفاظ على المحرك ونظام معالجة العادم بحالة جيدة؟",
    "options": [
      {
        "sv": "Transportera tung last som inte behövs",
        "ar": "نقل حمولة ثقيلة غير ضرورية"
      },
      {
        "sv": "Accelerera kraftigt mellan varje stopp",
        "ar": "التسارع بقوة بين كل توقف وآخر"
      },
      {
        "sv": "De bidrar till säker funktion och att utsläpp begränsas",
        "ar": "يسهمان في التشغيل الآمن والحد من الانبعاثات"
      },
      {
        "sv": "Bromsa sent och hårt i varje situation",
        "ar": "الفرملة المتأخرة والقوية في كل موقف"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Följ serviceanvisningar och åtgärda varningslampor och fel.",
    "explanationAr": "اتبع تعليمات الصيانة وعالج أضواء التحذير والأعطال."
  },
  {
    "id": 4035,
    "category": "Miljö",
    "questionSv": "Vilket alternativ kan minska utsläpp per person på en gemensam resa?",
    "questionAr": "أي خيار يمكن أن يقلل الانبعاثات لكل شخص في رحلة مشتركة؟",
    "options": [
      {
        "sv": "Ignorera däcktryck och service",
        "ar": "تجاهل ضغط الإطارات والصيانة"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حركة بلا حاجة"
      },
      {
        "sv": "Att flera personer åker i samma bil i stället för varsin bil",
        "ar": "أن يستقل عدة أشخاص سيارة واحدة بدلاً من سيارة لكل شخص"
      },
      {
        "sv": "Köra fortare än förhållandena tillåter",
        "ar": "القيادة بسرعة أعلى مما تسمح به الظروف"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Samåkning kan minska antalet fordon som behövs för samma resa.",
    "explanationAr": "قد تقلل مشاركة السيارة عدد المركبات اللازمة للرحلة نفسها."
  },
  {
    "id": 4036,
    "category": "Miljö",
    "questionSv": "Varför är det bra att kontrollera att takräcke inte sitter kvar när det inte behövs?",
    "questionAr": "لماذا من الجيد إزالة حامل السقف عندما لا تكون هناك حاجة إليه؟",
    "options": [
      {
        "sv": "Välja omvägar utan anledning",
        "ar": "اختيار طرق التفافية دون سبب"
      },
      {
        "sv": "Transportera tung last som inte behövs",
        "ar": "نقل حمولة ثقيلة غير ضرورية"
      },
      {
        "sv": "Lämna bilvätskor på marken",
        "ar": "ترك سوائل السيارة على الأرض"
      },
      {
        "sv": "Det kan minska luftmotstånd och vindbrus",
        "ar": "قد يقلل مقاومة الهواء وضوضاء الرياح"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Extra tillbehör kan påverka förbrukningen även när de inte används.",
    "explanationAr": "قد تؤثر الملحقات الإضافية في الاستهلاك حتى عندما لا تستخدم."
  },
  {
    "id": 4037,
    "category": "Miljö",
    "questionSv": "Hur kan ett lugnt körsätt bidra till både miljö och säkerhet?",
    "questionAr": "كيف يمكن للقيادة الهادئة أن تفيد البيئة والسلامة معاً؟",
    "options": [
      {
        "sv": "Accelerera kraftigt mellan varje stopp",
        "ar": "التسارع بقوة بين كل توقف وآخر"
      },
      {
        "sv": "Det minskar hårda manövrer och kan minska energiförbrukningen",
        "ar": "تقلل المناورات العنيفة وقد تخفض استهلاك الطاقة"
      },
      {
        "sv": "Bromsa sent och hårt i varje situation",
        "ar": "الفرملة المتأخرة والقوية في كل موقف"
      },
      {
        "sv": "Ignorera däcktryck och service",
        "ar": "تجاهل ضغط الإطارات والصيانة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Planerad körning ger bättre marginaler och jämnare belastning.",
    "explanationAr": "توفر القيادة المخططة هامش أمان أفضل وحملاً أكثر انتظاماً."
  },
  {
    "id": 4038,
    "category": "Miljö",
    "questionSv": "Varför ska du inte tömma bilens vätskor i marken?",
    "questionAr": "لماذا لا ينبغي تفريغ سوائل السيارة على الأرض؟",
    "options": [
      {
        "sv": "Välja omvägar utan anledning",
        "ar": "اختيار طرق التفافية دون سبب"
      },
      {
        "sv": "De kan skada miljön och förorena grundvatten",
        "ar": "قد تضر البيئة وتلوث المياه الجوفية"
      },
      {
        "sv": "Köra fortare än förhållandena tillåter",
        "ar": "القيادة بسرعة أعلى مما تسمح به الظروف"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حركة بلا حاجة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Använd avsedda insamlingsplatser för olja, kylvätska och andra kemikalier.",
    "explanationAr": "استخدم أماكن الجمع المخصصة للزيت وسائل التبريد والمواد الكيميائية الأخرى."
  },
  {
    "id": 4039,
    "category": "Miljö",
    "questionSv": "Hur påverkar trafikköer ofta bränsleförbrukningen?",
    "questionAr": "كيف تؤثر الاختناقات المرورية غالباً على استهلاك الوقود؟",
    "options": [
      {
        "sv": "Stopp och starter kan öka förbrukningen",
        "ar": "قد تزيد التوقفات والانطلاقات الاستهلاك"
      },
      {
        "sv": "Transportera tung last som inte behövs",
        "ar": "نقل حمولة ثقيلة غير ضرورية"
      },
      {
        "sv": "Bromsa sent och hårt i varje situation",
        "ar": "الفرملة المتأخرة والقوية في كل موقف"
      },
      {
        "sv": "Lämna bilvätskor på marken",
        "ar": "ترك سوائل السيارة على الأرض"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Om det går, planera resan och undvik onödiga korta bilresor i rusningstid.",
    "explanationAr": "خطط للرحلة وتجنب الرحلات القصيرة غير الضرورية وقت الذروة إذا أمكن."
  },
  {
    "id": 4040,
    "category": "Miljö",
    "questionSv": "Varför är det klokt att hålla rätt däckdimension och typ enligt bilen?",
    "questionAr": "لماذا من الحكمة استخدام مقاس ونوع الإطارات المناسبين للسيارة؟",
    "options": [
      {
        "sv": "Köra fortare än förhållandena tillåter",
        "ar": "القيادة بسرعة أعلى مما تسمح به الظروف"
      },
      {
        "sv": "Ignorera däcktryck och service",
        "ar": "تجاهل ضغط الإطارات والصيانة"
      },
      {
        "sv": "Accelerera kraftigt mellan varje stopp",
        "ar": "التسارع بقوة بين كل توقف وآخر"
      },
      {
        "sv": "Rätt däck bidrar till säkerhet, rätt vägegenskaper och rimligt motstånd",
        "ar": "الإطارات الصحيحة تسهم في السلامة وخصائص قيادة سليمة ومقاومة مناسبة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Följ bilens godkända specifikationer och rekommendationer.",
    "explanationAr": "اتبع المواصفات المعتمدة وتوصيات السيارة."
  },
  {
    "id": 5001,
    "category": "Fordonskännedom",
    "questionSv": "Vad ska du göra om den röda oljetrycksvarningen tänds under körning?",
    "questionAr": "ماذا تفعل إذا أضاء تحذير ضغط الزيت الأحمر أثناء القيادة؟",
    "options": [
      {
        "sv": "Stanna säkert så snart som möjligt och följ bilens instruktionsbok",
        "ar": "التوقف بأمان بأقرب وقت ممكن واتباع دليل السيارة"
      },
      {
        "sv": "Försöka dölja felet i stället för att kontrollera det",
        "ar": "محاولة إخفاء العطل بدلاً من فحصه"
      },
      {
        "sv": "Använda valfri vätska eller del utan att kontrollera specifikationen",
        "ar": "استخدام أي سائل أو قطعة دون التحقق من المواصفات"
      },
      {
        "sv": "Överskrida bilens angivna gränser",
        "ar": "تجاوز الحدود المحددة للسيارة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Fortsatt körning med lågt oljetryck kan skada motorn allvarligt.",
    "explanationAr": "قد يؤدي استمرار القيادة مع انخفاض ضغط الزيت إلى تلف خطير بالمحرك."
  },
  {
    "id": 5002,
    "category": "Fordonskännedom",
    "questionSv": "Varför ska du kontrollera däcktrycket regelbundet?",
    "questionAr": "لماذا يجب فحص ضغط الإطارات بانتظام؟",
    "options": [
      {
        "sv": "Köra snabbare för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Ignorera varningen och fortsätta som vanligt",
        "ar": "تجاهل التحذير والمتابعة كالمعتاد"
      },
      {
        "sv": "Det påverkar säkerhet, däckslitage och energiförbrukning",
        "ar": "لأنه يؤثر على السلامة وتآكل الإطارات واستهلاك الطاقة"
      },
      {
        "sv": "Lasta bilen så att sikten blir sämre",
        "ar": "تحميل السيارة بطريقة تقلل الرؤية"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Följ bilens rekommenderade tryck och kontrollera däcken regelbundet.",
    "explanationAr": "اتبع ضغط الإطارات الموصى به وافحصها بانتظام."
  },
  {
    "id": 5003,
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra om bromspedalen plötsligt känns annorlunda?",
    "questionAr": "ماذا تفعل إذا أصبح إحساس دواسة الفرامل مختلفاً فجأة؟",
    "options": [
      {
        "sv": "Stanna säkert och låt bromssystemet kontrolleras",
        "ar": "التوقف بأمان وفحص نظام الفرامل"
      },
      {
        "sv": "Försöka dölja felet i stället för att kontrollera det",
        "ar": "محاولة إخفاء العطل بدلاً من فحصه"
      },
      {
        "sv": "Vänta med all kontroll tills bilen stannar",
        "ar": "تأجيل كل الفحوص حتى تتوقف السيارة"
      },
      {
        "sv": "Ta bort en säkerhetsfunktion utan att förstå orsaken",
        "ar": "تعطيل وظيفة أمان دون فهم السبب"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Förändrad bromskänsla kan tyda på ett fel som påverkar säkerheten.",
    "explanationAr": "قد يشير تغير إحساس الفرامل إلى عطل يؤثر على السلامة."
  },
  {
    "id": 5004,
    "category": "Fordonskännedom",
    "questionSv": "Vad är ABS-systemets huvudsakliga uppgift?",
    "questionAr": "ما الوظيفة الأساسية لنظام ABS؟",
    "options": [
      {
        "sv": "Att motverka att hjulen låser sig vid kraftig bromsning",
        "ar": "المساعدة على منع انغلاق العجلات أثناء الفرملة القوية"
      },
      {
        "sv": "Köra snabbare för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Överskrida bilens angivna gränser",
        "ar": "تجاوز الحدود المحددة للسيارة"
      },
      {
        "sv": "Använda valfri vätska eller del utan att kontrollera specifikationen",
        "ar": "استخدام أي سائل أو قطعة دون التحقق من المواصفات"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "ABS kan hjälpa dig behålla styrförmågan, men garanterar inte kortast bromssträcka på alla underlag.",
    "explanationAr": "قد يساعد ABS على الحفاظ على التوجيه، لكنه لا يضمن أقصر مسافة فرملة على كل الأسطح."
  },
  {
    "id": 5005,
    "category": "Fordonskännedom",
    "questionSv": "Varför måste last i bilen säkras?",
    "questionAr": "لماذا يجب تثبيت الحمولة داخل السيارة؟",
    "options": [
      {
        "sv": "Ta bort en säkerhetsfunktion utan att förstå orsaken",
        "ar": "تعطيل وظيفة أمان دون فهم السبب"
      },
      {
        "sv": "Ignorera varningen och fortsätta som vanligt",
        "ar": "تجاهل التحذير والمتابعة كالمعتاد"
      },
      {
        "sv": "Den kan förflyttas och skada personer vid inbromsning eller kollision",
        "ar": "قد تتحرك وتصيب الأشخاص عند الفرملة أو التصادم"
      },
      {
        "sv": "Lasta bilen så att sikten blir sämre",
        "ar": "تحميل السيارة بطريقة تقلل الرؤية"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Säkra lasten så att den inte kan glida eller kastas framåt.",
    "explanationAr": "ثبّت الحمولة حتى لا تنزلق أو تندفع إلى الأمام."
  },
  {
    "id": 5006,
    "category": "Fordonskännedom",
    "questionSv": "Vad ska du kontrollera om en lampa för däcktryck varnar?",
    "questionAr": "ماذا تفحص إذا ظهر تحذير ضغط الإطارات؟",
    "options": [
      {
        "sv": "Överskrida bilens angivna gränser",
        "ar": "تجاوز الحدود المحددة للسيارة"
      },
      {
        "sv": "Kontrollera däcktryck och leta efter skador när det är säkert",
        "ar": "افحص ضغط الإطارات وابحث عن التلف عندما يكون ذلك آمناً"
      },
      {
        "sv": "Försöka dölja felet i stället för att kontrollera det",
        "ar": "محاولة إخفاء العطل بدلاً من فحصه"
      },
      {
        "sv": "Vänta med all kontroll tills bilen stannar",
        "ar": "تأجيل كل الفحوص حتى تتوقف السيارة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Följ bilens manual och åtgärda tryckförlust eller skador.",
    "explanationAr": "اتبع دليل السيارة وعالج فقدان الضغط أو الأضرار."
  },
  {
    "id": 5007,
    "category": "Fordonskännedom",
    "questionSv": "Varför behöver vindrutan hållas ren och fri från imma?",
    "questionAr": "لماذا يجب إبقاء الزجاج الأمامي نظيفاً وخالياً من الضباب؟",
    "options": [
      {
        "sv": "För att föraren ska kunna se vägen och trafikanterna tydligt",
        "ar": "لكي يتمكن السائق من رؤية الطريق ومستخدميه بوضوح"
      },
      {
        "sv": "Köra snabbare för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Lasta bilen så att sikten blir sämre",
        "ar": "تحميل السيارة بطريقة تقلل الرؤية"
      },
      {
        "sv": "Använda valfri vätska eller del utan att kontrollera specifikationen",
        "ar": "استخدام أي سائل أو قطعة دون التحقق من المواصفات"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Använd torkare, spolare och avimning när det behövs.",
    "explanationAr": "استخدم المساحات وغاسل الزجاج وإزالة الضباب عند الحاجة."
  },
  {
    "id": 5008,
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra om motorns temperaturvarning visar överhettning?",
    "questionAr": "ماذا تفعل إذا أظهر تحذير حرارة المحرك ارتفاعاً مفرطاً؟",
    "options": [
      {
        "sv": "Ignorera varningen och fortsätta som vanligt",
        "ar": "تجاهل التحذير والمتابعة كالمعتاد"
      },
      {
        "sv": "Vänta med all kontroll tills bilen stannar",
        "ar": "تأجيل كل الفحوص حتى تتوقف السيارة"
      },
      {
        "sv": "Ta bort en säkerhetsfunktion utan att förstå orsaken",
        "ar": "تعطيل وظيفة أمان دون فهم السبب"
      },
      {
        "sv": "Stanna säkert och följ tillverkarens instruktioner",
        "ar": "التوقف بأمان واتباع تعليمات الشركة المصنعة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Överhettning kan skada motorn; hantera situationen enligt instruktionsboken.",
    "explanationAr": "قد يؤدي ارتفاع الحرارة إلى تلف المحرك؛ تعامل مع الأمر وفق دليل السيارة."
  },
  {
    "id": 5009,
    "category": "Fordonskännedom",
    "questionSv": "Varför ska bilens lampor kontrolleras regelbundet?",
    "questionAr": "لماذا يجب فحص أضواء السيارة بانتظام؟",
    "options": [
      {
        "sv": "Försöka dölja felet i stället för att kontrollera det",
        "ar": "محاولة إخفاء العطل بدلاً من فحصه"
      },
      {
        "sv": "För att du ska se och synas korrekt i trafiken",
        "ar": "لكي ترى ويُراك الآخرون بشكل صحيح في المرور"
      },
      {
        "sv": "Använda valfri vätska eller del utan att kontrollera specifikationen",
        "ar": "استخدام أي سائل أو قطعة دون التحقق من المواصفات"
      },
      {
        "sv": "Överskrida bilens angivna gränser",
        "ar": "تجاوز الحدود المحددة للسيارة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Trasig belysning kan försämra sikt och göra bilen mindre synlig.",
    "explanationAr": "قد تقلل الإضاءة المعطلة الرؤية وتجعل السيارة أقل وضوحاً."
  },
  {
    "id": 5010,
    "category": "Fordonskännedom",
    "questionSv": "Vad ska du göra om vindrutetorkarna lämnar stora osynliga fält?",
    "questionAr": "ماذا تفعل إذا تركت ماسحات الزجاج مساحات غير واضحة؟",
    "options": [
      {
        "sv": "Ignorera varningen och fortsätta som vanligt",
        "ar": "تجاهل التحذير والمتابعة كالمعتاد"
      },
      {
        "sv": "Köra snabbare för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Byta eller kontrollera torkarbladen och säkerställa god sikt",
        "ar": "استبدال شفرات المساحات أو فحصها وضمان الرؤية الجيدة"
      },
      {
        "sv": "Lasta bilen så att sikten blir sämre",
        "ar": "تحميل السيارة بطريقة تقلل الرؤية"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Slitna torkarblad försämrar sikten särskilt i regn och snöblandat väder.",
    "explanationAr": "تضعف شفرات المساحات البالية الرؤية خاصة في المطر والثلج الممزوج بالماء."
  },
  {
    "id": 5011,
    "category": "Fordonskännedom",
    "questionSv": "Varför är rätt inställt nackskydd viktigt?",
    "questionAr": "لماذا يعد ضبط مسند الرأس بشكل صحيح مهماً؟",
    "options": [
      {
        "sv": "Försöka dölja felet i stället för att kontrollera det",
        "ar": "محاولة إخفاء العطل بدلاً من فحصه"
      },
      {
        "sv": "Det kan minska risken för nackskador vid en kollision",
        "ar": "قد يقلل خطر إصابات الرقبة عند التصادم"
      },
      {
        "sv": "Vänta med all kontroll tills bilen stannar",
        "ar": "تأجيل كل الفحوص حتى تتوقف السيارة"
      },
      {
        "sv": "Ta bort en säkerhetsfunktion utan att förstå orsaken",
        "ar": "تعطيل وظيفة أمان دون فهم السبب"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Justera nackskyddet enligt bilens instruktioner för bra stöd.",
    "explanationAr": "اضبط مسند الرأس وفق تعليمات السيارة لتوفير دعم جيد."
  },
  {
    "id": 5012,
    "category": "Fordonskännedom",
    "questionSv": "Vad är viktigt med bilens airbags?",
    "questionAr": "ما المهم بخصوص الوسائد الهوائية في السيارة؟",
    "options": [
      {
        "sv": "Överskrida bilens angivna gränser",
        "ar": "تجاوز الحدود المحددة للسيارة"
      },
      {
        "sv": "Köra snabbare för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Använda valfri vätska eller del utan att kontrollera specifikationen",
        "ar": "استخدام أي سائل أو قطعة دون التحقق من المواصفات"
      },
      {
        "sv": "De är ett komplement till bilbälte och kräver korrekt sittställning",
        "ar": "إنها مكمل لحزام الأمان وتتطلب وضعية جلوس صحيحة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Följ instruktionerna om avstånd, placering och barnskydd vid airbags.",
    "explanationAr": "اتبع التعليمات المتعلقة بالمسافة والموضع ومقاعد الأطفال قرب الوسائد الهوائية."
  },
  {
    "id": 5013,
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra om en varningslampa lyser och du inte vet vad den betyder?",
    "questionAr": "ماذا تفعل إذا أضاء مصباح تحذير ولا تعرف معناه؟",
    "options": [
      {
        "sv": "Kontrollera instruktionsboken och stanna säkert om varningen kräver det",
        "ar": "راجع دليل السيارة وتوقف بأمان إذا استدعى التحذير ذلك"
      },
      {
        "sv": "Lasta bilen så att sikten blir sämre",
        "ar": "تحميل السيارة بطريقة تقلل الرؤية"
      },
      {
        "sv": "Ta bort en säkerhetsfunktion utan att förstå orsaken",
        "ar": "تعطيل وظيفة أمان دون فهم السبب"
      },
      {
        "sv": "Ignorera varningen och fortsätta som vanligt",
        "ar": "تجاهل التحذير والمتابعة كالمعتاد"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Gissa inte; varningslampor kan indikera fel med olika allvarlighetsgrad.",
    "explanationAr": "لا تخمّن؛ فقد تشير أضواء التحذير إلى أعطال متفاوتة الخطورة."
  },
  {
    "id": 5014,
    "category": "Fordonskännedom",
    "questionSv": "Varför är mönsterdjup och däckens skick viktigt?",
    "questionAr": "لماذا عمق نقشة الإطار وحالته مهمان؟",
    "options": [
      {
        "sv": "Försöka dölja felet i stället för att kontrollera det",
        "ar": "محاولة إخفاء العطل بدلاً من فحصه"
      },
      {
        "sv": "Överskrida bilens angivna gränser",
        "ar": "تجاوز الحدود المحددة للسيارة"
      },
      {
        "sv": "De påverkar grepp, vattenavledning och säkerhet",
        "ar": "إنهما يؤثران على التماسك وتصريف الماء والسلامة"
      },
      {
        "sv": "Vänta med all kontroll tills bilen stannar",
        "ar": "تأجيل كل الفحوص حتى تتوقف السيارة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Kontrollera att däcken uppfyller aktuella krav och inte har skador.",
    "explanationAr": "تحقق من أن الإطارات تحقق المتطلبات الحالية ولا تحتوي على أضرار."
  },
  {
    "id": 5015,
    "category": "Fordonskännedom",
    "questionSv": "Vad kan ojämnt däckslitage tyda på?",
    "questionAr": "على ماذا قد يدل تآكل الإطارات غير المتساوي؟",
    "options": [
      {
        "sv": "Lasta bilen så att sikten blir sämre",
        "ar": "تحميل السيارة بطريقة تقلل الرؤية"
      },
      {
        "sv": "Felaktigt tryck, hjulinställning eller annat fordonsfel",
        "ar": "ضغط غير صحيح أو ضبط عجلات خاطئ أو عطل آخر بالسيارة"
      },
      {
        "sv": "Använda valfri vätska eller del utan att kontrollera specifikationen",
        "ar": "استخدام أي سائل أو قطعة دون التحقق من المواصفات"
      },
      {
        "sv": "Köra snabbare för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Låt kontrollera orsaken i stället för att bara byta däck.",
    "explanationAr": "افحص السبب بدلاً من الاكتفاء بتغيير الإطار."
  },
  {
    "id": 5016,
    "category": "Fordonskännedom",
    "questionSv": "Varför ska du kontrollera att registreringsskyltarna är synliga?",
    "questionAr": "لماذا يجب التأكد من أن لوحات التسجيل واضحة؟",
    "options": [
      {
        "sv": "De ska vara läsbara och inte täckta av smuts eller last",
        "ar": "يجب أن تكون مقروءة وغير محجوبة بالأوساخ أو الحمولة"
      },
      {
        "sv": "Vänta med all kontroll tills bilen stannar",
        "ar": "تأجيل كل الفحوص حتى تتوقف السيارة"
      },
      {
        "sv": "Ta bort en säkerhetsfunktion utan att förstå orsaken",
        "ar": "تعطيل وظيفة أمان دون فهم السبب"
      },
      {
        "sv": "Ignorera varningen och fortsätta som vanligt",
        "ar": "تجاهل التحذير والمتابعة كالمعتاد"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Håll skyltarna rena och korrekt monterade.",
    "explanationAr": "حافظ على نظافة اللوحات وتركيبها بشكل صحيح."
  },
  {
    "id": 5017,
    "category": "Fordonskännedom",
    "questionSv": "Vad ska du göra om du märker att styrningen plötsligt drar åt ena sidan?",
    "questionAr": "ماذا تفعل إذا لاحظت أن التوجيه يسحب فجأة إلى جهة؟",
    "options": [
      {
        "sv": "Försöka dölja felet i stället för att kontrollera det",
        "ar": "محاولة إخفاء العطل بدلاً من فحصه"
      },
      {
        "sv": "Använda valfri vätska eller del utan att kontrollera specifikationen",
        "ar": "استخدام أي سائل أو قطعة دون التحقق من المواصفات"
      },
      {
        "sv": "Sänka farten säkert och låta bilen kontrolleras",
        "ar": "تخفيف السرعة بأمان وفحص السيارة"
      },
      {
        "sv": "Överskrida bilens angivna gränser",
        "ar": "تجاوز الحدود المحددة للسيارة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Det kan bero på däck, bromsar eller andra fel som behöver kontrolleras.",
    "explanationAr": "قد يكون السبب الإطارات أو الفرامل أو أعطالاً أخرى تحتاج إلى فحص."
  },
  {
    "id": 5018,
    "category": "Fordonskännedom",
    "questionSv": "Varför ska du kontrollera spolarvätska före en längre resa?",
    "questionAr": "لماذا يجب فحص سائل غسل الزجاج قبل رحلة طويلة؟",
    "options": [
      {
        "sv": "Köra snabbare för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Ignorera varningen och fortsätta som vanligt",
        "ar": "تجاهل التحذير والمتابعة كالمعتاد"
      },
      {
        "sv": "Lasta bilen så att sikten blir sämre",
        "ar": "تحميل السيارة بطريقة تقلل الرؤية"
      },
      {
        "sv": "Smutsig ruta kan försämra sikten och vätskan behövs för rengöring",
        "ar": "قد يضعف الزجاج المتسخ الرؤية وتلزم السوائل لتنظيفه"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Se till att behållaren är fylld med vätska som passar väderförhållandena.",
    "explanationAr": "تأكد من ملء الخزان بسائل يناسب ظروف الطقس."
  },
  {
    "id": 5019,
    "category": "Fordonskännedom",
    "questionSv": "Vad är viktigt när du använder helljus?",
    "questionAr": "ما المهم عند استخدام الضوء العالي؟",
    "options": [
      {
        "sv": "Försöka dölja felet i stället för att kontrollera det",
        "ar": "محاولة إخفاء العطل بدلاً من فحصه"
      },
      {
        "sv": "Blända av när du riskerar att blända andra trafikanter",
        "ar": "خفض الضوء العالي عندما يمكن أن يسبب إبهار الآخرين"
      },
      {
        "sv": "Vänta med all kontroll tills bilen stannar",
        "ar": "تأجيل كل الفحوص حتى تتوقف السيارة"
      },
      {
        "sv": "Ta bort en säkerhetsfunktion utan att förstå orsaken",
        "ar": "تعطيل وظيفة أمان دون فهم السبب"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Använd helljus när det hjälper sikten och inte bländar andra.",
    "explanationAr": "استخدم الضوء العالي عندما يحسن الرؤية ولا يبهر الآخرين."
  },
  {
    "id": 5020,
    "category": "Fordonskännedom",
    "questionSv": "När är halvljus eller annan lämplig belysning viktig?",
    "questionAr": "متى يكون الضوء المنخفض أو الإضاءة المناسبة مهماً؟",
    "options": [
      {
        "sv": "När du behöver se och synas enligt rådande ljus- och väderförhållanden",
        "ar": "عندما تحتاج إلى الرؤية وأن تُرى وفق ظروف الضوء والطقس"
      },
      {
        "sv": "Överskrida bilens angivna gränser",
        "ar": "تجاوز الحدود المحددة للسيارة"
      },
      {
        "sv": "Använda valfri vätska eller del utan att kontrollera specifikationen",
        "ar": "استخدام أي سائل أو قطعة دون التحقق من المواصفات"
      },
      {
        "sv": "Köra snabbare för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Använd belysningen enligt reglerna och bilens funktioner.",
    "explanationAr": "استخدم الإضاءة وفق القواعد ووظائف السيارة."
  },
  {
    "id": 5021,
    "category": "Fordonskännedom",
    "questionSv": "Varför är det viktigt att känna till bilens varningslampor?",
    "questionAr": "لماذا من المهم معرفة أضواء التحذير في السيارة؟",
    "options": [
      {
        "sv": "Lasta bilen så att sikten blir sämre",
        "ar": "تحميل السيارة بطريقة تقلل الرؤية"
      },
      {
        "sv": "Du kan förstå när ett fel kräver omedelbar åtgärd",
        "ar": "يمكنك معرفة متى يتطلب العطل إجراءً فورياً"
      },
      {
        "sv": "Ta bort en säkerhetsfunktion utan att förstå orsaken",
        "ar": "تعطيل وظيفة أمان دون فهم السبب"
      },
      {
        "sv": "Ignorera varningen och fortsätta som vanligt",
        "ar": "تجاهل التحذير والمتابعة كالمعتاد"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Lär dig symbolerna i instruktionsboken för just din bil.",
    "explanationAr": "تعرّف على الرموز في دليل سيارتك تحديداً."
  },
  {
    "id": 5022,
    "category": "Fordonskännedom",
    "questionSv": "Vad kan ett svagt batteri orsaka?",
    "questionAr": "ماذا قد تسبب البطارية الضعيفة؟",
    "options": [
      {
        "sv": "Startproblem och problem med elektriska funktioner",
        "ar": "مشاكل في التشغيل ووظائف كهربائية"
      },
      {
        "sv": "Överskrida bilens angivna gränser",
        "ar": "تجاوز الحدود المحددة للسيارة"
      },
      {
        "sv": "Försöka dölja felet i stället för att kontrollera det",
        "ar": "محاولة إخفاء العطل بدلاً من فحصه"
      },
      {
        "sv": "Vänta med all kontroll tills bilen stannar",
        "ar": "تأجيل كل الفحوص حتى تتوقف السيارة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Kontrollera batteriet om bilen startar långsamt eller varningslampor tänds.",
    "explanationAr": "افحص البطارية إذا كان تشغيل السيارة بطيئاً أو ظهرت أضواء تحذير."
  },
  {
    "id": 5023,
    "category": "Fordonskännedom",
    "questionSv": "Varför är kylvätska viktig för motorn?",
    "questionAr": "لماذا سائل التبريد مهم للمحرك؟",
    "options": [
      {
        "sv": "Den hjälper till att hålla motortemperaturen inom rätt område",
        "ar": "يساعد في إبقاء حرارة المحرك ضمن النطاق الصحيح"
      },
      {
        "sv": "Köra snabbare för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Använda valfri vätska eller del utan att kontrollera specifikationen",
        "ar": "استخدام أي سائل أو قطعة دون التحقق من المواصفات"
      },
      {
        "sv": "Lasta bilen så att sikten blir sämre",
        "ar": "تحميل السيارة بطريقة تقلل الرؤية"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Kontrollera nivån enligt instruktionerna och öppna aldrig ett hett kylsystem vårdslöst.",
    "explanationAr": "افحص المستوى وفق التعليمات ولا تفتح نظام تبريد ساخناً بإهمال."
  },
  {
    "id": 5024,
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra om du misstänker läckage av bränsle?",
    "questionAr": "ماذا تفعل إذا اشتبهت بتسرب الوقود؟",
    "options": [
      {
        "sv": "Stanna säkert, undvik antändningskällor och ordna hjälp",
        "ar": "التوقف بأمان وتجنب مصادر الاشتعال وطلب المساعدة"
      },
      {
        "sv": "Ta bort en säkerhetsfunktion utan att förstå orsaken",
        "ar": "تعطيل وظيفة أمان دون فهم السبب"
      },
      {
        "sv": "Ignorera varningen och fortsätta som vanligt",
        "ar": "تجاهل التحذير والمتابعة كالمعتاد"
      },
      {
        "sv": "Vänta med all kontroll tills bilen stannar",
        "ar": "تأجيل كل الفحوص حتى تتوقف السيارة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Bränsleläckage kan innebära brandrisk; fortsätt inte köra innan det bedömts säkert.",
    "explanationAr": "قد يشكل تسرب الوقود خطر حريق؛ لا تواصل القيادة قبل التأكد من السلامة."
  },
  {
    "id": 5025,
    "category": "Fordonskännedom",
    "questionSv": "Varför ska du kontrollera att dörrar och baklucka är stängda?",
    "questionAr": "لماذا يجب التأكد من إغلاق الأبواب والباب الخلفي؟",
    "options": [
      {
        "sv": "Använda valfri vätska eller del utan att kontrollera specifikationen",
        "ar": "استخدام أي سائل أو قطعة دون التحقق من المواصفات"
      },
      {
        "sv": "Försöka dölja felet i stället för att kontrollera det",
        "ar": "محاولة إخفاء العطل بدلاً من فحصه"
      },
      {
        "sv": "En öppen dörr eller lucka kan innebära fara för personer och last",
        "ar": "قد يشكل الباب أو الصندوق المفتوح خطراً على الأشخاص والحمولة"
      },
      {
        "sv": "Överskrida bilens angivna gränser",
        "ar": "تجاوز الحدود المحددة للسيارة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Kontrollera att allt är ordentligt stängt innan du kör.",
    "explanationAr": "تحقق من إغلاق كل شيء بإحكام قبل القيادة."
  },
  {
    "id": 5026,
    "category": "Fordonskännedom",
    "questionSv": "Vad är viktigt med bilens speglar före körning?",
    "questionAr": "ما المهم بشأن مرايا السيارة قبل القيادة؟",
    "options": [
      {
        "sv": "Ställa in dem så att du får god uppsikt bakåt och åt sidorna",
        "ar": "ضبطها للحصول على رؤية جيدة للخلف والجوانب"
      },
      {
        "sv": "Ignorera varningen och fortsätta som vanligt",
        "ar": "تجاهل التحذير والمتابعة كالمعتاد"
      },
      {
        "sv": "Lasta bilen så att sikten blir sämre",
        "ar": "تحميل السيارة بطريقة تقلل الرؤية"
      },
      {
        "sv": "Köra snabbare för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Speglar minskar döda vinklar men ersätter inte direkt kontroll vid behov.",
    "explanationAr": "تقلل المرايا المناطق العمياء لكنها لا تحل محل الفحص المباشر عند الحاجة."
  },
  {
    "id": 5027,
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra om bromsvarningslampan tänds?",
    "questionAr": "ماذا تفعل إذا أضاء تحذير الفرامل؟",
    "options": [
      {
        "sv": "Stanna säkert och kontrollera instruktionsboken eller sök hjälp",
        "ar": "التوقف بأمان ومراجعة دليل السيارة أو طلب المساعدة"
      },
      {
        "sv": "Vänta med all kontroll tills bilen stannar",
        "ar": "تأجيل كل الفحوص حتى تتوقف السيارة"
      },
      {
        "sv": "Försöka dölja felet i stället för att kontrollera det",
        "ar": "محاولة إخفاء العطل بدلاً من فحصه"
      },
      {
        "sv": "Ta bort en säkerhetsfunktion utan att förstå orsaken",
        "ar": "تعطيل وظيفة أمان دون فهم السبب"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "En bromsvarning kan indikera ett allvarligt säkerhetsproblem.",
    "explanationAr": "قد يشير تحذير الفرامل إلى مشكلة خطيرة تتعلق بالسلامة."
  },
  {
    "id": 5028,
    "category": "Fordonskännedom",
    "questionSv": "Varför ska lasten inte skymma förarens sikt?",
    "questionAr": "لماذا يجب ألا تحجب الحمولة رؤية السائق؟",
    "options": [
      {
        "sv": "Använda valfri vätska eller del utan att kontrollera specifikationen",
        "ar": "استخدام أي سائل أو قطعة دون التحقق من المواصفات"
      },
      {
        "sv": "Köra snabbare för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Överskrida bilens angivna gränser",
        "ar": "تجاوز الحدود المحددة للسيارة"
      },
      {
        "sv": "Du måste kunna se vägen, speglarna och trafiken runt bilen",
        "ar": "يجب أن تتمكن من رؤية الطريق والمرايا وحركة المرور حول السيارة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Placera och säkra last så att sikt och kontroll inte försämras.",
    "explanationAr": "ضع الحمولة وثبتها بحيث لا تضعف الرؤية أو السيطرة."
  },
  {
    "id": 5029,
    "category": "Fordonskännedom",
    "questionSv": "Vad ska du kontrollera när du använder ett takräcke?",
    "questionAr": "ماذا تتحقق منه عند استخدام حامل السقف؟",
    "options": [
      {
        "sv": "Att lasten är säkrad och att bilens tillåtna belastning inte överskrids",
        "ar": "أن الحمولة مثبتة وألا يتم تجاوز الحمل المسموح للسيارة"
      },
      {
        "sv": "Ignorera varningen och fortsätta som vanligt",
        "ar": "تجاهل التحذير والمتابعة كالمعتاد"
      },
      {
        "sv": "Ta bort en säkerhetsfunktion utan att förstå orsaken",
        "ar": "تعطيل وظيفة أمان دون فهم السبب"
      },
      {
        "sv": "Lasta bilen så att sikten blir sämre",
        "ar": "تحميل السيارة بطريقة تقلل الرؤية"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Följ tillverkarens gränser för taklast och kontrollera fästena.",
    "explanationAr": "اتبع حدود حمولة السقف التي تحددها الشركة وافحص أدوات التثبيت."
  },
  {
    "id": 5030,
    "category": "Fordonskännedom",
    "questionSv": "Varför ska du följa serviceintervallen?",
    "questionAr": "لماذا يجب اتباع فترات الصيانة؟",
    "options": [
      {
        "sv": "Vänta med all kontroll tills bilen stannar",
        "ar": "تأجيل كل الفحوص حتى تتوقف السيارة"
      },
      {
        "sv": "För att upptäcka slitage och hålla bilen säker och driftsäker",
        "ar": "لاكتشاف التآكل والحفاظ على سلامة السيارة وموثوقية عملها"
      },
      {
        "sv": "Överskrida bilens angivna gränser",
        "ar": "تجاوز الحدود المحددة للسيارة"
      },
      {
        "sv": "Försöka dölja felet i stället för att kontrollera det",
        "ar": "محاولة إخفاء العطل بدلاً من فحصه"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Serviceplanen hjälper till att kontrollera viktiga system i rätt tid.",
    "explanationAr": "يساعد جدول الصيانة في فحص الأنظمة المهمة في الوقت المناسب."
  },
  {
    "id": 5031,
    "category": "Fordonskännedom",
    "questionSv": "Vad ska du göra om en strålkastare inte fungerar i mörker?",
    "questionAr": "ماذا تفعل إذا تعطل مصباح أمامي في الظلام؟",
    "options": [
      {
        "sv": "Köra snabbare för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Använda valfri vätska eller del utan att kontrollera specifikationen",
        "ar": "استخدام أي سائل أو قطعة دون التحقق من المواصفات"
      },
      {
        "sv": "Stanna säkert och åtgärda felet innan du fortsätter om det behövs",
        "ar": "التوقف بأمان ومعالجة العطل قبل المتابعة إذا لزم الأمر"
      },
      {
        "sv": "Lasta bilen så att sikten blir sämre",
        "ar": "تحميل السيارة بطريقة تقلل الرؤية"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Otillräcklig belysning kan göra det svårt att se och att bli sedd.",
    "explanationAr": "قد تجعل الإضاءة غير الكافية الرؤية ورؤيتك من الآخرين صعبتين."
  },
  {
    "id": 5032,
    "category": "Fordonskännedom",
    "questionSv": "Varför behöver du kontrollera att lasten inte kan glida?",
    "questionAr": "لماذا يجب التأكد من أن الحمولة لا يمكن أن تنزلق؟",
    "options": [
      {
        "sv": "Den kan ändra bilens balans eller skada personer vid inbromsning",
        "ar": "قد تغير توازن السيارة أو تصيب الأشخاص عند الفرملة"
      },
      {
        "sv": "Ta bort en säkerhetsfunktion utan att förstå orsaken",
        "ar": "تعطيل وظيفة أمان دون فهم السبب"
      },
      {
        "sv": "Vänta med all kontroll tills bilen stannar",
        "ar": "تأجيل كل الفحوص حتى تتوقف السيارة"
      },
      {
        "sv": "Ignorera varningen och fortsätta som vanligt",
        "ar": "تجاهل التحذير والمتابعة كالمعتاد"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Använd lämpliga spännband och placera lasten stabilt.",
    "explanationAr": "استخدم أحزمة تثبيت مناسبة وضع الحمولة بثبات."
  },
  {
    "id": 5033,
    "category": "Fordonskännedom",
    "questionSv": "Vad är viktigt när du byter från sommar- till vinterförhållanden?",
    "questionAr": "ما المهم عند الانتقال من ظروف الصيف إلى الشتاء؟",
    "options": [
      {
        "sv": "Kontrollera däckens lämplighet och bilens skick inför väglaget",
        "ar": "التحقق من ملاءمة الإطارات وحالة السيارة للطقس والطريق"
      },
      {
        "sv": "Försöka dölja felet i stället för att kontrollera det",
        "ar": "محاولة إخفاء العطل بدلاً من فحصه"
      },
      {
        "sv": "Använda valfri vätska eller del utan att kontrollera specifikationen",
        "ar": "استخدام أي سائل أو قطعة دون التحقق من المواصفات"
      },
      {
        "sv": "Överskrida bilens angivna gränser",
        "ar": "تجاوز الحدود المحددة للسيارة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Följ aktuella regler för vinterdäck och anpassa utrustningen efter väglaget.",
    "explanationAr": "اتبع القواعد الحالية للإطارات الشتوية واضبط التجهيزات حسب حالة الطريق."
  },
  {
    "id": 5034,
    "category": "Fordonskännedom",
    "questionSv": "Varför ska du inte köra vidare om ratten eller bilen vibrerar kraftigt plötsligt?",
    "questionAr": "لماذا لا ينبغي متابعة القيادة إذا اهتز المقود أو السيارة بشدة فجأة؟",
    "options": [
      {
        "sv": "Lasta bilen så att sikten blir sämre",
        "ar": "تحميل السيارة بطريقة تقلل الرؤية"
      },
      {
        "sv": "Köra snabbare för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Det kan tyda på ett fel som påverkar kontroll eller hjul",
        "ar": "قد يدل ذلك على عطل يؤثر على السيطرة أو العجلات"
      },
      {
        "sv": "Ignorera varningen och fortsätta som vanligt",
        "ar": "تجاهل التحذير والمتابعة كالمعتاد"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Sänk farten säkert och låt orsaken undersökas.",
    "explanationAr": "خفف السرعة بأمان وافحص سبب المشكلة."
  },
  {
    "id": 5035,
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra om vindrutan får en spricka som påverkar sikten?",
    "questionAr": "ماذا تفعل إذا ظهر شرخ في الزجاج الأمامي يؤثر على الرؤية؟",
    "options": [
      {
        "sv": "Vänta med all kontroll tills bilen stannar",
        "ar": "تأجيل كل الفحوص حتى تتوقف السيارة"
      },
      {
        "sv": "Försöka dölja felet i stället för att kontrollera det",
        "ar": "محاولة إخفاء العطل بدلاً من فحصه"
      },
      {
        "sv": "Ta bort en säkerhetsfunktion utan att förstå orsaken",
        "ar": "تعطيل وظيفة أمان دون فهم السبب"
      },
      {
        "sv": "Åtgärda skadan och kör inte vidare om sikten eller säkerheten påverkas",
        "ar": "إصلاح الضرر وعدم متابعة القيادة إذا تأثرت الرؤية أو السلامة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Vindrutan bidrar till sikt och kan ha en viktig roll i bilens säkerhetssystem.",
    "explanationAr": "يسهم الزجاج الأمامي في الرؤية وقد يؤدي دوراً مهماً في أنظمة السلامة."
  },
  {
    "id": 5036,
    "category": "Fordonskännedom",
    "questionSv": "Varför ska du veta var varningstriangeln finns?",
    "questionAr": "لماذا يجب معرفة مكان مثلث التحذير؟",
    "options": [
      {
        "sv": "Överskrida bilens angivna gränser",
        "ar": "تجاوز الحدود المحددة للسيارة"
      },
      {
        "sv": "Använda valfri vätska eller del utan att kontrollera specifikationen",
        "ar": "استخدام أي سائل أو قطعة دون التحقق من المواصفات"
      },
      {
        "sv": "Köra snabbare för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Du kan varna andra trafikanter om bilen blir stående efter ett fel",
        "ar": "يمكنك تحذير مستخدمي الطريق إذا تعطلت السيارة وتوقفت"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Placera varningstriangel enligt situationen och gör det bara när det kan ske säkert.",
    "explanationAr": "ضع مثلث التحذير وفق الموقف ولا تفعل ذلك إلا إذا أمكن بأمان."
  },
  {
    "id": 5037,
    "category": "Fordonskännedom",
    "questionSv": "Varför är det viktigt att förstå bilens instruktionsbok?",
    "questionAr": "لماذا من المهم فهم دليل السيارة؟",
    "options": [
      {
        "sv": "Ignorera varningen och fortsätta som vanligt",
        "ar": "تجاهل التحذير والمتابعة كالمعتاد"
      },
      {
        "sv": "Den förklarar varningar, kontroller och hur bilens system ska användas",
        "ar": "إنه يشرح التحذيرات والفحوص وكيفية استخدام أنظمة السيارة"
      },
      {
        "sv": "Ta bort en säkerhetsfunktion utan att förstå orsaken",
        "ar": "تعطيل وظيفة أمان دون فهم السبب"
      },
      {
        "sv": "Lasta bilen så att sikten blir sämre",
        "ar": "تحميل السيارة بطريقة تقلل الرؤية"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Olika bilmodeller kan ha olika funktioner och instruktioner.",
    "explanationAr": "قد تختلف الوظائف والتعليمات بين طرازات السيارات المختلفة."
  },
  {
    "id": 5038,
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra om bilens ABS-varningslampa fortsätter lysa efter start?",
    "questionAr": "ماذا ينبغي أن تفعل إذا استمر ضوء تحذير ABS مضاءً بعد التشغيل؟",
    "options": [
      {
        "sv": "Överskrida bilens angivna gränser",
        "ar": "تجاوز الحدود المحددة للسيارة"
      },
      {
        "sv": "Försöka dölja felet i stället för att kontrollera det",
        "ar": "محاولة إخفاء العطل بدلاً من فحصه"
      },
      {
        "sv": "Vänta med all kontroll tills bilen stannar",
        "ar": "تأجيل كل الفحوص حتى تتوقف السيارة"
      },
      {
        "sv": "Låta systemet kontrolleras och köra försiktigt enligt bilens instruktioner",
        "ar": "فحص النظام والقيادة بحذر وفق تعليمات السيارة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "En varningslampa kan visa att systemet inte fungerar som avsett.",
    "explanationAr": "قد يشير ضوء التحذير إلى أن النظام لا يعمل كما ينبغي."
  },
  {
    "id": 5039,
    "category": "Fordonskännedom",
    "questionSv": "Varför ska lasten fördelas jämnt och hållas lågt när det är möjligt?",
    "questionAr": "لماذا ينبغي توزيع الحمولة بالتساوي ووضعها منخفضة متى أمكن؟",
    "options": [
      {
        "sv": "Använda valfri vätska eller del utan att kontrollera specifikationen",
        "ar": "استخدام أي سائل أو قطعة دون التحقق من المواصفات"
      },
      {
        "sv": "Köra snabbare för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Lasta bilen så att sikten blir sämre",
        "ar": "تحميل السيارة بطريقة تقلل الرؤية"
      },
      {
        "sv": "Det hjälper till att behålla bilens stabilitet",
        "ar": "يساعد ذلك في الحفاظ على ثبات السيارة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "En olämplig viktfördelning kan påverka styrning och stabilitet.",
    "explanationAr": "قد يؤثر توزيع الوزن غير المناسب على التوجيه والثبات."
  },
  {
    "id": 5040,
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du kontrollera om bilen drar åt ena sidan när du bromsar?",
    "questionAr": "ماذا ينبغي أن تفحص إذا انحرفت السيارة إلى جهة عند الفرملة؟",
    "options": [
      {
        "sv": "Ta bort en säkerhetsfunktion utan att förstå orsaken",
        "ar": "تعطيل وظيفة أمان دون فهم السبب"
      },
      {
        "sv": "Vänta med all kontroll tills bilen stannar",
        "ar": "تأجيل كل الفحوص حتى تتوقف السيارة"
      },
      {
        "sv": "Ignorera varningen och fortsätta som vanligt",
        "ar": "تجاهل التحذير والمتابعة كالمعتاد"
      },
      {
        "sv": "Låta bromsar och däck kontrolleras",
        "ar": "فحص الفرامل والإطارات"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Att bilen drar åt sidan vid bromsning kan tyda på ett fel som behöver åtgärdas.",
    "explanationAr": "قد يشير انحراف السيارة عند الفرملة إلى عطل يحتاج إلى معالجة."
  }
];
