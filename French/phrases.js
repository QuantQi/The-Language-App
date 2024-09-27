// Initialize the array with the existing constants



const french_dataSets = [];
languageList.push({ name: 'French', dataSet: french_dataSets, 
    colours: { primary: 'white', secondary: 'navyBlue', tertiary:'lightGray' } });


const french_greetings = [
    {Phrase: "Bonjour", Pronunciation: "bohn-zhoor", English: "Hello"},
    {Phrase: "Bonsoir", Pronunciation: "bohn-swahr", English: "Good evening"},
    {Phrase: "Bonne nuit", Pronunciation: "bohn nwee", English: "Good night"},
    {Phrase: "Au revoir", Pronunciation: "oh ruh-vwahr", English: "Goodbye"},
    {Phrase: "Merci", Pronunciation: "mehr-see", English: "Thank you"},
    {Phrase: "S'il vous plaît", Pronunciation: "seel voo pleh", English: "Please"},
    {Phrase: "Pardon", Pronunciation: "par-dohn", English: "Sorry"},
    {Phrase: "Oui", Pronunciation: "wee", English: "Yes"},
    {Phrase: "Non", Pronunciation: "noh", English: "No"}
];

french_dataSets.push({ name: 'Greetings', value: french_greetings });

const french_cardinalNumbers = [
    {Phrase: "un", Pronunciation: "uh", English: "one"},
    {Phrase: "deux", Pronunciation: "duh", English: "two"},
    {Phrase: "trois", Pronunciation: "trwah", English: "three"},
    {Phrase: "quatre", Pronunciation: "katr", English: "four"},
    {Phrase: "cinq", Pronunciation: "sank", English: "five"},
    {Phrase: "six", Pronunciation: "sees", English: "six"},
    {Phrase: "sept", Pronunciation: "set", English: "seven"},
    {Phrase: "huit", Pronunciation: "weet", English: "eight"},
    {Phrase: "neuf", Pronunciation: "nuhf", English: "nine"},
    {Phrase: "dix", Pronunciation: "dees", English: "ten"}
];

french_dataSets.push({ name: 'Cardinal Numbers', value: french_cardinalNumbers });

const french_ordinalNumbers = [
    {Phrase: "premier", Pronunciation: "pruh-myey", English: "first"},
    {Phrase: "deuxième", Pronunciation: "duh-zyem", English: "second"},
    {Phrase: "troisième", Pronunciation: "trwah-zyem", English: "third"},
    {Phrase: "quatrième", Pronunciation: "ka-tree-em", English: "fourth"},
    {Phrase: "cinquième", Pronunciation: "sank-yem", English: "fifth"},
    {Phrase: "sixième", Pronunciation: "see-zyem", English: "sixth"},
    {Phrase: "septième", Pronunciation: "set-yem", English: "seventh"},
    {Phrase: "huitième", Pronunciation: "wee-tyem", English: "eighth"},
    {Phrase: "neuvième", Pronunciation: "nuh-vyem", English: "ninth"},
    {Phrase: "dixième", Pronunciation: "dee-zyem", English: "tenth"}
];

french_dataSets.push({ name: 'Ordinal Numbers', value: french_ordinalNumbers });

const french_colors = [
    {Phrase: "noir", Pronunciation: "nwar", English: "black"},
    {Phrase: "blanc", Pronunciation: "blahn", English: "white"},
    {Phrase: "rouge", Pronunciation: "roozh", English: "red"},
    {Phrase: "vert", Pronunciation: "vehr", English: "green"},
    {Phrase: "bleu", Pronunciation: "bluh", English: "blue"},
    {Phrase: "jaune", Pronunciation: "zhon", English: "yellow"},
    {Phrase: "orange", Pronunciation: "oh-rahnzh", English: "orange"},
    {Phrase: "violet", Pronunciation: "vyo-leh", English: "purple"},
    {Phrase: "rose", Pronunciation: "rohz", English: "pink"},
    {Phrase: "marron", Pronunciation: "mah-rohn", English: "brown"}
];

french_dataSets.push({ name: 'Colors', value: french_colors });

