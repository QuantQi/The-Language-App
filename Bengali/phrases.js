

const bengali_dataSets = [];


languageList.push({ name: 'Bengali', dataSet: bengali_dataSets, 
    colours: { primary: 'white', secondary: 'orange', tertiary:'lightGray' } });


const bengali_greetings = [
    {Phrase: "Nomoshkar", Pronunciation: "no-mosh-kar", English: "Hello"},
    {Phrase: "Shubho Shokal", Pronunciation: "shu-bho sho-kal", English: "Good morning"},
    {Phrase: "Shubho Shondha", Pronunciation: "shu-bho shon-dha", English: "Good evening"},
    {Phrase: "Shubho Ratri", Pronunciation: "shu-bho ra-tri", English: "Good night"},
    {Phrase: "Biday", Pronunciation: "bi-day", English: "Goodbye"},
    {Phrase: "Dhonnobad", Pronunciation: "dhon-no-bad", English: "Thank you"},
    {Phrase: "Doya Kore", Pronunciation: "do-ya ko-re", English: "Please"},
    {Phrase: "Sorry", Pronunciation: "Sorry", English: "Sorry"},
    {Phrase: "Haan", Pronunciation: "haan", English: "Yes"},
    {Phrase: "Na", Pronunciation: "na", English: "No"}
];

bengali_dataSets.push({ name: 'Greetings', value: bengali_greetings });

const bengali_cardinalNumbers = [
    {Phrase: "Ek", Pronunciation: "ek", English: "one"},
    {Phrase: "Dui", Pronunciation: "dui", English: "two"},
    {Phrase: "Tin", Pronunciation: "tin", English: "three"},
    {Phrase: "Char", Pronunciation: "char", English: "four"},
    {Phrase: "Pach", Pronunciation: "pach", English: "five"},
    {Phrase: "Choy", Pronunciation: "choy", English: "six"},
    {Phrase: "Shat", Pronunciation: "shat", English: "seven"},
    {Phrase: "Aath", Pronunciation: "aath", English: "eight"},
    {Phrase: "Noi", Pronunciation: "noi", English: "nine"},
    {Phrase: "Dosh", Pronunciation: "dosh", English: "ten"}
];

bengali_dataSets.push({ name: 'Cardinal Numbers', value: bengali_cardinalNumbers });

const bengali_ordinalNumbers = [
    {Phrase: "Prothom", Pronunciation: "pro-thom", English: "first"},
    {Phrase: "Ditiyo", Pronunciation: "di-ti-yo", English: "second"},
    {Phrase: "Tritiyo", Pronunciation: "tri-ti-yo", English: "third"},
    {Phrase: "Choturtho", Pronunciation: "cho-tur-tho", English: "fourth"},
    {Phrase: "Panchom", Pronunciation: "pan-chom", English: "fifth"},
    {Phrase: "Shoshto", Pronunciation: "shosh-to", English: "sixth"},
    {Phrase: "Shoptom", Pronunciation: "shop-tom", English: "seventh"},
    {Phrase: "Oshtom", Pronunciation: "osh-tom", English: "eighth"},
    {Phrase: "Nobom", Pronunciation: "no-bom", English: "ninth"},
    {Phrase: "Doshom", Pronunciation: "do-shom", English: "tenth"}
];

bengali_dataSets.push({ name: 'Ordinal Numbers', value: bengali_ordinalNumbers });
const bengali_colors = [
    {Phrase: "kalo", Pronunciation: "kah-lo", English: "black"},
    {Phrase: "shada", Pronunciation: "sha-da", English: "white"},
    {Phrase: "lal", Pronunciation: "lal", English: "red"},
    {Phrase: "sobuj", Pronunciation: "so-booj", English: "green"},
    {Phrase: "neel", Pronunciation: "neel", English: "blue"},
    {Phrase: "holud", Pronunciation: "ho-lud", English: "yellow"},
    {Phrase: "komola", Pronunciation: "ko-mo-la", English: "orange"},
    {Phrase: "beguni", Pronunciation: "be-gu-ni", English: "purple"},
    {Phrase: "golapi", Pronunciation: "go-la-pi", English: "pink"},
    {Phrase: "badami", Pronunciation: "ba-da-mi", English: "brown"}
];

bengali_dataSets.push({ name: 'Colors', value: bengali_colors });

