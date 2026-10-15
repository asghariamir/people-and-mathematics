/* Archive — documents and images (اسناد و تصاویر).
   Add an item: copy a block, give it a new unique id, put its image in assets/.
   type: photo | document | periodical | textbook | letter
   appearsIn: links to stories that use the item ([] if none yet).
   Newest additions go at the TOP of the list (the home page shows the first 4). */
window.PM_ARCHIVE = [
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
