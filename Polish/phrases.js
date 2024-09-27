// Initialize the array with the existing constants

function loadPolish() {
    updateButtons(polish_dataSets,'polishButton');
}


const polish_dataSets = [];


const polish_greetings = [
    {Phrase: "Cześć", Pronunciation: "che-shch", English: "Hello"},
    {Phrase: "Dzień dobry", Pronunciation: "jyen doh-bri", English: "Good morning"},
    {Phrase: "Dobry wieczór", Pronunciation: "doh-bri vyeh-choor", English: "Good evening"},
    {Phrase: "Dobranoc", Pronunciation: "doh-bra-nots", English: "Good night"},
    {Phrase: "Do widzenia", Pronunciation: "doh veed-zen-ya", English: "Goodbye"},
    {Phrase: "Dziękuję", Pronunciation: "jen-koo-yeh", English: "Thank you"},
    {Phrase: "Proszę", Pronunciation: "proh-sheh", English: "Please"},
    {Phrase: "Przepraszam", Pronunciation: "psheh-pra-sham", English: "Sorry"},
    {Phrase: "Tak", Pronunciation: "tahk", English: "Yes"},
    {Phrase: "Nie", Pronunciation: "nyeh", English: "No"}
];

polish_dataSets.push({ name: 'Greetings', value: polish_greetings });

const polish_cardinalNumbers = [
    {Phrase: "jeden", Pronunciation: "yeh-den", English: "one"},
    {Phrase: "dwa", Pronunciation: "dvah", English: "two"},
    {Phrase: "trzy", Pronunciation: "tshih", English: "three"},
    {Phrase: "cztery", Pronunciation: "chteh-rih", English: "four"},
    {Phrase: "pięć", Pronunciation: "pyench", English: "five"},
    {Phrase: "sześć", Pronunciation: "sheshch", English: "six"},
    {Phrase: "siedem", Pronunciation: "shyeh-dem", English: "seven"},
    {Phrase: "osiem", Pronunciation: "oh-shem", English: "eight"},
    {Phrase: "dziewięć", Pronunciation: "dzeh-vyench", English: "nine"},
    {Phrase: "dziesięć", Pronunciation: "dyeh-shench", English: "ten"}
];

polish_dataSets.push({ name: 'Cardinal Numbers', value: polish_cardinalNumbers });


const polish_ordinalNumbers = [
    {Phrase: "pierwszy", Pronunciation: "pyehr-vshih", English: "first"},
    {Phrase: "drugi", Pronunciation: "droo-gih", English: "second"},
    {Phrase: "trzeci", Pronunciation: "tshyeh-tsee", English: "third"},
    {Phrase: "czwarty", Pronunciation: "chvah-tee", English: "fourth"},
    {Phrase: "piąty", Pronunciation: "pyon-tee", English: "fifth"},
    {Phrase: "szósty", Pronunciation: "shoost-tee", English: "sixth"},
    {Phrase: "siódmy", Pronunciation: "shyood-mee", English: "seventh"},
    {Phrase: "ósmy", Pronunciation: "oos-mee", English: "eighth"},
    {Phrase: "dziewiąty", Pronunciation: "dzeh-vyon-tee", English: "ninth"},
    {Phrase: "dziesiąty", Pronunciation: "dyeh-shon-tee", English: "tenth"}
];

polish_dataSets.push({ name: 'Ordinal Numbers', value: polish_ordinalNumbers });

const polish_colors = [
    {Phrase: "czarny", Pronunciation: "char-nih", English: "black"},
    {Phrase: "biały", Pronunciation: "byah-wih", English: "white"},
    {Phrase: "czerwony", Pronunciation: "chehr-voh-nih", English: "red"},
    {Phrase: "zielony", Pronunciation: "zhyeh-loh-nih", English: "green"},
    {Phrase: "niebieski", Pronunciation: "nyeh-byeh-skee", English: "blue"},
    {Phrase: "żółty", Pronunciation: "zhool-tih", English: "yellow"},
    {Phrase: "pomarańczowy", Pronunciation: "poh-mah-rahn-choh-vih", English: "orange"},
    {Phrase: "fioletowy", Pronunciation: "fyoh-leh-toh-vih", English: "purple"},
    {Phrase: "różowy", Pronunciation: "roo-zhoh-vih", English: "pink"},
    {Phrase: "brązowy", Pronunciation: "brow-zoh-vih", English: "brown"}
];

polish_dataSets.push({ name: 'Colors', value: polish_colors });