const bengali_family = [
    {Phrase: "poribar", Pronunciation: "po-ri-bar", English: "family"},
    {Phrase: "ma", Pronunciation: "ma", English: "mother"},
    {Phrase: "baba", Pronunciation: "ba-ba", English: "father"},
    {Phrase: "bhai bon", Pronunciation: "bhai bon", English: "siblings"},
    {Phrase: "bon", Pronunciation: "bon", English: "sister"},
    {Phrase: "bhai", Pronunciation: "bhai", English: "brother"},
    {Phrase: "mey", Pronunciation: "mey", English: "daughter"},
    {Phrase: "chele", Pronunciation: "che-le", English: "son"},
    {Phrase: "dida", Pronunciation: "di-da", English: "grandmother"},
    {Phrase: "dadu", Pronunciation: "da-du", English: "grandfather"}
];

bengali_dataSets.push({ name: 'Family', value: bengali_family });

const bengali_bodyParts = [
    {Phrase: "shorir", Pronunciation: "sho-rir", English: "body"},
    {Phrase: "matha", Pronunciation: "ma-tha", English: "head"},
    {Phrase: "chul", Pronunciation: "chul", English: "hair"},
    {Phrase: "chokh", Pronunciation: "chokh", English: "eyes"},
    {Phrase: "nak", Pronunciation: "nak", English: "nose"},
    {Phrase: "mukh", Pronunciation: "mukh", English: "mouth"},
    {Phrase: "dat", Pronunciation: "dat", English: "teeth"},
    {Phrase: "kan", Pronunciation: "kan", English: "ears"},
    {Phrase: "haat", Pronunciation: "haat", English: "arm"},
    {Phrase: "hat", Pronunciation: "hat", English: "hand"}
];

bengali_dataSets.push({ name: 'Body Parts', value: bengali_bodyParts });

const bengali_animals = [
    {Phrase: "prani", Pronunciation: "pra-ni", English: "animal"},
    {Phrase: "kukkur", Pronunciation: "kuk-kur", English: "dog"},
    {Phrase: "biral", Pronunciation: "bi-ral", English: "cat"},
    {Phrase: "pakhi", Pronunciation: "pa-khi", English: "bird"},
    {Phrase: "machh", Pronunciation: "machh", English: "fish"},
    {Phrase: "ghora", Pronunciation: "gho-ra", English: "horse"},
    {Phrase: "goru", Pronunciation: "go-ru", English: "cow"},
    {Phrase: "shukar", Pronunciation: "shu-kar", English: "pig"},
    {Phrase: "bheer", Pronunciation: "bheer", English: "sheep"},
    {Phrase: "murgi", Pronunciation: "mur-gi", English: "chicken"}
];

bengali_dataSets.push({ name: 'Animals', value: bengali_animals });

const bengali_food = [
    {Phrase: "khaddo", Pronunciation: "khad-do", English: "food"},
    {Phrase: "ruti", Pronunciation: "ru-ti", English: "bread"},
    {Phrase: "appl", Pronunciation: "ap-pl", English: "apple"},
    {Phrase: "dudh", Pronunciation: "dudh", English: "milk"},
    {Phrase: "pani", Pronunciation: "pa-ni", English: "water"},
    {Phrase: "cha", Pronunciation: "cha", English: "tea"},
    {Phrase: "kofi", Pronunciation: "ko-fi", English: "coffee"},
    {Phrase: "dim", Pronunciation: "dim", English: "egg"},
    {Phrase: "mangsho", Pronunciation: "mang-sho", English: "meat"},
    {Phrase: "chal", Pronunciation: "chal", English: "rice"}
];

bengali_dataSets.push({ name: 'Food', value: bengali_food });

const bengali_drinks = [
    {Phrase: "panio", Pronunciation: "pa-ni-o", English: "drink"},
    {Phrase: "mod", Pronunciation: "mod", English: "wine"},
    {Phrase: "biyar", Pronunciation: "bi-yar", English: "beer"},
    {Phrase: "ras", Pronunciation: "ras", English: "juice"},
    {Phrase: "cha", Pronunciation: "cha", English: "tea"},
    {Phrase: "kofi", Pronunciation: "ko-fi", English: "coffee"},
    {Phrase: "pani", Pronunciation: "pa-ni", English: "water"},
    {Phrase: "dudh", Pronunciation: "dudh", English: "milk"},
    {Phrase: "cola", Pronunciation: "ko-la", English: "cola"},
    {Phrase: "whisky", Pronunciation: "whis-ki", English: "whisky"}
];

