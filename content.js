/* =====================================================================
   PEOPLE AND MATHEMATICS — آدم‌ها و ریاضیات
   ---------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO CHANGE ANY WORDING.

   HOW TO EDIT (on GitHub, in your browser):
     1. Open this file and click the pencil ✏️ icon (top-right).
     2. Change ONLY the words BETWEEN the "quotation marks".
     3. Click "Commit changes". The site updates in ~30 seconds.

   THREE SIMPLE RULES so nothing breaks:
     • Keep the "quotation marks" around every piece of text.
     • Keep the comma , at the end of each line.
     • Don't change the words in green before the colon (title:, dek: …).

   The site has TWO languages:  en  = English   |   fa = فارسی (Persian)
   Each one is filled in below. Edit whichever you need.
   ===================================================================== */

window.PM_CONTENT = {

  /* ---- The link to Amir Asghari's YouTube channel ---- */
  youtubeUrl: "https://www.youtube.com/@asghariamir",

  /* ---- The full-issue PDF (free download) ----
     Put your PDF file in the repo and write its file name here.
     Example: "issue-01.pdf"  (the print page makes this for you). */
  issuePdfUrl: "issue-01.pdf",

  /* ---- "Pay what you like" support link (Stripe) ----
     Create a Stripe PAYMENT LINK with "let customers choose what to pay"
     turned ON, then paste its address here (starts with https://buy.stripe.com/...).
     Until you paste it, the Support button is hidden automatically. */
  donateUrl: "",

  /* =========================  ENGLISH  ============================= */
  en: {
    /* Top menu links */
    nav: { issues: "Issues", sections: "Sections", about: "About", submit: "Contribute" },

    /* The black cover panel on the left */
    issueKicker: "Inaugural Issue · No. 01 · June 2026",
    subtitle: "A bilingual journal for teaching, thinking, and conversation in mathematics.",

    /* The big lead story (top-right of the page) */
    heroEyebrow: "People and Mathematics",
    leadTitle: "The Long Conversation",
    leadDek: "Forty years at the blackboard, and a teacher who still begins every class with a question. On mathematics as a way of being together.",
    leadImgLabel: "photo — teacher at the blackboard, Shemiran",
    readCta: "Read the interview",
    leadByline: "Interview · 18 min read",

    /* The six sections row */
    sectionsLabel: "Sections in every issue",
    sections: [
      { n: "01", name: "Short Articles",          blurb: "Brief, finished thoughts." },
      { n: "02", name: "Classroom Ideas",         blurb: "Things to try on Monday." },
      { n: "03", name: "History of Mathematics",  blurb: "Where the ideas came from." },
      { n: "04", name: "Concepts & Conceptions",  blurb: "How understanding really forms." },
      { n: "05", name: "People & Places",         blurb: "Portraits, interviews, journeys." },
      { n: "06", name: "Mathematical Culture",    blurb: "Mathematics among people." }
    ],

    /* The four featured articles */
    featuresLabel: "Selected from this issue",
    issueTag: "Issue 01 — June 2026",
    features: [
      { tag: "History of Mathematics",   title: "The Word That Became Algebra",       dek: "How al-jabr — “the restoring” — travelled from a Baghdad manuscript into every classroom on earth.", author: "The Editors",  meta: "9 min read",     img: "photo — manuscript page, al-Khwārizmī" },
      { tag: "Concepts & Conceptions",   title: "When Minus Times Minus Felt Wrong",  dek: "A child’s stubborn objection, and what it teaches us about taking conceptions seriously.",            author: "Amir Asghari", meta: "7 min read",     img: "photo — number line in chalk" },
      { tag: "Classroom Ideas",          title: "Velocity, Drawn by Hand",            dek: "A strip of moving paper, after W. W. Sawyer, that turns the derivative into something you can feel.",     author: "Classroom",    meta: "5 min read",     img: "photo — paper strip on a graph" },
      { tag: "Mathematical Culture",     title: "Tea, Chalk, and Proof",              dek: "A photo essay from the rooms where mathematics actually happens — in the space between people.",          author: "Photo Essay",  meta: "12 photographs", img: "photo essay — common rooms & corridors" }
    ],

    /* Table of contents */
    tocLabel: "In this issue",
    toc: [
      { n: "01", title: "The Long Conversation",            kind: "Interview" },
      { n: "02", title: "The Word That Became Algebra",     kind: "History" },
      { n: "03", title: "When Minus Times Minus Felt Wrong", kind: "Concepts" },
      { n: "04", title: "Velocity, Drawn by Hand",          kind: "Classroom" },
      { n: "05", title: "Tea, Chalk, and Proof",            kind: "Photo essay" },
      { n: "06", title: "A Letter from a Reader in Tabriz", kind: "Correspondence" }
    ],

    /* The black "From the Editors" note */
    noteLabel: "From the Editors",
    noteTitle: "Why a bilingual journal",
    noteBody: "Mathematics is made by people, in places, in languages. We wanted a room where teaching and thinking could happen in Persian and English at once — not translated past one another, but side by side. People and Mathematics is monthly, and it belongs to its readers. Write to us.",
    noteSign: "The Editors",

    /* "Read the whole issue" — free PDF + pay-what-you-like support */
    getKicker: "The whole issue",
    getTitle: "Read Issue 01, cover to cover.",
    getBody: "The complete issue is a free PDF — yours to read, print, and share. People and Mathematics is reader-supported: if it gave you something, you’re warmly invited to pay whatever it was worth to you.",
    downloadCta: "Download the PDF",
    downloadMeta: "Free · bilingual · ~6 MB",
    donateCta: "Pay what you like",
    donateMeta: "A gift, never a gate",

    /* Subscribe box */
    subTitle: "A new issue, every month.",
    subNote: "Free. Bilingual. No spam, ever.",
    subPlaceholder: "your@email",
    subCta: "Subscribe",

    /* Footer */
    pubLine: "A Mathswell publication · mathswell.com",
    footerLinks: ["About", "Submissions", "Archive", "Contact", "RSS"],
    youtubeLabel: "Films on YouTube"
  },

  /* =========================  فارسی  ============================== */
  fa: {
    /* منوی بالا */
    nav: { issues: "آرشیو", sections: "بخش‌ها", about: "درباره", submit: "مشارکت" },

    /* پنل مشکی سمت راست */
    issueKicker: "نخستین شماره · شماره‌ی ۱ · خرداد ۱۴۰۵",
    subtitle: "مجله‌ای دوزبانه برای آموزش، اندیشیدن و گفت‌وگو در ریاضیات.",

    /* داستان اصلی */
    heroEyebrow: "آدم‌ها و ریاضیات",
    leadTitle: "گفت‌وگوی بلند",
    leadDek: "چهل سال پای تخته، و معلمی که هنوز هر کلاس را با یک پرسش آغاز می‌کند. درباره‌ی ریاضیات همچون شیوه‌ای برای با هم بودن.",
    leadImgLabel: "photo — teacher at the blackboard, Shemiran",
    readCta: "خواندنِ گفت‌وگو",
    leadByline: "گفت‌وگو · ۱۸ دقیقه خواندن",

    /* شش بخش */
    sectionsLabel: "بخش‌های هر شماره",
    sections: [
      { n: "۰۱", name: "یادداشت‌های کوتاه", blurb: "اندیشه‌هایی کوتاه و کامل." },
      { n: "۰۲", name: "ایده‌های کلاسی",    blurb: "چیزهایی برای امتحان در کلاس." },
      { n: "۰۳", name: "تاریخ ریاضیات",     blurb: "ایده‌ها از کجا آمدند." },
      { n: "۰۴", name: "مفاهیم و برداشت‌ها", blurb: "فهم چگونه شکل می‌گیرد." },
      { n: "۰۵", name: "آدم‌ها و مکان‌ها",   blurb: "چهره‌ها، گفت‌وگوها، سفرها." },
      { n: "۰۶", name: "فرهنگ ریاضی",       blurb: "ریاضیات در میان مردم." }
    ],

    /* چهار مقاله‌ی برگزیده */
    featuresLabel: "برگزیده‌ی این شماره",
    issueTag: "شماره‌ی ۱ — خرداد ۱۴۰۵",
    features: [
      { tag: "تاریخ ریاضیات",      title: "واژه‌ای که جبر شد",                 dek: "چگونه «الجبر» — به‌معنای بازگرداندن — از دست‌نوشته‌ای در بغداد به هر کلاسِ درسِ جهان رسید.", author: "سردبیران",     meta: "۹ دقیقه",  img: "photo — manuscript page, al-Khwārizmī" },
      { tag: "مفاهیم و برداشت‌ها", title: "وقتی منفی در منفی نادرست می‌نمود", dek: "اعتراضِ سرسختانه‌ی یک کودک، و آنچه درباره‌ی جدی‌گرفتنِ برداشت‌ها به ما می‌آموزد.",        author: "امیر اصغری",   meta: "۷ دقیقه",  img: "photo — number line in chalk" },
      { tag: "ایده‌های کلاسی",     title: "سرعت، کشیده‌شده با دست",            dek: "نواری از کاغذِ متحرک، به‌الهام از و. و. سویر، که مشتق را به چیزی محسوس بدل می‌کند.",       author: "کلاس درس",     meta: "۵ دقیقه",  img: "photo — paper strip on a graph" },
      { tag: "فرهنگ ریاضی",        title: "چای، گچ، و برهان",                 dek: "یک مقاله‌ی عکس از اتاق‌هایی که ریاضیات واقعاً در آن‌ها رخ می‌دهد — در فاصله‌ی میان آدم‌ها.", author: "مقاله‌ی عکس",  meta: "۱۲ عکس",   img: "photo essay — common rooms & corridors" }
    ],

    /* فهرست مطالب */
    tocLabel: "در این شماره",
    toc: [
      { n: "۰۱", title: "گفت‌وگوی بلند",                  kind: "گفت‌وگو" },
      { n: "۰۲", title: "واژه‌ای که جبر شد",             kind: "تاریخ" },
      { n: "۰۳", title: "وقتی منفی در منفی نادرست می‌نمود", kind: "مفاهیم" },
      { n: "۰۴", title: "سرعت، کشیده‌شده با دست",         kind: "کلاس" },
      { n: "۰۵", title: "چای، گچ، و برهان",              kind: "مقاله‌ی عکس" },
      { n: "۰۶", title: "نامه‌ای از خواننده‌ای در تبریز",  kind: "مکاتبات" }
    ],

    /* یادداشت سردبیران */
    noteLabel: "از سردبیران",
    noteTitle: "چرا مجله‌ای دوزبانه",
    noteBody: "ریاضیات را آدم‌ها می‌سازند؛ در مکان‌ها، در زبان‌ها. می‌خواستیم اتاقی باشد که آموزش و اندیشیدن، هم‌زمان به فارسی و انگلیسی در آن رخ دهد — نه ترجمه‌ای از کنارِ هم، بلکه در کنارِ هم. «آدم‌ها و ریاضیات» ماهانه است و از آنِ خوانندگانش. برای ما بنویسید.",
    noteSign: "سردبیران",

    /* «همه‌ی شماره» — پی‌دی‌اف رایگان + پرداختِ دلخواه */
    getKicker: "همه‌ی شماره",
    getTitle: "شماره‌ی ۱ را، از جلد تا جلد بخوانید.",
    getBody: "شماره‌ی کامل، یک پی‌دی‌اف رایگان است — برای خواندن، چاپ‌کردن و هم‌رسانی. «آدم‌ها و ریاضیات» با پشتیبانی خوانندگان می‌چرخد: اگر چیزی به شما داد، به‌گرمی دعوت می‌شوید هر اندازه که برایتان ارزش داشت بپردازید.",
    downloadCta: "دریافت پی‌دی‌اف",
    downloadMeta: "رایگان · دوزبانه · حدود ۶ مگابایت",
    donateCta: "هر اندازه که دوست دارید",
    donateMeta: "یک هدیه، نه یک دیوار",

    /* جعبه‌ی عضویت */
    subTitle: "هر ماه، یک شماره‌ی تازه.",
    subNote: "رایگان. دوزبانه. بی‌هیچ هرزنامه‌ای.",
    subPlaceholder: "نشانی ایمیل",
    subCta: "عضویت",

    /* پاورقی */
    pubLine: "انتشاراتِ Mathswell · mathswell.com",
    footerLinks: ["درباره", "ارسال مطلب", "آرشیو", "تماس", "RSS"],
    youtubeLabel: "فیلم‌ها در یوتیوب"
  }
};