const polish_family = [
    {Phrase: "rodzina", Pronunciation: "roh-dzee-nah", English: "family"},
    {Phrase: "matka", Pronunciation: "maht-kah", English: "mother"},
    {Phrase: "ojciec", Pronunciation: "oy-tsyets", English: "father"},
    {Phrase: "rodzeństwo", Pronunciation: "roh-dzhen-stvoh", English: "siblings"},
    {Phrase: "siostra", Pronunciation: "syoh-strah", English: "sister"},
    {Phrase: "brat", Pronunciation: "braht", English: "brother"},
    {Phrase: "córka", Pronunciation: "choor-kah", English: "daughter"},
    {Phrase: "syn", Pronunciation: "sin", English: "son"},
    {Phrase: "babcia", Pronunciation: "bahb-chyah", English: "grandmother"},
    {Phrase: "dziadek", Pronunciation: "dzyah-dek", English: "grandfather"}
];

polish_dataSets.push({ name: 'Family', value: polish_family });

const polish_bodyParts = [
    {Phrase: "ciało", Pronunciation: "chah-woh", English: "body"},
    {Phrase: "głowa", Pronunciation: "gwuh-vah", English: "head"},
    {Phrase: "włosy", Pronunciation: "vwuh-sih", English: "hair"},
    {Phrase: "oczy", Pronunciation: "oh-chih", English: "eyes"},
    {Phrase: "nos", Pronunciation: "nohs", English: "nose"},
    {Phrase: "usta", Pronunciation: "oos-tah", English: "mouth"},
    {Phrase: "zęby", Pronunciation: "zheh-bih", English: "teeth"},
    {Phrase: "uszy", Pronunciation: "oosh-ih", English: "ears"},
    {Phrase: "ramię", Pronunciation: "rah-myeh", English: "arm"},
    {Phrase: "ręka", Pronunciation: "rehn-kah", English: "hand"}
];

polish_dataSets.push({ name: 'Body Parts', value: polish_bodyParts });

const polish_animals = [
    {Phrase: "zwierzę", Pronunciation: "zvyeh-zheh", English: "animal"},
    {Phrase: "pies", Pronunciation: "pyes", English: "dog"},
    {Phrase: "kot", Pronunciation: "koht", English: "cat"},
    {Phrase: "ptak", Pronunciation: "ptahk", English: "bird"},
    {Phrase: "ryba", Pronunciation: "rih-bah", English: "fish"},
    {Phrase: "kon", Pronunciation: "kohn", English: "horse"},
    {Phrase: "krowa", Pronunciation: "kroh-vah", English: "cow"},
    {Phrase: "świnia", Pronunciation: "shvee-nyah", English: "pig"},
    {Phrase: "owca", Pronunciation: "ohv-tsah", English: "sheep"},
    {Phrase: "kura", Pronunciation: "koo-rah", English: "chicken"}
];

polish_dataSets.push({ name: 'Animals', value: polish_animals });

const polish_food = [
    {Phrase: "jedzenie", Pronunciation: "yeh-dzeh-nyeh", English: "food"},
    {Phrase: "chleb", Pronunciation: "hlehp", English: "bread"},
    {Phrase: "jabłko", Pronunciation: "yah-boo-koh", English: "apple"},
    {Phrase: "mleko", Pronunciation: "mleh-koh", English: "milk"},
    {Phrase: "woda", Pronunciation: "voh-dah", English: "water"},
    {Phrase: "herbata", Pronunciation: "hehr-bah-tah", English: "tea"},
    {Phrase: "kawa", Pronunciation: "kah-vah", English: "coffee"},
    {Phrase: "jajko", Pronunciation: "yai-koh", English: "egg"},
    {Phrase: "mięso", Pronunciation: "myen-soh", English: "meat"},
    {Phrase: "ryż", Pronunciation: "rihsh", English: "rice"}
];

polish_dataSets.push({ name: 'Food', value: polish_food });

const polish_drinks = [
    {Phrase: "napój", Pronunciation: "nah-poy", English: "drink"},
    {Phrase: "wino", Pronunciation: "vee-noh", English: "wine"},
    {Phrase: "piwo", Pronunciation: "pee-voh", English: "beer"},
    {Phrase: "sok", Pronunciation: "sohk", English: "juice"},
    {Phrase: "herbata", Pronunciation: "hehr-bah-tah", English: "tea"},
    {Phrase: "kawa", Pronunciation: "kah-vah", English: "coffee"},
    {Phrase: "woda", Pronunciation: "voh-dah", English: "water"},
    {Phrase: "mleko", Pronunciation: "mleh-koh", English: "milk"},
    {Phrase: "cola", Pronunciation: "koh-lah", English: "cola"},
    {Phrase: "whisky", Pronunciation: "vees-kee", English: "whisky"}
];