const french_family = [
    {Phrase: "famille", Pronunciation: "fa-mee", English: "family"},
    {Phrase: "mère", Pronunciation: "mehr", English: "mother"},
    {Phrase: "père", Pronunciation: "pehr", English: "father"},
    {Phrase: "frère", Pronunciation: "frehr", English: "brother"},
    {Phrase: "sœur", Pronunciation: "sur", English: "sister"},
    {Phrase: "fils", Pronunciation: "fees", English: "son"},
    {Phrase: "fille", Pronunciation: "fee", English: "daughter"},
    {Phrase: "grand-mère", Pronunciation: "grahn-mehr", English: "grandmother"},
    {Phrase: "grand-père", Pronunciation: "grahn-pehr", English: "grandfather"},
    {Phrase: "oncle", Pronunciation: "ohn-kl", English: "uncle"}
];

french_dataSets.push({ name: 'Family', value: french_family });

const french_bodyParts = [
    {Phrase: "corps", Pronunciation: "kor", English: "body"},
    {Phrase: "tête", Pronunciation: "tet", English: "head"},
    {Phrase: "cheveux", Pronunciation: "shuh-vuh", English: "hair"},
    {Phrase: "yeux", Pronunciation: "yuh", English: "eyes"},
    {Phrase: "nez", Pronunciation: "nay", English: "nose"},
    {Phrase: "bouche", Pronunciation: "boosh", English: "mouth"},
    {Phrase: "dents", Pronunciation: "dahn", English: "teeth"},
    {Phrase: "oreilles", Pronunciation: "o-ray", English: "ears"},
    {Phrase: "bras", Pronunciation: "brah", English: "arm"},
    {Phrase: "main", Pronunciation: "man", English: "hand"}
];

french_dataSets.push({ name: 'Body Parts', value: french_bodyParts });

const french_animals = [
    {Phrase: "animal", Pronunciation: "ah-nee-mahl", English: "animal"},
    {Phrase: "chien", Pronunciation: "shyan", English: "dog"},
    {Phrase: "chat", Pronunciation: "sha", English: "cat"},
    {Phrase: "oiseau", Pronunciation: "wah-zoh", English: "bird"},
    {Phrase: "poisson", Pronunciation: "pwah-sohn", English: "fish"},
    {Phrase: "cheval", Pronunciation: "shuh-val", English: "horse"},
    {Phrase: "vache", Pronunciation: "vash", English: "cow"},
    {Phrase: "cochon", Pronunciation: "koh-shon", English: "pig"},
    {Phrase: "mouton", Pronunciation: "moo-ton", English: "sheep"},
    {Phrase: "poule", Pronunciation: "pool", English: "chicken"}
];

french_dataSets.push({ name: 'Animals', value: french_animals });

const french_food = [
    {Phrase: "nourriture", Pronunciation: "noo-ree-toor", English: "food"},
    {Phrase: "pain", Pronunciation: "pan", English: "bread"},
    {Phrase: "pomme", Pronunciation: "pom", English: "apple"},
    {Phrase: "lait", Pronunciation: "leh", English: "milk"},
    {Phrase: "eau", Pronunciation: "oh", English: "water"},
    {Phrase: "thé", Pronunciation: "tay", English: "tea"},
    {Phrase: "café", Pronunciation: "ka-fay", English: "coffee"},
    {Phrase: "œuf", Pronunciation: "uhf", English: "egg"},
    {Phrase: "viande", Pronunciation: "vyahnd", English: "meat"},
    {Phrase: "riz", Pronunciation: "ree", English: "rice"}
];

french_dataSets.push({ name: 'Food', value: french_food });

const french_drinks = [
    {Phrase: "boisson", Pronunciation: "bwah-sohn", English: "drink"},
    {Phrase: "vin", Pronunciation: "van", English: "wine"},
    {Phrase: "bière", Pronunciation: "byehr", English: "beer"},
    {Phrase: "jus", Pronunciation: "zhoo", English: "juice"},
    {Phrase: "thé", Pronunciation: "tay", English: "tea"},
    {Phrase: "café", Pronunciation: "ka-fay", English: "coffee"},
    {Phrase: "eau", Pronunciation: "oh", English: "water"},
    {Phrase: "lait", Pronunciation: "leh", English: "milk"},
    {Phrase: "cola", Pronunciation: "koh-lah", English: "cola"},
    {Phrase: "whisky", Pronunciation: "wee-skee", English: "whisky"}
];