bengali_dataSets.push({ name: 'Drinks', value: bengali_drinks });

const bengali_fruits = [
    {Phrase: "fol", Pronunciation: "fol", English: "fruit"},
    {Phrase: "appl", Pronunciation: "ap-pl", English: "apple"},
    {Phrase: "kola", Pronunciation: "ko-la", English: "banana"},
    {Phrase: "komola", Pronunciation: "ko-mo-la", English: "orange"},
    {Phrase: "naspathi", Pronunciation: "nas-pa-thi", English: "pear"},
    {Phrase: "alu bukhara", Pronunciation: "a-lu bu-kha-ra", English: "plum"},
    {Phrase: "strawberry", Pronunciation: "straw-ber-ry", English: "strawberry"},
    {Phrase: "angur", Pronunciation: "an-gur", English: "grape"},
    {Phrase: "tarbuj", Pronunciation: "tar-buj", English: "watermelon"},
    {Phrase: "anaros", Pronunciation: "a-na-ros", English: "pineapple"}
];

bengali_dataSets.push({ name: 'Fruits', value: bengali_fruits });

const bengali_vegetables = [
    {Phrase: "sobji", Pronunciation: "sob-ji", English: "vegetable"},
    {Phrase: "gajor", Pronunciation: "ga-jor", English: "carrot"},
    {Phrase: "alu", Pronunciation: "a-lu", English: "potato"},
    {Phrase: "tomato", Pronunciation: "to-ma-to", English: "tomato"},
    {Phrase: "shosha", Pronunciation: "sho-sha", English: "cucumber"},
    {Phrase: "peyaj", Pronunciation: "pe-yaj", English: "onion"},
    {Phrase: "bandhakopi", Pronunciation: "ban-dha-ko-pi", English: "cabbage"},
    {Phrase: "capsicum", Pronunciation: "cap-si-cum", English: "pepper"},
    {Phrase: "broccoli", Pronunciation: "broc-co-li", English: "broccoli"},
    {Phrase: "celery", Pronunciation: "ce-le-ry", English: "celery"}
];

bengali_dataSets.push({ name: 'Vegetables', value: bengali_vegetables });

const bengali_countries = [
    {Phrase: "desh", Pronunciation: "desh", English: "country"},
    {Phrase: "Bangladesh", Pronunciation: "Bang-la-desh", English: "Bangladesh"},
    {Phrase: "Bharot", Pronunciation: "Bha-rot", English: "India"},
    {Phrase: "France", Pronunciation: "France", English: "France"},
    {Phrase: "Italy", Pronunciation: "Italy", English: "Italy"},
    {Phrase: "Spain", Pronunciation: "Spain", English: "Spain"},
    {Phrase: "Russia", Pronunciation: "Russia", English: "Russia"},
    {Phrase: "America", Pronunciation: "A-me-ri-ca", English: "United States"},
    {Phrase: "China", Pronunciation: "Chi-na", English: "China"},
    {Phrase: "Japan", Pronunciation: "Ja-pan", English: "Japan"}
];

bengali_dataSets.push({ name: 'Countries', value: bengali_countries });
const bengali_cities = [
    {Phrase: "shohor", Pronunciation: "sho-hor", English: "city"},
    {Phrase: "Dhaka", Pronunciation: "Dha-ka", English: "Dhaka"},
    {Phrase: "Chittagong", Pronunciation: "Chit-ta-gong", English: "Chittagong"},
    {Phrase: "Khulna", Pronunciation: "Khu-lna", English: "Khulna"},
    {Phrase: "Rajshahi", Pronunciation: "Raj-sha-hi", English: "Rajshahi"},
    {Phrase: "Sylhet", Pronunciation: "Syl-het", English: "Sylhet"},
    {Phrase: "Barisal", Pronunciation: "Ba-ri-sal", English: "Barisal"},
    {Phrase: "Rangpur", Pronunciation: "Rang-pur", English: "Rangpur"},
    {Phrase: "Comilla", Pronunciation: "Co-mil-la", English: "Comilla"},
    {Phrase: "Narayanganj", Pronunciation: "Na-ra-yan-ganj", English: "Narayanganj"}
];