polish_dataSets.push({ name: 'Drinks', value: polish_drinks });

const polish_fruits = [
    {Phrase: "owoce", Pronunciation: "oh-voh-tseh", English: "fruit"},
    {Phrase: "jabłko", Pronunciation: "yah-boo-koh", English: "apple"},
    {Phrase: "banan", Pronunciation: "bah-nahn", English: "banana"},
    {Phrase: "pomarańcza", Pronunciation: "poh-mah-rahn-chah", English: "orange"},
    {Phrase: "gruszka", Pronunciation: "groosh-kah", English: "pear"},
    {Phrase: "śliwka", Pronunciation: "shleev-kah", English: "plum"},
    {Phrase: "truskawka", Pronunciation: "troo-skahf-kah", English: "strawberry"},
    {Phrase: "winogrono", Pronunciation: "vee-noh-groh-noh", English: "grape"},
    {Phrase: "arbuz", Pronunciation: "ahr-booz", English: "watermelon"},
    {Phrase: "ananas", Pronunciation: "ah-nah-nahs", English: "pineapple"}
];

polish_dataSets.push({ name: 'Fruits', value: polish_fruits });

const polish_vegetables = [
    {Phrase: "warzywa", Pronunciation: "vah-zih-vah", English: "vegetable"},
    {Phrase: "marchew", Pronunciation: "mahr-hev", English: "carrot"},
    {Phrase: "ziemniak", Pronunciation: "zyem-nyahk", English: "potato"},
    {Phrase: "pomidor", Pronunciation: "poh-mee-dohr", English: "tomato"},
    {Phrase: "ogórek", Pronunciation: "oh-goo-rek", English: "cucumber"},
    {Phrase: "cebula", Pronunciation: "tseh-boo-lah", English: "onion"},
    {Phrase: "kapusta", Pronunciation: "kah-poos-tah", English: "cabbage"},
    {Phrase: "papryka", Pronunciation: "pah-prih-kah", English: "pepper"},
    {Phrase: "brokuł", Pronunciation: "broh-koo-w", English: "broccoli"},
    {Phrase: "seler", Pronunciation: "seh-lehr", English: "celery"}
];

polish_dataSets.push({ name: 'Vegetables', value: polish_vegetables });

const polish_countries = [
    {Phrase: "kraj", Pronunciation: "krah-y", English: "country"},
    {Phrase: "Polska", Pronunciation: "pohl-skah", English: "Poland"},
    {Phrase: "Niemcy", Pronunciation: "nyem-tsih", English: "Germany"},
    {Phrase: "Francja", Pronunciation: "frahnts-yah", English: "France"},
    {Phrase: "Włochy", Pronunciation: "vwuh-hih", English: "Italy"},
    {Phrase: "Hiszpania", Pronunciation: "heesh-pah-nyah", English: "Spain"},
    {Phrase: "Rosja", Pronunciation: "roh-shah", English: "Russia"},
    {Phrase: "Stany Zjednoczone", Pronunciation: "stah-nih zyehd-noh-tsoh-neh", English: "United States"},
    {Phrase: "Chiny", Pronunciation: "khee-nih", English: "China"},
    {Phrase: "Japonia", Pronunciation: "yah-poh-nyah", English: "Japan"}
];

polish_dataSets.push({ name: 'Countries', value: polish_countries });

const polish_cities = [
    {Phrase: "miasto", Pronunciation: "myah-stoh", English: "city"},
    {Phrase: "Warszawa", Pronunciation: "var-shah-vah", English: "Warsaw"},
    {Phrase: "Kraków", Pronunciation: "krah-koo-f", English: "Krakow"},
    {Phrase: "Gdańsk", Pronunciation: "gdahnsk", English: "Gdansk"},
    {Phrase: "Poznań", Pronunciation: "pohz-nahn", English: "Poznan"},
    {Phrase: "Wrocław", Pronunciation: "vrotswahf", English: "Wroclaw"},
    {Phrase: "Łódź", Pronunciation: "wooj", English: "Lodz"},
    {Phrase: "Szczecin", Pronunciation: "shcheh-tseen", English: "Szczecin"},
    {Phrase: "Lublin", Pronunciation: "loob-leen", English: "Lublin"},
    {Phrase: "Katowice", Pronunciation: "kah-toh-vee-tseh", English: "Katowice"}
];