french_dataSets.push({ name: 'Drinks', value: french_drinks });

const french_fruits = [
    {Phrase: "fruit", Pronunciation: "frwee", English: "fruit"},
    {Phrase: "pomme", Pronunciation: "pom", English: "apple"},
    {Phrase: "banane", Pronunciation: "ba-nan", English: "banana"},
    {Phrase: "orange", Pronunciation: "oh-rahnzh", English: "orange"},
    {Phrase: "poire", Pronunciation: "pwahr", English: "pear"},
    {Phrase: "prune", Pronunciation: "proon", English: "plum"},
    {Phrase: "fraise", Pronunciation: "frez", English: "strawberry"},
    {Phrase: "raisin", Pronunciation: "ray-zan", English: "grape"},
    {Phrase: "pastèque", Pronunciation: "pas-tek", English: "watermelon"},
    {Phrase: "ananas", Pronunciation: "ah-nah-nah", English: "pineapple"}
];

french_dataSets.push({ name: 'Fruits', value: french_fruits });

const french_vegetables = [
    {Phrase: "légume", Pronunciation: "lay-gum", English: "vegetable"},
    {Phrase: "carotte", Pronunciation: "ka-rot", English: "carrot"},
    {Phrase: "pomme de terre", Pronunciation: "pom duh tehr", English: "potato"},
    {Phrase: "tomate", Pronunciation: "to-mat", English: "tomato"},
    {Phrase: "concombre", Pronunciation: "kon-kom-br", English: "cucumber"},
    {Phrase: "oignon", Pronunciation: "on-yon", English: "onion"},
    {Phrase: "chou", Pronunciation: "shoo", English: "cabbage"},
    {Phrase: "poivron", Pronunciation: "pwah-vron", English: "pepper"},
    {Phrase: "brocoli", Pronunciation: "bro-ko-lee", English: "broccoli"},
    {Phrase: "céleri", Pronunciation: "seh-luh-ree", English: "celery"}
];

french_dataSets.push({ name: 'Vegetables', value: french_vegetables });

const french_countries = [
    {Phrase: "pays", Pronunciation: "pay-ee", English: "country"},
    {Phrase: "France", Pronunciation: "frahnce", English: "France"},
    {Phrase: "Allemagne", Pronunciation: "al-mahn-ye", English: "Germany"},
    {Phrase: "Italie", Pronunciation: "ee-ta-lee", English: "Italy"},
    {Phrase: "Espagne", Pronunciation: "es-pah-nye", English: "Spain"},
    {Phrase: "Russie", Pronunciation: "roo-see", English: "Russia"},
    {Phrase: "États-Unis", Pronunciation: "ay-tahz oo-nee", English: "United States"},
    {Phrase: "Chine", Pronunciation: "sheen", English: "China"},
    {Phrase: "Japon", Pronunciation: "zhah-pohn", English: "Japan"},
    {Phrase: "Pologne", Pronunciation: "po-lohn-ye", English: "Poland"}
];

french_dataSets.push({ name: 'Countries', value: french_countries });

const french_cities = [
    {Phrase: "ville", Pronunciation: "veel", English: "city"},
    {Phrase: "Paris", Pronunciation: "pa-ree", English: "Paris"},
    {Phrase: "Marseille", Pronunciation: "mar-say", English: "Marseille"},
    {Phrase: "Lyon", Pronunciation: "lee-ohn", English: "Lyon"},
    {Phrase: "Toulouse", Pronunciation: "too-looz", English: "Toulouse"},
    {Phrase: "Nice", Pronunciation: "nees", English: "Nice"},
    {Phrase: "Nantes", Pronunciation: "nahnt", English: "Nantes"},
    {Phrase: "Strasbourg", Pronunciation: "strahs-boor", English: "Strasbourg"},
    {Phrase: "Montpellier", Pronunciation: "mon-peh-lyay", English: "Montpellier"},
    {Phrase: "Bordeaux", Pronunciation: "bor-doh", English: "Bordeaux"}
];

french_dataSets.push({ name: 'Cities', value: french_cities });

