/* Archive — documents and images (اسناد و تصاویر).
   Add an item: copy a block, give it a new unique id, put its image in assets/.
   type: photo | document | periodical | textbook | letter
   appearsIn: links to stories that use the item ([] if none yet).
   Newest additions go at the TOP of the list (the home page shows the first 4). */
window.PM_ARCHIVE = [
  {
    id: "long-cartan-1928",
    type: "letter",
    img: "assets/long-cartan-1928-p1.jpg",
    more: ["assets/long-cartan-1928-p2-3.jpg"],   /* optional: further pages, shown under the first */
    ratio: "1381/2048",
    decade: 1920,
    en: {
      title: "Louis Long’s letter to Élie Cartan from Tehran",
      date: "16 November 1928",
      caption: "Letter from Louis Long, a French mathematician newly arrived in Tehran, to Élie Cartan. Long explains that he has accepted a post teaching mathematics in what he calls a Faculty of Sciences then being founded, on a three-year renewable contract, and that a university library is being started. Entrusted with choosing 25,000 francs’ worth of mathematics books for it that year, he asks Cartan to point him to the most recent works on higher geometry, preferably written in or translated into French. He adds that he has turned to research in number theory and has studied Fermat’s theorem in particular, and that he believes he is on the way to a proof. He signs from the Hôtel Astoria, Avenue Lalézar, Tehran.",
      source: "Archives de l’Académie des sciences, Paris",
      provenance: "Fonds Élie Cartan, dossier 6.147/25. Louis Long to Élie Cartan, Tehran, 16 November 1928. Three pages.",
      people: "Louis Long, Élie Cartan"
    },
    fa: {
      title: "نامهٔ لوئی لانگ به الی کارتان از تهران",
      date: "۲۵ آبان ۱۳۰۷ (۱۶ نوامبر ۱۹۲۸)",
      caption: "نامهٔ لوئی لانگ، ریاضی‌دان فرانسوی که تازه به تهران آمده بود، به الی کارتان. لانگ توضیح می‌دهد که تدریس ریاضیات را در جایی که خود «دانشکدهٔ علومِ» در حال تأسیس می‌نامد، با قراردادی سه‌ساله و قابل تمدید، پذیرفته است و اینکه کتابخانه‌ای دانشگاهی در حال پایه‌گذاری است. انتخاب کتاب‌های ریاضی به ارزش ۲۵ هزار فرانک برای آن سال به او سپرده شده است و از کارتان می‌خواهد تازه‌ترین و مناسب‌ترین کتاب‌های هندسهٔ عالی را، ترجیحاً به زبان فرانسه، به او معرفی کند. می‌افزاید که به پژوهش در نظریهٔ اعداد روی آورده و به‌ویژه قضیهٔ فرما را مطالعه کرده است و گمان می‌کند در راه رسیدن به اثبات آن است. نشانیِ پای نامه: هتل آستوریا، خیابان لاله‌زار، تهران.",
      source: "آرشیو فرهنگستان علوم فرانسه، پاریس",
      provenance: "مجموعهٔ الی کارتان، پروندهٔ 6.147/25. نامهٔ لوئی لانگ به الی کارتان، تهران، ۱۶ نوامبر ۱۹۲۸. سه صفحه.",
      people: "لوئی لانگ، الی کارتان"
    },
    appearsIn: [
      { href: "index.html", en: "Roots timeline: Persia at the 1932 International Congress of Mathematicians", fa: "تایم‌لاین ریشه‌ها: حضور ایران در کنگرهٔ بین‌المللی ریاضیدانان ۱۹۳۲" }
    ]
  },
  {
    id: "ardalan-vocational-school",
    type: "photo",
    img: "assets/maryam-ardalan-vocational-school.jpg",
    ratio: "2807/2021",
    decade: 1930,
    en: {
      title: "Maryam Ardalan at the opening of the Girls’ Vocational School",
      date: "Undated, during Reza Shah’s reign (before 1941)",
      caption: "Reza Shah Pahlavi and Crown Prince Mohammad Reza at the opening ceremony of the Girls’ Vocational School in Tehran. The woman standing on the left is Maryam Ardalan, explicitly identified on the reverse of the photograph as “Maryam Ardalan, head of the vocational school” (مریم اردلان، رئیس هنرستان).",
      source: "National Library and Archives of Iran",
      provenance: "Identification written on the reverse of the photograph.",
      people: "Maryam Ardalan"
    },
    fa: {
      title: "مریم اردلان در مراسم گشایش هنرستان دختران",
      date: "بی‌تاریخ، در دورهٔ رضاشاه (پیش از ۱۳۲۰)",
      caption: "رضاشاه پهلوی و ولیعهد، محمدرضا، در مراسم گشایش هنرستان دختران در تهران. زنی که در سمت چپ ایستاده مریم اردلان است؛ پشت عکس به‌صراحت نوشته شده: «مریم اردلان، رئیس هنرستان».",
      source: "سازمان اسناد و کتابخانهٔ ملی ایران",
      provenance: "نام او پشت عکس نوشته شده است.",
      people: "مریم اردلان"
    },
    appearsIn: [
      { href: "index.html", en: "Roots timeline: the first woman mathematics teacher", fa: "تایم‌لاین ریشه‌ها: نخستین معلم ریاضی زن" }
    ]
  },
  {
    id: "hashtroodi-oppenheimer-1951",
    type: "document",
    img: "assets/hashtroodi-oppenheimer.jpg",
    ratio: "619/796",
    decade: 1950,
    en: {
      title: "Robert Oppenheimer’s letter inviting Mohsen Hashtroodi to the Institute for Advanced Study",
      date: "5 February 1951",
      caption: "Letter from Robert Oppenheimer, director of the Institute for Advanced Study in Princeton, to Professor Mohsen Hashtroodi (spelled “Hachtroudi”), then at the Department of Mathematics, Harvard University. On the recommendation of the Faculty of the School of Mathematics, it formally offers him a membership at the Institute for the autumn term of the academic year 1951–52.",
      source: "Shelby White and Leon Levy Archives Center, Institute for Advanced Study, Princeton, NJ, USA",
      provenance: "School of Mathematics records, Members, Visitors, Assistants series, Alphabetical Box 11: Hatschi–Hebraz, file: Hachtroudi. Office copy, stamped “COPY”.",
      people: "Mohsen Hashtroodi, Robert Oppenheimer"
    },
    fa: {
      title: "نامهٔ رابرت اوپنهایمر برای دعوت از محسن هشترودی به مؤسسهٔ مطالعات پیشرفته",
      date: "۱۶ بهمن ۱۳۲۹ (۵ فوریهٔ ۱۹۵۱)",
      caption: "نامهٔ رابرت اوپنهایمر، رئیس مؤسسهٔ مطالعات پیشرفتهٔ پرینستون، به پروفسور محسن هشترودی، که در آن زمان در دانشکدهٔ ریاضی دانشگاه هاروارد بود. در این نامه، به توصیهٔ استادان دانشکدهٔ ریاضیِ مؤسسه، رسماً عضویت در مؤسسه برای نیم‌سال پاییز سال تحصیلی ۱۹۵۱–۱۹۵۲ به او پیشنهاد می‌شود.",
      source: "مرکز آرشیو شلبی وایت و لئون لوی، مؤسسهٔ مطالعات پیشرفته، پرینستون، آمریکا",
      provenance: "اسناد دانشکدهٔ ریاضی، مجموعهٔ اعضا، مهمانان و دستیاران، جعبهٔ الفبایی ۱۱، پروندهٔ هشترودی. نسخهٔ دفتری با مهر «COPY».",
      people: "محسن هشترودی، رابرت اوپنهایمر"
    },
    appearsIn: []
  }
];
window.PM_ARCHIVE_TYPES = {
  photo:      { en: "Photograph", fa: "عکس" },
  document:   { en: "Document",   fa: "اسناد" },
  periodical: { en: "Periodical", fa: "نشریه" },
  textbook:   { en: "Textbook",   fa: "کتاب درسی" },
  letter:     { en: "Letter",     fa: "نامه" }
};
window.PM_ARCHIVE_CONTACT = "amir@mathswell.com";