polish_dataSets.push({ name: 'Cities', value: polish_cities });

const polish_transport = [
    {Phrase: "transport", Pronunciation: "trahns-pohrt", English: "transport"},
    {Phrase: "samochód", Pronunciation: "sah-moh-hoot", English: "car"},
    {Phrase: "rower", Pronunciation: "roh-veh-r", English: "bicycle"},
    {Phrase: "autobus", Pronunciation: "ow-toh-boos", English: "bus"},
    {Phrase: "tramwaj", Pronunciation: "trahm-vai", English: "tram"},
    {Phrase: "pociąg", Pronunciation: "poh-chong", English: "train"},
    {Phrase: "metro", Pronunciation: "meh-troh", English: "subway"},
    {Phrase: "taksówka", Pronunciation: "tahk-soov-kah", English: "taxi"},
    {Phrase: "samolot", Pronunciation: "sah-moh-lot", English: "airplane"},
    {Phrase: "statek", Pronunciation: "stah-tek", English: "ship"}
];

polish_dataSets.push({ name: 'Transport', value: polish_transport });

const polish_professions = [
    {Phrase: "zawód", Pronunciation: "zah-voont", English: "profession"},
    {Phrase: "nauczyciel", Pronunciation: "now-chee-chehl", English: "teacher"},
    {Phrase: "lekarz", Pronunciation: "leh-kahsh", English: "doctor"},
    {Phrase: "inżynier", Pronunciation: "een-zhih-nyehr", English: "engineer"},
    {Phrase: "prawnik", Pronunciation: "prahv-neek", English: "lawyer"},
    {Phrase: "kucharz", Pronunciation: "koo-hahsh", English: "chef"},
    {Phrase: "kelner", Pronunciation: "kehl-neh", English: "waiter"},
    {Phrase: "aktor", Pronunciation: "ahk-tohr", English: "actor"},
    {Phrase: "piosenkarz", Pronunciation: "pyoh-sehn-kahsh", English: "singer"},
    {Phrase: "sportowiec", Pronunciation: "spohrt-oh-vyets", English: "athlete"}
];

polish_dataSets.push({ name: 'Professions', value: polish_professions });

const polish_weather = [
    {Phrase: "pogoda", Pronunciation: "poh-goh-dah", English: "weather"},
    {Phrase: "słońce", Pronunciation: "swuhn-tseh", English: "sun"},
    {Phrase: "deszcz", Pronunciation: "dehshch", English: "rain"},
    {Phrase: "śnieg", Pronunciation: "shnyeg", English: "snow"},
    {Phrase: "wiatr", Pronunciation: "vyah-tr", English: "wind"},
    {Phrase: "chmura", Pronunciation: "khmoo-rah", English: "cloud"},
    {Phrase: "burza", Pronunciation: "boor-zah", English: "storm"},
    {Phrase: "tęcza", Pronunciation: "tench-zah", English: "rainbow"},
    {Phrase: "mgła", Pronunciation: "mgwah", English: "fog"},
    {Phrase: "grad", Pronunciation: "graht", English: "hail"}
];

polish_dataSets.push({ name: 'Weather', value: polish_weather });

const polish_seasons = [
    {Phrase: "pora roku", Pronunciation: "poh-rah roh-koo", English: "season"},
    {Phrase: "wiosna", Pronunciation: "vyohs-nah", English: "spring"},
    {Phrase: "lato", Pronunciation: "lah-toh", English: "summer"},
    {Phrase: "jesień", Pronunciation: "yeh-shen", English: "autumn"},
    {Phrase: "zima", Pronunciation: "zhee-mah", English: "winter"}
];

polish_dataSets.push({ name: 'Seasons', value: polish_seasons });