const french_transport = [
    {Phrase: "transport", Pronunciation: "trahns-pohr", English: "transport"},
    {Phrase: "voiture", Pronunciation: "vwah-tyoor", English: "car"},
    {Phrase: "vélo", Pronunciation: "vay-loh", English: "bicycle"},
    {Phrase: "bus", Pronunciation: "boos", English: "bus"},
    {Phrase: "tramway", Pronunciation: "trahm-way", English: "tram"},
    {Phrase: "train", Pronunciation: "trahn", English: "train"},
    {Phrase: "métro", Pronunciation: "may-troh", English: "subway"},
    {Phrase: "taxi", Pronunciation: "tahk-see", English: "taxi"},
    {Phrase: "avion", Pronunciation: "ah-vyon", English: "airplane"},
    {Phrase: "bateau", Pronunciation: "bah-toh", English: "ship"}
];

french_dataSets.push({ name: 'Transport', value: french_transport });

const french_professions = [
    {Phrase: "profession", Pronunciation: "proh-feh-syon", English: "profession"},
    {Phrase: "enseignant", Pronunciation: "ahn-seh-nyahn", English: "teacher"},
    {Phrase: "médecin", Pronunciation: "mayd-sahn", English: "doctor"},
    {Phrase: "ingénieur", Pronunciation: "an-zheh-nyur", English: "engineer"},
    {Phrase: "avocat", Pronunciation: "ah-voh-kah", English: "lawyer"},
    {Phrase: "cuisinier", Pronunciation: "kwee-zee-nyay", English: "chef"},
    {Phrase: "serveur", Pronunciation: "sehr-vur", English: "waiter"},
    {Phrase: "acteur", Pronunciation: "ahk-tuhr", English: "actor"},
    {Phrase: "chanteur", Pronunciation: "shahn-tuhr", English: "singer"},
    {Phrase: "athlète", Pronunciation: "at-let", English: "athlete"}
];

french_dataSets.push({ name: 'Professions', value: french_professions });

const french_weather = [
    {Phrase: "météo", Pronunciation: "may-teh-oh", English: "weather"},
    {Phrase: "soleil", Pronunciation: "soh-lay", English: "sun"},
    {Phrase: "pluie", Pronunciation: "plwee", English: "rain"},
    {Phrase: "neige", Pronunciation: "nehzh", English: "snow"},
    {Phrase: "vent", Pronunciation: "vahn", English: "wind"},
    {Phrase: "nuage", Pronunciation: "nyoo-ahzh", English: "cloud"},
    {Phrase: "orage", Pronunciation: "oh-rahzh", English: "storm"},
    {Phrase: "arc-en-ciel", Pronunciation: "ahr-kahn-syel", English: "rainbow"},
    {Phrase: "brouillard", Pronunciation: "broo-yar", English: "fog"},
    {Phrase: "grêle", Pronunciation: "grehl", English: "hail"}
];

french_dataSets.push({ name: 'Weather', value: french_weather });

const french_seasons = [
    {Phrase: "saison", Pronunciation: "say-zon", English: "season"},
    {Phrase: "printemps", Pronunciation: "pran-tahn", English: "spring"},
    {Phrase: "été", Pronunciation: "ay-tay", English: "summer"},
    {Phrase: "automne", Pronunciation: "oh-ton", English: "autumn"},
    {Phrase: "hiver", Pronunciation: "ee-vehr", English: "winter"}
];

french_dataSets.push({ name: 'Seasons', value: french_seasons });

const french_months = [
    {Phrase: "mois", Pronunciation: "mwah", English: "month"},
    {Phrase: "janvier", Pronunciation: "zhahn-vyay", English: "January"},
    {Phrase: "février", Pronunciation: "fay-vree-ay", English: "February"},
    {Phrase: "mars", Pronunciation: "mahrs", English: "March"},
    {Phrase: "avril", Pronunciation: "ah-vreel", English: "April"},
    {Phrase: "mai", Pronunciation: "may", English: "May"},
    {Phrase: "juin", Pronunciation: "zhwan", English: "June"},
    {Phrase: "juillet", Pronunciation: "zhwee-yay", English: "July"},
    {Phrase: "août", Pronunciation: "oot", English: "August"},
    {Phrase: "septembre", Pronunciation: "sep-tahm-br", English: "September"},
    {Phrase: "octobre", Pronunciation: "ok-toh-br", English: "October"},
    {Phrase: "novembre", Pronunciation: "noh-vahm-br", English: "November"},
    {Phrase: "décembre", Pronunciation: "day-sahm-br", English: "December"}
];