bengali_dataSets.push({ name: 'Cities', value: bengali_cities });

const bengali_transport = [
    {Phrase: "poribohon", Pronunciation: "po-ri-bo-hon", English: "transport"},
    {Phrase: "gari", Pronunciation: "ga-ri", English: "car"},
    {Phrase: "bicycle", Pronunciation: "bi-cy-cle", English: "bicycle"},
    {Phrase: "bus", Pronunciation: "bus", English: "bus"},
    {Phrase: "tram", Pronunciation: "tram", English: "tram"},
    {Phrase: "train", Pronunciation: "train", English: "train"},
    {Phrase: "metro", Pronunciation: "me-tro", English: "subway"},
    {Phrase: "taxi", Pronunciation: "taxi", English: "taxi"},
    {Phrase: "biman", Pronunciation: "bi-man", English: "airplane"},
    {Phrase: "jahaj", Pronunciation: "ja-haj", English: "ship"}
];

bengali_dataSets.push({ name: 'Transport', value: bengali_transport });

const bengali_professions = [
    {Phrase: "peshabisheshoggo", Pronunciation: "pe-sha-bi-she-shog-go", English: "profession"},
    {Phrase: "shikkhok", Pronunciation: "shik-khok", English: "teacher"},
    {Phrase: "daktar", Pronunciation: "dak-tar", English: "doctor"},
    {Phrase: "prokousholi", Pronunciation: "pro-kou-sho-li", English: "engineer"},
    {Phrase: "ainggo", Pronunciation: "ain-go", English: "lawyer"},
    {Phrase: "ranna", Pronunciation: "ran-na", English: "chef"},
    {Phrase: "waiter", Pronunciation: "wai-ter", English: "waiter"},
    {Phrase: "actor", Pronunciation: "ac-tor", English: "actor"},
    {Phrase: "gayiok", Pronunciation: "ga-yi-ok", English: "singer"},
    {Phrase: "khelowar", Pronunciation: "khe-lo-war", English: "athlete"}
];

bengali_dataSets.push({ name: 'Professions', value: bengali_professions });

const bengali_weather = [
    {Phrase: "abohawa", Pronunciation: "a-bo-ha-wa", English: "weather"},
    {Phrase: "rod", Pronunciation: "rod", English: "sun"},
    {Phrase: "brishti", Pronunciation: "brishti", English: "rain"},
    {Phrase: "tushar", Pronunciation: "tu-shar", English: "snow"},
    {Phrase: "batash", Pronunciation: "ba-tash", English: "wind"},
    {Phrase: "megh", Pronunciation: "megh", English: "cloud"},
    {Phrase: "jhor", Pronunciation: "jhor", English: "storm"},
    {Phrase: "rainbow", Pronunciation: "rain-bow", English: "rainbow"},
    {Phrase: "kuasha", Pronunciation: "kua-sha", English: "fog"},
    {Phrase: "shila", Pronunciation: "shi-la", English: "hail"}
];

bengali_dataSets.push({ name: 'Weather', value: bengali_weather });

const bengali_seasons = [
    {Phrase: "ritu", Pronunciation: "ri-tu", English: "season"},
    {Phrase: "boshonto", Pronunciation: "bo-shon-to", English: "spring"},
    {Phrase: "grishsho", Pronunciation: "grish-sho", English: "summer"},
    {Phrase: "shorot", Pronunciation: "sho-rot", English: "autumn"},
    {Phrase: "shit", Pronunciation: "shit", English: "winter"}
];

bengali_dataSets.push({ name: 'Seasons', value: bengali_seasons });

const bengali_months = [
    {Phrase: "mash", Pronunciation: "mash", English: "month"},
    {Phrase: "January", Pronunciation: "Ja-nu-a-ry", English: "January"},
    {Phrase: "February", Pronunciation: "Feb-ru-a-ry", English: "February"},
    {Phrase: "March", Pronunciation: "March", English: "March"},
    {Phrase: "April", Pronunciation: "A-pril", English: "April"},
    {Phrase: "May", Pronunciation: "May", English: "May"},
    {Phrase: "June", Pronunciation: "June", English: "June"},
    {Phrase: "July", Pronunciation: "Ju-ly", English: "July"},
    {Phrase: "August", Pronunciation: "Au-gust", English: "August"},
    {Phrase: "September", Pronunciation: "Sep-tem-ber", English: "September"},
    {Phrase: "October", Pronunciation: "Oc-to-ber", English: "October"},
    {Phrase: "November", Pronunciation: "No-vem-ber", English: "November"},
    {Phrase: "December", Pronunciation: "De-cem-ber", English: "December"}
];