const polish_months = [
    {Phrase: "miesiąc", Pronunciation: "myeh-shonch", English: "month"},
    {Phrase: "styczeń", Pronunciation: "stih-chen", English: "January"},
    {Phrase: "luty", Pronunciation: "loo-tih", English: "February"},
    {Phrase: "marzec", Pronunciation: "mah-zets", English: "March"},
    {Phrase: "kwiecień", Pronunciation: "kvyeh-chen", English: "April"},
    {Phrase: "maj", Pronunciation: "mahy", English: "May"},
    {Phrase: "czerwiec", Pronunciation: "chehr-vyets", English: "June"},
    {Phrase: "lipiec", Pronunciation: "lee-pyets", English: "July"},
    {Phrase: "sierpień", Pronunciation: "shyehr-pyeng", English: "August"},
    {Phrase: "wrzesień", Pronunciation: "vzheh-shen", English: "September"},
    {Phrase: "październik", Pronunciation: "pah-dzyeh-rnik", English: "October"},
    {Phrase: "listopad", Pronunciation: "lees-toh-paht", English: "November"},
    {Phrase: "grudzień", Pronunciation: "grood-zhyen", English: "December"}
];

polish_dataSets.push({ name: 'Months', value: polish_months });

const polish_daysOfWeek = [
    {Phrase: "dzień tygodnia", Pronunciation: "dzyen tih-goh-dnyah", English: "day of the week"},
    {Phrase: "poniedziałek", Pronunciation: "poh-nyeh-dyah-wek", English: "Monday"},
    {Phrase: "wtorek", Pronunciation: "vtoh-rek", English: "Tuesday"},
    {Phrase: "środa", Pronunciation: "shroh-dah", English: "Wednesday"},
    {Phrase: "czwartek", Pronunciation: "chvahr-tek", English: "Thursday"},
    {Phrase: "piątek", Pronunciation: "pyon-tek", English: "Friday"},
    {Phrase: "sobota", Pronunciation: "soh-boh-tah", English: "Saturday"},
    {Phrase: "niedziela", Pronunciation: "nyeh-dzyeh-lah", English: "Sunday"}
];

polish_dataSets.push({ name: 'Days of the Week', value: polish_daysOfWeek });

const polish_phrases = [
    {Phrase: "jak się masz?", Pronunciation: "yahk shyeh mahsh", English: "how are you?"},
    {Phrase: "dziękuję dobrze", Pronunciation: "jen-koo-yeh doh-bzheh", English: "thank you, I'm good"},
    {Phrase: "przepraszam, nie rozumiem", Pronunciation: "psheh-pra-sham nyeh roh-zoo-myem", English: "I'm sorry, I don't understand"},
    {Phrase: "ile to kosztuje?", Pronunciation: "ee-leh toh kohs-too-yeh", English: "how much does it cost?"},
    {Phrase: "gdzie jest toaleta?", Pronunciation: "gdyeh yest toh-ah-leh-tah", English: "where is the bathroom?"},
    {Phrase: "co to jest?", Pronunciation: "tso toh yest", English: "what is this?"},
    {Phrase: "czy mówisz po angielsku?", Pronunciation: "chi moo-vish poh ahn-gyehl-skoo", English: "do you speak English?"},
    {Phrase: "proszę powtórzyć", Pronunciation: "proh-sheh pov-too-rzhih", English: "please repeat"},
    {Phrase: "jak się nazywasz?", Pronunciation: "yahk shyeh nah-zih-vahsh", English: "what's your name?"},
    {Phrase: "miło mi cię poznać", Pronunciation: "mee-woh mee chyeh poznahch", English: "nice to meet you"}
];

polish_dataSets.push({ name: 'Phrases', value: polish_phrases });

const polish_adjectives = [
    {Phrase: "przymiotnik", Pronunciation: "pshih-myot-neek", English: "adjective"},
    {Phrase: "duży", Pronunciation: "doo-zhih", English: "big"},
    {Phrase: "mały", Pronunciation: "mah-wih", English: "small"},
    {Phrase: "szybki", Pronunciation: "shihb-kih", English: "fast"},
    {Phrase: "wolny", Pronunciation: "vohl-nih", English: "slow"},
    {Phrase: "dobry", Pronunciation: "doh-brih", English: "good"},
    {Phrase: "zły", Pronunciation: "zwih", English: "bad"},
    {Phrase: "piękny", Pronunciation: "pyehk-nih", English: "beautiful"},
    {Phrase: "brzydki", Pronunciation: "bzhid-kih", English: "ugly"},
    {Phrase: "młody", Pronunciation: "mwuh-dih", English: "young"},
    {Phrase: "stary", Pronunciation: "stah-rih", English: "old"}
];

polish_dataSets.push({ name: 'Adjectives', value: polish_adjectives });

