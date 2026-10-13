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
  image?: string;
  reviewStatus?: "draft" | "verified";
  sourceUrl?: string;
  sourceTitle?: string;
  reviewedAt?: string;
};

// 400 original bilingual practice questions (200 existing + 200 new).
// IDs are unique and stable. This is not the official Trafikverket question bank.
export const questions: Question[] = [
  {
    "id": 1001,
    "reviewStatus": "draft",
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
    "explanationAr": "عند ممر المشاة غير المحكوم بإشارة، يجب على السائق إعطاء الأولوية للمشاة.",
    "image": "./questions/crosswalk.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/Generella-trafikregler/Overgangsstalle/",
    "sourceTitle": "Transportstyrelsen – Övergångsställe"
  },
  {
    "id": 1002,
    "reviewStatus": "draft",
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
    "explanationAr": "تُطبّق قاعدة اليمين عندما لا توجد إشارة أو قاعدة أخرى تنظم الأولوية.",
    "image": "./questions/intersection.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/Generella-trafikregler/Hogerregeln/",
    "sourceTitle": "Transportstyrelsen – Högerregeln"
  },
  {
    "id": 1003,
    "reviewStatus": "draft",
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
    "explanationAr": "واجب التوقف يعني توقفاً كاملاً، وليس مجرد تخفيف السرعة.",
    "image": "./questions/stop-sign.svg"
  },
  {
    "id": 1004,
    "reviewStatus": "draft",
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
    "explanationAr": "الضوء الأحمر يعني وجوب التوقف.",
    "image": "./questions/traffic-light.svg"
  },
  {
    "id": 1005,
    "reviewStatus": "draft",
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
    "explanationAr": "يعني الضوء الأصفر عادةً التوقف إذا أمكن ذلك بأمان.",
    "image": "./questions/traffic-light.svg"
  },
  {
    "id": 1006,
    "reviewStatus": "draft",
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
    "explanationAr": "تحقق من محيطك واستخدم الإشارة قبل تغيير المسار.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 1007,
    "reviewStatus": "draft",
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
    "explanationAr": "الإشارة الواضحة والمبكرة تساعد الآخرين على فهم نيتك.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 1008,
    "reviewStatus": "draft",
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
    "explanationAr": "اقرأ الإشارات وخفف السرعة وراعِ حركة المرور داخل الدوار.",
    "image": "./questions/roundabout.svg"
  },
  {
    "id": 1009,
    "reviewStatus": "draft",
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
    "explanationAr": "خطط للخروج وانتبه للمشاة وراكبي الدراجات.",
    "image": "./questions/crosswalk.svg"
  },
  {
    "id": 1010,
    "reviewStatus": "draft",
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
    "explanationAr": "استخدم مسار التسارع لمواءمة السرعة وادخل عندما يكون ذلك آمناً.",
    "image": "./questions/motorway.svg"
  },
  {
    "id": 1011,
    "reviewStatus": "draft",
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
    "explanationAr": "التخطيط الجيد يقلل تغيير المسارات في اللحظة الأخيرة والفرملة المفاجئة.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 1012,
    "reviewStatus": "draft",
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
    "explanationAr": "على هذه الطرق ينبغي إتاحة المجال للحافلة لمغادرة المحطة إذا أمكن ذلك دون خطر.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 1013,
    "reviewStatus": "draft",
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
    "explanationAr": "الضوء الأحمر الوامض عند معبر السكة يعني أنه لا يجوز العبور.",
    "image": "./questions/railway.svg"
  },
  {
    "id": 1014,
    "reviewStatus": "draft",
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
    "explanationAr": "سهّل مرورها دون التسبب بخطر جديد أو إغلاق الطريق بطريقة غير مناسبة.",
    "image": "./questions/emergency-triangle.svg"
  },
  {
    "id": 1015,
    "reviewStatus": "draft",
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
    "explanationAr": "يجب ألا يؤثر استخدام الهاتف على القيادة؛ لا تتعامل معه بطريقة خطرة.",
    "image": "./questions/phone.svg"
  },
  {
    "id": 1016,
    "reviewStatus": "draft",
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
    "explanationAr": "يجب ترك مساحة كافية للمركبات المقابلة وعدم إجبارها على الفرملة.",
    "image": "./questions/overtake.svg"
  },
  {
    "id": 1017,
    "reviewStatus": "draft",
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
    "explanationAr": "على من يخرج من عقار أو موقف أو محطة وقود إعطاء الأولوية.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 1018,
    "reviewStatus": "draft",
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
    "explanationAr": "لا تدخل التقاطع إذا كنت ستتوقف داخله وتعيق حركة المرور المتقاطعة.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 1019,
    "reviewStatus": "draft",
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
    "explanationAr": "تتقدم تعليمات الشرطي على إشارات المرور والعلامات المعتادة في تلك الحالة.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 1020,
    "reviewStatus": "draft",
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
    "explanationAr": "السائق مسؤول عن التأكد من أن الرجوع للخلف لا يسبب خطراً أو إعاقة.",
    "image": "./questions/parking.svg"
  },
  {
    "id": 1021,
    "reviewStatus": "draft",
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
    "explanationAr": "قد ينحرف راكب الدراجة أو يتجنب عائقاً؛ اترك مساحة كافية.",
    "image": "./questions/cycle-crossing.svg"
  },
  {
    "id": 1022,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تنظم التجهيزات المؤقتة حركة المرور أثناء أعمال الطريق؛ اتبعها بدقة.",
    "image": "./questions/roadworks.svg"
  },
  {
    "id": 1023,
    "reviewStatus": "draft",
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
    "explanationAr": "يجب أن تتمكن من التوقف أمام العوائق المتوقعة ضمن الجزء الذي تراه من الطريق.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 1024,
    "reviewStatus": "draft",
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
    "explanationAr": "اضبط السرعة والموقع حسب عرض الطريق والرؤية.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 1025,
    "reviewStatus": "draft",
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
    "explanationAr": "يجب دائماً ضبط السرعة وفق الطريق والطقس والرؤية والمركبة وحركة المرور.",
    "image": "./questions/visibility.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 1026,
    "reviewStatus": "draft",
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
    "explanationAr": "الرؤية السيئة تتطلب سرعة منخفضة والاستعداد للتوقف.",
    "image": "./questions/intersection.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 1027,
    "reviewStatus": "draft",
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
    "explanationAr": "يمكنك المتابعة فقط عندما يكون ذلك دون خطر أو إعاقة.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 1028,
    "reviewStatus": "draft",
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
    "explanationAr": "لا تنعطف فجأة ولا ترجع للخلف على الطريق السريع للوصول إلى المخرج.",
    "image": "./questions/motorway.svg"
  },
  {
    "id": 1029,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يتحرك الأطفال بشكل مفاجئ؛ اضبط السرعة واستعد للتوقف.",
    "image": "./questions/intersection.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 1030,
    "reviewStatus": "draft",
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
    "explanationAr": "أظهر عناية خاصة واضبط السرعة في الأماكن التي قد يوجد فيها مشاة.",
    "image": "./questions/crosswalk.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 1031,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يخرج شخص بين المركبات؛ تجاوز مع ترك هامش أمان.",
    "image": "./questions/secure-load.svg"
  },
  {
    "id": 1032,
    "reviewStatus": "draft",
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
    "explanationAr": "لا يتم التجاوز إلا إذا كان قانونياً ويمكن تنفيذه دون خطر.",
    "image": "./questions/overtake.svg"
  },
  {
    "id": 1033,
    "reviewStatus": "draft",
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
    "explanationAr": "الأهم هو توفر مساحة كافية، وليس إكمال التجاوز.",
    "image": "./questions/overtake.svg"
  },
  {
    "id": 1034,
    "reviewStatus": "draft",
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
    "explanationAr": "يجب على الخارجين عبر ممر المشاة توخي الحذر وإفساح المجال للمشاة.",
    "image": "./questions/crosswalk.svg"
  },
  {
    "id": 1035,
    "reviewStatus": "draft",
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
    "explanationAr": "الضوء الأخضر لا يعني الدخول إذا كنت ستتوقف وتعيق المرور المتقاطع.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 1036,
    "reviewStatus": "draft",
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
    "explanationAr": "يعتمد اختيار المسار على الإشارات والعلامات الأرضية والوجهة.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 1037,
    "reviewStatus": "draft",
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
    "explanationAr": "يجب على السائق إتاحة المجال للمشاة عند الممر غير المحكوم.",
    "image": "./questions/crosswalk.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/Generella-trafikregler/Overgangsstalle/",
    "sourceTitle": "Transportstyrelsen – Övergångsställe"
  },
  {
    "id": 1038,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يقلل المطر الرؤية والتماسك، لذا يجب تعديل السرعة.",
    "image": "./questions/visibility.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 1039,
    "reviewStatus": "draft",
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
    "explanationAr": "تجنب تغيير المسار أو الانعطاف المفاجئ الذي قد يفاجئ الآخرين.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 1040,
    "reviewStatus": "draft",
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
    "explanationAr": "لا تغطي المرايا كل المناطق حول السيارة؛ افحص المنطقة العمياء عند الحاجة.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 2001,
    "reviewStatus": "draft",
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
    "explanationAr": "إشارة STOP تعني وجوب التوقف الكامل.",
    "image": "./questions/stop-sign.svg"
  },
  {
    "id": 2002,
    "reviewStatus": "draft",
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
    "explanationAr": "تشير الإشارة إلى واجب إعطاء الأولوية وفق القواعد.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 2003,
    "reviewStatus": "draft",
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
    "explanationAr": "تحدد إشارة السرعة الحد الأعلى المسموح، وقد تحتاج إلى سرعة أقل.",
    "image": "./questions/road-signs.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 2004,
    "reviewStatus": "draft",
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
    "explanationAr": "توضح الإشارات الزرقاء الدائرية اتجاهاً أو إجراءً إلزامياً.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2005,
    "reviewStatus": "draft",
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
    "explanationAr": "تحقق من اللوحات الإضافية لمعرفة الأوقات والرسوم والشروط الأخرى.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2006,
    "reviewStatus": "draft",
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
    "explanationAr": "تهيئك إشارات التحذير لخطر في الطريق أمامك.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2007,
    "reviewStatus": "draft",
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
    "explanationAr": "تشير علامات المنع الدائرية ذات الحافة الحمراء إلى فعل محظور أو مقيّد.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2008,
    "reviewStatus": "draft",
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
    "explanationAr": "توضح اللوحات الإضافية كيفية تفسير الإشارة الرئيسية.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2009,
    "reviewStatus": "draft",
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
    "explanationAr": "تشير علامة الطريق الرئيسي إلى أن الطريق رئيسي حتى تنتهي صلاحيته أو تنطبق قاعدة أخرى.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2010,
    "reviewStatus": "draft",
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
    "explanationAr": "بعد الإشارة يجب اتباع قواعد الأولوية المعمول بها في المكان.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2011,
    "reviewStatus": "draft",
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
    "explanationAr": "اقرأ الرمز والنص إن وجد لفهم المعلومات.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2012,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يتحرك الأطفال بشكل مفاجئ؛ انتبه أكثر.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2013,
    "reviewStatus": "draft",
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
    "explanationAr": "خفف السرعة وراقب جانبي الطريق.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2014,
    "reviewStatus": "draft",
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
    "explanationAr": "تجنب المناورات المفاجئة واضبط السرعة والمسافة.",
    "image": "./questions/road-signs.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 2015,
    "reviewStatus": "draft",
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
    "explanationAr": "استعد لقيود مؤقتة ولوجود أشخاص قرب الطريق.",
    "image": "./questions/roadworks.svg"
  },
  {
    "id": 2016,
    "reviewStatus": "draft",
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
    "explanationAr": "انتبه للإشارات والحواجز والقطارات.",
    "image": "./questions/railway.svg"
  },
  {
    "id": 2017,
    "reviewStatus": "draft",
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
    "explanationAr": "لا تقد بعكس اتجاه السير المسموح.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2018,
    "reviewStatus": "draft",
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
    "explanationAr": "اختر طريقاً آخر مسموحاً بدلاً من تجاوز الإشارة.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2019,
    "reviewStatus": "draft",
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
    "explanationAr": "راعِ المشاة وانتبه في الأماكن المخصصة لحركتهم.",
    "image": "./questions/crosswalk.svg"
  },
  {
    "id": 2020,
    "reviewStatus": "draft",
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
    "explanationAr": "انتبه لكيفية اتصال مسار الدراجات بالتقاطعات والمعابر.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 2021,
    "reviewStatus": "draft",
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
    "explanationAr": "اضبط السرعة واتبع قواعد معبر الدراجات.",
    "image": "./questions/cycle-crossing.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 2022,
    "reviewStatus": "draft",
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
    "explanationAr": "تقيّد إشارة المنع التجاوز وفق الشروط المحددة.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2023,
    "reviewStatus": "draft",
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
    "explanationAr": "تختلف إشارات التوقف والوقوف؛ اقرأ الإشارة بعناية.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2024,
    "reviewStatus": "draft",
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
    "explanationAr": "التوصية لا تلغي ضرورة ضبط السرعة وفق الظروف.",
    "image": "./questions/road-signs.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 2025,
    "reviewStatus": "draft",
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
    "explanationAr": "يقل عرض الطريق، لذا خطط للمرور بحذر.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2026,
    "reviewStatus": "draft",
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
    "explanationAr": "اضبط السرعة قبل المنعطف وحافظ على السيطرة على السيارة.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2027,
    "reviewStatus": "draft",
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
    "explanationAr": "خفف السرعة وانتبه إلى استجابة السيارة.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2028,
    "reviewStatus": "draft",
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
    "explanationAr": "حافظ على المسافة وتجنب الاقتراب من الطابور بسرعة.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2029,
    "reviewStatus": "draft",
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
    "explanationAr": "يسري الحد المعلن في موضعه، لكنه قد يكون أعلى من المناسب للظروف الحالية.",
    "image": "./questions/road-signs.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 2030,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تحدد الأوقات على اللوحات الإضافية متى تسري القاعدة أو القيود.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2031,
    "reviewStatus": "draft",
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
    "explanationAr": "اقرأ الرمز وأي استثناءات على اللوحات الإضافية.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2032,
    "reviewStatus": "draft",
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
    "explanationAr": "عدّل قيادتك عندما تكون المعلومات غير واضحة واجعل السلامة أولوية.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2033,
    "reviewStatus": "draft",
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
    "explanationAr": "خطط للطريق ولا تدخل بافتراض أنك ستتمكن من المرور إلى الجهة الأخرى.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2034,
    "reviewStatus": "draft",
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
    "explanationAr": "تساعدك إشارات المعلومات على العثور على الخدمات؛ واصل القيادة بانتباه.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2035,
    "reviewStatus": "draft",
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
    "explanationAr": "قد توجه التحويلات المؤقتة إلى مسارات أو طرق أخرى.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 2036,
    "reviewStatus": "draft",
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
    "explanationAr": "تحقق من المركبات المسموح بها واستخدم مداخل ومخارج الطريق بصورة صحيحة.",
    "image": "./questions/motorway.svg"
  },
  {
    "id": 2037,
    "reviewStatus": "draft",
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
    "explanationAr": "انتبه إلى تغيّر التقاطعات والسرعات ومستخدمي الطريق الآخرين.",
    "image": "./questions/intersection.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 2038,
    "reviewStatus": "draft",
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
    "explanationAr": "راقب الطريق واضبط القيادة وفق الخطر الذي تشير إليه العلامة.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2039,
    "reviewStatus": "draft",
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
    "explanationAr": "قد توجد الحيوانات قرب الطريق حتى عندما يوجهها السياج إلى معابر محددة.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 2040,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تكون معلومات GPS قديمة؛ اتبع الإشارات الحالية.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 3001,
    "reviewStatus": "draft",
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
    "explanationAr": "تزيد السرعة الأعلى أو زمن الاستجابة الأطول مسافة رد الفعل.",
    "image": "./questions/braking-distance.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 3002,
    "reviewStatus": "draft",
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
    "explanationAr": "تتأثر مسافة الفرملة بالسرعة وحالة الطريق والإطارات والفرامل.",
    "image": "./questions/braking-distance.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 3003,
    "reviewStatus": "draft",
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
    "explanationAr": "توفر المسافة هامش أمان إذا تغيرت حركة المرور بسرعة.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 3004,
    "reviewStatus": "draft",
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
    "explanationAr": "يضعف التعب الانتباه ورد الفعل؛ لا تواصل القيادة وأنت نعسان.",
    "image": "./questions/fatigue.svg"
  },
  {
    "id": 3005,
    "reviewStatus": "draft",
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
    "explanationAr": "يؤثر الكحول في تقدير المخاطر حتى لو شعر السائق أنه غير متأثر.",
    "image": "./questions/fatigue.svg"
  },
  {
    "id": 3006,
    "reviewStatus": "draft",
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
    "explanationAr": "اقرأ معلومات الدواء ولا تقد إذا كانت قدرتك متأثرة.",
    "image": "./questions/fatigue.svg"
  },
  {
    "id": 3007,
    "reviewStatus": "draft",
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
    "explanationAr": "اضبط السرعة حسب الرؤية وزد المسافة عن المركبات الأخرى.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 3008,
    "reviewStatus": "draft",
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
    "explanationAr": "تجنب الفرملة القوية وحركات المقود المفاجئة عند ضعف التماسك.",
    "image": "./questions/braking-distance.svg"
  },
  {
    "id": 3009,
    "reviewStatus": "draft",
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
    "explanationAr": "يقلل الانزلاق المائي تماس الإطارات بالطريق؛ استجب بسلاسة.",
    "image": "./questions/wet-road.svg"
  },
  {
    "id": 3010,
    "reviewStatus": "draft",
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
    "explanationAr": "خفف السرعة واستعد للتوقف في الأماكن التي يوجد فيها أطفال.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 3011,
    "reviewStatus": "draft",
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
    "explanationAr": "راكبو الدراجات غير محميين وقد يتأثرون بالحفر أو الرياح أو العوائق.",
    "image": "./questions/cycle-crossing.svg"
  },
  {
    "id": 3012,
    "reviewStatus": "draft",
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
    "explanationAr": "تجنب التحديق في الضوء واضبط القيادة حتى تتحسن الرؤية.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 3013,
    "reviewStatus": "draft",
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
    "explanationAr": "يجب استخدام حزام الأمان بطريقة صحيحة طوال الرحلة.",
    "image": "./questions/seatbelt.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 3014,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يقلل مسند الرأس المضبوط بشكل صحيح خطر إصابات الرقبة عند الاصطدام من الخلف.",
    "image": "./questions/seatbelt.svg"
  },
  {
    "id": 3015,
    "reviewStatus": "draft",
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
    "explanationAr": "اتبع تعليمات مقاعد الأطفال وتجهيزات السيارة.",
    "image": "./questions/child-seat.svg"
  },
  {
    "id": 3016,
    "reviewStatus": "draft",
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
    "explanationAr": "تؤثر الحمولة في توزيع الوزن وقد تزيد المخاطر عند المناورة لتفادي شيء.",
    "image": "./questions/secure-load.svg"
  },
  {
    "id": 3017,
    "reviewStatus": "draft",
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
    "explanationAr": "انتبه لفرق الإنقاذ والمصابين والتوقف المفاجئ.",
    "image": "./questions/emergency-triangle.svg"
  },
  {
    "id": 3018,
    "reviewStatus": "draft",
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
    "explanationAr": "أمّن المكان واطلب المساعدة عند الحاجة قبل تعريض نفسك للخطر.",
    "image": "./questions/emergency-triangle.svg"
  },
  {
    "id": 3019,
    "reviewStatus": "draft",
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
    "explanationAr": "قد بطريقة تتيح لك التوقف ضمن المسافة التي تستطيع رؤيتها فعلاً.",
    "image": "./questions/visibility.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 3020,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يقلل الماء التماسك وقد يضعف المطر الرؤية.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 3021,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تساعد الاستراحات المخطط لها على مقاومة التعب وتحسين الانتباه.",
    "image": "./questions/fatigue.svg"
  },
  {
    "id": 3022,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يجعلك التشتت تفوت الإشارات أو المخاطر أو تغيرات المرور.",
    "image": "./questions/phone.svg"
  },
  {
    "id": 3023,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تتفاعل الخيول فجأة مع الصوت والقرب؛ أظهر المراعاة.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 3024,
    "reviewStatus": "draft",
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
    "explanationAr": "لا تواصل بسرعة تمنعك من اكتشاف العوائق في الوقت المناسب.",
    "image": "./questions/visibility.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 3025,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يكشف النظر السريع فوق الكتف مستخدمي الطريق الذين لا تظهرهم المرايا.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 3026,
    "reviewStatus": "draft",
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
    "explanationAr": "اصنع هامشاً أكبر أمامك كي تتمكن من الفرملة بسلاسة عند الحاجة.",
    "image": "./questions/braking-distance.svg"
  },
  {
    "id": 3027,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يحتاج المشاة إلى أوقات مختلفة لعبور الطريق.",
    "image": "./questions/crosswalk.svg"
  },
  {
    "id": 3028,
    "reviewStatus": "draft",
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
    "explanationAr": "توفر المسافة الأكبر وقتاً للاستجابة إذا قام السائق بمناورة مفاجئة.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 3029,
    "reviewStatus": "draft",
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
    "explanationAr": "خفف السرعة قبل المنعطف بدلاً من الفرملة الشديدة داخله.",
    "image": "./questions/braking-distance.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 3030,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يخفي الوهج المشاة والإشارات والعوائق.",
    "image": "./questions/crosswalk.svg"
  },
  {
    "id": 3031,
    "reviewStatus": "draft",
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
    "explanationAr": "خفف السرعة وحافظ على تحكم ثابت عندما تؤثر الرياح في المركبة.",
    "image": "./questions/secure-load.svg"
  },
  {
    "id": 3032,
    "reviewStatus": "draft",
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
    "explanationAr": "تحتاج فرق الإنقاذ إلى مساحة عمل وقد تتغير حركة المرور بسرعة.",
    "image": "./questions/emergency-triangle.svg"
  },
  {
    "id": 3033,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يختلف التماسك بين أجزاء الطريق؛ الحركات السلسة تقلل خطر فقدان السيطرة.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 3034,
    "reviewStatus": "draft",
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
    "explanationAr": "تحتاج جميع المركبات إلى سرعة مناسبة ومسافة كافية على الأسطح الزلقة.",
    "image": "./questions/winter-road.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 3035,
    "reviewStatus": "draft",
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
    "explanationAr": "تجنب مناورة هلع قد تؤدي إلى اصطدام بحركة مقابلة أو عائق.",
    "image": "./questions/overtake.svg"
  },
  {
    "id": 3036,
    "reviewStatus": "draft",
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
    "explanationAr": "يثبت الحزام الجسم في الموضع المناسب ويقلل خطر الإصابة.",
    "image": "./questions/seatbelt.svg"
  },
  {
    "id": 3037,
    "reviewStatus": "draft",
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
    "explanationAr": "تساعد الإشارات الواضحة والقيادة المخططة السائقين خلفك على الاستجابة.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 3038,
    "reviewStatus": "draft",
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
    "explanationAr": "يجب أن تتمكن من اكتشاف العوائق والتوقف ضمن المسافة المرئية.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 3039,
    "reviewStatus": "draft",
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
    "explanationAr": "تعني أعمال الطريق أن أشخاصاً قد يكونون قريبين من حركة المرور وأن مسار القيادة قد يتغير.",
    "image": "./questions/roadworks.svg"
  },
  {
    "id": 3040,
    "reviewStatus": "draft",
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
    "explanationAr": "اترك مسافة تمنحك وقتاً للاستجابة إذا فرمل سائق الدراجة أو انحرف لتفادي شيء.",
    "image": "./questions/cycle-crossing.svg"
  },
  {
    "id": 4001,
    "reviewStatus": "draft",
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
    "explanationAr": "التخطيط المسبق يجعل القيادة أكثر سلاسة وقد يقلل الحاجة إلى الطاقة.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4002,
    "reviewStatus": "draft",
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
    "explanationAr": "تجنب التسارع القوي والفرملة غير الضرورية.",
    "image": "./questions/braking-distance.svg"
  },
  {
    "id": 4003,
    "reviewStatus": "draft",
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
    "explanationAr": "أطفئ المحرك عندما يكون ذلك مناسباً وآمناً واتبع القواعد السارية.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4004,
    "reviewStatus": "draft",
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
    "explanationAr": "افحص الضغط وفق توصيات السيارة.",
    "image": "./questions/eco-driving.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/Fordon/Fordonsregler/Dack/vinterdack/",
    "sourceTitle": "Transportstyrelsen – Däck och vinterdäck"
  },
  {
    "id": 4005,
    "reviewStatus": "draft",
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
    "explanationAr": "أزل الأشياء التي لا تحتاج إلى نقلها.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4006,
    "reviewStatus": "draft",
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
    "explanationAr": "أزل صندوق السقف عندما لا تكون بحاجة إليه.",
    "image": "./questions/air-resistance.svg"
  },
  {
    "id": 4007,
    "reviewStatus": "draft",
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
    "explanationAr": "يقلل التوقع الجيد التغيرات غير الضرورية في السرعة.",
    "image": "./questions/braking-distance.svg"
  },
  {
    "id": 4008,
    "reviewStatus": "draft",
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
    "explanationAr": "اتبع توصيات السيارة ولا تقد بطريقة تجهد المحرك بشكل غير مناسب.",
    "image": "./questions/secure-load.svg"
  },
  {
    "id": 4009,
    "reviewStatus": "draft",
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
    "explanationAr": "اجمع المهام في رحلة واحدة أو امشِ أو استخدم الدراجة عندما يناسب ذلك.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4010,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تقلل الرحلات الأقل عدد المركبات واستهلاك الطاقة والانبعاثات والازدحام.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4011,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تقلل الحافلات والقطارات الانبعاثات لكل شخص وفق الإشغال ومصدر الطاقة.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4012,
    "reviewStatus": "draft",
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
    "explanationAr": "راقب حركة المرور أمامك وعدّل دواسة الوقود مبكراً.",
    "image": "./questions/traffic-light.svg"
  },
  {
    "id": 4013,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تقلل السرعة المعتدلة والمناسبة الاستهلاك وتحسن السلامة.",
    "image": "./questions/eco-driving.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 4014,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تكشف الصيانة الصحيحة الأعطال وتساعد السيارة على العمل كما ينبغي.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 4015,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يكون المشي أو ركوب الدراجة بديلاً للرحلات القصيرة عندما يكون ذلك آمناً وممكناً.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4016,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تقلل الرحلات المنفصلة الأقل من استهلاك الوقود والانبعاثات.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4017,
    "reviewStatus": "draft",
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
    "explanationAr": "افحص ضغط الإطارات بانتظام وهي باردة وفق التعليمات.",
    "image": "./questions/tire-pressure.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/Fordon/Fordonsregler/Dack/vinterdack/",
    "sourceTitle": "Transportstyrelsen – Däck och vinterdäck"
  },
  {
    "id": 4018,
    "reviewStatus": "draft",
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
    "explanationAr": "راقب الطريق وارفع قدمك عن الوقود مبكراً عندما تخف سرعة المرور.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 4019,
    "reviewStatus": "draft",
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
    "explanationAr": "يتأثر الأثر البيئي بمصدر الطاقة والتصنيع وطريقة استخدام السيارة.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4020,
    "reviewStatus": "draft",
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
    "explanationAr": "سلّم السوائل الخطرة إلى جهة الجمع أو إعادة التدوير المناسبة.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 4021,
    "reviewStatus": "draft",
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
    "explanationAr": "استخدم المنتجات الصحيحة واتبع فترات الصيانة في دليل السيارة.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 4022,
    "reviewStatus": "draft",
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
    "explanationAr": "افحص السيارة إذا تآكلت الإطارات بشكل غير متساوٍ أو انحرفت السيارة إلى جانب.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4023,
    "reviewStatus": "draft",
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
    "explanationAr": "تقلل القيادة الهادئة ونظام العادم السليم الإزعاج.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4024,
    "reviewStatus": "draft",
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
    "explanationAr": "يستهلك التكييف الطاقة؛ استخدمه باعتدال وقد بأمان.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4025,
    "reviewStatus": "draft",
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
    "explanationAr": "خطط المسافة والسرعة وفق حركة المرور أمامك.",
    "image": "./questions/eco-driving.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 4026,
    "reviewStatus": "draft",
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
    "explanationAr": "يساعد التخطيط على تجنب التسارع غير الضروري والفرملة القوية.",
    "image": "./questions/traffic-light.svg"
  },
  {
    "id": 4027,
    "reviewStatus": "draft",
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
    "explanationAr": "اختر وسيلة النقل وفق المسافة والسلامة والظروف العملية.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4028,
    "reviewStatus": "draft",
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
    "explanationAr": "أطفئ المحرك عندما تسمح الظروف واتبع القواعد المحلية.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4029,
    "reviewStatus": "draft",
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
    "explanationAr": "ثبّت الحمولة بأمان ولا تنقل إلا ما تحتاج إليه.",
    "image": "./questions/air-resistance.svg"
  },
  {
    "id": 4030,
    "reviewStatus": "draft",
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
    "explanationAr": "راقب حركة المرور أمامك وخطط للفرملة.",
    "image": "./questions/braking-distance.svg"
  },
  {
    "id": 4031,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تحتوي مياه الغسيل على زيوت ومواد كيميائية لا ينبغي أن تصل إلى مصارف الأمطار.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4032,
    "reviewStatus": "draft",
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
    "explanationAr": "دع المحرك يعمل فقط عندما تكون هناك حاجة.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 4033,
    "reviewStatus": "draft",
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
    "explanationAr": "تحقق من المسار مسبقاً لكن اتبع إشارات الطريق أثناء الرحلة دائماً.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 4034,
    "reviewStatus": "draft",
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
    "explanationAr": "اتبع تعليمات الصيانة وعالج أضواء التحذير والأعطال.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 4035,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تقلل مشاركة السيارة عدد المركبات اللازمة للرحلة نفسها.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4036,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تؤثر الملحقات الإضافية في الاستهلاك حتى عندما لا تستخدم.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4037,
    "reviewStatus": "draft",
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
    "explanationAr": "توفر القيادة المخططة هامش أمان أفضل وحملاً أكثر انتظاماً.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4038,
    "reviewStatus": "draft",
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
    "explanationAr": "استخدم أماكن الجمع المخصصة للزيت وسائل التبريد والمواد الكيميائية الأخرى.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 4039,
    "reviewStatus": "draft",
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
    "explanationAr": "خطط للرحلة وتجنب الرحلات القصيرة غير الضرورية وقت الذروة إذا أمكن.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 4040,
    "reviewStatus": "draft",
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
    "explanationAr": "اتبع المواصفات المعتمدة وتوصيات السيارة.",
    "image": "./questions/tire-pressure.svg"
  },
  {
    "id": 5001,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يؤدي استمرار القيادة مع انخفاض ضغط الزيت إلى تلف خطير بالمحرك.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 5002,
    "reviewStatus": "draft",
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
    "explanationAr": "اتبع ضغط الإطارات الموصى به وافحصها بانتظام.",
    "image": "./questions/tire-pressure.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/Fordon/Fordonsregler/Dack/vinterdack/",
    "sourceTitle": "Transportstyrelsen – Däck och vinterdäck"
  },
  {
    "id": 5003,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يشير تغير إحساس الفرامل إلى عطل يؤثر على السلامة.",
    "image": "./questions/braking-distance.svg"
  },
  {
    "id": 5004,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يساعد ABS على الحفاظ على التوجيه، لكنه لا يضمن أقصر مسافة فرملة على كل الأسطح.",
    "image": "./questions/braking-distance.svg"
  },
  {
    "id": 5005,
    "reviewStatus": "draft",
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
    "explanationAr": "ثبّت الحمولة حتى لا تنزلق أو تندفع إلى الأمام.",
    "image": "./questions/secure-load.svg"
  },
  {
    "id": 5006,
    "reviewStatus": "draft",
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
    "explanationAr": "اتبع دليل السيارة وعالج فقدان الضغط أو الأضرار.",
    "image": "./questions/tire-pressure.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/Fordon/Fordonsregler/Dack/vinterdack/",
    "sourceTitle": "Transportstyrelsen – Däck och vinterdäck"
  },
  {
    "id": 5007,
    "reviewStatus": "draft",
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
    "explanationAr": "استخدم المساحات وغاسل الزجاج وإزالة الضباب عند الحاجة.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 5008,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يؤدي ارتفاع الحرارة إلى تلف المحرك؛ تعامل مع الأمر وفق دليل السيارة.",
    "image": "./questions/coolant.svg"
  },
  {
    "id": 5009,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تقلل الإضاءة المعطلة الرؤية وتجعل السيارة أقل وضوحاً.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 5010,
    "reviewStatus": "draft",
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
    "explanationAr": "تضعف شفرات المساحات البالية الرؤية خاصة في المطر والثلج الممزوج بالماء.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 5011,
    "reviewStatus": "draft",
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
    "explanationAr": "اضبط مسند الرأس وفق تعليمات السيارة لتوفير دعم جيد.",
    "image": "./questions/seatbelt.svg"
  },
  {
    "id": 5012,
    "reviewStatus": "draft",
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
    "explanationAr": "اتبع التعليمات المتعلقة بالمسافة والموضع ومقاعد الأطفال قرب الوسائد الهوائية.",
    "image": "./questions/seatbelt.svg"
  },
  {
    "id": 5013,
    "reviewStatus": "draft",
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
    "explanationAr": "لا تخمّن؛ فقد تشير أضواء التحذير إلى أعطال متفاوتة الخطورة.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 5014,
    "reviewStatus": "draft",
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
    "explanationAr": "تحقق من أن الإطارات تحقق المتطلبات الحالية ولا تحتوي على أضرار.",
    "image": "./questions/tire-pressure.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/Fordon/Fordonsregler/Dack/vinterdack/",
    "sourceTitle": "Transportstyrelsen – Däck och vinterdäck"
  },
  {
    "id": 5015,
    "reviewStatus": "draft",
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
    "explanationAr": "افحص السبب بدلاً من الاكتفاء بتغيير الإطار.",
    "image": "./questions/tire-pressure.svg"
  },
  {
    "id": 5016,
    "reviewStatus": "draft",
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
    "explanationAr": "حافظ على نظافة اللوحات وتركيبها بشكل صحيح.",
    "image": "./questions/road-signs.svg"
  },
  {
    "id": 5017,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يكون السبب الإطارات أو الفرامل أو أعطالاً أخرى تحتاج إلى فحص.",
    "image": "./questions/braking-distance.svg"
  },
  {
    "id": 5018,
    "reviewStatus": "draft",
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
    "explanationAr": "تأكد من ملء الخزان بسائل يناسب ظروف الطقس.",
    "image": "./questions/windshield.svg"
  },
  {
    "id": 5019,
    "reviewStatus": "draft",
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
    "explanationAr": "استخدم الضوء العالي عندما يحسن الرؤية ولا يبهر الآخرين.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 5020,
    "reviewStatus": "draft",
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
    "explanationAr": "استخدم الإضاءة وفق القواعد ووظائف السيارة.",
    "image": "./questions/winter-road.svg"
  },
  {
    "id": 5021,
    "reviewStatus": "draft",
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
    "explanationAr": "تعرّف على الرموز في دليل سيارتك تحديداً.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 5022,
    "reviewStatus": "draft",
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
    "explanationAr": "افحص البطارية إذا كان تشغيل السيارة بطيئاً أو ظهرت أضواء تحذير.",
    "image": "./questions/electric-car.svg"
  },
  {
    "id": 5023,
    "reviewStatus": "draft",
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
    "explanationAr": "افحص المستوى وفق التعليمات ولا تفتح نظام تبريد ساخناً بإهمال.",
    "image": "./questions/coolant.svg"
  },
  {
    "id": 5024,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يشكل تسرب الوقود خطر حريق؛ لا تواصل القيادة قبل التأكد من السلامة.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 5025,
    "reviewStatus": "draft",
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
    "explanationAr": "تحقق من إغلاق كل شيء بإحكام قبل القيادة.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 5026,
    "reviewStatus": "draft",
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
    "explanationAr": "تقلل المرايا المناطق العمياء لكنها لا تحل محل الفحص المباشر عند الحاجة.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 5027,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يشير تحذير الفرامل إلى مشكلة خطيرة تتعلق بالسلامة.",
    "image": "./questions/braking-distance.svg"
  },
  {
    "id": 5028,
    "reviewStatus": "draft",
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
    "explanationAr": "ضع الحمولة وثبتها بحيث لا تضعف الرؤية أو السيطرة.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 5029,
    "reviewStatus": "draft",
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
    "explanationAr": "اتبع حدود حمولة السقف التي تحددها الشركة وافحص أدوات التثبيت.",
    "image": "./questions/air-resistance.svg"
  },
  {
    "id": 5030,
    "reviewStatus": "draft",
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
    "explanationAr": "يساعد جدول الصيانة في فحص الأنظمة المهمة في الوقت المناسب.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 5031,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تجعل الإضاءة غير الكافية الرؤية ورؤيتك من الآخرين صعبتين.",
    "image": "./questions/headlights.svg"
  },
  {
    "id": 5032,
    "reviewStatus": "draft",
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
    "explanationAr": "استخدم أحزمة تثبيت مناسبة وضع الحمولة بثبات.",
    "image": "./questions/secure-load.svg"
  },
  {
    "id": 5033,
    "reviewStatus": "draft",
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
    "explanationAr": "اتبع القواعد الحالية للإطارات الشتوية واضبط التجهيزات حسب حالة الطريق.",
    "image": "./questions/winter-road.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/Fordon/Fordonsregler/Dack/vinterdack/",
    "sourceTitle": "Transportstyrelsen – Däck och vinterdäck"
  },
  {
    "id": 5034,
    "reviewStatus": "draft",
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
    "explanationAr": "خفف السرعة بأمان وافحص سبب المشكلة.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 5035,
    "reviewStatus": "draft",
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
    "explanationAr": "يسهم الزجاج الأمامي في الرؤية وقد يؤدي دوراً مهماً في أنظمة السلامة.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 5036,
    "reviewStatus": "draft",
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
    "explanationAr": "ضع مثلث التحذير وفق الموقف ولا تفعل ذلك إلا إذا أمكن بأمان.",
    "image": "./questions/emergency-triangle.svg"
  },
  {
    "id": 5037,
    "reviewStatus": "draft",
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
    "explanationAr": "قد تختلف الوظائف والتعليمات بين طرازات السيارات المختلفة.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 5038,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يشير ضوء التحذير إلى أن النظام لا يعمل كما ينبغي.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 5039,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يؤثر توزيع الوزن غير المناسب على التوجيه والثبات.",
    "image": "./questions/secure-load.svg"
  },
  {
    "id": 5040,
    "reviewStatus": "draft",
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
    "explanationAr": "قد يشير انحراف السيارة عند الفرملة إلى عطل يحتاج إلى معالجة.",
    "image": "./questions/braking-distance.svg"
  },
  {
    "id": 6001,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad bör du göra om en trafiksignal är ur funktion?",
    "questionAr": "ماذا تفعل إذا كانت إشارة المرور معطلة؟",
    "options": [
      {
        "sv": "Lita på att andra förare har sett dig",
        "ar": "الاعتماد على أن السائقين الآخرين قد رأوك"
      },
      {
        "sv": "Sakta ner, var extra uppmärksam och följ tillämpliga väjningsregler",
        "ar": "خفف السرعة وانتبه أكثر واتبع قواعد إعطاء الأولوية المطبقة"
      },
      {
        "sv": "Följa GPS även när skyltningen säger något annat",
        "ar": "اتباع GPS حتى عندما تشير العلامات إلى غير ذلك"
      },
      {
        "sv": "Stanna så att du blockerar annan trafik",
        "ar": "التوقف بطريقة تعرقل حركة المرور الأخرى"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/traffic-light.svg"
  },
  {
    "id": 6002,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad betyder en heldragen linje mellan körfält eller körriktningar?",
    "questionAr": "ماذا يعني الخط المتصل بين المسارات أو اتجاهات السير؟",
    "options": [
      {
        "sv": "Öka farten för att hinna före andra",
        "ar": "زيادة السرعة للحاق بالآخرين"
      },
      {
        "sv": "Utgå från att andra trafikanter alltid väjer",
        "ar": "افتراض أن مستخدمي الطريق الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Du ska normalt inte korsa linjen eller köra om där",
        "ar": "لا ينبغي عادةً عبور الخط أو التجاوز عنده"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 6003,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Hur ska du agera när ett körfält tar slut?",
    "questionAr": "كيف تتصرف عندما ينتهي مسار؟",
    "options": [
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون إشارة"
      },
      {
        "sv": "Ignorera vägmarkeringar och tillfälliga anvisningar",
        "ar": "تجاهل علامات الطريق والتعليمات المؤقتة"
      },
      {
        "sv": "Följa GPS även när skyltningen säger något annat",
        "ar": "اتباع GPS حتى عندما تشير العلامات إلى غير ذلك"
      },
      {
        "sv": "Anpassa farten, visa tydligt vad du tänker göra och gå in när det är säkert",
        "ar": "اضبط السرعة وأوضح نيتك وانتقل عندما يكون ذلك آمناً"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/motorway.svg"
  },
  {
    "id": 6004,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "När får du använda ett körfält reserverat för bussar?",
    "questionAr": "متى يجوز لك استخدام مسار مخصص للحافلات؟",
    "options": [
      {
        "sv": "Bara när skyltning eller regler tillåter ditt fordon",
        "ar": "فقط عندما تسمح الإشارات أو القواعد لمركبتك بذلك"
      },
      {
        "sv": "Följa GPS även när skyltningen säger något annat",
        "ar": "اتباع GPS حتى عندما تشير العلامات إلى غير ذلك"
      },
      {
        "sv": "Stanna så att du blockerar annan trafik",
        "ar": "التوقف بطريقة تعرقل حركة المرور الأخرى"
      },
      {
        "sv": "Lita på att andra förare har sett dig",
        "ar": "الاعتماد على أن السائقين الآخرين قد رأوك"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/bus-stop.svg"
  },
  {
    "id": 6005,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad är det viktigaste syftet med att använda signalhornet?",
    "questionAr": "ما الهدف الأساسي من استخدام البوق؟",
    "options": [
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون إشارة"
      },
      {
        "sv": "Att varna när det behövs för att förebygga fara",
        "ar": "التحذير عندما تكون هناك حاجة لمنع الخطر"
      },
      {
        "sv": "Öka farten för att hinna före andra",
        "ar": "زيادة السرعة للحاق بالآخرين"
      },
      {
        "sv": "Utgå från att andra trafikanter alltid väjer",
        "ar": "افتراض أن مستخدمي الطريق الآخرين سيعطون الأولوية دائماً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/traffic-light.svg"
  },
  {
    "id": 6006,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra innan du öppnar bildörren mot körbanan?",
    "questionAr": "ماذا تفعل قبل فتح باب السيارة باتجاه الطريق؟",
    "options": [
      {
        "sv": "Utgå från att andra trafikanter alltid väjer",
        "ar": "افتراض أن مستخدمي الطريق الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون إشارة"
      },
      {
        "sv": "Kontrollera spegel och död vinkel efter cyklister och annan trafik",
        "ar": "افحص المرآة والمنطقة العمياء بحثاً عن دراجات أو حركة مرور"
      },
      {
        "sv": "Öka farten för att hinna före andra",
        "ar": "زيادة السرعة للحاق بالآخرين"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 6007,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad bör du göra om du missar en avfart på motorvägen?",
    "questionAr": "ماذا تفعل إذا فاتك مخرج الطريق السريع؟",
    "options": [
      {
        "sv": "Utgå från att andra trafikanter alltid väjer",
        "ar": "افتراض أن مستخدمي الطريق الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون إشارة"
      },
      {
        "sv": "Ignorera vägmarkeringar och tillfälliga anvisningar",
        "ar": "تجاهل علامات الطريق والتعليمات المؤقتة"
      },
      {
        "sv": "Fortsätta till nästa avfart och aldrig backa",
        "ar": "تابع إلى المخرج التالي ولا ترجع للخلف أبداً"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/motorway.svg"
  },
  {
    "id": 6008,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "När bör du undvika att köra om nära ett backkrön?",
    "questionAr": "متى ينبغي تجنب التجاوز قرب قمة مرتفع؟",
    "options": [
      {
        "sv": "När sikten framåt är otillräcklig för att genomföra omkörningen säkert",
        "ar": "عندما لا تكون الرؤية كافية لإتمام التجاوز بأمان"
      },
      {
        "sv": "Öka farten för att hinna före andra",
        "ar": "زيادة السرعة للحاق بالآخرين"
      },
      {
        "sv": "Utgå från att andra trafikanter alltid väjer",
        "ar": "افتراض أن مستخدمي الطريق الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون إشارة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/mountain-road.svg"
  },
  {
    "id": 6009,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad gäller om en polis dirigerar trafiken i en korsning?",
    "questionAr": "ماذا ينطبق إذا كان شرطي ينظم المرور عند تقاطع؟",
    "options": [
      {
        "sv": "Öka farten för att hinna före andra",
        "ar": "زيادة السرعة للحاق بالآخرين"
      },
      {
        "sv": "Följ polisens anvisningar även om de skiljer sig från signalen",
        "ar": "اتبع تعليمات الشرطي حتى لو اختلفت عن الإشارة الضوئية"
      },
      {
        "sv": "Fortsätta även när det inte finns tillräckligt utrymme",
        "ar": "المتابعة حتى عندما لا توجد مساحة كافية"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 6010,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra om det inte finns plats att köra igenom en korsning utan att stanna mitt i den?",
    "questionAr": "ماذا تفعل إذا لم توجد مساحة لعبور التقاطع دون التوقف في وسطه؟",
    "options": [
      {
        "sv": "Stanna så att du blockerar annan trafik",
        "ar": "التوقف بطريقة تعرقل حركة المرور الأخرى"
      },
      {
        "sv": "Lita på att andra förare har sett dig",
        "ar": "الاعتماد على أن السائقين الآخرين قد رأوك"
      },
      {
        "sv": "Vänta före korsningen tills du kan köra igenom den helt",
        "ar": "انتظر قبل التقاطع حتى تتمكن من عبوره بالكامل"
      },
      {
        "sv": "Följa GPS även när skyltningen säger något annat",
        "ar": "اتباع GPS حتى عندما تشير العلامات إلى غير ذلك"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 6011,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Hur bör du agera när du kör ut från en gångfarts- eller gågata till en annan väg?",
    "questionAr": "كيف تتصرف عند الخروج من شارع مشترك أو شارع مشاة إلى طريق آخر؟",
    "options": [
      {
        "sv": "Stanna så att du blockerar annan trafik",
        "ar": "التوقف بطريقة تعرقل حركة المرور الأخرى"
      },
      {
        "sv": "Lita på att andra förare har sett dig",
        "ar": "الاعتماد على أن السائقين الآخرين قد رأوك"
      },
      {
        "sv": "Behålla samma fart oavsett sikt och väglag",
        "ar": "الحفاظ على السرعة نفسها مهما كانت الرؤية وحالة الطريق"
      },
      {
        "sv": "Köra mycket uppmärksamt och lämna företräde enligt de regler som gäller",
        "ar": "قد بحذر شديد وأعطِ الأولوية وفق القواعد المطبقة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/crosswalk.svg"
  },
  {
    "id": 6012,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad gör du om en mötande bil närmar sig och ett hinder finns på din sida av en smal väg?",
    "questionAr": "ماذا تفعل إذا اقتربت سيارة مقابلة وكان العائق في جهتك على طريق ضيق؟",
    "options": [
      {
        "sv": "Sakta ner och låt mötet ske säkert; var beredd att lämna företräde",
        "ar": "خفف السرعة واجعل التقابل آمناً واستعد لإعطاء الأولوية"
      },
      {
        "sv": "Ignorera vägmarkeringar och tillfälliga anvisningar",
        "ar": "تجاهل علامات الطريق والتعليمات المؤقتة"
      },
      {
        "sv": "Följa GPS även när skyltningen säger något annat",
        "ar": "اتباع GPS حتى عندما تشير العلامات إلى غير ذلك"
      },
      {
        "sv": "Stanna så att du blockerar annan trafik",
        "ar": "التوقف بطريقة تعرقل حركة المرور الأخرى"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/narrow-road.svg"
  },
  {
    "id": 6013,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad bör du göra innan du vänder på vägen?",
    "questionAr": "ماذا ينبغي أن تفعل قبل الاستدارة والعودة بالاتجاه المعاكس؟",
    "options": [
      {
        "sv": "Använda signalhornet i stället för att anpassa körningen",
        "ar": "استخدام البوق بدلاً من تعديل القيادة"
      },
      {
        "sv": "Kontrollera att manövern är tillåten och kan göras utan fara eller hinder",
        "ar": "تحقق من أن المناورة مسموحة ويمكن تنفيذها دون خطر أو عرقلة"
      },
      {
        "sv": "Behålla samma fart oavsett sikt och väglag",
        "ar": "الحفاظ على السرعة نفسها مهما كانت الرؤية وحالة الطريق"
      },
      {
        "sv": "Byta körfält utan att kontrollera döda vinkeln",
        "ar": "تغيير المسار دون فحص المنطقة العمياء"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 6014,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad innebär det att en körriktningsvisare är påslagen?",
    "questionAr": "ماذا يعني تشغيل الغماز؟",
    "options": [
      {
        "sv": "Öka farten för att hinna före andra",
        "ar": "زيادة السرعة للحاق بالآخرين"
      },
      {
        "sv": "Utgå från att andra trafikanter alltid väjer",
        "ar": "افتراض أن مستخدمي الطريق الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Den visar din avsikt men ger dig inte automatiskt företräde",
        "ar": "إنه يوضح نيتك لكنه لا يمنحك الأولوية تلقائياً"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 6015,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad ska du tänka på när du kör igenom en tunnel?",
    "questionAr": "ما الذي يجب الانتباه إليه عند المرور عبر نفق؟",
    "options": [
      {
        "sv": "Byta körfält utan att kontrollera döda vinkeln",
        "ar": "تغيير المسار دون فحص المنطقة العمياء"
      },
      {
        "sv": "Använda signalhornet i stället för att anpassa körningen",
        "ar": "استخدام البوق بدلاً من تعديل القيادة"
      },
      {
        "sv": "Fortsätta även när det inte finns tillräckligt utrymme",
        "ar": "المتابعة حتى عندما لا توجد مساحة كافية"
      },
      {
        "sv": "Följ skyltning, håll avstånd och undvik onödiga stopp",
        "ar": "اتبع الإشارات واترك مسافة وتجنب التوقف غير الضروري"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/motorway.svg"
  },
  {
    "id": 6016,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Hur bör du köra när du passerar en stillastående spårvagn eller buss där människor kan gå ut?",
    "questionAr": "كيف تقود عند تجاوز ترام أو حافلة متوقفة قد ينزل منها أشخاص؟",
    "options": [
      {
        "sv": "Sänk farten och var beredd på människor som kan korsa vägen",
        "ar": "خفف السرعة واستعد لاحتمال عبور أشخاص للطريق"
      },
      {
        "sv": "Byta körfält utan att kontrollera döda vinkeln",
        "ar": "تغيير المسار دون فحص المنطقة العمياء"
      },
      {
        "sv": "Använda signalhornet i stället för att anpassa körningen",
        "ar": "استخدام البوق بدلاً من تعديل القيادة"
      },
      {
        "sv": "Fortsätta även när det inte finns tillräckligt utrymme",
        "ar": "المتابعة حتى عندما لا توجد مساحة كافية"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/bus-stop.svg"
  },
  {
    "id": 6017,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad bör du göra om du måste stanna på en motorväg på grund av ett fel?",
    "questionAr": "ماذا تفعل إذا اضطررت للتوقف على طريق سريع بسبب عطل؟",
    "options": [
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون إشارة"
      },
      {
        "sv": "Försök nå en säker plats utanför körbanan och varna andra trafikanter",
        "ar": "حاول الوصول إلى مكان آمن خارج مسار السير ونبّه الآخرين"
      },
      {
        "sv": "Öka farten för att hinna före andra",
        "ar": "زيادة السرعة للحاق بالآخرين"
      },
      {
        "sv": "Utgå från att andra trafikanter alltid väjer",
        "ar": "افتراض أن مستخدمي الطريق الآخرين سيعطون الأولوية دائماً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/emergency-triangle.svg"
  },
  {
    "id": 6018,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad gäller när du kör på en väg med körfältspilar målade på körbanan?",
    "questionAr": "ما الذي ينطبق عند وجود أسهم مرسومة على المسار؟",
    "options": [
      {
        "sv": "Ignorera vägmarkeringar och tillfälliga anvisningar",
        "ar": "تجاهل علامات الطريق والتعليمات المؤقتة"
      },
      {
        "sv": "Följa GPS även när skyltningen säger något annat",
        "ar": "اتباع GPS حتى عندما تشير العلامات إلى غير ذلك"
      },
      {
        "sv": "Välj rätt körfält i god tid och följ pilarnas anvisning",
        "ar": "اختر المسار الصحيح مسبقاً واتبع اتجاه الأسهم"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون إشارة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 6019,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra när ett trafikljus visar rött även om vägen ser tom ut?",
    "questionAr": "ماذا تفعل عندما تكون الإشارة حمراء حتى لو بدا الطريق خالياً؟",
    "options": [
      {
        "sv": "Behålla samma fart oavsett sikt och väglag",
        "ar": "الحفاظ على السرعة نفسها مهما كانت الرؤية وحالة الطريق"
      },
      {
        "sv": "Byta körfält utan att kontrollera döda vinkeln",
        "ar": "تغيير المسار دون فحص المنطقة العمياء"
      },
      {
        "sv": "Använda signalhornet i stället för att anpassa körningen",
        "ar": "استخدام البوق بدلاً من تعديل القيادة"
      },
      {
        "sv": "Stanna och vänta på tillåten signal",
        "ar": "توقف وانتظر الإشارة التي تسمح بالمرور"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/traffic-light.svg"
  },
  {
    "id": 6020,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Hur bör du närma dig ett övergångsställe där sikten skyms av en parkerad skåpbil?",
    "questionAr": "كيف تقترب من ممر مشاة تحجب سيارة متوقفة الرؤية عنده؟",
    "options": [
      {
        "sv": "Sänka farten tydligt och kunna stanna om någon kommer fram",
        "ar": "خفف السرعة بوضوح وكن مستعداً للتوقف إذا ظهر أحد"
      },
      {
        "sv": "Byta körfält utan att kontrollera döda vinkeln",
        "ar": "تغيير المسار دون فحص المنطقة العمياء"
      },
      {
        "sv": "Använda signalhornet i stället för att anpassa körningen",
        "ar": "استخدام البوق بدلاً من تعديل القيادة"
      },
      {
        "sv": "Fortsätta även när det inte finns tillräckligt utrymme",
        "ar": "المتابعة حتى عندما لا توجد مساحة كافية"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/crosswalk.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/Generella-trafikregler/Overgangsstalle/",
    "sourceTitle": "Transportstyrelsen – Övergångsställe"
  },
  {
    "id": 6021,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad bör du kontrollera när du kör in på en väg från en parkeringsplats?",
    "questionAr": "ما الذي يجب التحقق منه عند الخروج من موقف إلى الطريق؟",
    "options": [
      {
        "sv": "Ignorera vägmarkeringar och tillfälliga anvisningar",
        "ar": "تجاهل علامات الطريق والتعليمات المؤقتة"
      },
      {
        "sv": "Trafik från båda håll samt gående och cyklister",
        "ar": "حركة المرور من الاتجاهين والمشاة وراكبي الدراجات"
      },
      {
        "sv": "Utgå från att andra trafikanter alltid väjer",
        "ar": "افتراض أن مستخدمي الطريق الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون إشارة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 6022,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra om du kör förbi en cykelbana och ska svänga höger?",
    "questionAr": "ماذا تفعل إذا كنت ستنعطف يميناً عابراً مسار دراجات؟",
    "options": [
      {
        "sv": "Öka farten för att hinna före andra",
        "ar": "زيادة السرعة للحاق بالآخرين"
      },
      {
        "sv": "Utgå från att andra trafikanter alltid väjer",
        "ar": "افتراض أن مستخدمي الطريق الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Kontrollera cyklister och lämna dem det företräde som reglerna kräver",
        "ar": "افحص وجود الدراجات وأعطها الأولوية التي تفرضها القواعد"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/cycle-crossing.svg"
  },
  {
    "id": 6023,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Hur bör du agera när en väg smalnar av och trafiken växelvis måste passera?",
    "questionAr": "كيف تتصرف عندما يضيق الطريق ويتعين على المركبات المرور بالتناوب؟",
    "options": [
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      },
      {
        "sv": "Öka farten för att hinna före andra",
        "ar": "زيادة السرعة للحاق بالآخرين"
      },
      {
        "sv": "Utgå från att andra trafikanter alltid väjer",
        "ar": "افتراض أن مستخدمي الطريق الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Sakta ner, visa hänsyn och följ skyltar eller anvisningar",
        "ar": "خفف السرعة وراعِ الآخرين واتبع الإشارات أو التعليمات"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/narrow-road.svg"
  },
  {
    "id": 6024,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad är säkrast om du kommer till en korsning där trafikljuset blinkar gult?",
    "questionAr": "ما التصرف الأكثر أماناً عند تقاطع تومض فيه الإشارة باللون الأصفر؟",
    "options": [
      {
        "sv": "Sänk farten, var uppmärksam och följ övriga regler och skyltar",
        "ar": "خفف السرعة وانتبه واتبع بقية القواعد والإشارات"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون إشارة"
      },
      {
        "sv": "Ignorera vägmarkeringar och tillfälliga anvisningar",
        "ar": "تجاهل علامات الطريق والتعليمات المؤقتة"
      },
      {
        "sv": "Följa GPS även när skyltningen säger något annat",
        "ar": "اتباع GPS حتى عندما تشير العلامات إلى غير ذلك"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/traffic-light.svg"
  },
  {
    "id": 6025,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "När ska du använda varningsblinkers?",
    "questionAr": "متى تستخدم أضواء التحذير الرباعية؟",
    "options": [
      {
        "sv": "Följa GPS även när skyltningen säger något annat",
        "ar": "اتباع GPS حتى عندما تشير العلامات إلى غير ذلك"
      },
      {
        "sv": "När du behöver varna andra för en fara eller ett särskilt stopp enligt situationen",
        "ar": "عندما تحتاج إلى تنبيه الآخرين لخطر أو توقف خاص بحسب الحالة"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون إشارة"
      },
      {
        "sv": "Ignorera vägmarkeringar och tillfälliga anvisningar",
        "ar": "تجاهل علامات الطريق والتعليمات المؤقتة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/emergency-triangle.svg"
  },
  {
    "id": 6026,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad bör du göra före en vänstersväng på en väg med mötande trafik?",
    "questionAr": "ماذا تفعل قبل الانعطاف يساراً على طريق فيه حركة مقابلة؟",
    "options": [
      {
        "sv": "Öka farten för att hinna före andra",
        "ar": "زيادة السرعة للحاق بالآخرين"
      },
      {
        "sv": "Utgå från att andra trafikanter alltid väjer",
        "ar": "افتراض أن مستخدمي الطريق الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Placera dig rätt, signalera och kontrollera mötande trafik innan svängen",
        "ar": "تموضع بشكل صحيح وأشر وافحص حركة المرور المقابلة قبل الانعطاف"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 6027,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad gäller om du kör ut från en bensinstation över en gång- eller cykelbana?",
    "questionAr": "ما الذي ينطبق عند الخروج من محطة وقود عبر ممر مشاة أو دراجات؟",
    "options": [
      {
        "sv": "Öka farten för att hinna före andra",
        "ar": "زيادة السرعة للحاق بالآخرين"
      },
      {
        "sv": "Utgå från att andra trafikanter alltid väjer",
        "ar": "افتراض أن مستخدمي الطريق الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون إشارة"
      },
      {
        "sv": "Lämna företräde åt trafikanter på banan och kör ut försiktigt",
        "ar": "أعطِ الأولوية لمستخدمي الممر واخرج بحذر"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/crosswalk.svg"
  },
  {
    "id": 6028,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra om en vägbom vid en järnvägsövergång börjar sänkas?",
    "questionAr": "ماذا تفعل إذا بدأ حاجز معبر السكة الحديدية بالانخفاض؟",
    "options": [
      {
        "sv": "Stanna och försök aldrig passera under bommen",
        "ar": "توقف ولا تحاول المرور تحت الحاجز أبداً"
      },
      {
        "sv": "Lita på att andra förare har sett dig",
        "ar": "الاعتماد على أن السائقين الآخرين قد رأوك"
      },
      {
        "sv": "Behålla samma fart oavsett sikt och väglag",
        "ar": "الحفاظ على السرعة نفسها مهما كانت الرؤية وحالة الطريق"
      },
      {
        "sv": "Byta körfält utan att kontrollera döda vinkeln",
        "ar": "تغيير المسار دون فحص المنطقة العمياء"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/railway.svg"
  },
  {
    "id": 6029,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad är viktigt när du passerar ett vägarbete med tillfälliga körfält?",
    "questionAr": "ما المهم عند المرور بأعمال طريق مع مسارات مؤقتة؟",
    "options": [
      {
        "sv": "Utgå från att andra trafikanter alltid väjer",
        "ar": "افتراض أن مستخدمي الطريق الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Följ tillfällig skyltning, sänk farten och var beredd på arbetare",
        "ar": "اتبع الإشارات المؤقتة وخفف السرعة واستعد لوجود عمال"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      },
      {
        "sv": "Öka farten för att hinna före andra",
        "ar": "زيادة السرعة للحاق بالآخرين"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/roadworks.svg"
  },
  {
    "id": 6030,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra när en bil framför visar att den ska svänga men du vill köra förbi?",
    "questionAr": "ماذا تفعل إذا أشارت السيارة أمامك للانعطاف وأردت تجاوزها؟",
    "options": [
      {
        "sv": "Stanna så att du blockerar annan trafik",
        "ar": "التوقف بطريقة تعرقل حركة المرور الأخرى"
      },
      {
        "sv": "Lita på att andra förare har sett dig",
        "ar": "الاعتماد على أن السائقين الآخرين قد رأوك"
      },
      {
        "sv": "Avvakta och bedöm situationen; kör inte förbi om det skapar risk",
        "ar": "انتظر وقيّم الوضع ولا تتجاوز إذا كان ذلك يسبب خطراً"
      },
      {
        "sv": "Följa GPS även när skyltningen säger något annat",
        "ar": "اتباع GPS حتى عندما تشير العلامات إلى غير ذلك"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/overtake.svg"
  },
  {
    "id": 6031,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Hur ska du agera när du kör in i ett område där många barn leker nära vägen?",
    "questionAr": "كيف تتصرف عند دخول منطقة يلعب فيها أطفال قرب الطريق؟",
    "options": [
      {
        "sv": "Öka farten för att hinna före andra",
        "ar": "زيادة السرعة للحاق بالآخرين"
      },
      {
        "sv": "Utgå från att andra trafikanter alltid väjer",
        "ar": "افتراض أن مستخدمي الطريق الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون إشارة"
      },
      {
        "sv": "Sänka farten och vara beredd på att barn kan röra sig oväntat",
        "ar": "خفف السرعة واستعد لتحركات الأطفال غير المتوقعة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/children.svg"
  },
  {
    "id": 6032,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra när du lämnar en parkeringsruta och kör ut i trafiken?",
    "questionAr": "ماذا تفعل عند مغادرة مكان الوقوف والدخول إلى حركة المرور؟",
    "options": [
      {
        "sv": "Kontrollera speglar och döda vinkeln, signalera och kör ut när det är säkert",
        "ar": "افحص المرايا والمنطقة العمياء وأشر واخرج عندما يكون آمناً"
      },
      {
        "sv": "Använda signalhornet i stället för att anpassa körningen",
        "ar": "استخدام البوق بدلاً من تعديل القيادة"
      },
      {
        "sv": "Fortsätta även när det inte finns tillräckligt utrymme",
        "ar": "المتابعة حتى عندما لا توجد مساحة كافية"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 6033,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad gör du om vägmarkeringar tillfälligt leder trafiken i en annan riktning?",
    "questionAr": "ماذا تفعل إذا وجهت العلامات المؤقتة حركة المرور إلى اتجاه مختلف؟",
    "options": [
      {
        "sv": "Byta körfält utan att kontrollera döda vinkeln",
        "ar": "تغيير المسار دون فحص المنطقة العمياء"
      },
      {
        "sv": "Följer de aktuella anvisningarna och kör extra uppmärksamt",
        "ar": "اتبع التعليمات الحالية وقد بانتباه إضافي"
      },
      {
        "sv": "Lita på att andra förare har sett dig",
        "ar": "الاعتماد على أن السائقين الآخرين قد رأوك"
      },
      {
        "sv": "Behålla samma fart oavsett sikt och väglag",
        "ar": "الحفاظ على السرعة نفسها مهما كانت الرؤية وحالة الطريق"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/roadworks.svg"
  },
  {
    "id": 6034,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Varför bör du hålla till höger på en flerfilig väg när du inte kör om, om reglerna och trafiken medger det?",
    "questionAr": "لماذا ينبغي التزام اليمين على طريق متعدد المسارات عندما لا تتجاوز، إذا سمحت القواعد والمرور؟",
    "options": [
      {
        "sv": "Stanna så att du blockerar annan trafik",
        "ar": "التوقف بطريقة تعرقل حركة المرور الأخرى"
      },
      {
        "sv": "Lita på att andra förare har sett dig",
        "ar": "الاعتماد على أن السائقين الآخرين قد رأوك"
      },
      {
        "sv": "Det hjälper trafiken att flyta och lämnar utrymme för omkörning",
        "ar": "يساعد على انسياب المرور ويترك مجالاً للتجاوز"
      },
      {
        "sv": "Följa GPS även när skyltningen säger något annat",
        "ar": "اتباع GPS حتى عندما تشير العلامات إلى غير ذلك"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/motorway.svg"
  },
  {
    "id": 6035,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad bör du göra när du närmar dig en bro där möte kan vara svårt?",
    "questionAr": "ماذا تفعل عند الاقتراب من جسر يصعب عليه تقابل المركبات؟",
    "options": [
      {
        "sv": "Utgå från att andra trafikanter alltid väjer",
        "ar": "افتراض أن مستخدمي الطريق الآخرين سيعطون الأولوية دائماً"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون إشارة"
      },
      {
        "sv": "Ignorera vägmarkeringar och tillfälliga anvisningar",
        "ar": "تجاهل علامات الطريق والتعليمات المؤقتة"
      },
      {
        "sv": "Anpassa farten och följ skyltning samt mötande trafik",
        "ar": "اضبط السرعة واتبع الإشارات وراقب المركبات المقابلة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/narrow-road.svg"
  },
  {
    "id": 6036,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Hur bör du agera när du kör i ett område med mycket fotgängare och begränsad sikt?",
    "questionAr": "كيف تتصرف في منطقة كثيرة المشاة والرؤية فيها محدودة؟",
    "options": [
      {
        "sv": "Köra långsamt nog för att kunna stanna direkt vid behov",
        "ar": "قد ببطء يسمح بالتوقف فور الحاجة"
      },
      {
        "sv": "Använda signalhornet i stället för att anpassa körningen",
        "ar": "استخدام البوق بدلاً من تعديل القيادة"
      },
      {
        "sv": "Fortsätta även när det inte finns tillräckligt utrymme",
        "ar": "المتابعة حتى عندما لا توجد مساحة كافية"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/crosswalk.svg"
  },
  {
    "id": 6037,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad gör du om en trafikregel och en instruktion från behörig trafikdirigering verkar stå i konflikt?",
    "questionAr": "ماذا تفعل إذا بدا أن قاعدة مرورية تتعارض مع تعليمات تنظيم مرور مخوّل؟",
    "options": [
      {
        "sv": "Byta körfält utan att kontrollera döda vinkeln",
        "ar": "تغيير المسار دون فحص المنطقة العمياء"
      },
      {
        "sv": "Följa behörig dirigering och agera försiktigt",
        "ar": "اتبع توجيهات تنظيم المرور المخوّلة وتصرف بحذر"
      },
      {
        "sv": "Lita på att andra förare har sett dig",
        "ar": "الاعتماد على أن السائقين الآخرين قد رأوك"
      },
      {
        "sv": "Behålla samma fart oavsett sikt och väglag",
        "ar": "الحفاظ على السرعة نفسها مهما كانت الرؤية وحالة الطريق"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 6038,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad ska du tänka på när du passerar en olycksplats där räddningspersonal arbetar?",
    "questionAr": "ما الذي يجب الانتباه إليه عند المرور بموقع حادث يعمل فيه رجال الإنقاذ؟",
    "options": [
      {
        "sv": "Ignorera vägmarkeringar och tillfälliga anvisningar",
        "ar": "تجاهل علامات الطريق والتعليمات المؤقتة"
      },
      {
        "sv": "Följa GPS även när skyltningen säger något annat",
        "ar": "اتباع GPS حتى عندما تشير العلامات إلى غير ذلك"
      },
      {
        "sv": "Sänk farten, följ anvisningar och lämna gott utrymme",
        "ar": "خفف السرعة واتبع التعليمات واترك مساحة كافية"
      },
      {
        "sv": "Göra en plötslig manöver utan att signalera",
        "ar": "إجراء مناورة مفاجئة دون إشارة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/emergency-triangle.svg"
  },
  {
    "id": 6039,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad är rätt agerande om ett fordon framför plötsligt stannar vid ett övergångsställe?",
    "questionAr": "ما التصرف الصحيح إذا توقفت مركبة أمامك فجأة عند ممر المشاة؟",
    "options": [
      {
        "sv": "Använda signalhornet i stället för att anpassa körningen",
        "ar": "استخدام البوق بدلاً من تعديل القيادة"
      },
      {
        "sv": "Fortsätta även när det inte finns tillräckligt utrymme",
        "ar": "المتابعة حتى عندما لا توجد مساحة كافية"
      },
      {
        "sv": "Fortsätta utan att kontrollera omgivningen",
        "ar": "المتابعة دون فحص المحيط"
      },
      {
        "sv": "Bromsa och var beredd på att gående korsar framför fordonet",
        "ar": "فرمل واستعد لعبور المشاة أمام المركبة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/crosswalk.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/Generella-trafikregler/Overgangsstalle/",
    "sourceTitle": "Transportstyrelsen – Övergångsställe"
  },
  {
    "id": 6040,
    "reviewStatus": "draft",
    "category": "Trafikregler",
    "questionSv": "Vad ska du göra om du upptäcker att du kör mot en enkelriktad väg från fel håll?",
    "questionAr": "ماذا تفعل إذا اكتشفت أنك تتجه إلى طريق أحادي الاتجاه من الجهة الخاطئة؟",
    "options": [
      {
        "sv": "Stanna säkert och hitta en laglig väg att vända eller lämna platsen",
        "ar": "توقف بأمان وابحث عن طريقة قانونية للعودة أو مغادرة المكان"
      },
      {
        "sv": "Behålla samma fart oavsett sikt och väglag",
        "ar": "الحفاظ على السرعة نفسها مهما كانت الرؤية وحالة الطريق"
      },
      {
        "sv": "Byta körfält utan att kontrollera döda vinkeln",
        "ar": "تغيير المسار دون فحص المنطقة العمياء"
      },
      {
        "sv": "Använda signalhornet i stället för att anpassa körningen",
        "ar": "استخدام البوق بدلاً من تعديل القيادة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Anpassa körningen efter situationen, följ gällande trafikregler och se till att åtgärden kan göras säkert.",
    "explanationAr": "عدّل القيادة حسب الموقف، واتبع قواعد المرور السارية وتأكد من أن التصرف آمن.",
    "image": "./questions/no-entry.svg"
  },
  {
    "id": 7001,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett vägmärke som förbjuder omkörning för tunga lastbilar?",
    "questionAr": "ماذا تعني إشارة تمنع الشاحنات الثقيلة من التجاوز؟",
    "options": [
      {
        "sv": "Märket betyder att du ska öka hastigheten",
        "ar": "الإشارة تعني أنه يجب زيادة السرعة"
      },
      {
        "sv": "Förare av de fordon som omfattas får inte köra om enligt förbudet",
        "ar": "لا يجوز لسائقي المركبات المشمولة بالتجاوز وفق المنع"
      },
      {
        "sv": "Märket betyder alltid att du har företräde",
        "ar": "الإشارة تعني دائماً أن الأولوية لك"
      },
      {
        "sv": "Det är bara en rekommendation som kan ignoreras",
        "ar": "إنها مجرد توصية يمكن تجاهلها"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/no-overtake.svg"
  },
  {
    "id": 7002,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som anger maximal fordonshöjd?",
    "questionAr": "ماذا تعني إشارة تحدد أقصى ارتفاع للمركبة؟",
    "options": [
      {
        "sv": "Märket innebär att du inte behöver vara uppmärksam",
        "ar": "الإشارة تعني أنك لست بحاجة للانتباه"
      },
      {
        "sv": "Märket kan ignoreras om du känner vägen",
        "ar": "يمكن تجاهل الإشارة إذا كنت تعرف الطريق"
      },
      {
        "sv": "Fordon som är högre än angivet mått får inte passera där begränsningen gäller",
        "ar": "لا يجوز للمركبات الأعلى من القياس المحدد المرور في الموضع المشمول"
      },
      {
        "sv": "Du behöver bara följa märket om andra gör det",
        "ar": "لا تحتاج إلى اتباع الإشارة إلا إذا فعل الآخرون ذلك"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/height-limit.svg"
  },
  {
    "id": 7003,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som anger viktbegränsning?",
    "questionAr": "ماذا تعني إشارة تحدد الوزن؟",
    "options": [
      {
        "sv": "Märket betyder att alla fordon får passera",
        "ar": "الإشارة تعني أن جميع المركبات يمكنها المرور"
      },
      {
        "sv": "Du behöver bara följa märket om andra gör det",
        "ar": "لا تحتاج إلى اتباع الإشارة إلا إذا فعل الآخرون ذلك"
      },
      {
        "sv": "Märket innebär att du inte behöver vara uppmärksam",
        "ar": "الإشارة تعني أنك لست بحاجة للانتباه"
      },
      {
        "sv": "Fordon som överskrider angiven vikt får inte köra vidare där förbudet gäller",
        "ar": "لا يجوز للمركبات التي تتجاوز الوزن المحدد المتابعة في المنطقة المشمولة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/weight-limit.svg"
  },
  {
    "id": 7004,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad varnar en skylt för sidvind för?",
    "questionAr": "من ماذا تحذر إشارة الرياح الجانبية؟",
    "options": [
      {
        "sv": "Kraftig vind kan påverka fordonets kurs, särskilt höga fordon",
        "ar": "قد تؤثر الرياح القوية في مسار المركبة، خصوصاً المركبات العالية"
      },
      {
        "sv": "Märket betyder alltid att du har företräde",
        "ar": "الإشارة تعني دائماً أن الأولوية لك"
      },
      {
        "sv": "Det är bara en rekommendation som kan ignoreras",
        "ar": "إنها مجرد توصية يمكن تجاهلها"
      },
      {
        "sv": "Märket betyder att du ska öka hastigheten",
        "ar": "الإشارة تعني أنه يجب زيادة السرعة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/crosswind.svg"
  },
  {
    "id": 7005,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för mötande trafik?",
    "questionAr": "ماذا تعني إشارة تحذر من حركة مرور مقابلة؟",
    "options": [
      {
        "sv": "Märket betyder att alla fordon får passera",
        "ar": "الإشارة تعني أن جميع المركبات يمكنها المرور"
      },
      {
        "sv": "Du ska vara beredd på fordon från motsatt riktning",
        "ar": "يجب الاستعداد لمركبات قادمة من الاتجاه المعاكس"
      },
      {
        "sv": "Märket gäller endast på natten oavsett informationen",
        "ar": "تنطبق الإشارة ليلاً فقط بغض النظر عن المعلومات"
      },
      {
        "sv": "Märket är enbart till för att visa närmaste stad",
        "ar": "الإشارة مخصصة فقط لإظهار أقرب مدينة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/two-way.svg"
  },
  {
    "id": 7006,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för brant nedförsbacke?",
    "questionAr": "ماذا تعني إشارة تحذر من منحدر حاد إلى الأسفل؟",
    "options": [
      {
        "sv": "Märket betyder att du ska öka hastigheten",
        "ar": "الإشارة تعني أنه يجب زيادة السرعة"
      },
      {
        "sv": "Det innebär alltid att parkering är tillåten",
        "ar": "هذا يعني دائماً أن الوقوف مسموح"
      },
      {
        "sv": "Vägen lutar kraftigt nedåt och du bör anpassa hastigheten i god tid",
        "ar": "الطريق ينحدر بشدة وينبغي ضبط السرعة مسبقاً"
      },
      {
        "sv": "Det är bara en rekommendation som kan ignoreras",
        "ar": "إنها مجرد توصية يمكن تجاهلها"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/mountain-road.svg"
  },
  {
    "id": 7007,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för brant uppförsbacke?",
    "questionAr": "ماذا تعني إشارة تحذر من صعود حاد؟",
    "options": [
      {
        "sv": "Märket gäller bara när vägen är tom",
        "ar": "تنطبق الإشارة فقط عندما يكون الطريق خالياً"
      },
      {
        "sv": "Du kan bortse från tilläggstavlorna",
        "ar": "يمكنك تجاهل اللوحات الإضافية"
      },
      {
        "sv": "Märket gäller endast på natten oavsett informationen",
        "ar": "تنطبق الإشارة ليلاً فقط بغض النظر عن المعلومات"
      },
      {
        "sv": "Vägen stiger kraftigt och du bör vara beredd på ändrade köregenskaper",
        "ar": "الطريق يصعد بشدة وينبغي الاستعداد لتغير خصائص القيادة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/mountain-road.svg"
  },
  {
    "id": 7008,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för stenskott eller löst grus?",
    "questionAr": "ماذا تعني إشارة تحذر من الحصى المتطاير أو الحصى السائب؟",
    "options": [
      {
        "sv": "Löst material kan minska greppet och kastas upp av andra fordon",
        "ar": "قد يقلل الحصى السائب التماسك وقد تقذفه المركبات الأخرى"
      },
      {
        "sv": "Märket betyder att du ska öka hastigheten",
        "ar": "الإشارة تعني أنه يجب زيادة السرعة"
      },
      {
        "sv": "Det innebär alltid att parkering är tillåten",
        "ar": "هذا يعني دائماً أن الوقوف مسموح"
      },
      {
        "sv": "Märket gäller bara när vägen är tom",
        "ar": "تنطبق الإشارة فقط عندما يكون الطريق خالياً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/loose-gravel.svg"
  },
  {
    "id": 7009,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för fallande sten?",
    "questionAr": "ماذا تعني إشارة تحذر من تساقط الصخور؟",
    "options": [
      {
        "sv": "Märket är enbart till för att visa närmaste stad",
        "ar": "الإشارة مخصصة فقط لإظهار أقرب مدينة"
      },
      {
        "sv": "Sten kan falla på eller ligga på körbanan",
        "ar": "قد تسقط الصخور على الطريق أو تكون موجودة عليه"
      },
      {
        "sv": "Du kan bortse från tilläggstavlorna",
        "ar": "يمكنك تجاهل اللوحات الإضافية"
      },
      {
        "sv": "Märket gäller endast på natten oavsett informationen",
        "ar": "تنطبق الإشارة ليلاً فقط بغض النظر عن المعلومات"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/falling-rocks.svg"
  },
  {
    "id": 7010,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för köbildning?",
    "questionAr": "ماذا تعني إشارة تحذر من تشكل طوابير؟",
    "options": [
      {
        "sv": "Märket gäller endast på natten oavsett informationen",
        "ar": "تنطبق الإشارة ليلاً فقط بغض النظر عن المعلومات"
      },
      {
        "sv": "Märket är enbart till för att visa närmaste stad",
        "ar": "الإشارة مخصصة فقط لإظهار أقرب مدينة"
      },
      {
        "sv": "Trafiken kan stanna plötsligt längre fram; öka uppmärksamheten och håll avstånd",
        "ar": "قد تتوقف حركة المرور فجأة أمامك؛ انتبه أكثر واترك مسافة"
      },
      {
        "sv": "Du kan bortse från tilläggstavlorna",
        "ar": "يمكنك تجاهل اللوحات الإضافية"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/traffic-queue.svg"
  },
  {
    "id": 7011,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för trafiksignal längre fram?",
    "questionAr": "ماذا تعني إشارة تحذر من إشارة ضوئية أمامك؟",
    "options": [
      {
        "sv": "Märket innebär att du inte behöver vara uppmärksam",
        "ar": "الإشارة تعني أنك لست بحاجة للانتباه"
      },
      {
        "sv": "Märket kan ignoreras om du känner vägen",
        "ar": "يمكن تجاهل الإشارة إذا كنت تعرف الطريق"
      },
      {
        "sv": "Märket betyder alltid att du har företräde",
        "ar": "الإشارة تعني دائماً أن الأولوية لك"
      },
      {
        "sv": "Var beredd att anpassa farten och stanna vid signalen",
        "ar": "استعد لتعديل السرعة والتوقف عند الإشارة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/traffic-light.svg"
  },
  {
    "id": 7012,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för tvåvägstrafik efter en sträcka?",
    "questionAr": "ماذا تعني إشارة تحذر من بدء حركة باتجاهين؟",
    "options": [
      {
        "sv": "Mötande trafik kan förekomma efter övergången",
        "ar": "قد تظهر حركة مرور مقابلة بعد نقطة الانتقال"
      },
      {
        "sv": "Märket är enbart till för att visa närmaste stad",
        "ar": "الإشارة مخصصة فقط لإظهار أقرب مدينة"
      },
      {
        "sv": "Märket betyder att alla fordon får passera",
        "ar": "الإشارة تعني أن جميع المركبات يمكنها المرور"
      },
      {
        "sv": "Du behöver bara följa märket om andra gör det",
        "ar": "لا تحتاج إلى اتباع الإشارة إلا إذا فعل الآخرون ذلك"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/two-way.svg"
  },
  {
    "id": 7013,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som förbjuder vänstersväng?",
    "questionAr": "ماذا تعني إشارة تمنع الانعطاف يساراً؟",
    "options": [
      {
        "sv": "Märket gäller endast på natten oavsett informationen",
        "ar": "تنطبق الإشارة ليلاً فقط بغض النظر عن المعلومات"
      },
      {
        "sv": "Du får inte svänga vänster där märket gäller",
        "ar": "لا يجوز الانعطاف يساراً في المكان الذي تنطبق فيه الإشارة"
      },
      {
        "sv": "Märket gäller bara när vägen är tom",
        "ar": "تنطبق الإشارة فقط عندما يكون الطريق خالياً"
      },
      {
        "sv": "Du kan bortse från tilläggstavlorna",
        "ar": "يمكنك تجاهل اللوحات الإضافية"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/turn-prohibition.svg"
  },
  {
    "id": 7014,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som förbjuder högersväng?",
    "questionAr": "ماذا تعني إشارة تمنع الانعطاف يميناً؟",
    "options": [
      {
        "sv": "Märket gäller endast på natten oavsett informationen",
        "ar": "تنطبق الإشارة ليلاً فقط بغض النظر عن المعلومات"
      },
      {
        "sv": "Märket är enbart till för att visa närmaste stad",
        "ar": "الإشارة مخصصة فقط لإظهار أقرب مدينة"
      },
      {
        "sv": "Du får inte svänga höger där märket gäller",
        "ar": "لا يجوز الانعطاف يميناً في المكان الذي تنطبق فيه الإشارة"
      },
      {
        "sv": "Du kan bortse från tilläggstavlorna",
        "ar": "يمكنك تجاهل اللوحات الإضافية"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/turn-prohibition.svg"
  },
  {
    "id": 7015,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som förbjuder U-sväng?",
    "questionAr": "ماذا تعني إشارة منع الدوران للعودة بالاتجاه المعاكس؟",
    "options": [
      {
        "sv": "Du kan bortse från tilläggstavlorna",
        "ar": "يمكنك تجاهل اللوحات الإضافية"
      },
      {
        "sv": "Märket gäller endast på natten oavsett informationen",
        "ar": "تنطبق الإشارة ليلاً فقط بغض النظر عن المعلومات"
      },
      {
        "sv": "Märket är enbart till för att visa närmaste stad",
        "ar": "الإشارة مخصصة فقط لإظهار أقرب مدينة"
      },
      {
        "sv": "Du får inte göra en U-sväng där förbudet gäller",
        "ar": "لا يجوز الدوران للعودة بالاتجاه المعاكس حيث ينطبق المنع"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/turn-prohibition.svg"
  },
  {
    "id": 7016,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som förbjuder trafik med motorfordon?",
    "questionAr": "ماذا تعني إشارة منع مرور المركبات الآلية؟",
    "options": [
      {
        "sv": "Motorfordon som omfattas av förbudet får inte köra in",
        "ar": "لا يجوز للمركبات الآلية المشمولة بالمنع الدخول"
      },
      {
        "sv": "Märket kan ignoreras om du känner vägen",
        "ar": "يمكن تجاهل الإشارة إذا كنت تعرف الطريق"
      },
      {
        "sv": "Märket betyder alltid att du har företräde",
        "ar": "الإشارة تعني دائماً أن الأولوية لك"
      },
      {
        "sv": "Det är bara en rekommendation som kan ignoreras",
        "ar": "إنها مجرد توصية يمكن تجاهلها"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/no-entry.svg"
  },
  {
    "id": 7017,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som förbjuder gångtrafik?",
    "questionAr": "ماذا تعني إشارة منع المشاة؟",
    "options": [
      {
        "sv": "Märket gäller bara när vägen är tom",
        "ar": "تنطبق الإشارة فقط عندما يكون الطريق خالياً"
      },
      {
        "sv": "Gående får inte använda den sträcka som omfattas av märket",
        "ar": "لا يجوز للمشاة استخدام الجزء الذي تشملُه الإشارة"
      },
      {
        "sv": "Märket betyder att du ska öka hastigheten",
        "ar": "الإشارة تعني أنه يجب زيادة السرعة"
      },
      {
        "sv": "Det innebär alltid att parkering är tillåten",
        "ar": "هذا يعني دائماً أن الوقوف مسموح"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/crosswalk.svg"
  },
  {
    "id": 7018,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som förbjuder cykeltrafik?",
    "questionAr": "ماذا تعني إشارة منع الدراجات؟",
    "options": [
      {
        "sv": "Märket är enbart till för att visa närmaste stad",
        "ar": "الإشارة مخصصة فقط لإظهار أقرب مدينة"
      },
      {
        "sv": "Märket betyder att alla fordon får passera",
        "ar": "الإشارة تعني أن جميع المركبات يمكنها المرور"
      },
      {
        "sv": "Cyklande får inte fortsätta på den sträcka där förbudet gäller",
        "ar": "لا يجوز لراكبي الدراجات المتابعة في الجزء المشمول بالمنع"
      },
      {
        "sv": "Märket gäller endast på natten oavsett informationen",
        "ar": "تنطبق الإشارة ليلاً فقط بغض النظر عن المعلومات"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/cycle-crossing.svg"
  },
  {
    "id": 7019,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som visar en farthinder eller gupp?",
    "questionAr": "ماذا تعني إشارة مطب أو عائق لتهدئة السرعة؟",
    "options": [
      {
        "sv": "Du kan bortse från tilläggstavlorna",
        "ar": "يمكنك تجاهل اللوحات الإضافية"
      },
      {
        "sv": "Märket gäller endast på natten oavsett informationen",
        "ar": "تنطبق الإشارة ليلاً فقط بغض النظر عن المعلومات"
      },
      {
        "sv": "Märket är enbart till för att visa närmaste stad",
        "ar": "الإشارة مخصصة فقط لإظهار أقرب مدينة"
      },
      {
        "sv": "Sänk hastigheten så att du passerar hindret kontrollerat",
        "ar": "خفف السرعة لتمر فوق العائق بشكل مسيطر عليه"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/speed-bump.svg"
  },
  {
    "id": 7020,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som varnar för ojämn väg?",
    "questionAr": "ماذا تعني إشارة تحذر من طريق غير مستوٍ؟",
    "options": [
      {
        "sv": "Vägen kan ha gropar eller ojämnheter; anpassa farten",
        "ar": "قد يحتوي الطريق على حفر أو تفاوتات؛ اضبط السرعة"
      },
      {
        "sv": "Märket kan ignoreras om du känner vägen",
        "ar": "يمكن تجاهل الإشارة إذا كنت تعرف الطريق"
      },
      {
        "sv": "Märket betyder alltid att du har företräde",
        "ar": "الإشارة تعني دائماً أن الأولوية لك"
      },
      {
        "sv": "Det är bara en rekommendation som kan ignoreras",
        "ar": "إنها مجرد توصية يمكن تجاهلها"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/uneven-road.svg"
  },
  {
    "id": 7021,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad visar en skylt som varnar för smal väg på båda sidor?",
    "questionAr": "ماذا توضح إشارة تحذر من ضيق الطريق من الجانبين؟",
    "options": [
      {
        "sv": "Märket betyder att du ska öka hastigheten",
        "ar": "الإشارة تعني أنه يجب زيادة السرعة"
      },
      {
        "sv": "Vägen blir smalare och möten kan kräva extra försiktighet",
        "ar": "سيضيق الطريق وقد يتطلب التقابل حذراً إضافياً"
      },
      {
        "sv": "Märket betyder alltid att du har företräde",
        "ar": "الإشارة تعني دائماً أن الأولوية لك"
      },
      {
        "sv": "Det är bara en rekommendation som kan ignoreras",
        "ar": "إنها مجرد توصية يمكن تجاهلها"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/narrow-road.svg"
  },
  {
    "id": 7022,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för en bro som kan öppnas?",
    "questionAr": "ماذا تعني إشارة تحذر من جسر متحرك؟",
    "options": [
      {
        "sv": "Du kan bortse från tilläggstavlorna",
        "ar": "يمكنك تجاهل اللوحات الإضافية"
      },
      {
        "sv": "Märket gäller endast på natten oavsett informationen",
        "ar": "تنطبق الإشارة ليلاً فقط بغض النظر عن المعلومات"
      },
      {
        "sv": "Du kan behöva stanna för broöppning eller signal",
        "ar": "قد تحتاج للتوقف بسبب فتح الجسر أو الإشارة"
      },
      {
        "sv": "Märket gäller bara när vägen är tom",
        "ar": "تنطبق الإشارة فقط عندما يكون الطريق خالياً"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/bridge.svg"
  },
  {
    "id": 7023,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för djur på vägen?",
    "questionAr": "ماذا تعني إشارة تحذر من وجود حيوانات على الطريق؟",
    "options": [
      {
        "sv": "Märket kan ignoreras om du känner vägen",
        "ar": "يمكن تجاهل الإشارة إذا كنت تعرف الطريق"
      },
      {
        "sv": "Märket betyder alltid att du har företräde",
        "ar": "الإشارة تعني دائماً أن الأولوية لك"
      },
      {
        "sv": "Det är bara en rekommendation som kan ignoreras",
        "ar": "إنها مجرد توصية يمكن تجاهلها"
      },
      {
        "sv": "Djur kan plötsligt komma ut; sänk farten och håll uppsikt",
        "ar": "قد تظهر الحيوانات فجأة؛ خفف السرعة وراقب الطريق"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/animal-road.svg"
  },
  {
    "id": 7024,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för barn?",
    "questionAr": "ماذا تعني إشارة تحذر من الأطفال؟",
    "options": [
      {
        "sv": "Barn kan finnas nära körbanan och agera oväntat",
        "ar": "قد يوجد أطفال قرب الطريق وقد يتصرفون بشكل غير متوقع"
      },
      {
        "sv": "Du kan bortse från tilläggstavlorna",
        "ar": "يمكنك تجاهل اللوحات الإضافية"
      },
      {
        "sv": "Märket gäller endast på natten oavsett informationen",
        "ar": "تنطبق الإشارة ليلاً فقط بغض النظر عن المعلومات"
      },
      {
        "sv": "Märket är enbart till för att visa närmaste stad",
        "ar": "الإشارة مخصصة فقط لإظهار أقرب مدينة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/children.svg"
  },
  {
    "id": 7025,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad innebär ett märke som anger en zon med särskilda parkeringsregler?",
    "questionAr": "ماذا تعني إشارة منطقة ذات قواعد وقوف خاصة؟",
    "options": [
      {
        "sv": "Det innebär alltid att parkering är tillåten",
        "ar": "هذا يعني دائماً أن الوقوف مسموح"
      },
      {
        "sv": "Reglerna gäller inom zonen enligt märket och eventuella tilläggstavlor",
        "ar": "تسري القواعد داخل المنطقة وفق الإشارة واللوحات الإضافية"
      },
      {
        "sv": "Det är bara en rekommendation som kan ignoreras",
        "ar": "إنها مجرد توصية يمكن تجاهلها"
      },
      {
        "sv": "Märket betyder att du ska öka hastigheten",
        "ar": "الإشارة تعني أنه يجب زيادة السرعة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/parking.svg"
  },
  {
    "id": 7026,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad ska du läsa på en tilläggstavla som anger tidsintervall?",
    "questionAr": "ماذا تقرأ في لوحة إضافية تحدد فترة زمنية؟",
    "options": [
      {
        "sv": "Märket är enbart till för att visa närmaste stad",
        "ar": "الإشارة مخصصة فقط لإظهار أقرب مدينة"
      },
      {
        "sv": "Märket betyder att alla fordon får passera",
        "ar": "الإشارة تعني أن جميع المركبات يمكنها المرور"
      },
      {
        "sv": "När huvudregelns villkor gäller, inklusive eventuella dagar och tider",
        "ar": "متى تنطبق القاعدة الرئيسية، بما في ذلك الأيام والأوقات"
      },
      {
        "sv": "Märket gäller endast på natten oavsett informationen",
        "ar": "تنطبق الإشارة ليلاً فقط بغض النظر عن المعلومات"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/parking.svg"
  },
  {
    "id": 7027,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som markerar en miljözon?",
    "questionAr": "ماذا تعني إشارة منطقة بيئية؟",
    "options": [
      {
        "sv": "Märket är enbart till för att visa närmaste stad",
        "ar": "الإشارة مخصصة فقط لإظهار أقرب مدينة"
      },
      {
        "sv": "Märket betyder att alla fordon får passera",
        "ar": "الإشارة تعني أن جميع المركبات يمكنها المرور"
      },
      {
        "sv": "Du behöver bara följa märket om andra gör det",
        "ar": "لا تحتاج إلى اتباع الإشارة إلا إذا فعل الآخرون ذلك"
      },
      {
        "sv": "Särskilda krav kan gälla för vilka fordon som får köra där",
        "ar": "قد تنطبق شروط خاصة على أنواع المركبات المسموح لها بالدخول"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/environmental-zone.svg"
  },
  {
    "id": 7028,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad visar ett märke som anger påbjuden cirkulationsriktning?",
    "questionAr": "ماذا توضح إشارة اتجاه الدوران الإلزامي؟",
    "options": [
      {
        "sv": "Du ska följa den angivna färdriktningen runt hindret eller ön",
        "ar": "يجب اتباع اتجاه السير المحدد حول العائق أو الجزيرة"
      },
      {
        "sv": "Märket betyder alltid att du har företräde",
        "ar": "الإشارة تعني دائماً أن الأولوية لك"
      },
      {
        "sv": "Det är bara en rekommendation som kan ignoreras",
        "ar": "إنها مجرد توصية يمكن تجاهلها"
      },
      {
        "sv": "Märket betyder att du ska öka hastigheten",
        "ar": "الإشارة تعني أنه يجب زيادة السرعة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/roundabout.svg"
  },
  {
    "id": 7029,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som varnar för att körfält upphör?",
    "questionAr": "ماذا تعني إشارة تحذر من انتهاء مسار؟",
    "options": [
      {
        "sv": "Märket betyder alltid att du har företräde",
        "ar": "الإشارة تعني دائماً أن الأولوية لك"
      },
      {
        "sv": "Ett körfält försvinner längre fram; planera filbytet i god tid",
        "ar": "سينتهي مسار أمامك؛ خطط لتغيير المسار مبكراً"
      },
      {
        "sv": "Märket innebär att du inte behöver vara uppmärksam",
        "ar": "الإشارة تعني أنك لست بحاجة للانتباه"
      },
      {
        "sv": "Märket kan ignoreras om du känner vägen",
        "ar": "يمكن تجاهل الإشارة إذا كنت تعرف الطريق"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 7030,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som anger att en hastighetsbegränsning upphör?",
    "questionAr": "ماذا تعني إشارة انتهاء حد السرعة؟",
    "options": [
      {
        "sv": "Det innebär alltid att parkering är tillåten",
        "ar": "هذا يعني دائماً أن الوقوف مسموح"
      },
      {
        "sv": "Märket gäller bara när vägen är tom",
        "ar": "تنطبق الإشارة فقط عندما يكون الطريق خالياً"
      },
      {
        "sv": "Den tidigare angivna begränsningen upphör; följ därefter gällande hastighetsregler",
        "ar": "ينتهي الحد السابق؛ اتبع بعدها قواعد السرعة السارية"
      },
      {
        "sv": "Märket betyder att du ska öka hastigheten",
        "ar": "الإشارة تعني أنه يجب زيادة السرعة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/road-signs.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 7031,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som anger rekommenderad hastighet i en kurva?",
    "questionAr": "ماذا تعني إشارة سرعة موصى بها في منعطف؟",
    "options": [
      {
        "sv": "Det innebär alltid att parkering är tillåten",
        "ar": "هذا يعني دائماً أن الوقوف مسموح"
      },
      {
        "sv": "Märket gäller bara när vägen är tom",
        "ar": "تنطبق الإشارة فقط عندما يكون الطريق خالياً"
      },
      {
        "sv": "Du kan bortse från tilläggstavlorna",
        "ar": "يمكنك تجاهل اللوحات الإضافية"
      },
      {
        "sv": "Den visar en hastighet som kan vara lämplig i förhållandena men du måste anpassa körningen",
        "ar": "توضح سرعة قد تكون مناسبة للظروف لكن عليك تكييف القيادة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/mountain-road.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 7032,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som anger ett körfält för kollektivtrafik?",
    "questionAr": "ماذا تعني إشارة مسار للنقل العام؟",
    "options": [
      {
        "sv": "Följ villkoren för vilka fordon och tider som får använda körfältet",
        "ar": "اتبع شروط أنواع المركبات والأوقات المسموح بها في المسار"
      },
      {
        "sv": "Det innebär alltid att parkering är tillåten",
        "ar": "هذا يعني دائماً أن الوقوف مسموح"
      },
      {
        "sv": "Märket gäller bara när vägen är tom",
        "ar": "تنطبق الإشارة فقط عندما يكون الطريق خالياً"
      },
      {
        "sv": "Du kan bortse från tilläggstavlorna",
        "ar": "يمكنك تجاهل اللوحات الإضافية"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/bus-stop.svg"
  },
  {
    "id": 7033,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som visar att motorväg upphör?",
    "questionAr": "ماذا تعني إشارة انتهاء الطريق السريع؟",
    "options": [
      {
        "sv": "Du behöver bara följa märket om andra gör det",
        "ar": "لا تحتاج إلى اتباع الإشارة إلا إذا فعل الآخرون ذلك"
      },
      {
        "sv": "Motorvägsreglerna upphör och du måste anpassa dig till den nya vägtypen",
        "ar": "تنتهي قواعد الطريق السريع ويجب التكيف مع نوع الطريق الجديد"
      },
      {
        "sv": "Märket är enbart till för att visa närmaste stad",
        "ar": "الإشارة مخصصة فقط لإظهار أقرب مدينة"
      },
      {
        "sv": "Märket betyder att alla fordon får passera",
        "ar": "الإشارة تعني أن جميع المركبات يمكنها المرور"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/motorway.svg"
  },
  {
    "id": 7034,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad bör du göra när en skylt varnar för ett farligt vägrensparti?",
    "questionAr": "ماذا تفعل عند إشارة تحذر من حافة طريق خطرة؟",
    "options": [
      {
        "sv": "Märket betyder alltid att du har företräde",
        "ar": "الإشارة تعني دائماً أن الأولوية لك"
      },
      {
        "sv": "Det är bara en rekommendation som kan ignoreras",
        "ar": "إنها مجرد توصية يمكن تجاهلها"
      },
      {
        "sv": "Håll dig på körbanan och undvik att köra ut på det osäkra partiet",
        "ar": "ابقَ على مسار الطريق وتجنب الخروج إلى الحافة غير الآمنة"
      },
      {
        "sv": "Märket kan ignoreras om du känner vägen",
        "ar": "يمكن تجاهل الإشارة إذا كنت تعرف الطريق"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/narrow-road.svg"
  },
  {
    "id": 7035,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som varnar för en skarp kurva?",
    "questionAr": "ماذا تعني إشارة تحذر من منعطف حاد؟",
    "options": [
      {
        "sv": "Det är bara en rekommendation som kan ignoreras",
        "ar": "إنها مجرد توصية يمكن تجاهلها"
      },
      {
        "sv": "Märket betyder att du ska öka hastigheten",
        "ar": "الإشارة تعني أنه يجب زيادة السرعة"
      },
      {
        "sv": "Det innebär alltid att parkering är tillåten",
        "ar": "هذا يعني دائماً أن الوقوف مسموح"
      },
      {
        "sv": "Sänk farten före kurvan och håll en kontrollerad placering",
        "ar": "خفف السرعة قبل المنعطف وحافظ على تموضع مسيطر عليه"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/mountain-road.svg"
  },
  {
    "id": 7036,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad visar en skylt som anger en gångpassage?",
    "questionAr": "ماذا توضح إشارة ممر عبور للمشاة؟",
    "options": [
      {
        "sv": "Var beredd på gående och anpassa hastigheten efter situationen",
        "ar": "استعد للمشاة واضبط السرعة حسب الوضع"
      },
      {
        "sv": "Märket betyder att alla fordon får passera",
        "ar": "الإشارة تعني أن جميع المركبات يمكنها المرور"
      },
      {
        "sv": "Du behöver bara följa märket om andra gör det",
        "ar": "لا تحتاج إلى اتباع الإشارة إلا إذا فعل الآخرون ذلك"
      },
      {
        "sv": "Märket innebär att du inte behöver vara uppmärksam",
        "ar": "الإشارة تعني أنك لست بحاجة للانتباه"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/crosswalk.svg"
  },
  {
    "id": 7037,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett märke som varnar för cyklister som korsar vägen?",
    "questionAr": "ماذا تعني إشارة تحذر من عبور الدراجات للطريق؟",
    "options": [
      {
        "sv": "Du behöver bara följa märket om andra gör det",
        "ar": "لا تحتاج إلى اتباع الإشارة إلا إذا فعل الآخرون ذلك"
      },
      {
        "sv": "Var uppmärksam på cyklister som kan korsa körbanan",
        "ar": "انتبه لراكبي الدراجات الذين قد يعبرون الطريق"
      },
      {
        "sv": "Märket är enbart till för att visa närmaste stad",
        "ar": "الإشارة مخصصة فقط لإظهار أقرب مدينة"
      },
      {
        "sv": "Märket betyder att alla fordon får passera",
        "ar": "الإشارة تعني أن جميع المركبات يمكنها المرور"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/cycle-crossing.svg"
  },
  {
    "id": 7038,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad innebär ett märke som förbjuder stannande?",
    "questionAr": "ماذا يعني مَعلم منع التوقف؟",
    "options": [
      {
        "sv": "Du kan bortse från tilläggstavlorna",
        "ar": "يمكنك تجاهل اللوحات الإضافية"
      },
      {
        "sv": "Märket gäller endast på natten oavsett informationen",
        "ar": "تنطبق الإشارة ليلاً فقط بغض النظر عن المعلومات"
      },
      {
        "sv": "Du får inte stanna där för annat än situationer som reglerna medger",
        "ar": "لا يجوز التوقف هناك إلا في الحالات التي تسمح بها القواعد"
      },
      {
        "sv": "Märket gäller bara när vägen är tom",
        "ar": "تنطبق الإشارة فقط عندما يكون الطريق خالياً"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/parking.svg"
  },
  {
    "id": 7039,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder en skylt som visar återvändsgata?",
    "questionAr": "ماذا تعني إشارة شارع مسدود؟",
    "options": [
      {
        "sv": "Märket gäller endast på natten oavsett informationen",
        "ar": "تنطبق الإشارة ليلاً فقط بغض النظر عن المعلومات"
      },
      {
        "sv": "Märket är enbart till för att visa närmaste stad",
        "ar": "الإشارة مخصصة فقط لإظهار أقرب مدينة"
      },
      {
        "sv": "Märket betyder att alla fordon får passera",
        "ar": "الإشارة تعني أن جميع المركبات يمكنها المرور"
      },
      {
        "sv": "Vägen saknar genomfart till en annan väg för vanlig trafik",
        "ar": "الطريق لا يتيح عبوراً إلى طريق آخر لحركة المرور العادية"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/dead-end.svg"
  },
  {
    "id": 7040,
    "reviewStatus": "draft",
    "category": "Vägmärken",
    "questionSv": "Vad betyder ett vägmärke som anger att mötande trafik har företräde på en smal passage?",
    "questionAr": "ماذا تعني إشارة تفيد أن المرور المقابل له الأولوية في ممر ضيق؟",
    "options": [
      {
        "sv": "Du ska lämna företräde och vänta tills passagen är fri",
        "ar": "يجب أن تعطي الأولوية وتنتظر حتى يصبح الممر خالياً"
      },
      {
        "sv": "Det innebär alltid att parkering är tillåten",
        "ar": "هذا يعني دائماً أن الوقوف مسموح"
      },
      {
        "sv": "Märket gäller bara när vägen är tom",
        "ar": "تنطبق الإشارة فقط عندما يكون الطريق خالياً"
      },
      {
        "sv": "Du kan bortse från tilläggstavlorna",
        "ar": "يمكنك تجاهل اللوحات الإضافية"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Lär dig märkets betydelse och läs eventuella tilläggstavlor. Anpassa körningen i god tid.",
    "explanationAr": "تعلّم معنى الإشارة واقرأ اللوحات الإضافية إن وجدت، وعدّل القيادة مسبقاً.",
    "image": "./questions/narrow-road.svg"
  },
  {
    "id": 8001,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad är den främsta risken med att köra för nära framförvarande fordon?",
    "questionAr": "ما الخطر الأساسي من القيادة قريباً جداً من المركبة الأمامية؟",
    "options": [
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنيات السيارة تحل كل المواقف"
      },
      {
        "sv": "Du får för kort tid att reagera och bromsa",
        "ar": "يصبح لديك وقت قصير جداً للاستجابة والفرملة"
      },
      {
        "sv": "Öka hastigheten för att snabbt lämna situationen",
        "ar": "زيادة السرعة لمغادرة الموقف بسرعة"
      },
      {
        "sv": "Bromsa eller styra häftigt utan att bedöma risken",
        "ar": "الفرملة أو التوجيه بعنف دون تقييم الخطر"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/braking-distance.svg"
  },
  {
    "id": 8002,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad bör du göra när solen bländar dig framifrån?",
    "questionAr": "ماذا تفعل عندما تعميك الشمس من الأمام؟",
    "options": [
      {
        "sv": "Anta att andra trafikanter alltid upptäcker faran",
        "ar": "افتراض أن مستخدمي الطريق الآخرين يلاحظون الخطر دائماً"
      },
      {
        "sv": "Använda telefonen för att distrahera dig från stressen",
        "ar": "استخدام الهاتف لتشتيت نفسك عن التوتر"
      },
      {
        "sv": "Sänk farten och använd solskyddet utan att tappa uppmärksamheten",
        "ar": "خفف السرعة واستخدم حاجب الشمس مع الحفاظ على الانتباه"
      },
      {
        "sv": "Fortsätta trots att du inte längre kan se tillräckligt",
        "ar": "المتابعة رغم أنك لم تعد ترى بما يكفي"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 8003,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Hur ska du agera om vatten samlas på vägbanan?",
    "questionAr": "كيف تتصرف إذا تجمعت المياه على سطح الطريق؟",
    "options": [
      {
        "sv": "Anta att andra trafikanter alltid upptäcker faran",
        "ar": "افتراض أن مستخدمي الطريق الآخرين يلاحظون الخطر دائماً"
      },
      {
        "sv": "Använda telefonen för att distrahera dig från stressen",
        "ar": "استخدام الهاتف لتشتيت نفسك عن التوتر"
      },
      {
        "sv": "Bromsa sent för att spara tid",
        "ar": "الفرملة متأخراً لتوفير الوقت"
      },
      {
        "sv": "Sänk farten och undvik hastiga styr- och bromsrörelser",
        "ar": "خفف السرعة وتجنب حركات التوجيه والفرملة المفاجئة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/wet-road.svg"
  },
  {
    "id": 8004,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vilken situation ökar risken för vattenplaning?",
    "questionAr": "أي حالة تزيد خطر الانزلاق المائي للسيارة؟",
    "options": [
      {
        "sv": "Hög hastighet på en vattenfylld väg",
        "ar": "سرعة عالية على طريق مغطى بالماء"
      },
      {
        "sv": "Låg hastighet på en torr väg",
        "ar": "سرعة منخفضة على طريق جاف"
      },
      {
        "sv": "Att stanna bilen på en parkeringsplats",
        "ar": "إيقاف السيارة في موقف"
      },
      {
        "sv": "Att kontrollera däcken innan resan",
        "ar": "فحص الإطارات قبل الرحلة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Vattenplaning blir mer sannolik vid hög hastighet, mycket vatten och däck med sämre mönsterdjup. Sänk farten vid kraftigt regn.",
    "explanationAr": "يزداد احتمال الانزلاق المائي مع السرعة العالية وكثرة الماء وضعف عمق نقشة الإطارات. خفف السرعة عند المطر الغزير.",
    "image": "./questions/wet-road.svg"
  },
  {
    "id": 8005,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Varför ska du öka avståndet när vägen är snötäckt?",
    "questionAr": "لماذا تزيد مسافة الأمان عندما يكون الطريق مغطى بالثلج؟",
    "options": [
      {
        "sv": "Anta att andra trafikanter alltid upptäcker faran",
        "ar": "افتراض أن مستخدمي الطريق الآخرين يلاحظون الخطر دائماً"
      },
      {
        "sv": "Greppet är sämre och bromssträckan kan bli längre",
        "ar": "يكون التماسك أضعف وقد تطول مسافة الفرملة"
      },
      {
        "sv": "Titta bara nära bilen och inte längre fram",
        "ar": "النظر إلى المسافة القريبة فقط وليس بعيداً إلى الأمام"
      },
      {
        "sv": "Fortsätta trots att du inte längre kan se tillräckligt",
        "ar": "المتابعة رغم أنك لم تعد ترى بما يكفي"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/winter-road.svg"
  },
  {
    "id": 8006,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Hur bör du köra genom en kurva på hal väg?",
    "questionAr": "كيف تقود عبر منعطف على طريق زلق؟",
    "options": [
      {
        "sv": "Öka hastigheten för att snabbt lämna situationen",
        "ar": "زيادة السرعة لمغادرة الموقف بسرعة"
      },
      {
        "sv": "Bromsa eller styra häftigt utan att bedöma risken",
        "ar": "الفرملة أو التوجيه بعنف دون تقييم الخطر"
      },
      {
        "sv": "Anpassa farten före kurvan och styr mjukt",
        "ar": "اضبط السرعة قبل المنعطف ووجّه السيارة بسلاسة"
      },
      {
        "sv": "Fortsätta som vanligt utan att anpassa körningen",
        "ar": "المتابعة كالمعتاد دون تعديل القيادة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/mountain-road.svg"
  },
  {
    "id": 8007,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad är viktigt när du kör nära en cyklist?",
    "questionAr": "ما المهم عندما تقود بالقرب من راكب دراجة؟",
    "options": [
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنيات السيارة تحل كل المواقف"
      },
      {
        "sv": "Hålla samma avstånd även när vägen blir hal",
        "ar": "الحفاظ على المسافة نفسها حتى عندما يصبح الطريق زلقاً"
      },
      {
        "sv": "Titta bara nära bilen och inte längre fram",
        "ar": "النظر إلى المسافة القريبة فقط وليس بعيداً إلى الأمام"
      },
      {
        "sv": "Håll tillräckligt sidavstånd och passera bara när det är säkert",
        "ar": "اترك مسافة جانبية كافية ولا تتجاوز إلا عندما يكون ذلك آمناً"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/cycle-crossing.svg"
  },
  {
    "id": 8008,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad bör du göra när en fotgängare verkar vilja korsa vägen?",
    "questionAr": "ماذا تفعل عندما يبدو أن أحد المشاة يريد عبور الطريق؟",
    "options": [
      {
        "sv": "Sänk farten, var beredd att stanna och visa hänsyn",
        "ar": "خفف السرعة واستعد للتوقف وأظهر مراعاة للمشاة"
      },
      {
        "sv": "Förlita dig enbart på bilens assistanssystem",
        "ar": "الاعتماد حصراً على أنظمة مساعدة السيارة"
      },
      {
        "sv": "Fortsätta som vanligt utan att anpassa körningen",
        "ar": "المتابعة كالمعتاد دون تعديل القيادة"
      },
      {
        "sv": "Öka hastigheten för att snabbt lämna situationen",
        "ar": "زيادة السرعة لمغادرة الموقف بسرعة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/crosswalk.svg"
  },
  {
    "id": 8009,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Varför är det farligt att köra när du är arg eller mycket stressad?",
    "questionAr": "لماذا القيادة وأنت غاضب أو متوتر جداً خطرة؟",
    "options": [
      {
        "sv": "Fortsätta som vanligt utan att anpassa körningen",
        "ar": "المتابعة كالمعتاد دون تعديل القيادة"
      },
      {
        "sv": "Du kan bedöma risker sämre och fatta förhastade beslut",
        "ar": "قد تقيّم المخاطر بشكل أسوأ وتتخذ قرارات متسرعة"
      },
      {
        "sv": "Köra när du är så trött att koncentrationen sviktar",
        "ar": "القيادة عندما يكون التعب قد أضعف التركيز"
      },
      {
        "sv": "Förlita dig enbart på bilens assistanssystem",
        "ar": "الاعتماد حصراً على أنظمة مساعدة السيارة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 8010,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad ska du göra om du missar en avfart på motorvägen?",
    "questionAr": "ماذا تفعل إذا فاتك مخرج الطريق السريع؟",
    "options": [
      {
        "sv": "Fortsätta som vanligt utan att anpassa körningen",
        "ar": "المتابعة كالمعتاد دون تعديل القيادة"
      },
      {
        "sv": "Öka hastigheten för att snabbt lämna situationen",
        "ar": "زيادة السرعة لمغادرة الموقف بسرعة"
      },
      {
        "sv": "Fortsätt till nästa avfart i stället för att backa eller vända",
        "ar": "تابع إلى المخرج التالي بدلاً من الرجوع للخلف أو الالتفاف"
      },
      {
        "sv": "Förlita dig enbart på bilens assistanssystem",
        "ar": "الاعتماد حصراً على أنظمة مساعدة السيارة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/motorway.svg"
  },
  {
    "id": 8011,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Varför ska du kontrollera döda vinkeln även när du använder speglar?",
    "questionAr": "لماذا تفحص المنطقة العمياء حتى عند استخدام المرايا؟",
    "options": [
      {
        "sv": "Titta bara nära bilen och inte längre fram",
        "ar": "النظر إلى المسافة القريبة فقط وليس بعيداً إلى الأمام"
      },
      {
        "sv": "Fortsätta trots att du inte längre kan se tillräckligt",
        "ar": "المتابعة رغم أنك لم تعد ترى بما يكفي"
      },
      {
        "sv": "Anta att andra trafikanter alltid upptäcker faran",
        "ar": "افتراض أن مستخدمي الطريق الآخرين يلاحظون الخطر دائماً"
      },
      {
        "sv": "Alla trafikanter syns inte alltid i speglarna",
        "ar": "لا يظهر جميع مستخدمي الطريق دائماً في المرايا"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 8012,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad bör du göra när mötande fordon bländar dig med helljus?",
    "questionAr": "ماذا تفعل عندما يعميك الضوء العالي للمركبة المقابلة؟",
    "options": [
      {
        "sv": "Titta mot höger vägkant och anpassa farten",
        "ar": "انظر نحو حافة الطريق اليمنى واضبط السرعة"
      },
      {
        "sv": "Förlita dig enbart på bilens assistanssystem",
        "ar": "الاعتماد حصراً على أنظمة مساعدة السيارة"
      },
      {
        "sv": "Fortsätta som vanligt utan att anpassa körningen",
        "ar": "المتابعة كالمعتاد دون تعديل القيادة"
      },
      {
        "sv": "Öka hastigheten för att snabbt lämna situationen",
        "ar": "زيادة السرعة لمغادرة الموقف بسرعة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 8013,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Hur bör du agera när sikten är begränsad av dimma?",
    "questionAr": "كيف تتصرف عندما تكون الرؤية محدودة بسبب الضباب؟",
    "options": [
      {
        "sv": "Anta att andra trafikanter alltid upptäcker faran",
        "ar": "افتراض أن مستخدمي الطريق الآخرين يلاحظون الخطر دائماً"
      },
      {
        "sv": "Öka avståndet och kör så långsamt att du kan stanna inom siktsträckan",
        "ar": "زد مسافة الأمان وقد بسرعة تسمح بالتوقف ضمن مدى الرؤية"
      },
      {
        "sv": "Titta bara nära bilen och inte längre fram",
        "ar": "النظر إلى المسافة القريبة فقط وليس بعيداً إلى الأمام"
      },
      {
        "sv": "Fortsätta trots att du inte längre kan se tillräckligt",
        "ar": "المتابعة رغم أنك لم تعد ترى بما يكفي"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 8014,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Varför är det riskabelt att använda mobiltelefon när du kör?",
    "questionAr": "لماذا استخدام الهاتف المحمول أثناء القيادة محفوف بالمخاطر؟",
    "options": [
      {
        "sv": "Anta att andra trafikanter alltid upptäcker faran",
        "ar": "افتراض أن مستخدمي الطريق الآخرين يلاحظون الخطر دائماً"
      },
      {
        "sv": "Använda telefonen för att distrahera dig från stressen",
        "ar": "استخدام الهاتف لتشتيت نفسك عن التوتر"
      },
      {
        "sv": "Uppmärksamhet och reaktion kan försämras",
        "ar": "قد يتراجع الانتباه وسرعة الاستجابة"
      },
      {
        "sv": "Fortsätta trots att du inte längre kan se tillräckligt",
        "ar": "المتابعة رغم أنك لم تعد ترى بما يكفي"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/phone.svg"
  },
  {
    "id": 8015,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad bör du göra innan du öppnar bildörren mot cykeltrafik?",
    "questionAr": "ماذا تفعل قبل فتح باب السيارة باتجاه مسار الدراجات؟",
    "options": [
      {
        "sv": "Anta att andra trafikanter alltid upptäcker faran",
        "ar": "افتراض أن مستخدمي الطريق الآخرين يلاحظون الخطر دائماً"
      },
      {
        "sv": "Använda telefonen för att distrahera dig från stressen",
        "ar": "استخدام الهاتف لتشتيت نفسك عن التوتر"
      },
      {
        "sv": "Bromsa sent för att spara tid",
        "ar": "الفرملة متأخراً لتوفير الوقت"
      },
      {
        "sv": "Kontrollera spegeln och bakåt efter cyklister och annan trafik",
        "ar": "افحص المرآة وانظر للخلف بحثاً عن الدراجات وحركة المرور"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/cycle-crossing.svg"
  },
  {
    "id": 8016,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Varför ska nackstödet vara rätt inställt?",
    "questionAr": "لماذا يجب ضبط مسند الرأس بشكل صحيح؟",
    "options": [
      {
        "sv": "Det kan minska risken för nackskador vid påkörning bakifrån",
        "ar": "قد يقلل خطر إصابات الرقبة عند الاصطدام من الخلف"
      },
      {
        "sv": "Titta bara nära bilen och inte längre fram",
        "ar": "النظر إلى المسافة القريبة فقط وليس بعيداً إلى الأمام"
      },
      {
        "sv": "Fortsätta trots att du inte längre kan se tillräckligt",
        "ar": "المتابعة رغم أنك لم تعد ترى بما يكفي"
      },
      {
        "sv": "Anta att andra trafikanter alltid upptäcker faran",
        "ar": "افتراض أن مستخدمي الطريق الآخرين يلاحظون الخطر دائماً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/seatbelt.svg"
  },
  {
    "id": 8017,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad ska du tänka på när du kör med passagerare som pratar högt?",
    "questionAr": "ما الذي يجب مراعاته عند القيادة مع ركاب يتحدثون بصوت مرتفع؟",
    "options": [
      {
        "sv": "Använda telefonen för att distrahera dig från stressen",
        "ar": "استخدام الهاتف لتشتيت نفسك عن التوتر"
      },
      {
        "sv": "Behåll fokus på trafiken och be om lugn om du blir distraherad",
        "ar": "حافظ على تركيزك على الطريق واطلب الهدوء إذا تشتت"
      },
      {
        "sv": "Fortsätta trots att du inte längre kan se tillräckligt",
        "ar": "المتابعة رغم أنك لم تعد ترى بما يكفي"
      },
      {
        "sv": "Anta att andra trafikanter alltid upptäcker faran",
        "ar": "افتراض أن مستخدمي الطريق الآخرين يلاحظون الخطر دائماً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 8018,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad bör du göra om du känner dig sjuk och har svårt att koncentrera dig?",
    "questionAr": "ماذا تفعل إذا كنت مريضاً وتجد صعوبة في التركيز؟",
    "options": [
      {
        "sv": "Anta att andra trafikanter alltid upptäcker faran",
        "ar": "افتراض أن مستخدمي الطريق الآخرين يلاحظون الخطر دائماً"
      },
      {
        "sv": "Använda telefonen för att distrahera dig från stressen",
        "ar": "استخدام الهاتف لتشتيت نفسك عن التوتر"
      },
      {
        "sv": "Avstå från att köra tills du kan köra säkert",
        "ar": "امتنع عن القيادة حتى تصبح قادراً على القيادة بأمان"
      },
      {
        "sv": "Fortsätta trots att du inte längre kan se tillräckligt",
        "ar": "المتابعة رغم أنك لم تعد ترى بما يكفي"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/fatigue.svg"
  },
  {
    "id": 8019,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Varför är det viktigt att hålla avstånd när du passerar en vägarbetsplats?",
    "questionAr": "لماذا من المهم ترك مسافة عند المرور بموقع أعمال طريق؟",
    "options": [
      {
        "sv": "Förlita dig enbart på bilens assistanssystem",
        "ar": "الاعتماد حصراً على أنظمة مساعدة السيارة"
      },
      {
        "sv": "Fortsätta som vanligt utan att anpassa körningen",
        "ar": "المتابعة كالمعتاد دون تعديل القيادة"
      },
      {
        "sv": "Öka hastigheten för att snabbt lämna situationen",
        "ar": "زيادة السرعة لمغادرة الموقف بسرعة"
      },
      {
        "sv": "Arbetare, maskiner och tillfälliga hinder kan finnas nära körbanan",
        "ar": "قد يوجد عمال وآلات وعوائق مؤقتة قرب مسار القيادة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/roadworks.svg"
  },
  {
    "id": 8020,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad är bäst när ett djur plötsligt kommer ut på vägen?",
    "questionAr": "ما الأفضل عندما يخرج حيوان فجأة إلى الطريق؟",
    "options": [
      {
        "sv": "Bromsa kontrollerat och undvik en farlig undanmanöver om möjligt",
        "ar": "فرمل بشكل مسيطر عليه وتجنب مناورة تفادٍ خطرة إن أمكن"
      },
      {
        "sv": "Fortsätta trots att du inte längre kan se tillräckligt",
        "ar": "المتابعة رغم أنك لم تعد ترى بما يكفي"
      },
      {
        "sv": "Anta att andra trafikanter alltid upptäcker faran",
        "ar": "افتراض أن مستخدمي الطريق الآخرين يلاحظون الخطر دائماً"
      },
      {
        "sv": "Använda telefonen för att distrahera dig från stressen",
        "ar": "استخدام الهاتف لتشتيت نفسك عن التوتر"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/animal-road.svg"
  },
  {
    "id": 8021,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Varför ska du vara extra uppmärksam nära busshållplatser?",
    "questionAr": "لماذا يجب الانتباه أكثر قرب محطات الحافلات؟",
    "options": [
      {
        "sv": "Bromsa eller styra häftigt utan att bedöma risken",
        "ar": "الفرملة أو التوجيه بعنف دون تقييم الخطر"
      },
      {
        "sv": "Resenärer kan gå ut framför bussen eller korsa vägen",
        "ar": "قد يخرج الركاب أمام الحافلة أو يعبرون الطريق"
      },
      {
        "sv": "Fortsätta som vanligt utan att anpassa körningen",
        "ar": "المتابعة كالمعتاد دون تعديل القيادة"
      },
      {
        "sv": "Öka hastigheten för att snabbt lämna situationen",
        "ar": "زيادة السرعة لمغادرة الموقف بسرعة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/bus-stop.svg"
  },
  {
    "id": 8022,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad bör du göra om ett barn står nära en parkerad bil vid vägkanten?",
    "questionAr": "ماذا تفعل إذا كان طفل قرب سيارة متوقفة عند حافة الطريق؟",
    "options": [
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنيات السيارة تحل كل المواقف"
      },
      {
        "sv": "Hålla samma avstånd även när vägen blir hal",
        "ar": "الحفاظ على المسافة نفسها حتى عندما يصبح الطريق زلقاً"
      },
      {
        "sv": "Sänk farten och var beredd på att barnet kan springa ut",
        "ar": "خفف السرعة واستعد لاحتمال اندفاع الطفل إلى الطريق"
      },
      {
        "sv": "Bromsa eller styra häftigt utan att bedöma risken",
        "ar": "الفرملة أو التوجيه بعنف دون تقييم الخطر"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/children.svg"
  },
  {
    "id": 8023,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad är viktigt innan du kör om på landsväg?",
    "questionAr": "ما المهم قبل التجاوز على طريق ريفي؟",
    "options": [
      {
        "sv": "Hålla samma avstånd även när vägen blir hal",
        "ar": "الحفاظ على المسافة نفسها حتى عندما يصبح الطريق زلقاً"
      },
      {
        "sv": "Titta bara nära bilen och inte längre fram",
        "ar": "النظر إلى المسافة القريبة فقط وليس بعيداً إلى الأمام"
      },
      {
        "sv": "Fortsätta trots att du inte längre kan se tillräckligt",
        "ar": "المتابعة رغم أنك لم تعد ترى بما يكفي"
      },
      {
        "sv": "Kontrollera sikt, mötande trafik, avstånd och att omkörningen är tillåten",
        "ar": "تحقق من الرؤية والمرور المقابل والمسافة وأن التجاوز مسموح"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/overtake.svg"
  },
  {
    "id": 8024,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad ska du göra om du får möte på en smal väg?",
    "questionAr": "ماذا تفعل إذا قابلت مركبة على طريق ضيق؟",
    "options": [
      {
        "sv": "Sänk farten och anpassa placeringen så att mötet kan ske säkert",
        "ar": "خفف السرعة وعدّل موضع المركبة ليتم المرور بأمان"
      },
      {
        "sv": "Köra när du är så trött att koncentrationen sviktar",
        "ar": "القيادة عندما يكون التعب قد أضعف التركيز"
      },
      {
        "sv": "Förlita dig enbart på bilens assistanssystem",
        "ar": "الاعتماد حصراً على أنظمة مساعدة السيارة"
      },
      {
        "sv": "Fortsätta som vanligt utan att anpassa körningen",
        "ar": "المتابعة كالمعتاد دون تعديل القيادة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/narrow-road.svg"
  },
  {
    "id": 8025,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Hur minskar du risken för sladd vid kraftig inbromsning på halt underlag?",
    "questionAr": "كيف تقلل خطر الانزلاق عند الفرملة القوية على سطح زلق؟",
    "options": [
      {
        "sv": "Fortsätta trots att du inte längre kan se tillräckligt",
        "ar": "المتابعة رغم أنك لم تعد ترى بما يكفي"
      },
      {
        "sv": "Planera i förväg, håll avstånd och undvik hastiga manövrer",
        "ar": "خطط مسبقاً واترك مسافة وتجنب المناورات المفاجئة"
      },
      {
        "sv": "Hålla samma avstånd även när vägen blir hal",
        "ar": "الحفاظ على المسافة نفسها حتى عندما يصبح الطريق زلقاً"
      },
      {
        "sv": "Titta bara nära bilen och inte längre fram",
        "ar": "النظر إلى المسافة القريبة فقط وليس بعيداً إلى الأمام"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/winter-road.svg"
  },
  {
    "id": 8026,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Varför bör du undvika farthållare på mycket hal väg?",
    "questionAr": "لماذا يُفضّل تجنب مثبت السرعة على طريق شديد الانزلاق؟",
    "options": [
      {
        "sv": "Förlita dig enbart på bilens assistanssystem",
        "ar": "الاعتماد حصراً على أنظمة مساعدة السيارة"
      },
      {
        "sv": "Fortsätta som vanligt utan att anpassa körningen",
        "ar": "المتابعة كالمعتاد دون تعديل القيادة"
      },
      {
        "sv": "Det kan bli svårare att anpassa drivkraften snabbt till väglaget",
        "ar": "قد يصبح ضبط قوة الدفع بسرعة حسب حالة الطريق أصعب"
      },
      {
        "sv": "Köra när du är så trött att koncentrationen sviktar",
        "ar": "القيادة عندما يكون التعب قد أضعف التركيز"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/winter-road.svg"
  },
  {
    "id": 8027,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad ska du göra när ett fordon bakom dig kör mycket nära?",
    "questionAr": "ماذا تفعل عندما تقود مركبة خلفك عن قرب شديد؟",
    "options": [
      {
        "sv": "Fortsätta trots att du inte längre kan se tillräckligt",
        "ar": "المتابعة رغم أنك لم تعد ترى بما يكفي"
      },
      {
        "sv": "Anta att andra trafikanter alltid upptäcker faran",
        "ar": "افتراض أن مستخدمي الطريق الآخرين يلاحظون الخطر دائماً"
      },
      {
        "sv": "Använda telefonen för att distrahera dig från stressen",
        "ar": "استخدام الهاتف لتشتيت نفسك عن التوتر"
      },
      {
        "sv": "Håll lugn fart, öka avståndet framåt och undvik att bromsa plötsligt",
        "ar": "حافظ على سرعة هادئة وزد المسافة أمامك وتجنب الفرملة المفاجئة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/traffic-queue.svg"
  },
  {
    "id": 8028,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Varför ska du inte köra in i en korsning om utfarten är blockerad?",
    "questionAr": "لماذا لا تدخل تقاطعاً إذا كان المخرج منه مسدوداً؟",
    "options": [
      {
        "sv": "Du riskerar att blockera korsande trafik och skapa fara",
        "ar": "قد تعيق حركة التقاطع وتسبب خطراً"
      },
      {
        "sv": "Fortsätta trots att du inte längre kan se tillräckligt",
        "ar": "المتابعة رغم أنك لم تعد ترى بما يكفي"
      },
      {
        "sv": "Anta att andra trafikanter alltid upptäcker faran",
        "ar": "افتراض أن مستخدمي الطريق الآخرين يلاحظون الخطر دائماً"
      },
      {
        "sv": "Använda telefonen för att distrahera dig från stressen",
        "ar": "استخدام الهاتف لتشتيت نفسك عن التوتر"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 8029,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad är säkrast när du närmar dig en kö på motorvägen?",
    "questionAr": "ما التصرف الأكثر أماناً عند الاقتراب من ازدحام على الطريق السريع؟",
    "options": [
      {
        "sv": "Köra när du är så trött att koncentrationen sviktar",
        "ar": "القيادة عندما يكون التعب قد أضعف التركيز"
      },
      {
        "sv": "Sänk farten tidigt och var uppmärksam på fordon som bromsar",
        "ar": "خفف السرعة مبكراً وانتبه للمركبات التي تفرمل"
      },
      {
        "sv": "Använda telefonen för att distrahera dig från stressen",
        "ar": "استخدام الهاتف لتشتيت نفسك عن التوتر"
      },
      {
        "sv": "Bromsa sent för att spara tid",
        "ar": "الفرملة متأخراً لتوفير الوقت"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/traffic-queue.svg"
  },
  {
    "id": 8030,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Hur bör du agera när vägen smalnar av?",
    "questionAr": "كيف تتصرف عندما يضيق الطريق؟",
    "options": [
      {
        "sv": "Bromsa sent för att spara tid",
        "ar": "الفرملة متأخراً لتوفير الوقت"
      },
      {
        "sv": "Köra när du är så trött att koncentrationen sviktar",
        "ar": "القيادة عندما يكون التعب قد أضعف التركيز"
      },
      {
        "sv": "Sänk farten och anpassa placeringen med hänsyn till andra",
        "ar": "خفف السرعة وعدّل موضع المركبة مع مراعاة الآخرين"
      },
      {
        "sv": "Använda telefonen för att distrahera dig från stressen",
        "ar": "استخدام الهاتف لتشتيت نفسك عن التوتر"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/narrow-road.svg"
  },
  {
    "id": 8031,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Varför ska du vara försiktig vid skymd utfart från en fastighet?",
    "questionAr": "لماذا يجب الحذر عند مخرج عقار ذي رؤية محجوبة؟",
    "options": [
      {
        "sv": "Öka hastigheten för att snabbt lämna situationen",
        "ar": "زيادة السرعة لمغادرة الموقف بسرعة"
      },
      {
        "sv": "Bromsa eller styra häftigt utan att bedöma risken",
        "ar": "الفرملة أو التوجيه بعنف دون تقييم الخطر"
      },
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنيات السيارة تحل كل المواقف"
      },
      {
        "sv": "Fordon, cyklister eller fotgängare kan komma oväntat",
        "ar": "قد تظهر مركبات أو دراجات أو مشاة بشكل مفاجئ"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/intersection.svg"
  },
  {
    "id": 8032,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad är viktigt när du kör bakom en lastbil?",
    "questionAr": "ما المهم عند القيادة خلف شاحنة؟",
    "options": [
      {
        "sv": "Håll avstånd eftersom sikten framåt kan vara begränsad",
        "ar": "اترك مسافة لأن الرؤية إلى الأمام قد تكون محدودة"
      },
      {
        "sv": "Anta att andra trafikanter alltid upptäcker faran",
        "ar": "افتراض أن مستخدمي الطريق الآخرين يلاحظون الخطر دائماً"
      },
      {
        "sv": "Använda telefonen för att distrahera dig från stressen",
        "ar": "استخدام الهاتف لتشتيت نفسك عن التوتر"
      },
      {
        "sv": "Bromsa sent för att spara tid",
        "ar": "الفرملة متأخراً لتوفير الوقت"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/secure-load.svg"
  },
  {
    "id": 8033,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad bör du göra om du upptäcker att du börjar nicka till vid ratten?",
    "questionAr": "ماذا تفعل إذا لاحظت أنك بدأت تغفو خلف المقود؟",
    "options": [
      {
        "sv": "Öka hastigheten för att snabbt lämna situationen",
        "ar": "زيادة السرعة لمغادرة الموقف بسرعة"
      },
      {
        "sv": "Stanna säkert och vila innan du fortsätter",
        "ar": "توقف بأمان واسترح قبل المتابعة"
      },
      {
        "sv": "Förlita dig enbart på bilens assistanssystem",
        "ar": "الاعتماد حصراً على أنظمة مساعدة السيارة"
      },
      {
        "sv": "Fortsätta som vanligt utan att anpassa körningen",
        "ar": "المتابعة كالمعتاد دون تعديل القيادة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/fatigue.svg"
  },
  {
    "id": 8034,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Varför är det riskabelt att följa efter en ambulans genom trafiken?",
    "questionAr": "لماذا من الخطر اتباع سيارة إسعاف عبر حركة المرور؟",
    "options": [
      {
        "sv": "Bromsa eller styra häftigt utan att bedöma risken",
        "ar": "الفرملة أو التوجيه بعنف دون تقييم الخطر"
      },
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنيات السيارة تحل كل المواقف"
      },
      {
        "sv": "Du kan inte räkna med samma fria väg och kan utsätta andra för fara",
        "ar": "لا يمكنك افتراض أن الطريق سيكون خالياً لك وقد تعرض الآخرين للخطر"
      },
      {
        "sv": "Öka hastigheten för att snabbt lämna situationen",
        "ar": "زيادة السرعة لمغادرة الموقف بسرعة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/emergency-triangle.svg"
  },
  {
    "id": 8035,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad är lämpligt när du närmar dig en skolbuss och barn finns i närheten?",
    "questionAr": "ما المناسب عند الاقتراب من حافلة مدرسية ووجود أطفال بالقرب منها؟",
    "options": [
      {
        "sv": "Bromsa sent för att spara tid",
        "ar": "الفرملة متأخراً لتوفير الوقت"
      },
      {
        "sv": "Köra när du är så trött att koncentrationen sviktar",
        "ar": "القيادة عندما يكون التعب قد أضعف التركيز"
      },
      {
        "sv": "Förlita dig enbart på bilens assistanssystem",
        "ar": "الاعتماد حصراً على أنظمة مساعدة السيارة"
      },
      {
        "sv": "Sänk farten kraftigt efter situationen och var beredd att stanna",
        "ar": "خفف السرعة كثيراً حسب الموقف واستعد للتوقف"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/children.svg"
  },
  {
    "id": 8036,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Varför ska du anpassa farten före en skarp kurva?",
    "questionAr": "لماذا تعدّل السرعة قبل منعطف حاد؟",
    "options": [
      {
        "sv": "Det är säkrare att bromsa före kurvan än mitt i den",
        "ar": "الأكثر أماناً هو الفرملة قبل المنعطف لا في منتصفه"
      },
      {
        "sv": "Öka hastigheten för att snabbt lämna situationen",
        "ar": "زيادة السرعة لمغادرة الموقف بسرعة"
      },
      {
        "sv": "Bromsa eller styra häftigt utan att bedöma risken",
        "ar": "الفرملة أو التوجيه بعنف دون تقييم الخطر"
      },
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنيات السيارة تحل كل المواقف"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/mountain-road.svg"
  },
  {
    "id": 8037,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad bör du göra om ett däck går sönder under körning?",
    "questionAr": "ماذا تفعل إذا انفجر إطار أثناء القيادة؟",
    "options": [
      {
        "sv": "Köra när du är så trött att koncentrationen sviktar",
        "ar": "القيادة عندما يكون التعب قد أضعف التركيز"
      },
      {
        "sv": "Håll ratten stadigt, släpp gasen och stanna kontrollerat på säker plats",
        "ar": "ثبّت المقود وارفع قدمك عن الوقود وتوقف بشكل مسيطر عليه في مكان آمن"
      },
      {
        "sv": "Använda telefonen för att distrahera dig från stressen",
        "ar": "استخدام الهاتف لتشتيت نفسك عن التوتر"
      },
      {
        "sv": "Bromsa sent för att spara tid",
        "ar": "الفرملة متأخراً لتوفير الوقت"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/tire-pressure.svg"
  },
  {
    "id": 8038,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad är viktigt efter en mindre trafikolycka?",
    "questionAr": "ما المهم بعد حادث مروري بسيط؟",
    "options": [
      {
        "sv": "Lita på att bilens teknik löser alla situationer",
        "ar": "الاعتماد على أن تقنيات السيارة تحل كل المواقف"
      },
      {
        "sv": "Hålla samma avstånd även när vägen blir hal",
        "ar": "الحفاظ على المسافة نفسها حتى عندما يصبح الطريق زلقاً"
      },
      {
        "sv": "Säkra platsen, kontrollera om någon skadats och följ gällande rutiner",
        "ar": "أمّن المكان وتحقق من الإصابات واتبع الإجراءات السارية"
      },
      {
        "sv": "Bromsa eller styra häftigt utan att bedöma risken",
        "ar": "الفرملة أو التوجيه بعنف دون تقييم الخطر"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/emergency-triangle.svg"
  },
  {
    "id": 8039,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Varför är det viktigt att inte stirra på ett hinder du vill undvika?",
    "questionAr": "لماذا لا ينبغي التحديق في عائق تريد تفاديه؟",
    "options": [
      {
        "sv": "Titta bara nära bilen och inte längre fram",
        "ar": "النظر إلى المسافة القريبة فقط وليس بعيداً إلى الأمام"
      },
      {
        "sv": "Fortsätta trots att du inte längre kan se tillräckligt",
        "ar": "المتابعة رغم أنك لم تعد ترى بما يكفي"
      },
      {
        "sv": "Anta att andra trafikanter alltid upptäcker faran",
        "ar": "افتراض أن مستخدمي الطريق الآخرين يلاحظون الخطر دائماً"
      },
      {
        "sv": "Rikta blicken mot den säkra väg du vill styra mot",
        "ar": "وجّه نظرك نحو المسار الآمن الذي تريد التوجه إليه"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/visibility.svg"
  },
  {
    "id": 8040,
    "reviewStatus": "draft",
    "category": "Trafiksäkerhet",
    "questionSv": "Vad bör du tänka på när du kör över ett gupp?",
    "questionAr": "ما الذي يجب مراعاته عند عبور مطب؟",
    "options": [
      {
        "sv": "Sänk farten i god tid och passera mjukt",
        "ar": "خفف السرعة مسبقاً واعبر بسلاسة"
      },
      {
        "sv": "Bromsa sent för att spara tid",
        "ar": "الفرملة متأخراً لتوفير الوقت"
      },
      {
        "sv": "Köra när du är så trött att koncentrationen sviktar",
        "ar": "القيادة عندما يكون التعب قد أضعف التركيز"
      },
      {
        "sv": "Förlita dig enbart på bilens assistanssystem",
        "ar": "الاعتماد حصراً على أنظمة مساعدة السيارة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Målet är att skapa större säkerhetsmarginaler och minska risken för en farlig situation.",
    "explanationAr": "الهدف هو توفير هامش أمان أكبر وتقليل احتمال وقوع موقف خطير.",
    "image": "./questions/speed-bump.svg"
  },
  {
    "id": 9001,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför är det effektivt att växla upp i god tid när motorn tillåter det?",
    "questionAr": "لماذا يُعد تبديل السرعة إلى غيار أعلى في الوقت المناسب فعالاً عندما يسمح المحرك بذلك؟",
    "options": [
      {
        "sv": "Hälla bilvätskor i avlopp eller på marken",
        "ar": "سكب سوائل السيارة في المصارف أو الأرض"
      },
      {
        "sv": "Det kan minska onödigt höga motorvarv och bränsleförbrukning",
        "ar": "قد يقلل دورات المحرك المرتفعة غير الضرورية واستهلاك الوقود"
      },
      {
        "sv": "Bära takbox och last som inte behövs",
        "ar": "حمل صندوق سقف وأمتعة غير لازمة"
      },
      {
        "sv": "Köra med fel däcktryck trots rekommendationen",
        "ar": "القيادة بضغط إطارات غير صحيح رغم التوصية"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 9002,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför är jämn hastighet ofta bättre än upprepade accelerationer?",
    "questionAr": "لماذا تكون السرعة المنتظمة غالباً أفضل من التسارع المتكرر؟",
    "options": [
      {
        "sv": "Accelerera kraftigt och bromsa sent",
        "ar": "التسارع بقوة والفرملة متأخراً"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حاجة"
      },
      {
        "sv": "Den minskar onödiga energiomvandlingar och kan spara bränsle",
        "ar": "تقلل هدر الطاقة وقد توفر الوقود"
      },
      {
        "sv": "Tvätta bilen så att kemikalier rinner direkt till dagvatten",
        "ar": "غسل السيارة بحيث تتدفق المواد الكيميائية مباشرة إلى مياه تصريف الأمطار"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/eco-driving.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 9003,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Vad är en möjlig miljöfördel med att samåka?",
    "questionAr": "ما إحدى الفوائد البيئية المحتملة لمشاركة السيارة؟",
    "options": [
      {
        "sv": "Hälla bilvätskor i avlopp eller på marken",
        "ar": "سكب سوائل السيارة في المصارف أو الأرض"
      },
      {
        "sv": "Ignorera service och fel i avgasreningen",
        "ar": "تجاهل الصيانة وأعطال تنقية العادم"
      },
      {
        "sv": "Ta bilen även när ett rimligt gångalternativ passar",
        "ar": "استخدام السيارة حتى عندما يكون المشي خياراً مناسباً"
      },
      {
        "sv": "Färre bilar kan behövas för samma antal resenärer",
        "ar": "قد نحتاج إلى سيارات أقل لنقل العدد نفسه من الركاب"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 9004,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Vad bör du tänka på när du väljer takbox?",
    "questionAr": "ما الذي يجب مراعاته عند اختيار صندوق سقف؟",
    "options": [
      {
        "sv": "Använd den bara när den behövs eftersom den ökar luftmotståndet",
        "ar": "استخدمه عند الحاجة فقط لأنه يزيد مقاومة الهواء"
      },
      {
        "sv": "Hälla bilvätskor i avlopp eller på marken",
        "ar": "سكب سوائل السيارة في المصارف أو الأرض"
      },
      {
        "sv": "Ignorera service och fel i avgasreningen",
        "ar": "تجاهل الصيانة وأعطال تنقية العادم"
      },
      {
        "sv": "Ta bilen även när ett rimligt gångalternativ passar",
        "ar": "استخدام السيارة حتى عندما يكون المشي خياراً مناسباً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/air-resistance.svg"
  },
  {
    "id": 9005,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför kan lågt däcktryck öka bränsleförbrukningen?",
    "questionAr": "لماذا قد يؤدي انخفاض ضغط الإطارات إلى زيادة استهلاك الوقود؟",
    "options": [
      {
        "sv": "Öka varvtalet i onödan när bilen står still",
        "ar": "رفع دورات المحرك دون داعٍ والسيارة متوقفة"
      },
      {
        "sv": "Rullmotståndet kan öka",
        "ar": "قد تزداد مقاومة التدحرج"
      },
      {
        "sv": "Ignorera service och fel i avgasreningen",
        "ar": "تجاهل الصيانة وأعطال تنقية العادم"
      },
      {
        "sv": "Ta bilen även när ett rimligt gångalternativ passar",
        "ar": "استخدام السيارة حتى عندما يكون المشي خياراً مناسباً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/tire-pressure.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/Fordon/Fordonsregler/Dack/vinterdack/",
    "sourceTitle": "Transportstyrelsen – Däck och vinterdäck"
  },
  {
    "id": 9006,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Hur bör du hantera gammal motorolja?",
    "questionAr": "كيف تتعامل مع زيت المحرك المستعمل؟",
    "options": [
      {
        "sv": "Ta bilen även när ett rimligt gångalternativ passar",
        "ar": "استخدام السيارة حتى عندما يكون المشي خياراً مناسباً"
      },
      {
        "sv": "Öka varvtalet i onödan när bilen står still",
        "ar": "رفع دورات المحرك دون داعٍ والسيارة متوقفة"
      },
      {
        "sv": "Lämna den på en godkänd insamlings- eller återvinningsplats",
        "ar": "سلّمها إلى نقطة جمع أو إعادة تدوير معتمدة"
      },
      {
        "sv": "Ignorera service och fel i avgasreningen",
        "ar": "تجاهل الصيانة وأعطال تنقية العادم"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 9007,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför ska bilbatterier och elektronik lämnas på rätt insamlingsplats?",
    "questionAr": "لماذا يجب تسليم بطاريات السيارة والإلكترونيات إلى مكان الجمع الصحيح؟",
    "options": [
      {
        "sv": "Ta bilen även när ett rimligt gångalternativ passar",
        "ar": "استخدام السيارة حتى عندما يكون المشي خياراً مناسباً"
      },
      {
        "sv": "Öka varvtalet i onödan när bilen står still",
        "ar": "رفع دورات المحرك دون داعٍ والسيارة متوقفة"
      },
      {
        "sv": "Accelerera mot en signal som snart blir röd",
        "ar": "التسارع نحو إشارة ستصبح حمراء قريباً"
      },
      {
        "sv": "De kan innehålla material som behöver hanteras säkert och återvinnas",
        "ar": "قد تحتوي على مواد تحتاج إلى معالجة آمنة وإعادة تدوير"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/electric-car.svg"
  },
  {
    "id": 9008,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Vad kan du göra för att minska onödiga korta bilresor?",
    "questionAr": "ماذا يمكنك أن تفعل لتقليل رحلات السيارة القصيرة غير الضرورية؟",
    "options": [
      {
        "sv": "Gå, cykla eller kombinera ärenden när det passar och är säkert",
        "ar": "امشِ أو استخدم الدراجة أو اجمع المشاوير عندما يكون ذلك مناسباً وآمناً"
      },
      {
        "sv": "Ignorera service och fel i avgasreningen",
        "ar": "تجاهل الصيانة وأعطال تنقية العادم"
      },
      {
        "sv": "Ta bilen även när ett rimligt gångalternativ passar",
        "ar": "استخدام السيارة حتى عندما يكون المشي خياراً مناسباً"
      },
      {
        "sv": "Öka varvtalet i onödan när bilen står still",
        "ar": "رفع دورات المحرك دون داعٍ والسيارة متوقفة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 9009,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför bör du undvika att värma upp bilen länge på tomgång?",
    "questionAr": "لماذا يجب تجنب تدفئة السيارة طويلاً والمحرك يعمل دون حركة؟",
    "options": [
      {
        "sv": "Köra med fel däcktryck trots rekommendationen",
        "ar": "القيادة بضغط إطارات غير صحيح رغم التوصية"
      },
      {
        "sv": "Det förbrukar bränsle och ger utsläpp utan att du förflyttar dig",
        "ar": "يستهلك الوقود وينتج انبعاثات دون أن تتحرك السيارة"
      },
      {
        "sv": "Köra omvägar utan att planera rutten",
        "ar": "سلوك طرق التفافية دون تخطيط المسار"
      },
      {
        "sv": "Bära takbox och last som inte behövs",
        "ar": "حمل صندوق سقف وأمتعة غير لازمة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 9010,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Vad kan regelbundet underhåll av motorn bidra till?",
    "questionAr": "بماذا يمكن أن تساهم الصيانة المنتظمة للمحرك؟",
    "options": [
      {
        "sv": "Lämna onödig last kvar i bilen hela tiden",
        "ar": "ترك حمولة غير ضرورية في السيارة طوال الوقت"
      },
      {
        "sv": "Tvätta bilen så att kemikalier rinner direkt till dagvatten",
        "ar": "غسل السيارة بحيث تتدفق المواد الكيميائية مباشرة إلى مياه تصريف الأمطار"
      },
      {
        "sv": "Effektiv drift och att onödiga utsläpp eller fel upptäcks",
        "ar": "التشغيل بكفاءة واكتشاف الأعطال أو الانبعاثات غير الضرورية"
      },
      {
        "sv": "Accelerera mot en signal som snart blir röd",
        "ar": "التسارع نحو إشارة ستصبح حمراء قريباً"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 9011,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför är det viktigt att kontrollera att avgasreningen fungerar?",
    "questionAr": "لماذا من المهم التأكد من عمل نظام تنقية العادم؟",
    "options": [
      {
        "sv": "Köra omvägar utan att planera rutten",
        "ar": "سلوك طرق التفافية دون تخطيط المسار"
      },
      {
        "sv": "Bära takbox och last som inte behövs",
        "ar": "حمل صندوق سقف وأمتعة غير لازمة"
      },
      {
        "sv": "Köra med fel däcktryck trots rekommendationen",
        "ar": "القيادة بضغط إطارات غير صحيح رغم التوصية"
      },
      {
        "sv": "Ett fel kan öka utsläppen och påverka bilens funktion",
        "ar": "قد يزيد العطل الانبعاثات ويؤثر في أداء السيارة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 9012,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Hur påverkar en tung onödig last bilens energibehov?",
    "questionAr": "كيف تؤثر الحمولة الثقيلة غير الضرورية في حاجة السيارة للطاقة؟",
    "options": [
      {
        "sv": "Den kräver mer energi, särskilt vid acceleration",
        "ar": "تتطلب طاقة أكبر، خصوصاً عند التسارع"
      },
      {
        "sv": "Köra med fel däcktryck trots rekommendationen",
        "ar": "القيادة بضغط إطارات غير صحيح رغم التوصية"
      },
      {
        "sv": "Hälla bilvätskor i avlopp eller på marken",
        "ar": "سكب سوائل السيارة في المصارف أو الأرض"
      },
      {
        "sv": "Ignorera service och fel i avgasreningen",
        "ar": "تجاهل الصيانة وأعطال تنقية العادم"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/secure-load.svg"
  },
  {
    "id": 9013,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför kan ett lugnt körsätt minska slitaget på bilen?",
    "questionAr": "لماذا قد تقلل القيادة الهادئة تآكل السيارة؟",
    "options": [
      {
        "sv": "Tvätta bilen så att kemikalier rinner direkt till dagvatten",
        "ar": "غسل السيارة بحيث تتدفق المواد الكيميائية مباشرة إلى مياه تصريف الأمطار"
      },
      {
        "sv": "Färre hårda accelerationer och inbromsningar belastar komponenterna mindre",
        "ar": "التسارع والفرملة الأقل عنفاً يقللان الضغط على المكونات"
      },
      {
        "sv": "Accelerera mot en signal som snart blir röd",
        "ar": "التسارع نحو إشارة ستصبح حمراء قريباً"
      },
      {
        "sv": "Lämna onödig last kvar i bilen hela tiden",
        "ar": "ترك حمولة غير ضرورية في السيارة طوال الوقت"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 9014,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Vad bör du göra om du ser att olja läcker från bilen?",
    "questionAr": "ماذا تفعل إذا لاحظت تسرب الزيت من السيارة؟",
    "options": [
      {
        "sv": "Accelerera kraftigt och bromsa sent",
        "ar": "التسارع بقوة والفرملة متأخراً"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حاجة"
      },
      {
        "sv": "Åtgärda läckan och hindra oljan från att nå mark eller dagvatten",
        "ar": "عالج التسرب وامنع وصول الزيت إلى الأرض أو مياه تصريف الأمطار"
      },
      {
        "sv": "Tvätta bilen så att kemikalier rinner direkt till dagvatten",
        "ar": "غسل السيارة بحيث تتدفق المواد الكيميائية مباشرة إلى مياه تصريف الأمطار"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 9015,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför bör du aldrig hälla kylvätska i ett dagvattenbrunn?",
    "questionAr": "لماذا لا ينبغي أبداً سكب سائل التبريد في مصرف مياه الأمطار؟",
    "options": [
      {
        "sv": "Ta bilen även när ett rimligt gångalternativ passar",
        "ar": "استخدام السيارة حتى عندما يكون المشي خياراً مناسباً"
      },
      {
        "sv": "Öka varvtalet i onödan när bilen står still",
        "ar": "رفع دورات المحرك دون داعٍ والسيارة متوقفة"
      },
      {
        "sv": "Accelerera mot en signal som snart blir röd",
        "ar": "التسارع نحو إشارة ستصبح حمراء قريباً"
      },
      {
        "sv": "Vätskan kan förorena miljön och behöver tas om hand korrekt",
        "ar": "قد يلوث السائل البيئة ويجب التخلص منه بطريقة صحيحة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/coolant.svg"
  },
  {
    "id": 9016,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Vad är en fördel med att planera flera ärenden till en resa?",
    "questionAr": "ما فائدة التخطيط لإنجاز عدة مشاوير في رحلة واحدة؟",
    "options": [
      {
        "sv": "Det kan minska körsträckan och bränsleförbrukningen",
        "ar": "قد يقلل مسافة القيادة واستهلاك الوقود"
      },
      {
        "sv": "Accelerera kraftigt och bromsa sent",
        "ar": "التسارع بقوة والفرملة متأخراً"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حاجة"
      },
      {
        "sv": "Köra omvägar utan att planera rutten",
        "ar": "سلوك طرق التفافية دون تخطيط المسار"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 9017,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Hur kan rätt motorolja enligt bilens manual hjälpa?",
    "questionAr": "كيف يمكن أن يساعد استخدام زيت المحرك الصحيح وفق دليل السيارة؟",
    "options": [
      {
        "sv": "Öka varvtalet i onödan när bilen står still",
        "ar": "رفع دورات المحرك دون داعٍ والسيارة متوقفة"
      },
      {
        "sv": "Den stödjer rätt smörjning och effektiv motordrift",
        "ar": "يدعم التزييت الصحيح وكفاءة عمل المحرك"
      },
      {
        "sv": "Ignorera service och fel i avgasreningen",
        "ar": "تجاهل الصيانة وأعطال تنقية العادم"
      },
      {
        "sv": "Ta bilen även när ett rimligt gångalternativ passar",
        "ar": "استخدام السيارة حتى عندما يكون المشي خياراً مناسباً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 9018,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Vad bör du göra när du väljer mellan två likvärdiga färdvägar?",
    "questionAr": "ماذا تفعل عند الاختيار بين طريقين متكافئين؟",
    "options": [
      {
        "sv": "Accelerera mot en signal som snart blir röd",
        "ar": "التسارع نحو إشارة ستصبح حمراء قريباً"
      },
      {
        "sv": "Lämna onödig last kvar i bilen hela tiden",
        "ar": "ترك حمولة غير ضرورية في السيارة طوال الوقت"
      },
      {
        "sv": "Välj en säker och smidig rutt utan onödiga omvägar",
        "ar": "اختر مساراً آمناً وسلساً دون التفافات غير ضرورية"
      },
      {
        "sv": "Öka varvtalet i onödan när bilen står still",
        "ar": "رفع دورات المحرك دون داعٍ والسيارة متوقفة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 9019,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför bör du inte låta bilen stå med motorn igång medan du väntar länge?",
    "questionAr": "لماذا لا ينبغي ترك السيارة والمحرك يعمل أثناء انتظار طويل؟",
    "options": [
      {
        "sv": "Lämna onödig last kvar i bilen hela tiden",
        "ar": "ترك حمولة غير ضرورية في السيارة طوال الوقت"
      },
      {
        "sv": "Tvätta bilen så att kemikalier rinner direkt till dagvatten",
        "ar": "غسل السيارة بحيث تتدفق المواد الكيميائية مباشرة إلى مياه تصريف الأمطار"
      },
      {
        "sv": "Accelerera kraftigt och bromsa sent",
        "ar": "التسارع بقوة والفرملة متأخراً"
      },
      {
        "sv": "Det ger onödiga utsläpp och kan slösa bränsle",
        "ar": "ينتج انبعاثات غير ضرورية وقد يهدر الوقود"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 9020,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Vad är viktigt när du tvättar bilen hemma?",
    "questionAr": "ما المهم عند غسل السيارة في المنزل؟",
    "options": [
      {
        "sv": "Undvik att föroreningar och rengöringsmedel rinner ut i dagvatten",
        "ar": "تجنب تصريف الملوثات ومواد التنظيف إلى مصارف مياه الأمطار"
      },
      {
        "sv": "Ignorera service och fel i avgasreningen",
        "ar": "تجاهل الصيانة وأعطال تنقية العادم"
      },
      {
        "sv": "Ta bilen även när ett rimligt gångalternativ passar",
        "ar": "استخدام السيارة حتى عندما يكون المشي خياراً مناسباً"
      },
      {
        "sv": "Öka varvtalet i onödan när bilen står still",
        "ar": "رفع دورات المحرك دون داعٍ والسيارة متوقفة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 9021,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför kan rätt hjulinställning vara bra?",
    "questionAr": "لماذا قد تكون محاذاة العجلات الصحيحة مفيدة؟",
    "options": [
      {
        "sv": "Lämna onödig last kvar i bilen hela tiden",
        "ar": "ترك حمولة غير ضرورية في السيارة طوال الوقت"
      },
      {
        "sv": "Den kan minska onödigt däckslitage och rullmotstånd",
        "ar": "قد تقلل تآكل الإطارات ومقاومة التدحرج غير الضروريين"
      },
      {
        "sv": "Öka varvtalet i onödan när bilen står still",
        "ar": "رفع دورات المحرك دون داعٍ والسيارة متوقفة"
      },
      {
        "sv": "Accelerera mot en signal som snart blir röd",
        "ar": "التسارع نحو إشارة ستصبح حمراء قريباً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/tire-pressure.svg"
  },
  {
    "id": 9022,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Vilken körning kan hjälpa till att återvinna energi i en elbil?",
    "questionAr": "أي أسلوب قيادة قد يساعد على استعادة الطاقة في سيارة كهربائية؟",
    "options": [
      {
        "sv": "Lämna onödig last kvar i bilen hela tiden",
        "ar": "ترك حمولة غير ضرورية في السيارة طوال الوقت"
      },
      {
        "sv": "Tvätta bilen så att kemikalier rinner direkt till dagvatten",
        "ar": "غسل السيارة بحيث تتدفق المواد الكيميائية مباشرة إلى مياه تصريف الأمطار"
      },
      {
        "sv": "Planera inbromsningar så att regenerativ bromsning kan användas där det passar",
        "ar": "خطط للفرملة بحيث يمكن استخدام استعادة الطاقة عند ملاءمتها"
      },
      {
        "sv": "Accelerera mot en signal som snart blir röd",
        "ar": "التسارع نحو إشارة ستصبح حمراء قريباً"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/electric-car.svg"
  },
  {
    "id": 9023,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför är det bra att kontrollera räckvidden innan en längre elbilsresa?",
    "questionAr": "لماذا من الجيد التحقق من مدى السيارة الكهربائية قبل رحلة طويلة؟",
    "options": [
      {
        "sv": "Accelerera mot en signal som snart blir röd",
        "ar": "التسارع نحو إشارة ستصبح حمراء قريباً"
      },
      {
        "sv": "Lämna onödig last kvar i bilen hela tiden",
        "ar": "ترك حمولة غير ضرورية في السيارة طوال الوقت"
      },
      {
        "sv": "Tvätta bilen så att kemikalier rinner direkt till dagvatten",
        "ar": "غسل السيارة بحيث تتدفق المواد الكيميائية مباشرة إلى مياه تصريف الأمطار"
      },
      {
        "sv": "Du kan planera laddning och undvika onödiga omvägar",
        "ar": "يمكنك التخطيط للشحن وتجنب الطرق الالتفافية غير الضرورية"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/electric-car.svg"
  },
  {
    "id": 9024,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Vad bör du tänka på när du laddar en elbil?",
    "questionAr": "ما الذي يجب مراعاته عند شحن سيارة كهربائية؟",
    "options": [
      {
        "sv": "Använd avsedd och säker laddutrustning enligt instruktionerna",
        "ar": "استخدم معدات الشحن المخصصة والآمنة وفق التعليمات"
      },
      {
        "sv": "Ta bilen även när ett rimligt gångalternativ passar",
        "ar": "استخدام السيارة حتى عندما يكون المشي خياراً مناسباً"
      },
      {
        "sv": "Öka varvtalet i onödan när bilen står still",
        "ar": "رفع دورات المحرك دون داعٍ والسيارة متوقفة"
      },
      {
        "sv": "Accelerera mot en signal som snart blir röd",
        "ar": "التسارع نحو إشارة ستصبح حمراء قريباً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/electric-car.svg"
  },
  {
    "id": 9025,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Vad är bra med att använda motorvärmare där det är lämpligt?",
    "questionAr": "ما فائدة استخدام سخان المحرك عندما يكون ذلك مناسباً؟",
    "options": [
      {
        "sv": "Hälla bilvätskor i avlopp eller på marken",
        "ar": "سكب سوائل السيارة في المصارف أو الأرض"
      },
      {
        "sv": "Rätt användning kan minska kallstartens utsläpp och bränslebehov",
        "ar": "قد يقلل الاستخدام الصحيح انبعاثات التشغيل البارد واستهلاك الوقود"
      },
      {
        "sv": "Bära takbox och last som inte behövs",
        "ar": "حمل صندوق سقف وأمتعة غير لازمة"
      },
      {
        "sv": "Köra med fel däcktryck trots rekommendationen",
        "ar": "القيادة بضغط إطارات غير صحيح رغم التوصية"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 9026,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför ska du kontrollera att lasten inte täcker bilens luftintag i onödan?",
    "questionAr": "لماذا تتحقق من أن الحمولة لا تحجب مدخل هواء السيارة دون داعٍ؟",
    "options": [
      {
        "sv": "Lämna onödig last kvar i bilen hela tiden",
        "ar": "ترك حمولة غير ضرورية في السيارة طوال الوقت"
      },
      {
        "sv": "Tvätta bilen så att kemikalier rinner direkt till dagvatten",
        "ar": "غسل السيارة بحيث تتدفق المواد الكيميائية مباشرة إلى مياه تصريف الأمطار"
      },
      {
        "sv": "Luftflöde och kylning kan påverkas av felaktig placering",
        "ar": "قد يتأثر تدفق الهواء والتبريد بسبب وضع الحمولة بشكل خاطئ"
      },
      {
        "sv": "Accelerera mot en signal som snart blir röd",
        "ar": "التسارع نحو إشارة ستصبح حمراء قريباً"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/secure-load.svg"
  },
  {
    "id": 9027,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Hur kan du minska utsläpp när du närmar dig ett rödljus?",
    "questionAr": "كيف تقلل الانبعاثات عند الاقتراب من إشارة حمراء؟",
    "options": [
      {
        "sv": "Hälla bilvätskor i avlopp eller på marken",
        "ar": "سكب سوائل السيارة في المصارف أو الأرض"
      },
      {
        "sv": "Ignorera service och fel i avgasreningen",
        "ar": "تجاهل الصيانة وأعطال تنقية العادم"
      },
      {
        "sv": "Ta bilen även när ett rimligt gångalternativ passar",
        "ar": "استخدام السيارة حتى عندما يكون المشي خياراً مناسباً"
      },
      {
        "sv": "Släpp gasen i god tid och undvik onödig acceleration",
        "ar": "ارفع قدمك عن الوقود مسبقاً وتجنب التسارع غير الضروري"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/traffic-light.svg"
  },
  {
    "id": 9028,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför är det viktigt att inte köra med onödigt takräcke?",
    "questionAr": "لماذا من المهم عدم القيادة مع حامل سقف غير ضروري؟",
    "options": [
      {
        "sv": "Det kan öka luftmotståndet och energiförbrukningen",
        "ar": "قد يزيد مقاومة الهواء واستهلاك الطاقة"
      },
      {
        "sv": "Accelerera mot en signal som snart blir röd",
        "ar": "التسارع نحو إشارة ستصبح حمراء قريباً"
      },
      {
        "sv": "Lämna onödig last kvar i bilen hela tiden",
        "ar": "ترك حمولة غير ضرورية في السيارة طوال الوقت"
      },
      {
        "sv": "Tvätta bilen så att kemikalier rinner direkt till dagvatten",
        "ar": "غسل السيارة بحيث تتدفق المواد الكيميائية مباشرة إلى مياه تصريف الأمطار"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/air-resistance.svg"
  },
  {
    "id": 9029,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Vad kan en korrekt fungerande termostat bidra till?",
    "questionAr": "بماذا يمكن أن يساهم منظم الحرارة الذي يعمل بشكل صحيح؟",
    "options": [
      {
        "sv": "Öka varvtalet i onödan när bilen står still",
        "ar": "رفع دورات المحرك دون داعٍ والسيارة متوقفة"
      },
      {
        "sv": "Motorn kan hålla lämplig arbetstemperatur",
        "ar": "يمكن للمحرك الحفاظ على درجة حرارة التشغيل المناسبة"
      },
      {
        "sv": "Ignorera service och fel i avgasreningen",
        "ar": "تجاهل الصيانة وأعطال تنقية العادم"
      },
      {
        "sv": "Ta bilen även när ett rimligt gångalternativ passar",
        "ar": "استخدام السيارة حتى عندما يكون المشي خياراً مناسباً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/coolant.svg"
  },
  {
    "id": 9030,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför bör du kontrollera att motorn inte läcker bränsle?",
    "questionAr": "لماذا يجب التحقق من عدم تسرب الوقود من المحرك؟",
    "options": [
      {
        "sv": "Köra med fel däcktryck trots rekommendationen",
        "ar": "القيادة بضغط إطارات غير صحيح رغم التوصية"
      },
      {
        "sv": "Hälla bilvätskor i avlopp eller på marken",
        "ar": "سكب سوائل السيارة في المصارف أو الأرض"
      },
      {
        "sv": "Bränsleläckage innebär miljörisk och brandrisk",
        "ar": "تسرب الوقود يشكل خطراً بيئياً وخطر حريق"
      },
      {
        "sv": "Bära takbox och last som inte behövs",
        "ar": "حمل صندوق سقف وأمتعة غير لازمة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 9031,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Hur kan samåkning till arbetet påverka miljön?",
    "questionAr": "كيف يمكن لمشاركة السيارة إلى العمل أن تؤثر في البيئة؟",
    "options": [
      {
        "sv": "Ta bilen även när ett rimligt gångalternativ passar",
        "ar": "استخدام السيارة حتى عندما يكون المشي خياراً مناسباً"
      },
      {
        "sv": "Öka varvtalet i onödan när bilen står still",
        "ar": "رفع دورات المحرك دون داعٍ والسيارة متوقفة"
      },
      {
        "sv": "Accelerera mot en signal som snart blir röd",
        "ar": "التسارع نحو إشارة ستصبح حمراء قريباً"
      },
      {
        "sv": "Den kan minska antalet bilar som används för resan",
        "ar": "قد تقلل عدد السيارات المستخدمة للرحلة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 9032,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför ska du undvika att accelerera kraftigt när motorn är kall?",
    "questionAr": "لماذا يجب تجنب التسارع القوي عندما يكون المحرك بارداً؟",
    "options": [
      {
        "sv": "Kall motor kan ge högre slitage och mindre effektiv drift",
        "ar": "قد يؤدي المحرك البارد إلى تآكل أكبر وتشغيل أقل كفاءة"
      },
      {
        "sv": "Hälla bilvätskor i avlopp eller på marken",
        "ar": "سكب سوائل السيارة في المصارف أو الأرض"
      },
      {
        "sv": "Ignorera service och fel i avgasreningen",
        "ar": "تجاهل الصيانة وأعطال تنقية العادم"
      },
      {
        "sv": "Ta bilen även när ett rimligt gångalternativ passar",
        "ar": "استخدام السيارة حتى عندما يكون المشي خياراً مناسباً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 9033,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Vad är en fördel med att hålla rätt hastighet på motorväg?",
    "questionAr": "ما فائدة الحفاظ على سرعة مناسبة على الطريق السريع؟",
    "options": [
      {
        "sv": "Bära takbox och last som inte behövs",
        "ar": "حمل صندوق سقف وأمتعة غير لازمة"
      },
      {
        "sv": "Det kan minska luftmotstånd och energianvändning jämfört med högre fart",
        "ar": "قد يقلل مقاومة الهواء واستهلاك الطاقة مقارنة بسرعة أعلى"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حاجة"
      },
      {
        "sv": "Köra omvägar utan att planera rutten",
        "ar": "سلوك طرق التفافية دون تخطيط المسار"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/air-resistance.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/trafikregler/generella-trafikregler/hastighet/",
    "sourceTitle": "Transportstyrelsen – Hastighet"
  },
  {
    "id": 9034,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Hur bör du hantera gamla däck?",
    "questionAr": "كيف ينبغي التعامل مع الإطارات القديمة؟",
    "options": [
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حاجة"
      },
      {
        "sv": "Köra omvägar utan att planera rutten",
        "ar": "سلوك طرق التفافية دون تخطيط المسار"
      },
      {
        "sv": "Lämna dem till en lämplig insamling eller återvinning",
        "ar": "سلّمها إلى جهة مناسبة للجمع أو إعادة التدوير"
      },
      {
        "sv": "Accelerera kraftigt och bromsa sent",
        "ar": "التسارع بقوة والفرملة متأخراً"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/tire-pressure.svg"
  },
  {
    "id": 9035,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför är det olämpligt att låta kemikalier från bilunderhåll rinna ned i marken?",
    "questionAr": "لماذا من غير المناسب ترك مواد صيانة السيارة الكيميائية تتسرب إلى الأرض؟",
    "options": [
      {
        "sv": "Ignorera service och fel i avgasreningen",
        "ar": "تجاهل الصيانة وأعطال تنقية العادم"
      },
      {
        "sv": "Ta bilen även när ett rimligt gångalternativ passar",
        "ar": "استخدام السيارة حتى عندما يكون المشي خياراً مناسباً"
      },
      {
        "sv": "Öka varvtalet i onödan när bilen står still",
        "ar": "رفع دورات المحرك دون داعٍ والسيارة متوقفة"
      },
      {
        "sv": "De kan förorena mark och vatten",
        "ar": "قد تلوث التربة والمياه"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 9036,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Vad kan rätt planering av laddstopp göra på en elbilsresa?",
    "questionAr": "ماذا يمكن أن يحقق التخطيط الصحيح لمحطات شحن السيارة الكهربائية؟",
    "options": [
      {
        "sv": "Minska väntetid och onödiga omvägar",
        "ar": "تقليل الانتظار والطرق الالتفافية غير الضرورية"
      },
      {
        "sv": "Lämna onödig last kvar i bilen hela tiden",
        "ar": "ترك حمولة غير ضرورية في السيارة طوال الوقت"
      },
      {
        "sv": "Tvätta bilen så att kemikalier rinner direkt till dagvatten",
        "ar": "غسل السيارة بحيث تتدفق المواد الكيميائية مباشرة إلى مياه تصريف الأمطار"
      },
      {
        "sv": "Accelerera kraftigt och bromsa sent",
        "ar": "التسارع بقوة والفرملة متأخراً"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/electric-car.svg"
  },
  {
    "id": 9037,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför är mjuk acceleration ofta bättre ur miljösynpunkt?",
    "questionAr": "لماذا يكون التسارع السلس أفضل غالباً من الناحية البيئية؟",
    "options": [
      {
        "sv": "Köra omvägar utan att planera rutten",
        "ar": "سلوك طرق التفافية دون تخطيط المسار"
      },
      {
        "sv": "Det kan kräva mindre energi än upprepade kraftiga accelerationer",
        "ar": "قد يحتاج إلى طاقة أقل من التسارع القوي المتكرر"
      },
      {
        "sv": "Accelerera kraftigt och bromsa sent",
        "ar": "التسارع بقوة والفرملة متأخراً"
      },
      {
        "sv": "Låta motorn gå på tomgång i onödan",
        "ar": "ترك المحرك يعمل دون حاجة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/eco-driving.svg"
  },
  {
    "id": 9038,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Vad bör du göra om en varningslampa visar fel på motorn eller avgasreningen?",
    "questionAr": "ماذا تفعل إذا أظهر ضوء التحذير عطلاً في المحرك أو نظام العادم؟",
    "options": [
      {
        "sv": "Tvätta bilen så att kemikalier rinner direkt till dagvatten",
        "ar": "غسل السيارة بحيث تتدفق المواد الكيميائية مباشرة إلى مياه تصريف الأمطار"
      },
      {
        "sv": "Accelerera kraftigt och bromsa sent",
        "ar": "التسارع بقوة والفرملة متأخراً"
      },
      {
        "sv": "Kontrollera felet enligt manualen och låt bilen undersökas vid behov",
        "ar": "تحقق من العطل وفق الدليل وافحص السيارة عند الحاجة"
      },
      {
        "sv": "Lämna onödig last kvar i bilen hela tiden",
        "ar": "ترك حمولة غير ضرورية في السيارة طوال الوقت"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 9039,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Hur kan rätt planerat däckbyte bidra till miljön?",
    "questionAr": "كيف يمكن لتغيير الإطارات في الوقت المناسب أن يفيد البيئة؟",
    "options": [
      {
        "sv": "Lämna onödig last kvar i bilen hela tiden",
        "ar": "ترك حمولة غير ضرورية في السيارة طوال الوقت"
      },
      {
        "sv": "Tvätta bilen så att kemikalier rinner direkt till dagvatten",
        "ar": "غسل السيارة بحيث تتدفق المواد الكيميائية مباشرة إلى مياه تصريف الأمطار"
      },
      {
        "sv": "Accelerera kraftigt och bromsa sent",
        "ar": "التسارع بقوة والفرملة متأخراً"
      },
      {
        "sv": "Det hjälper dig använda lämpliga däck och undvika onödigt slitage",
        "ar": "يساعد على استخدام الإطارات المناسبة وتجنب التآكل غير الضروري"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/tire-pressure.svg"
  },
  {
    "id": 9040,
    "reviewStatus": "draft",
    "category": "Miljö",
    "questionSv": "Varför bör du inte köra runt länge för att hitta en parkeringsplats?",
    "questionAr": "لماذا لا ينبغي التجول طويلاً بحثاً عن موقف؟",
    "options": [
      {
        "sv": "Det kan ge onödig körsträcka, utsläpp och bränsleförbrukning",
        "ar": "قد يسبب مسافة قيادة وانبعاثات واستهلاك وقود غير ضروري"
      },
      {
        "sv": "Öka varvtalet i onödan när bilen står still",
        "ar": "رفع دورات المحرك دون داعٍ والسيارة متوقفة"
      },
      {
        "sv": "Accelerera mot en signal som snart blir röd",
        "ar": "التسارع نحو إشارة ستصبح حمراء قريباً"
      },
      {
        "sv": "Lämna onödig last kvar i bilen hela tiden",
        "ar": "ترك حمولة غير ضرورية في السيارة طوال الوقت"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Ett genomtänkt val kan minska onödig energi- och bränsleanvändning samt miljöpåverkan.",
    "explanationAr": "يمكن للاختيار المدروس أن يقلل استهلاك الطاقة والوقود غير الضروري والأثر البيئي.",
    "image": "./questions/parking.svg"
  },
  {
    "id": 10001,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad ska du göra om temperaturvarningen visar att motorn är överhettad?",
    "questionAr": "ماذا تفعل إذا أظهر تحذير الحرارة أن المحرك ساخن أكثر من اللازم؟",
    "options": [
      {
        "sv": "Byta säkring upprepade gånger utan att hitta orsaken",
        "ar": "تغيير المصهر مراراً دون البحث عن السبب"
      },
      {
        "sv": "Stanna säkert, stäng av motorn vid behov och följ manualens instruktioner",
        "ar": "توقف بأمان وأطفئ المحرك عند الحاجة واتبع تعليمات الدليل"
      },
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Öppna ett varmt system omedelbart",
        "ar": "فتح نظام ساخن فوراً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/coolant.svg"
  },
  {
    "id": 10002,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Varför ska du aldrig öppna locket till ett varmt kylsystem direkt?",
    "questionAr": "لماذا لا ينبغي فتح غطاء نظام التبريد الساخن مباشرة؟",
    "options": [
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Öppna ett varmt system omedelbart",
        "ar": "فتح نظام ساخن فوراً"
      },
      {
        "sv": "Het vätska och ånga kan orsaka allvarliga brännskador",
        "ar": "قد يسبب السائل والبخار الساخنان حروقاً خطيرة"
      },
      {
        "sv": "Ignorera varningen och fortsätta köra",
        "ar": "تجاهل التحذير ومتابعة القيادة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/coolant.svg"
  },
  {
    "id": 10003,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad ska du göra om en röd bromsvarningslampa tänds under körning?",
    "questionAr": "ماذا تفعل إذا أضاء مصباح تحذير الفرامل الأحمر أثناء القيادة؟",
    "options": [
      {
        "sv": "Öppna ett varmt system omedelbart",
        "ar": "فتح نظام ساخن فوراً"
      },
      {
        "sv": "Byta säkring upprepade gånger utan att hitta orsaken",
        "ar": "تغيير المصهر مراراً دون البحث عن السبب"
      },
      {
        "sv": "Fortsätta trots att bromsarna känns annorlunda",
        "ar": "المتابعة رغم أن الفرامل تبدو غير طبيعية"
      },
      {
        "sv": "Stanna säkert och kontrollera bilens instruktioner; fortsätt inte om bromsarna kan vara osäkra",
        "ar": "توقف بأمان وافحص تعليمات السيارة؛ لا تتابع إذا كانت الفرامل قد تكون غير آمنة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 10004,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Varför ska vindrutetorkarna bytas när de inte längre rengör ordentligt?",
    "questionAr": "لماذا يجب تغيير ماسحات الزجاج عندما لا تنظف جيداً؟",
    "options": [
      {
        "sv": "Dålig avtorkning försämrar sikten i regn och snö",
        "ar": "التنظيف السيئ يضعف الرؤية في المطر والثلج"
      },
      {
        "sv": "Lämna lasten lös så att den kan glida",
        "ar": "ترك الحمولة سائبة بحيث يمكن أن تتحرك"
      },
      {
        "sv": "Ignorera varningen och fortsätta köra",
        "ar": "تجاهل التحذير ومتابعة القيادة"
      },
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/windshield.svg"
  },
  {
    "id": 10005,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du kontrollera om strålkastarna lyser svagt?",
    "questionAr": "ماذا ينبغي أن تتحقق منه إذا كانت المصابيح الأمامية ضعيفة؟",
    "options": [
      {
        "sv": "Röra skadade högvoltskablar",
        "ar": "لمس كابلات الجهد العالي التالفة"
      },
      {
        "sv": "Lampornas funktion, glasens renhet och bilens elsystem vid behov",
        "ar": "عمل المصابيح ونظافة أغطيتها والنظام الكهربائي عند الحاجة"
      },
      {
        "sv": "Använda valfri vätska utan att läsa bilens instruktioner",
        "ar": "استخدام أي سائل دون قراءة تعليمات السيارة"
      },
      {
        "sv": "Arbeta under en bil som bara stöds av domkraften",
        "ar": "العمل تحت سيارة تدعمها الرافعة وحدها"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/headlights.svg"
  },
  {
    "id": 10006,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Varför måste bilens lampor hållas rena?",
    "questionAr": "لماذا يجب إبقاء أضواء السيارة نظيفة؟",
    "options": [
      {
        "sv": "Fortsätta köra med en skadad vindruta som skymmer sikten",
        "ar": "المتابعة بزجاج أمامي متضرر يحجب الرؤية"
      },
      {
        "sv": "Lämna lasten lös så att den kan glida",
        "ar": "ترك الحمولة سائبة بحيث يمكن أن تتحرك"
      },
      {
        "sv": "Smuts kan minska hur väl du ser och hur väl andra ser dig",
        "ar": "قد تقلل الأوساخ قدرتك على الرؤية وقدرة الآخرين على رؤيتك"
      },
      {
        "sv": "Röra skadade högvoltskablar",
        "ar": "لمس كابلات الجهد العالي التالفة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/headlights.svg"
  },
  {
    "id": 10007,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra om oljenivån är lägre än rekommenderat?",
    "questionAr": "ماذا ينبغي أن تفعل إذا كان مستوى الزيت أقل من الموصى به؟",
    "options": [
      {
        "sv": "Fortsätta trots att bromsarna känns annorlunda",
        "ar": "المتابعة رغم أن الفرامل تبدو غير طبيعية"
      },
      {
        "sv": "Lasta bilen över tillverkarens gräns",
        "ar": "تحميل السيارة فوق الحد الذي تحدده الشركة"
      },
      {
        "sv": "Täcka lampor eller registreringsskylt med last",
        "ar": "حجب الأضواء أو لوحة التسجيل بالحمولة"
      },
      {
        "sv": "Kontrollera bilens instruktioner och fyll på rätt olja på ett säkert sätt",
        "ar": "تحقق من تعليمات السيارة وأضف الزيت الصحيح بأمان"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 10008,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Varför är det viktigt att använda vätskor som rekommenderas för bilen?",
    "questionAr": "لماذا من المهم استخدام السوائل الموصى بها للسيارة؟",
    "options": [
      {
        "sv": "Fel vätska kan skada komponenter eller försämra funktionen",
        "ar": "قد يضر السائل الخاطئ بالمكونات أو يضعف الأداء"
      },
      {
        "sv": "Fortsätta köra med en skadad vindruta som skymmer sikten",
        "ar": "المتابعة بزجاج أمامي متضرر يحجب الرؤية"
      },
      {
        "sv": "Lämna lasten lös så att den kan glida",
        "ar": "ترك الحمولة سائبة بحيث يمكن أن تتحرك"
      },
      {
        "sv": "Ignorera varningen och fortsätta köra",
        "ar": "تجاهل التحذير ومتابعة القيادة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 10009,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad kan ett ovanligt skrapande ljud vid bromsning tyda på?",
    "questionAr": "على ماذا قد يدل صوت احتكاك غير معتاد أثناء الفرملة؟",
    "options": [
      {
        "sv": "Byta säkring upprepade gånger utan att hitta orsaken",
        "ar": "تغيير المصهر مراراً دون البحث عن السبب"
      },
      {
        "sv": "Att bromsarna behöver kontrolleras",
        "ar": "أن الفرامل تحتاج إلى الفحص"
      },
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Öppna ett varmt system omedelbart",
        "ar": "فتح نظام ساخن فوراً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 10010,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad ska du göra om batterilampan lyser medan motorn går?",
    "questionAr": "ماذا تفعل إذا أضاء مصباح البطارية والمحرك يعمل؟",
    "options": [
      {
        "sv": "Byta säkring upprepade gånger utan att hitta orsaken",
        "ar": "تغيير المصهر مراراً دون البحث عن السبب"
      },
      {
        "sv": "Fortsätta trots att bromsarna känns annorlunda",
        "ar": "المتابعة رغم أن الفرامل تبدو غير طبيعية"
      },
      {
        "sv": "Kontrollera instruktionsboken och låt laddningssystemet undersökas",
        "ar": "تحقق من دليل السيارة وافحص نظام الشحن"
      },
      {
        "sv": "Öppna ett varmt system omedelbart",
        "ar": "فتح نظام ساخن فوراً"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 10011,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Varför bör du kontrollera att registreringsskylten syns tydligt?",
    "questionAr": "لماذا يجب التأكد من أن لوحة التسجيل واضحة؟",
    "options": [
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Öppna ett varmt system omedelbart",
        "ar": "فتح نظام ساخن فوراً"
      },
      {
        "sv": "Byta säkring upprepade gånger utan att hitta orsaken",
        "ar": "تغيير المصهر مراراً دون البحث عن السبب"
      },
      {
        "sv": "Den ska vara läsbar och får inte döljas av smuts eller last",
        "ar": "يجب أن تكون مقروءة وألا تحجبها الأوساخ أو الحمولة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 10012,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Hur ska tung last placeras i bilen?",
    "questionAr": "كيف ينبغي وضع الحمولة الثقيلة داخل السيارة؟",
    "options": [
      {
        "sv": "Lågt och säkrat så att den inte kan glida eller flyga framåt",
        "ar": "منخفضة ومثبتة كي لا تنزلق أو تندفع للأمام"
      },
      {
        "sv": "Lämna lasten lös så att den kan glida",
        "ar": "ترك الحمولة سائبة بحيث يمكن أن تتحرك"
      },
      {
        "sv": "Ignorera varningen och fortsätta köra",
        "ar": "تجاهل التحذير ومتابعة القيادة"
      },
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/secure-load.svg"
  },
  {
    "id": 10013,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Varför är det viktigt att inte överskrida bilens maximala lastvikt?",
    "questionAr": "لماذا من المهم عدم تجاوز الحمولة القصوى للسيارة؟",
    "options": [
      {
        "sv": "Ignorera varningen och fortsätta köra",
        "ar": "تجاهل التحذير ومتابعة القيادة"
      },
      {
        "sv": "Överlast kan försämra stabilitet, bromsning och däckens belastning",
        "ar": "قد تضعف الحمولة الزائدة الثبات والفرملة وتزيد الضغط على الإطارات"
      },
      {
        "sv": "Fortsätta köra med en skadad vindruta som skymmer sikten",
        "ar": "المتابعة بزجاج أمامي متضرر يحجب الرؤية"
      },
      {
        "sv": "Lämna lasten lös så att den kan glida",
        "ar": "ترك الحمولة سائبة بحيث يمكن أن تتحرك"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/secure-load.svg"
  },
  {
    "id": 10014,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du kontrollera innan du använder en dragkrok med släp?",
    "questionAr": "ماذا ينبغي أن تتحقق منه قبل استخدام خطاف السحب مع مقطورة؟",
    "options": [
      {
        "sv": "Röra skadade högvoltskablar",
        "ar": "لمس كابلات الجهد العالي التالفة"
      },
      {
        "sv": "Fortsätta köra med en skadad vindruta som skymmer sikten",
        "ar": "المتابعة بزجاج أمامي متضرر يحجب الرؤية"
      },
      {
        "sv": "Att kopplingen är låst och att säkerhetsanslutningar och belysning fungerar",
        "ar": "أن الوصلة مقفلة وأن وصلات الأمان والإضاءة تعمل"
      },
      {
        "sv": "Arbeta under en bil som bara stöds av domkraften",
        "ar": "العمل تحت سيارة تدعمها الرافعة وحدها"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/secure-load.svg"
  },
  {
    "id": 10015,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad ska du göra om en säkring går sönder igen efter byte?",
    "questionAr": "ماذا تفعل إذا احترق المصهر مجدداً بعد تغييره؟",
    "options": [
      {
        "sv": "Täcka lampor eller registreringsskylt med last",
        "ar": "حجب الأضواء أو لوحة التسجيل بالحمولة"
      },
      {
        "sv": "Använda valfri vätska utan att läsa bilens instruktioner",
        "ar": "استخدام أي سائل دون قراءة تعليمات السيارة"
      },
      {
        "sv": "Arbeta under en bil som bara stöds av domkraften",
        "ar": "العمل تحت سيارة تدعمها الرافعة وحدها"
      },
      {
        "sv": "Låt orsaken undersökas i stället för att fortsätta byta säkringar",
        "ar": "دع السبب يُفحص بدلاً من الاستمرار في تغيير المصاهر"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 10016,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Varför ska du kontrollera däcks mönsterdjup?",
    "questionAr": "لماذا يجب فحص عمق نقشة الإطارات؟",
    "options": [
      {
        "sv": "Det påverkar bland annat väggrepp och förmågan att leda bort vatten",
        "ar": "يؤثر في التماسك وقدرة الإطار على تصريف الماء"
      },
      {
        "sv": "Arbeta under en bil som bara stöds av domkraften",
        "ar": "العمل تحت سيارة تدعمها الرافعة وحدها"
      },
      {
        "sv": "Röra skadade högvoltskablar",
        "ar": "لمس كابلات الجهد العالي التالفة"
      },
      {
        "sv": "Fortsätta köra med en skadad vindruta som skymmer sikten",
        "ar": "المتابعة بزجاج أمامي متضرر يحجب الرؤية"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/tire-pressure.svg"
  },
  {
    "id": 10017,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra om bilen drar åt ena sidan när du bromsar?",
    "questionAr": "ماذا تفعل إذا انحرفت السيارة إلى جانب عند الفرملة؟",
    "options": [
      {
        "sv": "Byta säkring upprepade gånger utan att hitta orsaken",
        "ar": "تغيير المصهر مراراً دون البحث عن السبب"
      },
      {
        "sv": "Låt bromsar och hjul kontrolleras snarast",
        "ar": "افحص الفرامل والعجلات في أقرب وقت"
      },
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Öppna ett varmt system omedelbart",
        "ar": "فتح نظام ساخن فوراً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 10018,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad är viktigt vid kontroll av kylarvätska?",
    "questionAr": "ما المهم عند فحص سائل التبريد؟",
    "options": [
      {
        "sv": "Öppna ett varmt system omedelbart",
        "ar": "فتح نظام ساخن فوراً"
      },
      {
        "sv": "Byta säkring upprepade gånger utan att hitta orsaken",
        "ar": "تغيير المصهر مراراً دون البحث عن السبب"
      },
      {
        "sv": "Kontrollera nivån när systemet är kallt och följ bilens instruktioner",
        "ar": "افحص المستوى عندما يكون النظام بارداً واتبع تعليمات السيارة"
      },
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/coolant.svg"
  },
  {
    "id": 10019,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Varför ska du hålla vindrutan fri från is och imma?",
    "questionAr": "لماذا يجب إبقاء الزجاج الأمامي خالياً من الجليد والضباب؟",
    "options": [
      {
        "sv": "Ignorera varningen och fortsätta köra",
        "ar": "تجاهل التحذير ومتابعة القيادة"
      },
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Öppna ett varmt system omedelbart",
        "ar": "فتح نظام ساخن فوراً"
      },
      {
        "sv": "För att behålla tillräcklig sikt åt alla håll som behövs för körningen",
        "ar": "للحفاظ على رؤية كافية في الاتجاهات اللازمة للقيادة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/windshield.svg"
  },
  {
    "id": 10020,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad betyder det om en däcktrycksvarning kommer tillbaka efter pumpning?",
    "questionAr": "ماذا يعني رجوع تحذير ضغط الإطارات بعد نفخها؟",
    "options": [
      {
        "sv": "Kontrollera trycket igen och undersök om däcket läcker eller är skadat",
        "ar": "تحقق من الضغط مجدداً وافحص احتمال تسرب الإطار أو تلفه"
      },
      {
        "sv": "Lämna lasten lös så att den kan glida",
        "ar": "ترك الحمولة سائبة بحيث يمكن أن تتحرك"
      },
      {
        "sv": "Ignorera varningen och fortsätta köra",
        "ar": "تجاهل التحذير ومتابعة القيادة"
      },
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/tire-pressure.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/Fordon/Fordonsregler/Dack/vinterdack/",
    "sourceTitle": "Transportstyrelsen – Däck och vinterdäck"
  },
  {
    "id": 10021,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra om ett däck har en synlig utbuktning på sidan?",
    "questionAr": "ماذا تفعل إذا ظهر انتفاخ واضح على جانب الإطار؟",
    "options": [
      {
        "sv": "Använda valfri vätska utan att läsa bilens instruktioner",
        "ar": "استخدام أي سائل دون قراءة تعليمات السيارة"
      },
      {
        "sv": "Använd inte däcket som vanligt; låt det kontrolleras och bytas vid behov",
        "ar": "لا تستخدم الإطار كالمعتاد؛ افحصه وبدله عند الحاجة"
      },
      {
        "sv": "Lasta bilen över tillverkarens gräns",
        "ar": "تحميل السيارة فوق الحد الذي تحدده الشركة"
      },
      {
        "sv": "Täcka lampor eller registreringsskylt med last",
        "ar": "حجب الأضواء أو لوحة التسجيل بالحمولة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/tire-pressure.svg"
  },
  {
    "id": 10022,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Varför är rätt inställda backspeglar viktiga?",
    "questionAr": "لماذا ضبط المرايا الجانبية والخلفية مهم؟",
    "options": [
      {
        "sv": "Fortsätta trots att bromsarna känns annorlunda",
        "ar": "المتابعة رغم أن الفرامل تبدو غير طبيعية"
      },
      {
        "sv": "Lasta bilen över tillverkarens gräns",
        "ar": "تحميل السيارة فوق الحد الذي تحدده الشركة"
      },
      {
        "sv": "De hjälper dig att upptäcka trafik runt bilen men ersätter inte kontroll av döda vinkeln",
        "ar": "تساعد على اكتشاف حركة المرور حول السيارة لكنها لا تغني عن فحص المنطقة العمياء"
      },
      {
        "sv": "Byta säkring upprepade gånger utan att hitta orsaken",
        "ar": "تغيير المصهر مراراً دون البحث عن السبب"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/lane-change.svg"
  },
  {
    "id": 10023,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra om en strålkastare slutar fungera?",
    "questionAr": "ماذا تفعل إذا توقف أحد المصابيح الأمامية عن العمل؟",
    "options": [
      {
        "sv": "Lämna lasten lös så att den kan glida",
        "ar": "ترك الحمولة سائبة بحيث يمكن أن تتحرك"
      },
      {
        "sv": "Ignorera varningen och fortsätta köra",
        "ar": "تجاهل التحذير ومتابعة القيادة"
      },
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Åtgärda felet innan fortsatt körning i förhållanden där lampan behövs",
        "ar": "عالج العطل قبل المتابعة في ظروف تحتاج فيها إلى المصباح"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/headlights.svg"
  },
  {
    "id": 10024,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Varför är det viktigt att kontrollera bilens bromsvätska enligt manualen?",
    "questionAr": "لماذا من المهم فحص سائل الفرامل وفق الدليل؟",
    "options": [
      {
        "sv": "Bromssystemet måste fungera säkert och låg nivå kan tyda på ett problem",
        "ar": "يجب أن يعمل نظام الفرامل بأمان وقد يشير انخفاض المستوى إلى مشكلة"
      },
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Öppna ett varmt system omedelbart",
        "ar": "فتح نظام ساخن فوراً"
      },
      {
        "sv": "Byta säkring upprepade gånger utan att hitta orsaken",
        "ar": "تغيير المصهر مراراً دون البحث عن السبب"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 10025,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad ska du tänka på när du kopplar loss ett släp?",
    "questionAr": "ما الذي يجب مراعاته عند فصل المقطورة؟",
    "options": [
      {
        "sv": "Täcka lampor eller registreringsskylt med last",
        "ar": "حجب الأضواء أو لوحة التسجيل بالحمولة"
      },
      {
        "sv": "Stå säkert, säkra släpet mot rullning och koppla från enligt instruktionerna",
        "ar": "قف بأمان وثبت المقطورة ضد الحركة وافصلها وفق التعليمات"
      },
      {
        "sv": "Fortsätta trots att bromsarna känns annorlunda",
        "ar": "المتابعة رغم أن الفرامل تبدو غير طبيعية"
      },
      {
        "sv": "Lasta bilen över tillverkarens gräns",
        "ar": "تحميل السيارة فوق الحد الذي تحدده الشركة"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/secure-load.svg"
  },
  {
    "id": 10026,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra innan du byter ett hjul vid vägkanten?",
    "questionAr": "ماذا ينبغي أن تفعل قبل تغيير عجلة على جانب الطريق؟",
    "options": [
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Öppna ett varmt system omedelbart",
        "ar": "فتح نظام ساخن فوراً"
      },
      {
        "sv": "Bedöm om platsen är säker och följ bilens anvisningar; kalla på hjälp vid fara",
        "ar": "قيّم أمان المكان واتبع تعليمات السيارة واطلب المساعدة عند الخطر"
      },
      {
        "sv": "Ignorera varningen och fortsätta köra",
        "ar": "تجاهل التحذير ومتابعة القيادة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/emergency-triangle.svg"
  },
  {
    "id": 10027,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Varför ska du inte arbeta under en bil som bara hålls uppe av en domkraft?",
    "questionAr": "لماذا لا تعمل تحت سيارة ترفعها الرافعة وحدها؟",
    "options": [
      {
        "sv": "Lämna lasten lös så att den kan glida",
        "ar": "ترك الحمولة سائبة بحيث يمكن أن تتحرك"
      },
      {
        "sv": "Ignorera varningen och fortsätta köra",
        "ar": "تجاهل التحذير ومتابعة القيادة"
      },
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Domkraften kan ge vika; bilen måste stödjas säkert enligt instruktionerna",
        "ar": "قد تنهار الرافعة؛ يجب دعم السيارة بأمان وفق التعليمات"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 10028,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad kan orsaka att motorn startar långsamt?",
    "questionAr": "ما الذي قد يسبب بطء تشغيل المحرك؟",
    "options": [
      {
        "sv": "Bland annat ett svagt batteri eller problem i startsystemet",
        "ar": "من الأسباب المحتملة بطارية ضعيفة أو مشكلة في نظام التشغيل"
      },
      {
        "sv": "Använda valfri vätska utan att läsa bilens instruktioner",
        "ar": "استخدام أي سائل دون قراءة تعليمات السيارة"
      },
      {
        "sv": "Arbeta under en bil som bara stöds av domkraften",
        "ar": "العمل تحت سيارة تدعمها الرافعة وحدها"
      },
      {
        "sv": "Röra skadade högvoltskablar",
        "ar": "لمس كابلات الجهد العالي التالفة"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 10029,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra om styrningen plötsligt känns ovanligt tung?",
    "questionAr": "ماذا تفعل إذا أصبح التوجيه ثقيلاً بشكل غير معتاد فجأة؟",
    "options": [
      {
        "sv": "Lasta bilen över tillverkarens gräns",
        "ar": "تحميل السيارة فوق الحد الذي تحدده الشركة"
      },
      {
        "sv": "Stanna säkert och låt felet undersökas innan fortsatt körning",
        "ar": "توقف بأمان وافحص العطل قبل متابعة القيادة"
      },
      {
        "sv": "Byta säkring upprepade gånger utan att hitta orsaken",
        "ar": "تغيير المصهر مراراً دون البحث عن السبب"
      },
      {
        "sv": "Fortsätta trots att bromsarna känns annorlunda",
        "ar": "المتابعة رغم أن الفرامل تبدو غير طبيعية"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 10030,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Varför ska lasten säkras även i bagageutrymmet?",
    "questionAr": "لماذا يجب تثبيت الحمولة حتى داخل صندوق الأمتعة؟",
    "options": [
      {
        "sv": "Täcka lampor eller registreringsskylt med last",
        "ar": "حجب الأضواء أو لوحة التسجيل بالحمولة"
      },
      {
        "sv": "Använda valfri vätska utan att läsa bilens instruktioner",
        "ar": "استخدام أي سائل دون قراءة تعليمات السيارة"
      },
      {
        "sv": "Vid kraftig bromsning kan lösa föremål kastas framåt",
        "ar": "عند الفرملة القوية قد تندفع الأشياء غير المثبتة إلى الأمام"
      },
      {
        "sv": "Lasta bilen över tillverkarens gräns",
        "ar": "تحميل السيارة فوق الحد الذي تحدده الشركة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/secure-load.svg"
  },
  {
    "id": 10031,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad är viktigt när du kontrollerar barnstolens montering?",
    "questionAr": "ما المهم عند التحقق من تركيب مقعد الطفل؟",
    "options": [
      {
        "sv": "Täcka lampor eller registreringsskylt med last",
        "ar": "حجب الأضواء أو لوحة التسجيل بالحمولة"
      },
      {
        "sv": "Använda valfri vätska utan att läsa bilens instruktioner",
        "ar": "استخدام أي سائل دون قراءة تعليمات السيارة"
      },
      {
        "sv": "Arbeta under en bil som bara stöds av domkraften",
        "ar": "العمل تحت سيارة تدعمها الرافعة وحدها"
      },
      {
        "sv": "Följ stolens och bilens instruktioner och kontrollera att den sitter fast",
        "ar": "اتبع تعليمات المقعد والسيارة وتأكد من تثبيته بإحكام"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/child-seat.svg"
  },
  {
    "id": 10032,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra om bilen luktar starkt av bränsle?",
    "questionAr": "ماذا تفعل إذا كانت رائحة الوقود قوية في السيارة؟",
    "options": [
      {
        "sv": "Stanna säkert, undvik antändningskällor och låt läckage kontrolleras",
        "ar": "توقف بأمان وتجنب مصادر الاشتعال وافحص احتمال التسرب"
      },
      {
        "sv": "Öppna ett varmt system omedelbart",
        "ar": "فتح نظام ساخن فوراً"
      },
      {
        "sv": "Byta säkring upprepade gånger utan att hitta orsaken",
        "ar": "تغيير المصهر مراراً دون البحث عن السبب"
      },
      {
        "sv": "Fortsätta trots att bromsarna känns annorlunda",
        "ar": "المتابعة رغم أن الفرامل تبدو غير طبيعية"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/vehicle-check.svg"
  },
  {
    "id": 10033,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Varför ska du kontrollera att vindrutespolaren innehåller rätt vätska på vintern?",
    "questionAr": "لماذا تتحقق من وجود سائل المساحات المناسب في الشتاء؟",
    "options": [
      {
        "sv": "Öppna ett varmt system omedelbart",
        "ar": "فتح نظام ساخن فوراً"
      },
      {
        "sv": "En frosttålig vätska hjälper dig hålla rutan ren utan att frysa lika lätt",
        "ar": "يساعد السائل المقاوم للتجمد على تنظيف الزجاج مع تقليل احتمال تجمده"
      },
      {
        "sv": "Ignorera varningen och fortsätta köra",
        "ar": "تجاهل التحذير ومتابعة القيادة"
      },
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/windshield.svg"
  },
  {
    "id": 10034,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra när en gul motorvarningslampa tänds?",
    "questionAr": "ماذا تفعل عندما يضيء مصباح تحذير المحرك الأصفر؟",
    "options": [
      {
        "sv": "Lämna lasten lös så att den kan glida",
        "ar": "ترك الحمولة سائبة بحيث يمكن أن تتحرك"
      },
      {
        "sv": "Ignorera varningen och fortsätta köra",
        "ar": "تجاهل التحذير ومتابعة القيادة"
      },
      {
        "sv": "Läs bilens instruktioner och låt felet kontrolleras; följ varningens allvar",
        "ar": "اقرأ تعليمات السيارة وافحص العطل مع مراعاة خطورة التحذير"
      },
      {
        "sv": "Fortsätta köra med en skadad vindruta som skymmer sikten",
        "ar": "المتابعة بزجاج أمامي متضرر يحجب الرؤية"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 10035,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Varför ska du känna till bilens rekommenderade däcktryck?",
    "questionAr": "لماذا يجب معرفة ضغط الإطارات الموصى به لسيارتك؟",
    "options": [
      {
        "sv": "Täcka lampor eller registreringsskylt med last",
        "ar": "حجب الأضواء أو لوحة التسجيل بالحمولة"
      },
      {
        "sv": "Använda valfri vätska utan att läsa bilens instruktioner",
        "ar": "استخدام أي سائل دون قراءة تعليمات السيارة"
      },
      {
        "sv": "Arbeta under en bil som bara stöds av domkraften",
        "ar": "العمل تحت سيارة تدعمها الرافعة وحدها"
      },
      {
        "sv": "Det hjälper dig hålla rätt grepp, slitage och köregenskaper",
        "ar": "يساعد في الحفاظ على التماسك والتآكل وخصائص القيادة المناسبة"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/tire-pressure.svg",
    "sourceUrl": "https://www.transportstyrelsen.se/sv/vagtrafik/Fordon/Fordonsregler/Dack/vinterdack/",
    "sourceTitle": "Transportstyrelsen – Däck och vinterdäck"
  },
  {
    "id": 10036,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du kontrollera om vindrutetorkarna lämnar strimmor?",
    "questionAr": "ماذا تفحص إذا تركت ماسحات الزجاج خطوطاً؟",
    "options": [
      {
        "sv": "Kontrollera gummibladen och rengör rutan och torkarbladen",
        "ar": "افحص المطاط ونظف الزجاج وشفرات المساحات"
      },
      {
        "sv": "Lämna lasten lös så att den kan glida",
        "ar": "ترك الحمولة سائبة بحيث يمكن أن تتحرك"
      },
      {
        "sv": "Ignorera varningen och fortsätta köra",
        "ar": "تجاهل التحذير ومتابعة القيادة"
      },
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/windshield.svg"
  },
  {
    "id": 10037,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad är viktigt vid laddning av en elbil hemma?",
    "questionAr": "ما المهم عند شحن سيارة كهربائية في المنزل؟",
    "options": [
      {
        "sv": "Byta säkring upprepade gånger utan att hitta orsaken",
        "ar": "تغيير المصهر مراراً دون البحث عن السبب"
      },
      {
        "sv": "Använd säker laddutrustning och följ tillverkarens instruktioner",
        "ar": "استخدم معدات شحن آمنة واتبع تعليمات الشركة المصنعة"
      },
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Öppna ett varmt system omedelbart",
        "ar": "فتح نظام ساخن فوراً"
      }
    ],
    "correctIndex": 1,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/electric-car.svg"
  },
  {
    "id": 10038,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad ska du göra om du misstänker skada på en elbils högvoltsbatteri efter en olycka?",
    "questionAr": "ماذا تفعل إذا اشتبهت بضرر في بطارية الجهد العالي لسيارة كهربائية بعد حادث؟",
    "options": [
      {
        "sv": "Använda valfri vätska utan att läsa bilens instruktioner",
        "ar": "استخدام أي سائل دون قراءة تعليمات السيارة"
      },
      {
        "sv": "Arbeta under en bil som bara stöds av domkraften",
        "ar": "العمل تحت سيارة تدعمها الرافعة وحدها"
      },
      {
        "sv": "Håll avstånd, rör inte skadade delar och kontakta räddningstjänst eller fackpersonal",
        "ar": "ابتعد ولا تلمس الأجزاء التالفة واتصل بالطوارئ أو المختصين"
      },
      {
        "sv": "Täcka lampor eller registreringsskylt med last",
        "ar": "حجب الأضواء أو لوحة التسجيل بالحمولة"
      }
    ],
    "correctIndex": 2,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/electric-car.svg"
  },
  {
    "id": 10039,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Varför ska du läsa instruktionsboken när en okänd symbol visas?",
    "questionAr": "لماذا تقرأ دليل السيارة عندما تظهر علامة غير مألوفة؟",
    "options": [
      {
        "sv": "Ignorera varningen och fortsätta köra",
        "ar": "تجاهل التحذير ومتابعة القيادة"
      },
      {
        "sv": "Öka farten för att testa om felet försvinner",
        "ar": "زيادة السرعة لاختبار ما إذا كان العطل سيختفي"
      },
      {
        "sv": "Öppna ett varmt system omedelbart",
        "ar": "فتح نظام ساخن فوراً"
      },
      {
        "sv": "Symbolens betydelse och rätt åtgärd kan skilja mellan bilmodeller",
        "ar": "قد يختلف معنى الرمز والتصرف الصحيح بين طرازات السيارات"
      }
    ],
    "correctIndex": 3,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/dashboard-warning.svg"
  },
  {
    "id": 10040,
    "reviewStatus": "draft",
    "category": "Fordonskännedom",
    "questionSv": "Vad bör du göra om en lampa i bromsljuset inte fungerar?",
    "questionAr": "ماذا تفعل إذا كان أحد مصابيح الفرامل لا يعمل؟",
    "options": [
      {
        "sv": "Byt eller reparera lampan så att andra trafikanter tydligt ser när du bromsar",
        "ar": "استبدل المصباح أو أصلحه حتى يرى مستخدمو الطريق الآخرون بوضوح أنك تفرمل"
      },
      {
        "sv": "Arbeta under en bil som bara stöds av domkraften",
        "ar": "العمل تحت سيارة تدعمها الرافعة وحدها"
      },
      {
        "sv": "Röra skadade högvoltskablar",
        "ar": "لمس كابلات الجهد العالي التالفة"
      },
      {
        "sv": "Fortsätta köra med en skadad vindruta som skymmer sikten",
        "ar": "المتابعة بزجاج أمامي متضرر يحجب الرؤية"
      }
    ],
    "correctIndex": 0,
    "explanationSv": "Följ bilens instruktionsbok och åtgärda misstänkta fel innan de leder till en farlig situation.",
    "explanationAr": "اتبع دليل السيارة وعالج الأعطال المشتبه بها قبل أن تؤدي إلى موقف خطير.",
    "image": "./questions/headlights.svg"
  }
];
