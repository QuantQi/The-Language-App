// Initialize the array with the existing constants
const dataSets = [];


const greetings = [
    {Polish: "Cześć", Pronunciation: "che-shch", English: "Hello"},
    {Polish: "Dzień dobry", Pronunciation: "jyen doh-bri", English: "Good morning"},
    {Polish: "Dobry wieczór", Pronunciation: "doh-bri vyeh-choor", English: "Good evening"},
    {Polish: "Dobranoc", Pronunciation: "doh-bra-nots", English: "Good night"},
    {Polish: "Do widzenia", Pronunciation: "doh veed-zen-ya", English: "Goodbye"},
    {Polish: "Dziękuję", Pronunciation: "jen-koo-yeh", English: "Thank you"},
    {Polish: "Proszę", Pronunciation: "proh-sheh", English: "Please"},
    {Polish: "Przepraszam", Pronunciation: "psheh-pra-sham", English: "Sorry"},
    {Polish: "Tak", Pronunciation: "tahk", English: "Yes"},
    {Polish: "Nie", Pronunciation: "nyeh", English: "No"}
];

dataSets.push({ name: 'Greetings', value: greetings });

const cardinalNumbers = [
    {Polish: "jeden", Pronunciation: "yeh-den", English: "one"},
    {Polish: "dwa", Pronunciation: "dvah", English: "two"},
    {Polish: "trzy", Pronunciation: "tshih", English: "three"},
    {Polish: "cztery", Pronunciation: "chteh-rih", English: "four"},
    {Polish: "pięć", Pronunciation: "pyench", English: "five"},
    {Polish: "sześć", Pronunciation: "sheshch", English: "six"},
    {Polish: "siedem", Pronunciation: "shyeh-dem", English: "seven"},
    {Polish: "osiem", Pronunciation: "oh-shem", English: "eight"},
    {Polish: "dziewięć", Pronunciation: "dzeh-vyench", English: "nine"},
    {Polish: "dziesięć", Pronunciation: "dyeh-shench", English: "ten"}
];

dataSets.push({ name: 'Cardinal Numbers', value: cardinalNumbers });


const ordinalNumbers = [
    {Polish: "pierwszy", Pronunciation: "pyehr-vshih", English: "first"},
    {Polish: "drugi", Pronunciation: "droo-gih", English: "second"},
    {Polish: "trzeci", Pronunciation: "tshyeh-tsee", English: "third"},
    {Polish: "czwarty", Pronunciation: "chvah-tee", English: "fourth"},
    {Polish: "piąty", Pronunciation: "pyon-tee", English: "fifth"},
    {Polish: "szósty", Pronunciation: "shoost-tee", English: "sixth"},
    {Polish: "siódmy", Pronunciation: "shyood-mee", English: "seventh"},
    {Polish: "ósmy", Pronunciation: "oos-mee", English: "eighth"},
    {Polish: "dziewiąty", Pronunciation: "dzeh-vyon-tee", English: "ninth"},
    {Polish: "dziesiąty", Pronunciation: "dyeh-shon-tee", English: "tenth"}
];

dataSets.push({ name: 'Ordinal Numbers', value: ordinalNumbers });

const colors = [
    {Polish: "czarny", Pronunciation: "char-nih", English: "black"},
    {Polish: "biały", Pronunciation: "byah-wih", English: "white"},
    {Polish: "czerwony", Pronunciation: "chehr-voh-nih", English: "red"},
    {Polish: "zielony", Pronunciation: "zhyeh-loh-nih", English: "green"},
    {Polish: "niebieski", Pronunciation: "nyeh-byeh-skee", English: "blue"},
    {Polish: "żółty", Pronunciation: "zhool-tih", English: "yellow"},
    {Polish: "pomarańczowy", Pronunciation: "poh-mah-rahn-choh-vih", English: "orange"},
    {Polish: "fioletowy", Pronunciation: "fyoh-leh-toh-vih", English: "purple"},
    {Polish: "różowy", Pronunciation: "roo-zhoh-vih", English: "pink"},
    {Polish: "brązowy", Pronunciation: "brow-zoh-vih", English: "brown"}
];

dataSets.push({ name: 'Colors', value: colors });