const polish_verbs = [
    {Phrase: "czasownik", Pronunciation: "chah-soh-vnik", English: "verb"},
    {Phrase: "jeść", Pronunciation: "yehstch", English: "to eat"},
    {Phrase: "pić", Pronunciation: "peech", English: "to drink"},
    {Phrase: "spać", Pronunciation: "spahtch", English: "to sleep"},
    {Phrase: "biegać", Pronunciation: "byeh-gach", English: "to run"},
    {Phrase: "skakać", Pronunciation: "skah-kach", English: "to jump"},
    {Phrase: "pisać", Pronunciation: "peesach", English: "to write"},
    {Phrase: "czytać", Pronunciation: "chitach", English: "to read"},
    {Phrase: "mówić", Pronunciation: "moov-eech", English: "to speak"},
    {Phrase: "słuchać", Pronunciation: "swoo-hahch", English: "to listen"},
    {Phrase: "patrzeć", Pronunciation: "paht-zhech", English: "to look"}
];

polish_dataSets.push({ name: 'Verbs', value: polish_verbs });

const polish_prepositions = [

    {Phrase: "przyimek", Pronunciation: "pshih-yee-mek", English: "preposition"},
    {Phrase: "w", Pronunciation: "v", English: "in"},
    {Phrase: "na", Pronunciation: "nah", English: "on"},
    {Phrase: "pod", Pronunciation: "pohd", English: "under"},
    {Phrase: "nad", Pronunciation: "naht", English: "above"},
    {Phrase: "przed", Pronunciation: "pshehd", English: "before"},
    {Phrase: "po", Pronunciation: "poh", English: "after"},
    {Phrase: "obok", Pronunciation: "oh-bohk", English: "next to"},
    {Phrase: "przy", Pronunciation: "pshih", English: "by"},
    {Phrase: "między", Pronunciation: "myend-zih", English: "between"},
    {Phrase: "z", Pronunciation: "z", English: "with"}
];

polish_dataSets.push({ name: 'Prepositions', value: polish_prepositions });

const polish_conjunctions = [

    {Phrase: "spójnik", Pronunciation: "spoy-neek", English: "conjunction"},
    {Phrase: "i", Pronunciation: "ee", English: "and"},
    {Phrase: "albo", Pronunciation: "ahl-boh", English: "or"},
    {Phrase: "ale", Pronunciation: "ah-leh", English: "but"},
    {Phrase: "gdy", Pronunciation: "gdih", English: "when"},
    {Phrase: "jeśli", Pronunciation: "yeh-swee", English: "if"},
    {Phrase: "ponieważ", Pronunciation: "poh-nyeh-vahzh", English: "because"},
    {Phrase: "aby", Pronunciation: "ah-bih", English: "in order to"},
    {Phrase: "lub", Pronunciation: "loob", English: "or"},
    {Phrase: "więc", Pronunciation: "vyents", English: "so"},
    {Phrase: "mimo że", Pronunciation: "mee-moh zheh", English: "although"}
];

polish_dataSets.push({ name: 'Conjunctions', value: polish_conjunctions });

const polish_questionWords = [

    {Phrase: "zaimek pytający", Pronunciation: "zah-ee-mek pitah-yon-tsih", English: "question word"},
    {Phrase: "co", Pronunciation: "tso", English: "what"},
    {Phrase: "kto", Pronunciation: "ktoh", English: "who"},
    {Phrase: "gdzie", Pronunciation: "gdyeh", English: "where"},
    {Phrase: "kiedy", Pronunciation: "kyeh-dih", English: "when"},
    {Phrase: "dlaczego", Pronunciation: "dlah-cheh-goh", English: "why"},
    {Phrase: "ile", Pronunciation: "ee-leh", English: "how much"},
    {Phrase: "jak", Pronunciation: "yahk", English: "how"},
    {Phrase: "czy", Pronunciation: "chi", English: "whether"},
    {Phrase: "który", Pronunciation: "ktoh-rih", English: "which"},
    {Phrase: "czyj", Pronunciation: "chiy", English: "whose"}
];

polish_dataSets.push({ name: 'Question Words', value: polish_questionWords });

const polish_time = [
    
        {Phrase: "czas", Pronunciation: "chahs", English: "time"},
        {Phrase: "godzina", Pronunciation: "goh-dzee-nah", English: "hour"},
        {Phrase: "minuta", Pronunciation: "mee-noo-tah", English: "minute"},
        {Phrase: "sekunda", Pronunciation: " seh -koon-dah", English: "second"},
        {Phrase: "dzień", Pronunciation: "dzyen", English: "day"}
];

polish_dataSets.push({ name: 'Time', value: polish_time });