bengali_dataSets.push({ name: 'Months', value: bengali_months });

const bengali_daysOfWeek = [
    {Phrase: "shoptaher din", Pronunciation: "shop-ta-her din", English: "day of the week"},
    {Phrase: "Shombar", Pronunciation: "Shom-bar", English: "Monday"},
    {Phrase: "Mongolbar", Pronunciation: "Mon-gol-bar", English: "Tuesday"},
    {Phrase: "Budhbar", Pronunciation: "Budh-bar", English: "Wednesday"},
    {Phrase: "Brihospotibar", Pronunciation: "Bri-hos-po-ti-bar", English: "Thursday"},
    {Phrase: "Shukrobar", Pronunciation: "Shuk-ro-bar", English: "Friday"},
    {Phrase: "Shonibar", Pronunciation: "Sho-ni-bar", English: "Saturday"},
    {Phrase: "Robibar", Pronunciation: "Ro-bi-bar", English: "Sunday"}
];

bengali_dataSets.push({ name: 'Days of the Week', value: bengali_daysOfWeek });

const bengali_phrases = [
    {Phrase: "tumi kemon acho?", Pronunciation: "tu-mi ke-mon a-cho", English: "how are you?"},
    {Phrase: "dhonnobad, ami bhalo achi", Pronunciation: "dhon-no-bad, a-mi bha-lo a-chi", English: "thank you, I'm good"},
    {Phrase: "doya kore, ami bujhte parini", Pronunciation: "do-ya ko-re, a-mi bujh-te pa-ri-ni", English: "I'm sorry, I don't understand"},
    {Phrase: "eta koto dam?", Pronunciation: "e-ta ko-to dam", English: "how much does it cost?"},
    {Phrase: "toilete kothay?", Pronunciation: "to-i-le-te ko-thay", English: "where is the bathroom?"},
    {Phrase: "eta ki?", Pronunciation: "e-ta ki", English: "what is this?"},
    {Phrase: "tumi ki ingreji bolo?", Pronunciation: "tu-mi ki in-gre-ji bo-lo", English: "do you speak English?"},
    {Phrase: "doya kore abar bolo", Pronunciation: "do-ya ko-re a-bar bo-lo", English: "please repeat"},
    {Phrase: "tomar naam ki?", Pronunciation: "to-mar naam ki", English: "what's your name?"},
    {Phrase: "tomar shathe dekha hoye bhalo laglo", Pronunciation: "to-mar sha-the de-kha ho-ye bha-lo lag-lo", English: "nice to meet you"}
];

bengali_dataSets.push({ name: 'Phrases', value: bengali_phrases });

const bengali_adjectives = [
    {Phrase: "bisheshon", Pronunciation: "bi-she-shon", English: "adjective"},
    {Phrase: "boro", Pronunciation: "bo-ro", English: "big"},
    {Phrase: "chhoto", Pronunciation: "chho-to", English: "small"},
    {Phrase: "druto", Pronunciation: "dru-to", English: "fast"},
    {Phrase: "dhire", Pronunciation: "dhi-re", English: "slow"},
    {Phrase: "bhalo", Pronunciation: "bha-lo", English: "good"},
    {Phrase: "kharaap", Pronunciation: "kha-raap", English: "bad"},
    {Phrase: "shundor", Pronunciation: "shun-dor", English: "beautiful"},
    {Phrase: "kubja", Pronunciation: "kub-ja", English: "ugly"},
    {Phrase: "jubok", Pronunciation: "ju-bok", English: "young"},
    {Phrase: "briddho", Pronunciation: "brid-dho", English: "old"}
];

bengali_dataSets.push({ name: 'Adjectives', value: bengali_adjectives });