const family = [
    {Polish: "rodzina", Pronunciation: "roh-dzee-nah", English: "family"},
    {Polish: "matka", Pronunciation: "maht-kah", English: "mother"},
    {Polish: "ojciec", Pronunciation: "oy-tsyets", English: "father"},
    {Polish: "rodzeństwo", Pronunciation: "roh-dzhen-stvoh", English: "siblings"},
    {Polish: "siostra", Pronunciation: "syoh-strah", English: "sister"},
    {Polish: "brat", Pronunciation: "braht", English: "brother"},
    {Polish: "córka", Pronunciation: "choor-kah", English: "daughter"},
    {Polish: "syn", Pronunciation: "sin", English: "son"},
    {Polish: "babcia", Pronunciation: "bahb-chyah", English: "grandmother"},
    {Polish: "dziadek", Pronunciation: "dzyah-dek", English: "grandfather"}
];

dataSets.push({ name: 'Family', value: family });

const bodyParts = [
    {Polish: "ciało", Pronunciation: "chah-woh", English: "body"},
    {Polish: "głowa", Pronunciation: "gwuh-vah", English: "head"},
    {Polish: "włosy", Pronunciation: "vwuh-sih", English: "hair"},
    {Polish: "oczy", Pronunciation: "oh-chih", English: "eyes"},
    {Polish: "nos", Pronunciation: "nohs", English: "nose"},
    {Polish: "usta", Pronunciation: "oos-tah", English: "mouth"},
    {Polish: "zęby", Pronunciation: "zheh-bih", English: "teeth"},
    {Polish: "uszy", Pronunciation: "oosh-ih", English: "ears"},
    {Polish: "ramię", Pronunciation: "rah-myeh", English: "arm"},
    {Polish: "ręka", Pronunciation: "rehn-kah", English: "hand"}
];

dataSets.push({ name: 'Body Parts', value: bodyParts });

const animals = [
    {Polish: "zwierzę", Pronunciation: "zvyeh-zheh", English: "animal"},
    {Polish: "pies", Pronunciation: "pyes", English: "dog"},
    {Polish: "kot", Pronunciation: "koht", English: "cat"},
    {Polish: "ptak", Pronunciation: "ptahk", English: "bird"},
    {Polish: "ryba", Pronunciation: "rih-bah", English: "fish"},
    {Polish: "kon", Pronunciation: "kohn", English: "horse"},
    {Polish: "krowa", Pronunciation: "kroh-vah", English: "cow"},
    {Polish: "świnia", Pronunciation: "shvee-nyah", English: "pig"},
    {Polish: "owca", Pronunciation: "ohv-tsah", English: "sheep"},
    {Polish: "kura", Pronunciation: "koo-rah", English: "chicken"}
];

dataSets.push({ name: 'Animals', value: animals });

const food = [
    {Polish: "jedzenie", Pronunciation: "yeh-dzeh-nyeh", English: "food"},
    {Polish: "chleb", Pronunciation: "hlehp", English: "bread"},
    {Polish: "jabłko", Pronunciation: "yah-boo-koh", English: "apple"},
    {Polish: "mleko", Pronunciation: "mleh-koh", English: "milk"},
    {Polish: "woda", Pronunciation: "voh-dah", English: "water"},
    {Polish: "herbata", Pronunciation: "hehr-bah-tah", English: "tea"},
    {Polish: "kawa", Pronunciation: "kah-vah", English: "coffee"},
    {Polish: "jajko", Pronunciation: "yai-koh", English: "egg"},
    {Polish: "mięso", Pronunciation: "myen-soh", English: "meat"},
    {Polish: "ryż", Pronunciation: "rihsh", English: "rice"}
];

dataSets.push({ name: 'Food', value: food });

const drinks = [
    {Polish: "napój", Pronunciation: "nah-poy", English: "drink"},
    {Polish: "wino", Pronunciation: "vee-noh", English: "wine"},
    {Polish: "piwo", Pronunciation: "pee-voh", English: "beer"},
    {Polish: "sok", Pronunciation: "sohk", English: "juice"},
    {Polish: "herbata", Pronunciation: "hehr-bah-tah", English: "tea"},
    {Polish: "kawa", Pronunciation: "kah-vah", English: "coffee"},
    {Polish: "woda", Pronunciation: "voh-dah", English: "water"},
    {Polish: "mleko", Pronunciation: "mleh-koh", English: "milk"},
    {Polish: "cola", Pronunciation: "koh-lah", English: "cola"},
    {Polish: "whisky", Pronunciation: "vees-kee", English: "whisky"}
];

dataSets.push({ name: 'Drinks', value: drinks });