french_dataSets.push({ name: 'Months', value: french_months });

const french_daysOfWeek = [
    {Phrase: "jour de la semaine", Pronunciation: "zhoor duh lah se-men", English: "day of the week"},
    {Phrase: "lundi", Pronunciation: "lun-dee", English: "Monday"},
    {Phrase: "mardi", Pronunciation: "mar-dee", English: "Tuesday"},
    {Phrase: "mercredi", Pronunciation: "mehr-kruh-dee", English: "Wednesday"},
    {Phrase: "jeudi", Pronunciation: "zhuh-dee", English: "Thursday"},
    {Phrase: "vendredi", Pronunciation: "vahn-druh-dee", English: "Friday"},
    {Phrase: "samedi", Pronunciation: "sam-dee", English: "Saturday"},
    {Phrase: "dimanche", Pronunciation: "dee-mahnsh", English: "Sunday"}
];

french_dataSets.push({ name: 'Days of the Week', value: french_daysOfWeek });

const french_phrases = [
    {Phrase: "comment ça va?", Pronunciation: "koh-mahn sah vah", English: "how are you?"},
    {Phrase: "merci, ça va bien", Pronunciation: "mehr-see sah vah byan", English: "thank you, I'm good"},
    {Phrase: "désolé, je ne comprends pas", Pronunciation: "day-zoh-lay zhuh nuh kohm-prahn pah", English: "I'm sorry, I don't understand"},
    {Phrase: "combien ça coûte?", Pronunciation: "kohm-byen sah koot", English: "how much does it cost?"},
    {Phrase: "où sont les toilettes?", Pronunciation: "oo sohn lay twah-let", English: "where is the bathroom?"},
    {Phrase: "qu'est-ce que c'est?", Pronunciation: "kes kuh say", English: "what is this?"},
    {Phrase: "parlez-vous anglais?", Pronunciation: "par-lay voo ahn-glay", English: "do you speak English?"},
    {Phrase: "répétez, s'il vous plaît", Pronunciation: "ray-pay-tay seel voo pleh", English: "please repeat"},
    {Phrase: "comment vous appelez-vous?", Pronunciation: "koh-mahn voo zah-play voo", English: "what's your name?"},
    {Phrase: "enchanté", Pronunciation: "ahn-shan-tay", English: "nice to meet you"}
];

french_dataSets.push({ name: 'Phrases', value: french_phrases });

const french_adjectives = [
    {Phrase: "adjectif", Pronunciation: "ahd-zhek-teef", English: "adjective"},
    {Phrase: "grand", Pronunciation: "grahn", English: "big"},
    {Phrase: "petit", Pronunciation: "puh-tee", English: "small"},
    {Phrase: "rapide", Pronunciation: "rah-peed", English: "fast"},
    {Phrase: "lent", Pronunciation: "lahn", English: "slow"},
    {Phrase: "bon", Pronunciation: "bohn", English: "good"},
    {Phrase: "mauvais", Pronunciation: "moh-vay", English: "bad"},
    {Phrase: "beau", Pronunciation: "boh", English: "beautiful"},
    {Phrase: "laid", Pronunciation: "leh", English: "ugly"},
    {Phrase: "jeune", Pronunciation: "zhuhn", English: "young"},
    {Phrase: "vieux", Pronunciation: "vyuh", English: "old"}
];

french_dataSets.push({ name: 'Adjectives', value: french_adjectives });