const bengali_verbs = [
    {Phrase: "kriya", Pronunciation: "kri-ya", English: "verb"},
    {Phrase: "khete", Pronunciation: "khe-te", English: "to eat"},
    {Phrase: "peete", Pronunciation: "pee-te", English: "to drink"},
    {Phrase: "ghumate", Pronunciation: "ghu-ma-te", English: "to sleep"},
    {Phrase: "dourate", Pronunciation: "dou-ra-te", English: "to run"},
    {Phrase: "leapte", Pronunciation: "le-ap-te", English: "to jump"},
    {Phrase: "lekhte", Pronunciation: "lekh-te", English: "to write"},
    {Phrase: "porhte", Pronunciation: "porh-te", English: "to read"},
    {Phrase: "bolte", Pronunciation: "bol-te", English: "to speak"},
    {Phrase: "shunte", Pronunciation: "shun-te", English: "to listen"},
    {Phrase: "dekhte", Pronunciation: "dekh-te", English: "to look"}
];

bengali_dataSets.push({ name: 'Verbs', value: bengali_verbs });

const bengali_prepositions = [
    {Phrase: "protipadok", Pronunciation: "pro-ti-pa-dok", English: "preposition"},
    {Phrase: "moddhe", Pronunciation: "mod-dhe", English: "in"},
    {Phrase: "opore", Pronunciation: "o-po-re", English: "on"},
    {Phrase: "niche", Pronunciation: "ni-che", English: "under"},
    {Phrase: "upore", Pronunciation: "u-po-re", English: "above"},
    {Phrase: "age", Pronunciation: "a-ge", English: "before"},
    {Phrase: "porhe", Pronunciation: "po-rhe", English: "after"},
    {Phrase: "pashe", Pronunciation: "pa-she", English: "next to"},
    {Phrase: "kache", Pronunciation: "ka-che", English: "by"},
    {Phrase: "moddhe", Pronunciation: "mod-dhe", English: "between"},
    {Phrase: "shathe", Pronunciation: "sha-the", English: "with"}
];

bengali_dataSets.push({ name: 'Prepositions', value: bengali_prepositions });

const bengali_conjunctions = [
    {Phrase: "juktibodhak", Pronunciation: "juk-ti-bo-dhak", English: "conjunction"},
    {Phrase: "ebong", Pronunciation: "e-bong", English: "and"},
    {Phrase: "ba", Pronunciation: "ba", English: "or"},
    {Phrase: "kintu", Pronunciation: "kin-tu", English: "but"},
    {Phrase: "jokhon", Pronunciation: "jo-khon", English: "when"},
    {Phrase: "jodi", Pronunciation: "jo-di", English: "if"},
    {Phrase: "karon", Pronunciation: "ka-ron", English: "because"},
    {Phrase: "jano", Pronunciation: "ja-no", English: "in order to"},
    {Phrase: "athoba", Pronunciation: "a-tho-ba", English: "or"},
    {Phrase: "tai", Pronunciation: "tai", English: "so"},
    {Phrase: "jodio", Pronunciation: "jo-di-o", English: "although"}
];

bengali_dataSets.push({ name: 'Conjunctions', value: bengali_conjunctions });

const bengali_questionWords = [
    {Phrase: "proshno shobdo", Pronunciation: "pro-shno shob-do", English: "question word"},
    {Phrase: "ki", Pronunciation: "ki", English: "what"},
    {Phrase: "ke", Pronunciation: "ke", English: "who"},
    {Phrase: "kothay", Pronunciation: "ko-thay", English: "where"},
    {Phrase: "kokhon", Pronunciation: "ko-khon", English: "when"},
    {Phrase: "keno", Pronunciation: "ke-no", English: "why"},
    {Phrase: "koto", Pronunciation: "ko-to", English: "how much"},
    {Phrase: "kemon", Pronunciation: "ke-mon", English: "how"},
    {Phrase: "ki", Pronunciation: "ki", English: "whether"},
    {Phrase: "kon", Pronunciation: "kon", English: "which"},
    {Phrase: "kar", Pronunciation: "kar", English: "whose"}
];

bengali_dataSets.push({ name: 'Question Words', value: bengali_questionWords });

const bengali_time = [
    {Phrase: "shomoy", Pronunciation: "sho-moy", English: "time"},
    {Phrase: "ghonta", Pronunciation: "ghon-ta", English: "hour"},
    {Phrase: "minit", Pronunciation: "mi-nit", English: "minute"},
    {Phrase: "sekend", Pronunciation: "se-kend", English: "second"},
    {Phrase: "din", Pronunciation: "din", English: "day"}
];

bengali_dataSets.push({ name: 'Time', value: bengali_time });