const fruits = [
    {Polish: "owoce", Pronunciation: "oh-voh-tseh", English: "fruit"},
    {Polish: "jabłko", Pronunciation: "yah-boo-koh", English: "apple"},
    {Polish: "banan", Pronunciation: "bah-nahn", English: "banana"},
    {Polish: "pomarańcza", Pronunciation: "poh-mah-rahn-chah", English: "orange"},
    {Polish: "gruszka", Pronunciation: "groosh-kah", English: "pear"},
    {Polish: "śliwka", Pronunciation: "shleev-kah", English: "plum"},
    {Polish: "truskawka", Pronunciation: "troo-skahf-kah", English: "strawberry"},
    {Polish: "winogrono", Pronunciation: "vee-noh-groh-noh", English: "grape"},
    {Polish: "arbuz", Pronunciation: "ahr-booz", English: "watermelon"},
    {Polish: "ananas", Pronunciation: "ah-nah-nahs", English: "pineapple"}
];

dataSets.push({ name: 'Fruits', value: fruits });

const vegetables = [
    {Polish: "warzywa", Pronunciation: "vah-zih-vah", English: "vegetable"},
    {Polish: "marchew", Pronunciation: "mahr-hev", English: "carrot"},
    {Polish: "ziemniak", Pronunciation: "zyem-nyahk", English: "potato"},
    {Polish: "pomidor", Pronunciation: "poh-mee-dohr", English: "tomato"},
    {Polish: "ogórek", Pronunciation: "oh-goo-rek", English: "cucumber"},
    {Polish: "cebula", Pronunciation: "tseh-boo-lah", English: "onion"},
    {Polish: "kapusta", Pronunciation: "kah-poos-tah", English: "cabbage"},
    {Polish: "papryka", Pronunciation: "pah-prih-kah", English: "pepper"},
    {Polish: "brokuł", Pronunciation: "broh-koo-w", English: "broccoli"},
    {Polish: "seler", Pronunciation: "seh-lehr", English: "celery"}
];

dataSets.push({ name: 'Vegetables', value: vegetables });

const countries = [
    {Polish: "kraj", Pronunciation: "krah-y", English: "country"},
    {Polish: "Polska", Pronunciation: "pohl-skah", English: "Poland"},
    {Polish: "Niemcy", Pronunciation: "nyem-tsih", English: "Germany"},
    {Polish: "Francja", Pronunciation: "frahnts-yah", English: "France"},
    {Polish: "Włochy", Pronunciation: "vwuh-hih", English: "Italy"},
    {Polish: "Hiszpania", Pronunciation: "heesh-pah-nyah", English: "Spain"},
    {Polish: "Rosja", Pronunciation: "roh-shah", English: "Russia"},
    {Polish: "Stany Zjednoczone", Pronunciation: "stah-nih zyehd-noh-tsoh-neh", English: "United States"},
    {Polish: "Chiny", Pronunciation: "khee-nih", English: "China"},
    {Polish: "Japonia", Pronunciation: "yah-poh-nyah", English: "Japan"}
];

dataSets.push({ name: 'Countries', value: countries });

const cities = [
    {Polish: "miasto", Pronunciation: "myah-stoh", English: "city"},
    {Polish: "Warszawa", Pronunciation: "var-shah-vah", English: "Warsaw"},
    {Polish: "Kraków", Pronunciation: "krah-koo-f", English: "Krakow"},
    {Polish: "Gdańsk", Pronunciation: "gdahnsk", English: "Gdansk"},
    {Polish: "Poznań", Pronunciation: "pohz-nahn", English: "Poznan"},
    {Polish: "Wrocław", Pronunciation: "vrotswahf", English: "Wroclaw"},
    {Polish: "Łódź", Pronunciation: "wooj", English: "Lodz"},
    {Polish: "Szczecin", Pronunciation: "shcheh-tseen", English: "Szczecin"},
    {Polish: "Lublin", Pronunciation: "loob-leen", English: "Lublin"},
    {Polish: "Katowice", Pronunciation: "kah-toh-vee-tseh", English: "Katowice"}
];

dataSets.push({ name: 'Cities', value: cities });