const french_verbs = [
    {Phrase: "verbe", Pronunciation: "vehrb", English: "verb"},
    {Phrase: "manger", Pronunciation: "mahn-zhay", English: "to eat"},
    {Phrase: "boire", Pronunciation: "bwar", English: "to drink"},
    {Phrase: "dormir", Pronunciation: "dor-meer", English: "to sleep"},
    {Phrase: "courir", Pronunciation: "koo-reer", English: "to run"},
    {Phrase: "sauter", Pronunciation: "soh-tay", English: "to jump"},
    {Phrase: "écrire", Pronunciation: "ay-kreer", English: "to write"},
    {Phrase: "lire", Pronunciation: "leer", English: "to read"},
    {Phrase: "parler", Pronunciation: "par-lay", English: "to speak"},
    {Phrase: "écouter", Pronunciation: "ay-koo-tay", English: "to listen"},
    {Phrase: "regarder", Pronunciation: "ruh-gar-day", English: "to look"}
];

french_dataSets.push({ name: 'Verbs', value: french_verbs });

const french_prepositions = [
    {Phrase: "préposition", Pronunciation: "pray-poh-zee-syon", English: "preposition"},
    {Phrase: "dans", Pronunciation: "dahn", English: "in"},
    {Phrase: "sur", Pronunciation: "sur", English: "on"},
    {Phrase: "sous", Pronunciation: "soo", English: "under"},
    {Phrase: "au-dessus", Pronunciation: "oh-duh-syu", English: "above"},
    {Phrase: "avant", Pronunciation: "ah-vahn", English: "before"},
    {Phrase: "après", Pronunciation: "ah-pray", English: "after"},
    {Phrase: "à côté de", Pronunciation: "ah koh-tay duh", English: "next to"},
    {Phrase: "près de", Pronunciation: "preh duh", English: "by"},
    {Phrase: "entre", Pronunciation: "ahn-tr", English: "between"},
    {Phrase: "avec", Pronunciation: "ah-vek", English: "with"}
];

french_dataSets.push({ name: 'Prepositions', value: french_prepositions });

const french_conjunctions = [
    {Phrase: "conjonction", Pronunciation: "kohn-zhonk-syon", English: "conjunction"},
    {Phrase: "et", Pronunciation: "ay", English: "and"},
    {Phrase: "ou", Pronunciation: "oo", English: "or"},
    {Phrase: "mais", Pronunciation: "may", English: "but"},
    {Phrase: "quand", Pronunciation: "kahn", English: "when"},
    {Phrase: "si", Pronunciation: "see", English: "if"},
    {Phrase: "parce que", Pronunciation: "par-suh kuh", English: "because"},
    {Phrase: "afin de", Pronunciation: "ah-fan duh", English: "in order to"},
    {Phrase: "ou bien", Pronunciation: "oo byen", English: "or"},
    {Phrase: "donc", Pronunciation: "dohnk", English: "so"},
    {Phrase: "bien que", Pronunciation: "byen kuh", English: "although"}
];

french_dataSets.push({ name: 'Conjunctions', value: french_conjunctions });

const french_questionWords = [
    {Phrase: "mot interrogatif", Pronunciation: "moh an-teh-roh-gah-teef", English: "question word"},
    {Phrase: "quoi", Pronunciation: "kwah", English: "what"},
    {Phrase: "qui", Pronunciation: "kee", English: "who"},
    {Phrase: "où", Pronunciation: "oo", English: "where"},
    {Phrase: "quand", Pronunciation: "kahn", English: "when"},
    {Phrase: "pourquoi", Pronunciation: "poor-kwah", English: "why"},
    {Phrase: "combien", Pronunciation: "kohm-byen", English: "how much"},
    {Phrase: "comment", Pronunciation: "koh-mahn", English: "how"},
    {Phrase: "si", Pronunciation: "see", English: "whether"},
    {Phrase: "lequel", Pronunciation: "luh-kehl", English: "which"},
    {Phrase: "à qui", Pronunciation: "ah kee", English: "whose"}
];

french_dataSets.push({ name: 'Question Words', value: french_questionWords });

const french_time = [
    {Phrase: "temps", Pronunciation: "tahn", English: "time"},
    {Phrase: "heure", Pronunciation: "ur", English: "hour"},
    {Phrase: "minute", Pronunciation: "mee-nyoot", English: "minute"},
    {Phrase: "seconde", Pronunciation: "suh-gond", English: "second"},
    {Phrase: "jour", Pronunciation: "zhoor", English: "day"}
];

french_dataSets.push({ name: 'Time', value: french_time });
