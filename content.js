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

   ─────────────────────────────────────────────────────────────────────
   HOW THE JOURNAL IS ORGANISED  (read this once — it's simple)

   This is an OPEN journal with six permanent SECTIONS. You add WORKS
   whenever a new piece is ready — no deadlines. New works gather in
   the one OPEN ISSUE, and when the moment feels right YOU close that
   issue (see ISSUES below): instead of a publication date, an issue
   has a CLOSING date. Everything on the home page builds itself from
   the ONE list of works below — you never edit the home page by hand.

     • Add a work  → put one block in  WORKS  (further down).
     • Give it a   section:  (one of the six ids) and, if it should be
       the one shown on the home page for that section, featured: true.
     • Give it the  issue:  number of the currently open issue, and an
       authorImg:  portrait if you have one (it shows when featured).
     • It then appears automatically in the right places:
         – "One from each section"  = the featured work of each section
         – "Also in the sections"   = every other work
         – the section's own page   = ALL of its works, as cards
         – its issue's own page     = once you close that issue
       Nothing ever shows up twice.

   Mathematical Culture is pinned to the Mirzakhani gallery (featured).
   ===================================================================== */

window.PM_CONTENT = {

  /* ---- Where the site lives (used to build the RSS feed's links) ----
     Set this to the address readers actually visit. */
  siteUrl: "https://mathswell.com",

  /* ---- Contact address, also the “from” for subscriber emails ---- */
  contactEmail: "amir@mathswell.com",

  /* ---- Subscribe form endpoint ----
     A plain web page cannot store sign-ups by itself. Create a free list
     on an email service (Buttondown is ideal — it can auto-email your
     subscribers whenever a new piece appears), then paste the form's
     POST address here. Until you do, the form opens the visitor's email
     app addressed to contactEmail instead. Your subscribers' names and
     addresses then live in that service's dashboard (exportable as CSV). */
  subscribeUrl: "",

  /* ---- The link to Amir Asghari's YouTube channel ---- */
  youtubeUrl: "https://www.youtube.com/@asghariamir",

  /* ---- The dedication page (set to "" to hide the line) ---- */
  dedicationUrl: "dedication.html",

  /* ---- The full-collection PDF (free download) ----
     Put your PDF file in the repo and write its file name here. */
  issuePdfUrl: "",

  /* ---- "Pay what you like" support link (Stripe) ----
     Paste a Stripe PAYMENT LINK here. Until you do, the button is hidden. */
  donateUrl: "https://buy.stripe.com/4gMbJ10GTcTs4OkeuPgUM02",


  /* =====================================================================
     STANDING TITLES  (optional)
     A person's ONGOING role in the journal — e.g. Founding Editor — as
     opposed to a per-work credit (translator of one piece, etc.). It shows
     as a small badge beside their name on the Contributors page. Keyed by
     the person's name EXACTLY as written in a work's author line.
     Leave the { } empty if you don't want any.
     ===================================================================== */
  PEOPLE: {
    "Amir Asghari": { en: "Founding Editor", fa: "سردبیرِ مؤسس" }
  },


  /* =====================================================================
     THE SIX SECTIONS  (shared by both languages)
     Order here = order everywhere. Don't remove any; the six are fixed.
     ===================================================================== */
  SECTIONS: [
    { id: "wikiletter",
      n:     { en: "01", fa: "۰۱" },
      name:  { en: "WikiLetter",              fa: "ویکی‌نوشت" },
      blurb: { en: "Short essays by mathematicians and teachers, for teachers.",
               fa: "مقاله‌های کوتاهِ ریاضی‌دانان و آموزگاران، برای معلم‌ها." } },

    { id: "classroom",
      n:     { en: "02", fa: "۰۲" },
      name:  { en: "Classroom Ideas",          fa: "ایده‌های کلاسی" },
      blurb: { en: "Things to try on Monday.",
               fa: "چیزهایی برای امتحان در کلاس." } },

    { id: "history",
      n:     { en: "03", fa: "۰۳" },
      name:  { en: "History of Mathematics",   fa: "تاریخ ریاضیات" },
      blurb: { en: "The people and ideas that shaped mathematics as a way of thinking.",
               fa: "آدم‌ها و ایده‌هایی که ریاضی را همچون شیوه‌ای از اندیشیدن ساختند." } },

    { id: "concepts",
      n:     { en: "04", fa: "۰۴" },
      name:  { en: "Concepts & Conceptions",   fa: "مفاهیم و برداشت‌ها" },
      blurb: { en: "How understanding really forms.",
               fa: "فهم چگونه شکل می‌گیرد." } },

    { id: "conversations",
      n:     { en: "05", fa: "۰۵" },
      name:  { en: "Face to Face with Mathematics", fa: "رویارو با ریاضیات" },
      blurb: { en: "A space for direct encounters with mathematics—through writing, conversation, audio, or video.",
               fa: "اینجا جایی است برای مواجهه‌ی مستقیم با ریاضیات؛ از راه نوشته، گفت‌وگو، صدا یا تصویر." } },

    { id: "culture",
      n:     { en: "06", fa: "۰۶" },
      name:  { en: "Mathematical Culture",     fa: "فرهنگ ریاضی" },
      blurb: { en: "Life with mathematics and its people.",
               fa: "زندگی با ریاضی و در کنارِ اهلِ آن." } }
  ],


  /* =====================================================================
     THE LEVELS  —  how much mathematics a reader needs.
     Every work carries a  level:  (one of the four ids below). It shows
     as a small coloured dot + label on cards, lists and article pages.
     ===================================================================== */
  LEVELS: [
    { id: "school",        color: "#567D46",
      name: { en: "School maths",       fa: "ریاضیِ مدرسه" } },
    { id: "undergraduate", color: "#B08A2E",
      name: { en: "Undergraduate maths", fa: "ریاضیِ کارشناسی" } },
    { id: "graduate",      color: "#C8633E",
      name: { en: "Graduate maths",     fa: "ریاضیِ تحصیلاتِ تکمیلی" } },
    { id: "research",      color: "#7D4A66",
      name: { en: "Research maths",     fa: "ریاضیِ پژوهشی" } }
  ],


  /* =====================================================================
     THE ISSUES  —  the journal stays open; issues CLOSE.

     Works are added whenever they are ready and gather in the one OPEN
     issue (the block whose  closed:  is ""). No date is announced in
     advance — an issue has a CLOSING date, not a publication date.

     HOW TO CLOSE AN ISSUE (three small steps):
       1. Write the closing date into  closed:  (e.g. "2026-09-30")
          and fill  closedLabel  in both languages.
       2. Add the next issue block after it, with  closed: ""  —
          that becomes the new open issue.
       3. Any work you want to KEEP for the next issue: change its
          issue: 1  to  issue: 2 .  The rest stay in the closed issue.

     Closed issues appear on the home page shelf with their closing
     date, each linking to its own page with everything inside it.
     ===================================================================== */
  ISSUES: [
    { n: 1,
      closed: "",                                 /* "" = still open */
      label:       { en: "Issue 01",   fa: "دفترِ یکم" },
      openedLabel: { en: "June 2026",  fa: "خرداد ۱۴۰۵" },
      closedLabel: { en: "",           fa: "" } }
  ],


  /* =====================================================================
     THE WORKS  —  one block per piece. THIS is the list you grow.

     Each block:
       section:  which section it belongs to (an id from the six above)
       featured: true  → it is the one shown for its section on the home
                          page. Keep exactly ONE featured per section.
       issue:    which issue it belongs to (see ISSUES above). Give new
                 works the number of the currently OPEN issue.
       authorImg: a small portrait of the author (optional). When the
                 work is featured, the photo appears beside their name.
       href:     the article/film page
       imgSrc:   its picture (leave out to show a labelled placeholder)
       img:      the placeholder label used when there is no imgSrc
       date:     when it was added / updated  (shown when browsing)
       en / fa:  the title, one-line dek, author, and a short meta tag
     ===================================================================== */
  WORKS: [

    /* ---- WikiLetter ---- */
    { section: "wikiletter", featured: true,
      href: "articles/wikiletter-stewart.html",
      added: "2026-06-15",
      issue: 1,
      level: "school",
      imgSrc: "assets/ian-stewart-portrait.jpg",
      authorImg: "assets/ian-stewart-portrait.jpg",
      credits: [
        { img: "assets/sharareh-taghi-dastjerdi.jpg",
          en: { name: "Sharareh Taghi-Dastjerdi", role: "Translation (Persian)" },
          fa: { name: "شراره تقی‌دستجردی", role: "مترجم" } }
      ],
      img: "drawing — what shape student are you?",
      date: { en: "June 2026", fa: "خرداد ۱۴۰۵" },
      en: { title: "What Shape Student Are You?",
            dek: "Ian Stewart, in memory of David Tall, on “path-dependent logic” — how a student can follow every step faithfully and still reach a contradiction.",
            author: "Ian Stewart", meta: "9 min read" },
      fa: { title: "چه نوع دانشجویی هستید؟",
            dek: "یان استوارت، به یادِ دیوید تال، درباره‌ی «منطقِ مسیروابسته» — اینکه چگونه دانشجو می‌تواند هر گام را درست بردارد و باز به تناقض برسد.",
            author: "یان استوارت", meta: "۹ دقیقه" } },

    /* ---- Classroom Ideas ---- */
    { section: "classroom", featured: false,
      href: "articles/structure-in-your-gaze.html",
      added: "2026-07-03",
      issue: 1,
      level: "school",
      authorImg: "assets/amir.jpg",
      img: "diagram — a parallelogram on a circular sheet",
      date: { en: "July 2026", fa: "تیر ۱۴۰۵" },
      en: { title: "Structure Is in Your Gaze",
            dek: "The way we look at a figure changes its mathematics. Rotate a parallelogram on a circle, cover an angle, read one sentence two ways — small classroom moves, now interactive, where a shift of the gaze does the teaching.",
            author: "Amir Asghari", meta: "Interactive · Classroom notes" },
      fa: { title: "ساختار در نگاه است",
            dek: "نحوه‌ی نگاه‌کردن به یک شکل، ریاضیِ آن را تغییر می‌دهد. متوازی‌الاضلاعی را روی دایره بچرخانید، زاویه‌ای را بپوشانید، یک جمله را دو جور بخوانید — حرکت‌هایی کوچک و اکنون تعاملی، که در آن‌ها جابه‌جاییِ نگاه آموزش می‌دهد.",
            author: "امیر اصغری", meta: "تعاملی · یادداشت‌های کلاسی" } },

    { section: "classroom", featured: true,
      href: "articles/spinner.html",
      added: "2026-06-15",
      issue: 1,
      level: "school",
      imgSrc: "assets/pandi.jpg",
      authorImg: "assets/pandi.jpg",
      img: "photo — Zohreh Pandi",
      date: { en: "June 2026", fa: "خرداد ۱۴۰۵" },
      en: { title: "A model for recreating a spinner",
            dek: "A class rebuilt a probability spinner from a box of beads — and, without being told, uncovered the structure hiding inside the answers.",
            author: "Zohreh Pandi", meta: "Classroom notes" },
      fa: { title: "مدلی برای بازآفرینی یک چرخنده",
            dek: "کلاسی یک چرخنده‌ی احتمال را از یک جعبه مهره بازساخت — و بی‌آنکه گفته شود، ساختارِ پنهان در پاسخ‌ها را کشف کرد.",
            author: "زهره پندی", meta: "یادداشت‌های کلاسی" } },

    /* ---- History of Mathematics  (featured) ---- */
    { section: "history", featured: true,
      href: "articles/letter-x.html",
      added: "2026-06-15",
      issue: 1,
      level: "school",
      imgSrc: "assets/abbas-eqbal.jpg",
      authorImg: "assets/abbas-eqbal.jpg",
      img: "photo — manuscript page, al-Khwārizmī",
      date: { en: "1930 · added June 2026", fa: "۱۳۰۹ · افزوده خرداد ۱۴۰۵" },
      en: { title: "The symbol x for the unknown",
            dek: "Where did the sign x, the word algebra, and the “Arabic” numerals come from? A short history from a 1930 Tehran journal — given here in full.",
            author: "Abbas Eqbal Āshtiāni", meta: "1930 · full text" },
      fa: { title: "علامتِ x به‌جای مجهول",
            dek: "علامتِ x، واژه‌ی «جبر» و ارقامِ «عربی» از کجا آمده‌اند؟ تاریخچه‌ای کوتاه از مجله‌ای در تهرانِ ۱۳۰۹ — اینجا به‌کامل.",
            author: "عباس اقبالِ آشتیانی", meta: "۱۳۰۹ · متنِ کامل" } },

    /* ---- History of Mathematics  (also — History Corner) ---- */
    { section: "history", featured: false,
      href: "articles/history-corner-silver-matrix.html",
      added: "2026-06-15",
      issue: 1,
      level: "school",
      imgSrc: "assets/yahya-tabesh.webp",
      authorImg: "assets/yahya-tabesh.webp",
      img: "photo — Yahya Tabesh",
      date: { en: "June 2026", fa: "خرداد ۱۴۰۵" },
      en: { title: "The Silver Matrix",
            dek: "How four problems from Tehran travelled to the International Mathematical Olympiad — and how one of them reached the shore of silver.",
            author: "Yahya Tabesh", meta: "History Corner" },
      fa: { title: "ماتریسِ نقره‌ای",
            dek: "چهار مسئله چگونه از تهران به المپیادِ جهانیِ ریاضی رسید — و یکی از آن‌ها چگونه سر از ساحلِ نقره درآورد.",
            author: "یحیی تابش", meta: "گوشهٔ تاریخ" } },

    /* ---- History of Mathematics  (companion to the Firoozbakht lead feature) ---- */
    { section: "history", featured: false,
      href: "articles/firoozbakht-and-the-machine.html",
      added: "2026-07-10",
      issue: 1,
      level: "undergraduate",
      imgSrc: "assets/behrooz-parhami.jpg",
      authorImg: "assets/behrooz-parhami.jpg",
      img: "photo — Behrooz Parhami",
      date: { en: "July 2026", fa: "تیر ۱۴۰۵" },
      en: { title: "The Machine She Didn’t Have",
            dek: "A companion to the lead feature: Behrooz Parhami takes Firoozbakht’s conjecture from what a prime is to the bounds it beats — then reckons what testing it on a 1982 mainframe would truly have cost, and proves brute force was never an option. With three interactive playgrounds.",
            author: "Behrooz Parhami", meta: "Essay · Interactive" },
      fa: { title: "ماشینی که نداشت",
            dek: "همراهِ مقاله‌ی اصلی: بهروز پرهامی حدسِ فیروزبخت را از اینکه عددِ اول چیست تا کران‌هایی که پشتِ سر می‌گذارد پی می‌گیرد — سپس حساب می‌کند که آزمودنِ آن روی مِین‌فریمِ ۱۹۸۲ به‌راستی چه می‌طلبید، و نشان می‌دهد راهِ سرراست هرگز در کار نبود. با سه بخشِ تعاملی.",
            author: "بهروز پرهامی", meta: "مقاله · تعاملی" } },

    /* ---- Concepts & Conceptions ---- */
    { section: "concepts", featured: true,
      href: "articles/circle.html",
      added: "2026-06-15",
      issue: 1,
      level: "school",
      imgSrc: "assets/amir.jpg",
      authorImg: "assets/amir.jpg",
      img: "diagram — nine years of textbooks",
      date: { en: "June 2026", fa: "خرداد ۱۴۰۵" },
      en: { title: "What is a circle?",
            dek: "It enters school in the first grade and returns every year after — yet a student can reach the end of school still unable to say what a circle is. A walk through nine years of textbooks.",
            author: "Amir Asghari", meta: "Notes of a teacher" },
      fa: { title: "دایره چیست؟",
            dek: "دایره از همان سالِ اولِ دبستان وارد آموزش می‌شود و هر سال بازمی‌گردد — اما دانش‌آموز در پایانِ مدرسه هنوز نمی‌تواند بگوید دایره چیست. مروری بر نُه سال کتابِ درسی.",
            author: "امیر اصغری", meta: "یادداشت‌های یک معلم" } },

    /* ---- Face to Face with Mathematics ---- */
    { section: "conversations", featured: false,
      href: "articles/topological-graph-theory.html",
      added: "2026-07-09",
      issue: 1,
      level: "undergraduate",
      imgSrc: "assets/aryan-hemmati.jpg",
      authorImg: "assets/aryan-hemmati.jpg",
      img: "photo — Aryan Hemmati",
      date: { en: "July 2026", fa: "تیر ۱۴۰۵" },
      en: { title: "Graphs on Donuts",
            dek: "Euler’s formula counts vertices, edges and regions, and always lands on 2 — until the graph refuses to be drawn flat. Aryan Hemmati follows the count onto donuts and beyond, where the answer belongs to the surface itself. An invitation to topological graph theory, with interactive experiments.",
            author: "Aryan Hemmati", meta: "Essay · Interactive" },
      fa: { title: "گراف‌ها روی دونات‌ها",
            dek: "فرمول اویلر رأس‌ها، یال‌ها و ناحیه‌ها را می‌شمارد و همیشه به ۲ می‌رسد — تا وقتی که گراف تن به کشیده‌شدن در صفحه ندهد. آرین همتی این شمارش را تا روی دونات‌ها و فراتر دنبال می‌کند؛ آنجا که پاسخ از آنِ خودِ رویه است. دعوتی به نظریه‌ی گراف توپولوژیک، با آزمایش‌های تعاملی.",
            author: "آرین همتی", meta: "مقاله · تعاملی" } },

    { section: "conversations", featured: false,
      href: "articles/fano-plane.html",
      added: "2026-07-07",
      issue: 1,
      level: "undergraduate",
      imgSrc: "assets/kianoosh-shokri.jpg",
      authorImg: "assets/kianoosh-shokri.jpg",
      img: "photo — Kianoosh Shokri",
      date: { en: "July 2026", fa: "تیر ۱۴۰۵" },
      en: { title: "From a Plane That Is Not a Plane to a Code That Is a Code",
            dek: "The Fano plane has seven points and seven lines — and, hiding inside it, block designs, orthogonal arrays, covering arrays and error-correcting codes. Kianoosh Shokri follows the connections, with interactive explorers along the way.",
            author: "Kianoosh Shokri", meta: "Essay · Interactive" },
      fa: { title: "از صفحه‌ای که صفحه نیست تا کدی که کد است",
            dek: "صفحهٔ فانو هفت نقطه و هفت خط دارد — و در دلِ آن طرح‌های بلوکی، آرایه‌های متعامد، آرایه‌های پوشا و کدهای تصحیح خطا پنهان‌اند. کیانوش شکری این پیوندها را دنبال می‌کند؛ با ابزارهای تعاملی در طول راه.",
            author: "کیانوش شکری", meta: "مقاله · تعاملی" } },

    { section: "conversations", featured: false,
      href: "articles/topological-data-analysis.html",
      added: "2026-07-05",
      issue: 1,
      level: "undergraduate",
      imgSrc: "assets/mahdis-emami.jpg",
      authorImg: "assets/mahdis-emami.jpg",
      img: "photo — Mahdis Emami",
      date: { en: "July 2026", fa: "تیر ۱۴۰۵" },
      en: { title: "When Topology Tames Data!",
            dek: "A dataset is not just a table — it is a cloud of points with a shape. Mahdis Emami introduces topological data analysis: clusters, loops, and the structures that persist. With a persistent-homology playground to play with.",
            author: "Mahdis Emami", meta: "Essay · Interactive" },
      fa: { title: "وقتی توپولوژی داده‌ها را رام می‌کند!",
            dek: "مجموعه‌داده فقط یک جدول نیست — ابری از نقطه‌هاست با یک شکل. مهدیس امامی تحلیل داده‌ی توپولوژیک را معرفی می‌کند: خوشه‌ها، حلقه‌ها و ساختارهایی که پایا می‌مانند. با یک اسباب‌بازیِ همولوژی پایا برای بازی.",
            author: "مهدیس امامی", meta: "مقاله · تعاملی" } },

    { section: "conversations", featured: true,
      href: "articles/mathematical-conversations.html",
      added: "2026-07-01",
      issue: 1,
      level: "graduate",
      imgSrc: "assets/artan-sheshmani.jpg",
      authorImg: "assets/artan-sheshmani.jpg",
      img: "photo — Artan Sheshmani",
      date: { en: "July 2026", fa: "تیر ۱۴۰۵" },
      en: { title: "Sheaf",
            dek: "One idea — how local pieces are glued into something global — met in a short film. Artan Sheshmani made it in Persian and, himself, in English; watch both and each carries something the other doesn’t.",
            author: "Artan Sheshmani", meta: "Film · فارسی + English" },
      fa: { title: "بافه",
            dek: "یک ایده — اینکه چگونه تکه‌های محلی به یک کلِ سراسری چسبانده می‌شوند — در فیلمی کوتاه. آرتان شش‌مانی آن را به فارسی ساخت و، خودش، به انگلیسی؛ هر دو را ببینید، هر کدام چیزی دارد که آن دیگری ندارد.",
            author: "آرتان شش‌مانی", meta: "فیلم · فارسی + English" } },

    /* ---- Mathematical Culture  (report — Women's Week in Mathematics, Sharif)
       Bylined to the authors (Farnaz Manouchehri & Bamdad Torabi) at their wish;
       the event logo stands in for a contributor photo. Not featured (the
       Mirzakhani gallery is pinned). ---- */
    { section: "culture", featured: false,
      href: "articles/women-in-mathematics.html",
      added: "2026-07-10",
      issue: 1,
      level: "school",
      imgSrc: "assets/wim/wim-logo-mark.png",
      img: "logo — Women's Week in Mathematics",
      date: { en: "July 2026", fa: "تیر ۱۴۰۵" },
      en: { title: "Women's Week in Mathematics",
            dek: "How students at Sharif built a two-year celebration of Maryam Mirzakhani — and everything it took to hold it. A report kept for the record, in the organizers' own words.",
            author: "Farnaz Manouchehri & Bamdad Torabi", meta: "Report" },
      fa: { title: "هفته‌ی زن در ریاضیات",
            dek: "چگونه دانشجویانِ شریف بزرگداشتی دوساله برای مریم میرزاخانی برپا کردند — و آنچه برگزاری‌اش طلبید. گزارشی برای ثبتِ تاریخ، به زبانِ خودِ برگزارکنندگان.",
            author: "فرناز منوچهری و بامداد ترابی", meta: "گزارش" } },

    /* ---- Mathematical Culture  (pinned: always the Mirzakhani gallery) ---- */
    { section: "culture", featured: true,
      href: "articles/mathematical-culture.html",
      added: "2026-06-15",
      issue: 1,
      level: "school",
      imgSrc: "assets/mirzakhani-juan.jpg",
      img: "artwork — Mirzakhani portrait",
      date: { en: "June 2026", fa: "خرداد ۱۴۰۵" },
      en: { title: "Maryam Mirzakhani, in Your Own Hand",
            dek: "A 1946 newspaper clipping set against Maryam Mirzakhani on the cover of the Notices, followed by portraits of her from artists around the world. The section stays open.",
            author: "A gallery", meta: "Open call" },
      fa: { title: "مریم میرزاخانی، به دستِ شما",
            dek: "یک برشِ روزنامه از ۱۳۲۵، در برابرِ جلدِ نشریهٔ انجمن ریاضیِ آمریکا با مریم میرزاخانی؛ و پرتره‌هایی از او به‌دستِ هنرمندانِ سراسرِ جهان. این بخش باز می‌مانَد.",
            author: "یک نگارخانه", meta: "فراخوانِ باز" } }
  ],


  /* =====================================================================
     THE FLAGSHIP  —  the lead essay at the top of the page.
     This is the "People and Mathematics" section itself; swap it here
     whenever you promote a new piece to the front.
     ===================================================================== */
  FLAGSHIP: {
    href: "articles/firoozbakht.html",
    level: "school",
    imgSrc: "assets/farideh.jpg",
    imgLabel: "photo — Farideh Firoozbakht, Isfahan",
    en: { eyebrow: "People and Mathematics",
          title: "Farideh Firoozbakht and a Conjecture About Primes",
          dek: "She left almost no trace of herself — no photographs, barely a line of biography. What she left instead was one of the boldest unproven statements ever made about the prime numbers.",
          cta: "Read the essay", byline: "Essay · Amir Asghari" },
    fa: { eyebrow: "آدم‌ها و ریاضیات",
          title: "فریده فیروزبخت و حدسی درباره‌ی اعداد اول",
          dek: "از خودش تقریباً نشانی به‌جا نگذاشت — نه عکسی، نه چند سطر زندگی‌نامه. آنچه به‌جا گذاشت یکی از جسورانه‌ترین گزاره‌های اثبات‌نشده درباره‌ی اعداد اول بود.",
          cta: "خواندنِ مقاله", byline: "مقاله · امیر اصغری" }
  },


  /* =========================  ENGLISH CHROME  ===================== */
  en: {
    nav: { issues: "Sections", sections: "Read", about: "About", submit: "Contribute" },

    issueKicker: "An open journal · since June 2026",
    subtitle: "A bilingual journal for teaching, thinking, and conversation in mathematics.",
    dedication: "Dedicated to the memory of Safoura Jafari",

    /* Section-rail heading, and the two browse blocks */
    sectionsLabel: "The Sections",
    featuresLabel: "One from each section",
    featuresTag: "The editors’ pick, per section",
    alsoLabel: "Also in the sections",
    alsoTag: "Everything else, at a glance",
    sectionCountOne: "1 piece",
    sectionCountMany: "{n} pieces",
    sectionEmpty: "coming soon",
    onSection: "in",           /* "in History of Mathematics" */

    levelLabel: "Maths needed",
    contributorsLabel: "The Contributors",
    contributorsTag: "Find the people — then their work",
    contributorsAll: "All contributors",
    contributorWorksOne: "1 contribution",
    contributorWorksMany: "{n} contributions",

    issuesLabel: "The Issues",
    issuesTag: "The journal stays open — issues close",
    issueOpenStatus: "Open — gathering new work",
    issueOpenedWord: "opened",
    issueClosedWord: "Closed",
    issueSee: "See the issue",
    issueClosedNote: "This issue closed on {d}. Its pieces remain open to read — always.",
    issueOpenNote: "This issue is open; new work is still joining it.",

    noteLabel: "From the Editors",
    noteTitle: "Why a bilingual journal",
    noteBody: "Mathematics is made by people, in places, in languages. We wanted a room where teaching and thinking could happen in Persian and English at once — not translated past one another, but side by side. People and Mathematics is an open journal: new work joins its sections whenever it is ready, and the lead essay changes from time to time. It belongs to its readers. Write to us.",
    noteSign: "The Editors",

    getKicker: "For teaching",
    getTitle: "For teaching — for everyone who keeps trying.",
    getBody: "Every article can be downloaded as a PDF from its own page — free to read, print, and share in class. And when you download one, you’re invited to support People and Mathematics: not only this journal, but something far larger than it.",
    browseCta: "Browse the sections",
    browseMeta: "Six sections · pick one",
    donateCta: "Pay what you like",
    donateMeta: "Support People and Mathematics",

    subTitle: "New work, whenever it’s ready.",
    subNote: "An email whenever a new piece is added — from amir@mathswell.com. No spam, ever.",
    subNamePlaceholder: "your name",
    subPlaceholder: "your@email",
    subCta: "Subscribe",

    pubLine: "A Mathswell publication · mathswell.com",
    footerLinks: ["Contributors", "Sections", "Contact", "RSS"],
    youtubeLabel: "Films on YouTube",
    backToJournal: "← Back to the journal",
    readCta: "Read"
  },

  /* =========================  PERSIAN CHROME  ==================== */
  fa: {
    nav: { issues: "بخش‌ها", sections: "خواندن", about: "درباره", submit: "مشارکت" },

    issueKicker: "مجله‌ای باز · از خرداد ۱۴۰۵",
    subtitle: "مجله‌ای دوزبانه برای آموزش، اندیشیدن و گفت‌وگو در ریاضیات.",
    dedication: "به یادِ صفورا جعفری",

    sectionsLabel: "بخش‌ها",
    featuresLabel: "از هر بخش، یکی",
    featuresTag: "گزینشِ سردبیران، از هر بخش",
    alsoLabel: "دیگر مطالبِ بخش‌ها",
    alsoTag: "باقیِ مطالب، یک‌جا",
    sectionCountOne: "۱ مطلب",
    sectionCountMany: "{n} مطلب",
    sectionEmpty: "به‌زودی",
    onSection: "در",

    levelLabel: "ریاضیِ لازم",
    contributorsLabel: "نویسندگان و همکاران",
    contributorsTag: "اول آدم‌ها را بیابید — بعد کارهایشان را",
    contributorsAll: "همه‌ی همکاران",
    contributorWorksOne: "۱ مشارکت",
    contributorWorksMany: "{n} مشارکت",

    issuesLabel: "دفترها",
    issuesTag: "مجله باز می‌مانَد — دفترها بسته می‌شوند",
    issueOpenStatus: "باز — در حالِ گردآوری",
    issueOpenedWord: "گشوده از",
    issueClosedWord: "بسته شد",
    issueSee: "دیدنِ دفتر",
    issueClosedNote: "این دفتر در {d} بسته شد. خواندنِ مطالبش همیشه باز است.",
    issueOpenNote: "این دفتر باز است؛ مطالبِ تازه هنوز به آن می‌پیوندند.",

    noteLabel: "از سردبیران",
    noteTitle: "چرا مجله‌ای دوزبانه",
    noteBody: "ریاضیات را آدم‌ها می‌سازند؛ در مکان‌ها، در زبان‌ها. می‌خواستیم اتاقی باشد که آموزش و اندیشیدن، هم‌زمان به فارسی و انگلیسی در آن رخ دهد — نه ترجمه‌ای از کنارِ هم، بلکه در کنارِ هم. «آدم‌ها و ریاضیات» مجله‌ای باز است: هر گاه کاری تازه آماده شود به بخش‌هایش افزوده می‌شود و مقاله‌ی اصلی هرازگاهی تغییر می‌کند. از آنِ خوانندگانش است. برای ما بنویسید.",
    noteSign: "سردبیران",

    getKicker: "برای آموزش",
    getTitle: "برای آموزش، برای آن‌ها که می‌کوشند.",
    getBody: "هر مقاله را می‌توانید از صفحهٔ خودش به شکلِ پی‌دی‌اف دانلود کنید — رایگان، برای خواندن، چاپ‌کردن و هم‌رسانی در کلاس. و آن‌گاه که یکی را دانلود می‌کنید، دعوت می‌شوید که از «آدم‌ها و ریاضیات» حمایت کنید: نه تنها این مجله، که چیزی بسیار فراتر از آن.",
    browseCta: "مرورِ بخش‌ها",
    browseMeta: "شش بخش · یکی را برگزینید",
    donateCta: "هر اندازه که دوست دارید",
    donateMeta: "حمایت از آدم‌ها و ریاضیات",

    subTitle: "مطالبِ تازه، هر وقت آماده شود.",
    subNote: "با افزودنِ هر عنوانِ تازه، ایمیلی از طرفِ amir@mathswell.com دریافت می‌کنید. بی‌هیچ هرزنامه‌ای.",
    subNamePlaceholder: "نامِ شما",
    subPlaceholder: "نشانی ایمیل",
    subCta: "عضویت",

    pubLine: "انتشاراتِ Mathswell · mathswell.com",
    footerLinks: ["نویسندگان و همکاران", "بخش‌ها", "تماس", "RSS"],
    youtubeLabel: "فیلم‌ها در یوتیوب",
    backToJournal: "بازگشت به مجله →",
    readCta: "خواندن"
  }
};