const transport = [
    {Polish: "transport", Pronunciation: "trahns-pohrt", English: "transport"},
    {Polish: "samochód", Pronunciation: "sah-moh-hoot", English: "car"},
    {Polish: "rower", Pronunciation: "roh-veh-r", English: "bicycle"},
    {Polish: "autobus", Pronunciation: "ow-toh-boos", English: "bus"},
    {Polish: "tramwaj", Pronunciation: "trahm-vai", English: "tram"},
    {Polish: "pociąg", Pronunciation: "poh-chong", English: "train"},
    {Polish: "metro", Pronunciation: "meh-troh", English: "subway"},
    {Polish: "taksówka", Pronunciation: "tahk-soov-kah", English: "taxi"},
    {Polish: "samolot", Pronunciation: "sah-moh-lot", English: "airplane"},
    {Polish: "statek", Pronunciation: "stah-tek", English: "ship"}
];

dataSets.push({ name: 'Transport', value: transport });

const professions = [
    {Polish: "zawód", Pronunciation: "zah-voont", English: "profession"},
    {Polish: "nauczyciel", Pronunciation: "now-chee-chehl", English: "teacher"},
    {Polish: "lekarz", Pronunciation: "leh-kahsh", English: "doctor"},
    {Polish: "inżynier", Pronunciation: "een-zhih-nyehr", English: "engineer"},
    {Polish: "prawnik", Pronunciation: "prahv-neek", English: "lawyer"},
    {Polish: "kucharz", Pronunciation: "koo-hahsh", English: "chef"},
    {Polish: "kelner", Pronunciation: "kehl-neh", English: "waiter"},
    {Polish: "aktor", Pronunciation: "ahk-tohr", English: "actor"},
    {Polish: "piosenkarz", Pronunciation: "pyoh-sehn-kahsh", English: "singer"},
    {Polish: "sportowiec", Pronunciation: "spohrt-oh-vyets", English: "athlete"}
];

dataSets.push({ name: 'Professions', value: professions });

const weather = [
    {Polish: "pogoda", Pronunciation: "poh-goh-dah", English: "weather"},
    {Polish: "słońce", Pronunciation: "swuhn-tseh", English: "sun"},
    {Polish: "deszcz", Pronunciation: "dehshch", English: "rain"},
    {Polish: "śnieg", Pronunciation: "shnyeg", English: "snow"},
    {Polish: "wiatr", Pronunciation: "vyah-tr", English: "wind"},
    {Polish: "chmura", Pronunciation: "khmoo-rah", English: "cloud"},
    {Polish: "burza", Pronunciation: "boor-zah", English: "storm"},
    {Polish: "tęcza", Pronunciation: "tench-zah", English: "rainbow"},
    {Polish: "mgła", Pronunciation: "mgwah", English: "fog"},
    {Polish: "grad", Pronunciation: "graht", English: "hail"}
];

dataSets.push({ name: 'Weather', value: weather });

const seasons = [
    {Polish: "pora roku", Pronunciation: "poh-rah roh-koo", English: "season"},
    {Polish: "wiosna", Pronunciation: "vyohs-nah", English: "spring"},
    {Polish: "lato", Pronunciation: "lah-toh", English: "summer"},
    {Polish: "jesień", Pronunciation: "yeh-shen", English: "autumn"},
    {Polish: "zima", Pronunciation: "zhee-mah", English: "winter"}
];

dataSets.push({ name: 'Seasons', value: seasons });

const months = [
    {Polish: "miesiąc", Pronunciation: "myeh-shonch", English: "month"},
    {Polish: "styczeń", Pronunciation: "stih-chen", English: "January"},
    {Polish: "luty", Pronunciation: "loo-tih", English: "February"},
    {Polish: "marzec", Pronunciation: "mah-zets", English: "March"},
    {Polish: "kwiecień", Pronunciation: "kvyeh-chen", English: "April"},
    {Polish: "maj", Pronunciation: "mahy", English: "May"},
    {Polish: "czerwiec", Pronunciation: "chehr-vyets", English: "June"},
    {Polish: "lipiec", Pronunciation: "lee-pyets", English: "July"},
    {Polish: "sierpień", Pronunciation: "shyehr-pyeng", English: "August"},
    {Polish: "wrzesień", Pronunciation: "vzheh-shen", English: "September"},
    {Polish: "październik", Pronunciation: "pah-dzyeh-rnik", English: "October"},
    {Polish: "listopad", Pronunciation: "lees-toh-paht", English: "November"},
    {Polish: "grudzień", Pronunciation: "grood-zhyen", English: "December"}
];

dataSets.push({ name: 'Months', value: months });

const daysOfWeek = [
    {Polish: "dzień tygodnia", Pronunciation: "dzyen tih-goh-dnyah", English: "day of the week"},
    {Polish: "poniedziałek", Pronunciation: "poh-nyeh-dyah-wek", English: "Monday"},
    {Polish: "wtorek", Pronunciation: "vtoh-rek", English: "Tuesday"},
    {Polish: "środa", Pronunciation: "shroh-dah", English: "Wednesday"},
    {Polish: "czwartek", Pronunciation: "chvahr-tek", English: "Thursday"},
    {Polish: "piątek", Pronunciation: "pyon-tek", English: "Friday"},
    {Polish: "sobota", Pronunciation: "soh-boh-tah", English: "Saturday"},
    {Polish: "niedziela", Pronunciation: "nyeh-dzyeh-lah", English: "Sunday"}
];

dataSets.push({ name: 'Days of the Week', value: daysOfWeek });

const phrases = [
    {Polish: "jak się masz?", Pronunciation: "yahk shyeh mahsh", English: "how are you?"},
    {Polish: "dziękuję dobrze", Pronunciation: "jen-koo-yeh doh-bzheh", English: "thank you, I'm good"},
    {Polish: "przepraszam, nie rozumiem", Pronunciation: "psheh-pra-sham nyeh roh-zoo-myem", English: "I'm sorry, I don't understand"},
    {Polish: "ile to kosztuje?", Pronunciation: "ee-leh toh kohs-too-yeh", English: "how much does it cost?"},
    {Polish: "gdzie jest toaleta?", Pronunciation: "gdyeh yest toh-ah-leh-tah", English: "where is the bathroom?"},
    {Polish: "co to jest?", Pronunciation: "tso toh yest", English: "what is this?"},
    {Polish: "czy mówisz po angielsku?", Pronunciation: "chi moo-vish poh ahn-gyehl-skoo", English: "do you speak English?"},
    {Polish: "proszę powtórzyć", Pronunciation: "proh-sheh pov-too-rzhih", English: "please repeat"},
    {Polish: "jak się nazywasz?", Pronunciation: "yahk shyeh nah-zih-vahsh", English: "what's your name?"},
    {Polish: "miło mi cię poznać", Pronunciation: "mee-woh mee chyeh poznahch", English: "nice to meet you"}
];

dataSets.push({ name: 'Phrases', value: phrases });

const adjectives = [
    {Polish: "przymiotnik", Pronunciation: "pshih-myot-neek", English: "adjective"},
    {Polish: "duży", Pronunciation: "doo-zhih", English: "big"},
    {Polish: "mały", Pronunciation: "mah-wih", English: "small"},
    {Polish: "szybki", Pronunciation: "shihb-kih", English: "fast"},
    {Polish: "wolny", Pronunciation: "vohl-nih", English: "slow"},
    {Polish: "dobry", Pronunciation: "doh-brih", English: "good"},
    {Polish: "zły", Pronunciation: "zwih", English: "bad"},
    {Polish: "piękny", Pronunciation: "pyehk-nih", English: "beautiful"},
    {Polish: "brzydki", Pronunciation: "bzhid-kih", English: "ugly"},
    {Polish: "młody", Pronunciation: "mwuh-dih", English: "young"},
    {Polish: "stary", Pronunciation: "stah-rih", English: "old"}
];

dataSets.push({ name: 'Adjectives', value: adjectives });

const verbs = [
    {Polish: "czasownik", Pronunciation: "chah-soh-vnik", English: "verb"},
    {Polish: "jeść", Pronunciation: "yehstch", English: "to eat"},
    {Polish: "pić", Pronunciation: "peech", English: "to drink"},
    {Polish: "spać", Pronunciation: "spahtch", English: "to sleep"},
    {Polish: "biegać", Pronunciation: "byeh-gach", English: "to run"},
    {Polish: "skakać", Pronunciation: "skah-kach", English: "to jump"},
    {Polish: "pisać", Pronunciation: "peesach", English: "to write"},
    {Polish: "czytać", Pronunciation: "chitach", English: "to read"},
    {Polish: "mówić", Pronunciation: "moov-eech", English: "to speak"},
    {Polish: "słuchać", Pronunciation: "swoo-hahch", English: "to listen"},
    {Polish: "patrzeć", Pronunciation: "paht-zhech", English: "to look"}
];

dataSets.push({ name: 'Verbs', value: verbs });


