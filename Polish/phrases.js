const polish_dataSets = [];

languageList.push({ 
    name: 'Polish', 
    dataSet: polish_dataSets, 
    colours: { primary: 'white', secondary: 'red', tertiary: 'lightGray' } 
});

const polish_greetings = [
    {Phrase: "Cześć", Pronunciation: "che-shch", English: "Hello"},
    {Phrase: "Dzień dobry", Pronunciation: "jyen doh-bri", English: "Good morning"},
    {Phrase: "Dobry wieczór", Pronunciation: "doh-bri vyeh-choor", English: "Good evening"},
    {Phrase: "Dobranoc", Pronunciation: "doh-bra-nots",  English: "Good night"},
    {Phrase: "Do widzenia", Pronunciation: "doh veed-zen-ya",  English: "Goodbye"},
    {Phrase: "Dziękuję", Pronunciation: "jen-koo-yeh", English: "Thank you"},
    {Phrase: "Proszę", Pronunciation: "proh-sheh",  English: "Please"},
    {Phrase: "Przepraszam", Pronunciation: "psheh-pra-sham",  English: "Sorry"},
    {Phrase: "Tak", Pronunciation: "tahk",  English: "Yes"},
    {Phrase: "Nie", Pronunciation: "nyeh",  English: "No"}
];

polish_dataSets.push({ 
    name: 'Greetings', 
    value: polish_greetings, 
    Mnemonic: `During a thrilling chess (che-shch) match, Jen's so breezy (jyen doh-bri) exclaimed, "Don't be a creature (doh-bri vyeh-choor), tie those doughnut knots (doh-bra-nots) tight!" As we parted, she said, "Go meet Xenia (doh veed-zen-ya)," and the genie cooed, "Yeah!" (jen-koo-yeh). A pro chef (proh-sheh) offered fresh passion jam (psheh-pra-sham). "Talk (tahk) to me," he invited. "Nah (nyeh)," I replied with a grin.`
});

const polish_cardinalNumbers = [
    {Phrase: "jeden", Pronunciation: "yeh-den", Mnemonic: "yeah, then", English: "one"},
    {Phrase: "dwa", Pronunciation: "dvah", Mnemonic: "diva", English: "two"},
    {Phrase: "trzy", Pronunciation: "tshih", Mnemonic: "shee", English: "three"},
    {Phrase: "cztery", Pronunciation: "chteh-rih", Mnemonic: "cheddar-y", English: "four"},
    {Phrase: "pięć", Pronunciation: "pyench", Mnemonic: "pinch", English: "five"},
    {Phrase: "sześć", Pronunciation: "sheshch", Mnemonic: "shush", English: "six"},
    {Phrase: "siedem", Pronunciation: "shyeh-dem", Mnemonic: "shed 'em", English: "seven"},
    {Phrase: "osiem", Pronunciation: "oh-shem", Mnemonic: "ocean", English: "eight"},
    {Phrase: "dziewięć", Pronunciation: "dzeh-vyench", Mnemonic: "ze French", English: "nine"},
    {Phrase: "dziesięć", Pronunciation: "dyeh-shench", Mnemonic: "dish inch", English: "ten"}
];

polish_dataSets.push({ 
    name: 'Cardinal Numbers', 
    value: polish_cardinalNumbers, 
    Mnemonic: `Yeah, then (yeh-den) a daring diva (dvah) met a shy tree (tshih). She climbed its cheddar-y (chteh-rih) branches to grab a pinch (pyench) of cheese. "Shush" (sheshch), she whispered, "Let's shed 'em (shyeh-dem) into the ocean (oh-shem) before ze French (dzeh-vyench) dish inch (dyeh-shench) their way into our picnic!"`
});

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

polish_dataSets.push({ 
    name: 'Ordinal Numbers', 
    value: polish_ordinalNumbers,
    Mnemonic: `Pierre's fish (pyehr-vshih, first) swam with a true gig (droo-gih, second) friend named Chetsy (tshyeh-tsee, third). They found a crafty (chvah-tee, fourth) treasure and felt plenty (pyon-tee, fifth) rich. A shoeless tea (shoost-tee, sixth) party made them shudder, "Me!" (shyood-mee, seventh) they cried. Oozing glee (oos-mee, eighth), they ventured to Devon Tea (dzeh-vyon-tee, ninth) and finished at Dish on Tea (dyeh-shon-tee, tenth) cafe.`
});

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

polish_dataSets.push({ 
    name: 'Colors', 
    value: polish_colors,
    Mnemonic: `The <b>charming</b> (char-nih) black cat with <b>by-all-means</b> (byah-wih) white whiskers chased a red <b>cheery pony</b> (chehr-voh-nih). A green <b>jelly pony</b> (zhyeh-loh-nih) joined the chase under blue <b>newbie ski</b> (nyeh-byeh-skee). The yellow <b>jewel tea</b> (zhool-tih) sun over orange <b>pomegranate showy</b> (poh-mah-rahn-choh-vih) clouds turned purple <b>violin toffee</b> (fyoh-leh-toh-vih) and <b>rouge over</b> (roo-zhoh-vih) pink hues as a <b>brown so big</b> (brow-zoh-vih)dove soared the sky.`
});

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

polish_dataSets.push({ 
    name: 'Family', 
    value: polish_family,
    Mnemonic: `In our rowed zebra (roh-dzee-nah), which represents our family, Ma took a (maht-kah) selfie—that’s mother capturing the moment. Oi! Jets! (oy-tsyets) fly overhead, reminding us of father waving from the sky. “Show a star (syoh-strah),” says my sister pointing upwards. My brat (braht), meaning brother, laughs beside me. The choir car (choor-kah) sings beautifully—that’s our daughter performing. The sin (sin), representing our son, grins widely. Bob’s cheer (bahb-chyah) comes from grandmother clapping enthusiastically, while jazzy deck (dzyah-dek) is grandfather dancing along.`
});

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

polish_dataSets.push({ 
    name: 'Body Parts', 
    value: polish_bodyParts,
    Mnemonic: `My body (chah-woh) feels like chaos after a long day. My aching head (gwuh-vah) feels like wearing a tight glove—ah! My messy hair (vwuh-sih) resembles a tangled voicemail. I see with my eyes (oh-chih), sounding like oh, cheese! I smell with my nose (nohs), which sounds just like nose. I eat with my mouth (oos-tah), as if saying ooh, star. I chew with my teeth (zheh-bih), imagining a zebra bee. I hear with my ears (oosh-ih), thinking of the ocean. I lift with my arm (rah-myeh), like saying raw me, yeah. I hold things with my hand (rehn-kah), picturing a rain car.`
});

const polish_animals = [
    {Phrase: "zwierzę", Pronunciation: "zvyeh-zheh", English: "animal"},
    {Phrase: "pies", Pronunciation: "pyes", English: "dog"},
    {Phrase: "kot", Pronunciation: "koht", English: "cat"},
    {Phrase: "ptak", Pronunciation: "ptahk", English: "bird"},
    {Phrase: "ryba", Pronunciation: "rih-bah", English: "fish"},
    {Phrase: "koń", Pronunciation: "kohn", English: "horse"},
    {Phrase: "krowa", Pronunciation: "kroh-vah", English: "cow"},
    {Phrase: "świnia", Pronunciation: "shvee-nyah", English: "pig"},
    {Phrase: "owca", Pronunciation: "ohv-tsah", English: "sheep"},
    {Phrase: "kura", Pronunciation: "koo-rah", English: "chicken"}
];

polish_dataSets.push({ 
    name: 'Animals', 
    value: polish_animals,
    Mnemonic: `At the zoo, a **savage zebra** (*zvyeh-zheh*, animal) appears.<br/> A **pies** (*pyes*, dog) eats pies, a **coat** (*koht*, cat) sheds tears.<br/> A **pet tack** (*ptahk*, bird) flies by, and a **ribber** (*rih-bah*, fish) swims nigh. <br/>A **cone** (*kohn*, horse) rolls past, a **crow va** (*kroh-vah*, cow) moos last.<br/> A **swingin' ya** (*shvee-nyah*, pig) and **officer** (*ohv-tsah*, sheep) sing hoorah! <br/>The **cool rah** (*koo-rah*, chicken) leads the cha-cha-cha.`
});

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

polish_dataSets.push({ 
    name: 'Food', 
    value: polish_food,
    Mnemonic: `When thinking about food (yeh-dzeh-nyeh), imagine saying “Yet zen, yeah!” excitedly at a meal. I grabbed a slice of bread (hlehp), like calling out “Help!” when reaching for it. I enjoyed an apple (yah-boo-koh)—think “Yeah, book oh!” as you take a bite. I washed it down with milk (mleh-koh), sounding like “Milk, oh!”, and some water (voh-dah), which reminds you of “Vodka” but it’s just water with ice. Choosing between tea (hehr-bah-tah) and coffee (kah-vah), think “Her bat, ah!” and “Car, va!” respectively. I had an egg (yai-koh) omelette—imagine saying “Yikes, oh!” when cracking the egg. The meat (myen-soh) stew was hearty, like “Men, so” hungry. I finished the meal with rice (rihsh), which sounds like “Rich”, completing my feast.`
});

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

polish_dataSets.push({ 
    name: 'Drinks', 
    value: polish_drinks,
    Mnemonic: `Thirsty? Have a **nap, boy** (*nah-poy*, drink). Sip some **vino** (*vee-noh*, wine) or **pee-voh** (*pee-voh*, beer), think! Enjoy a **soak** (*sohk*, juice), **herb batter** (*hehr-bah-tah*, tea), or **car va** (*kah-vah*, coffee) to brink. **Vodka** (*voh-dah*, water) is clear, **milk oh** (*mleh-koh*, milk) is dear. Crack open a **cola** (*koh-lah*) or savor **whiskey** (*vees-kee*) with cheer!`
});

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

polish_dataSets.push({ 
    name: 'Fruits', 
    value: polish_fruits,
    Mnemonic: `In an **oval sea** (*oh-voh-tseh*, fruit), a **yacht blew coal** (*yah-boo-koh*, apple) next to a **banana** (*bah-nahn*) boat. A **puma rancher** (*poh-mah-rahn-chah*, orange) drove a **groovy car** (*groosh-kah*, pear). A **sleeve car** (*shleev-kah*, plum) raced a **true scarf car** (*troo-skahf-kah*, strawberry). "**We know, grow no** (*vee-noh-groh-noh*, grape)?**" asked the **harbor's** (*ahr-booz*, watermelon) captain, spotting an **ananas** (*ah-nah-nahs*, pineapple) island ahead.`
});

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

polish_dataSets.push({ 
    name: 'Vegetables', 
    value: polish_vegetables,
    Mnemonic: `At the **va-zee-va** (*vah-zih-vah*, vegetable) fair, **Mark have** (*mahr-hev*, carrot) a contest with **Jim's yak** (*zyem-nyahk*, potato). **Tommy door** (*poh-mee-dohr*, tomato) opens to **Oh, guru rec** (*oh-goo-rek*, cucumber) lessons. **Say, boo! La!** (*tseh-boo-lah*, onion) sings **Cap who's ta** (*kah-poos-tah*, cabbage) with **Pop reek a** (*pah-prih-kah*, pepper) dance. **Bro, cool!** (*broh-koo-w*, broccoli) says **seller** (*seh-lehr*, celery) Pete with a glance.`
});

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

polish_dataSets.push({ 
    name: 'Countries', 
    value: polish_countries,
    Mnemonic: `In the **cry** (*krah-y*, country) of **Pole's car** (*pohl-skah*, Poland), **Nimsy** (*nyem-tsih*, Germany) met **France, yeah** (*frahnts-yah*, France). "**Whoa, hee!**" (*vwuh-hih*, Italy) laughed **He's pining ya** (*heesh-pah-nyah*, Spain). "**Row a shah** (*roh-shah*, Russia) boat to **Starry zen notions** (*stah-nih zyehd-noh-tsoh-neh*, United States)," said **He, knee** (*khee-nih*, China) to **Yeah, pony, ah** (*yah-poh-nyah*, Japan).`
});

const polish_cities = [
    {Phrase: "miasto", Pronunciation: "myah-stoh", English: "city"},
    {Phrase: "Warszawa", Pronunciation: "var-shah-vah", English: "Warsaw"},
    {Phrase: "Kraków", Pronunciation: "krah-koof", English: "Krakow"},
    {Phrase: "Gdańsk", Pronunciation: "gdahnsk", English: "Gdansk"},
    {Phrase: "Poznań", Pronunciation: "pohz-nahn", English: "Poznan"},
    {Phrase: "Wrocław", Pronunciation: "vrots-wahf", English: "Wroclaw"},
    {Phrase: "Łódź", Pronunciation: "wooj", English: "Lodz"},
    {Phrase: "Szczecin", Pronunciation: "shcheh-cheen", English: "Szczecin"},
    {Phrase: "Lublin", Pronunciation: "loob-leen", English: "Lublin"},
    {Phrase: "Katowice", Pronunciation: "kah-toh-vee-tseh", English: "Katowice"}
];

polish_dataSets.push({ 
    name: 'Cities', 
    value: polish_cities,
    Mnemonic: `In my **my-astro** (*myah-stoh*, city), **Varsity lava** (*var-shah-vah*, Warsaw) flows. **Crack hoof** (*krah-koof*, Krakow) sounds echo in **Good dance** (*gdahnsk*, Gdansk) shows. "**Pause none** (*pohz-nahn*, Poznan)," says the guide, **Frost waft** (*vrots-wahf*, Wroclaw) chills the tide. **Woo!** (*wooj*, Lodz) we cheer, **Shh, check-in** (*shcheh-cheen*, Szczecin) is near. **Loop lean** (*loob-leen*, Lublin) streets we roam, **Cat toe pizza** (*kah-toh-vee-tseh*, Katowice) ends our poem.`
});


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

polish_dataSets.push({ 
    name: 'Transport', 
    value: polish_transport,
    Mnemonic: `To **transfer port** (*trahns-pohrt*), I took a **some old hood** (*sah-moh-hoot*, car) ride. On a **row there** (*roh-veh-r*, bicycle), I saw the countryside. An **out-of-bus** (*ow-toh-boos*, bus) driver waved "Hi!", while a **tram via** (*trahm-vai*, tram) tracks passed by. The **poaching** (*poh-chong*, train) of time on **metro** (*meh-troh*, subway) lines, caught a **tax suit car** (*tahk-soov-kah*, taxi) just in time. Flew a **some allot** (*sah-moh-lot*, airplane) to catch a **static** (*stah-tek*, ship) sublime.`
});

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

polish_dataSets.push({ 
    name: 'Professions', 
    value: polish_professions,
    Mnemonic: `In the **zoo foot** (*zah-voont*, profession) parade, **Now, cheese shell** (*now-chee-chehl*, teacher) played. **Lake ash** (*leh-kahsh*, doctor) healed with aid, while **engine near** (*een-zhih-nyehr*, engineer) plans were laid. A **brave nick** (*prahv-neek*, lawyer) stood and said, "**Cook hash** (*koo-hahsh*, chef) dishes spread!" **Calendar** (*kehl-neh*, waiter) notes were read. An **actor** (*ahk-tohr*) and **piano cash** (*pyoh-sehn-kahsh*, singer) met, **Sport of vets** (*spohrt-oh-vyets*, athlete) their goals beget.`
});

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

polish_dataSets.push({ 
    name: 'Weather', 
    value: polish_weather,
    Mnemonic: `The **pogo dance** (*poh-goh-dah*, weather) starts under **swan say** (*swuhn-tseh*, sun) bright. Then **dash** (*dehshch*, rain) through puddles, what a sight! **Shiny egg** (*shnyeg*, snow) falls tonight. The **violin tour** (*vyah-tr*, wind) plays with might. **Come, hurrah!** (*khmoo-rah*, cloud) the kids delight. In a **brew, zah!** (*boor-zah*, storm) they take flight. Spot a **tennis star** (*tench-zah*, rainbow) in the sky, while **magician's wah** (*mgwah*, fog) passes by. **Great** (*graht*, hail) balls drop from high.`
});

const polish_seasons = [
    {Phrase: "pora roku", Pronunciation: "poh-rah roh-koo", English: "season"},
    {Phrase: "wiosna", Pronunciation: "vyohs-nah", English: "spring"},
    {Phrase: "lato", Pronunciation: "lah-toh", English: "summer"},
    {Phrase: "jesień", Pronunciation: "yeh-shen", English: "autumn"},
    {Phrase: "zima", Pronunciation: "zhee-mah", English: "winter"}
];

polish_dataSets.push({ 
    name: 'Seasons', 
    value: polish_seasons,
    Mnemonic: `In the **polar roku** (*poh-rah roh-koo*, season), **We owe snow** (*vyohs-nah*, spring) blooms anew. **La toe** (*lah-toh*, summer) taps dance through. **Yes, hen** (*yeh-shen*, autumn) leaves bid adieu. **Gym ah** (*zhee-mah*, winter) chills ensue.`
});

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

polish_dataSets.push({ 
    name: 'Months', 
    value: polish_months,
    Mnemonic: `In **myth shone** (*myeh-shonch*, month) tales we begin, with **stitch in** (*stih-chen*, January) time, cold wears thin. **Looty** (*loo-tih*, February) pirates grin. **Mars sets** (*mah-zets*, March) sail again. **Quiet chain** (*kvyeh-chen*, April) brings the rain. **My** (*mahy*, May) flowers bloom in lane. **Chair vets** (*chehr-vyets*, June) comfort gain. **Leap yet?** (*lee-pyets*, July) We entertain. **Share pen** (*shyehr-pyeng*, August) stories wane. **Vision** (*vzheh-shen*, September) clears the pane. **Page your nick** (*pah-dzyeh-rnik*, October) spooky strain. **List a pad** (*lees-toh-paht*, November) to explain. **Grew gin** (*grood-zhyen*, December) ends the chain.`
});

const polish_daysOfWeek = [
    {Phrase: "poniedziałek", Pronunciation: "poh-nyeh-dyah-wek", English: "Monday"},
    {Phrase: "wtorek", Pronunciation: "vtoh-rek", English: "Tuesday"},
    {Phrase: "środa", Pronunciation: "shroh-dah", English: "Wednesday"},
    {Phrase: "czwartek", Pronunciation: "chvahr-tek", English: "Thursday"},
    {Phrase: "piątek", Pronunciation: "pyon-tek", English: "Friday"},
    {Phrase: "sobota", Pronunciation: "soh-boh-tah", English: "Saturday"},
    {Phrase: "niedziela", Pronunciation: "nyeh-dzyeh-lah", English: "Sunday"}
];

polish_dataSets.push({ 
    name: 'Days of the Week', 
    value: polish_daysOfWeek,
    Mnemonic: `On **pony jaw lick** (*poh-nyeh-dyah-wek*, Monday), the week begins anew.

**Foe tore wreck** (*vtoh-rek*, Tuesday) your worries through.

**Show da** (*shroh-dah*, Wednesday) world what you can do.

**Chalk art tech** (*chvahr-tek*, Thursday) colors the view.

**Piano tech** (*pyon-tek*, Friday) tunes up for you.

**So boat ah!** (*soh-boh-tah*, Saturday) fun to pursue.

**Knee edge yell ah** (*nyeh-dzyeh-lah*, Sunday) rest is due.`
});

const polish_phrases = [
    {Phrase: "jak się masz?", Pronunciation: "yahk shyeh mahsh", English: "How are you?"},
    {Phrase: "dziękuję dobrze", Pronunciation: "jen-koo-yeh doh-bzheh", English: "Thank you, I'm good"},
    {Phrase: "przepraszam, nie rozumiem", Pronunciation: "psheh-pra-sham nyeh roh-zoo-myem", English: "I'm sorry, I don't understand"},
    {Phrase: "ile to kosztuje?", Pronunciation: "ee-leh toh kohs-too-yeh", English: "How much does it cost?"},
    {Phrase: "gdzie jest toaleta?", Pronunciation: "gdyeh yest toh-ah-leh-tah", English: "Where is the bathroom?"},
    {Phrase: "co to jest?", Pronunciation: "tso toh yest", English: "What is this?"},
    {Phrase: "czy mówisz po angielsku?", Pronunciation: "chi moo-vish poh ahn-gyehl-skoo", English: "Do you speak English?"},
    {Phrase: "proszę powtórzyć", Pronunciation: "proh-sheh pov-too-rzhih", English: "Please repeat"},
    {Phrase: "jak się nazywasz?", Pronunciation: "yahk shyeh nah-zih-vahsh", English: "What's your name?"},
    {Phrase: "miło mi cię poznać", Pronunciation: "mee-woh mee chyeh poznahch", English: "Nice to meet you"}
];

polish_dataSets.push({ 
    name: 'Phrases', 
    value: polish_phrases,
    Mnemonic: `**Yak shave mash** (*yahk shyeh mahsh*)—"How are you?" you say.

"**Genie, cool yeah! Dough breath** (*jen-koo-yeh doh-bzheh*), I'm okay!"

"**Fresh passion, nyeh, rose zoom yam** (*psheh-pra-sham nyeh roh-zoo-myem*)," I plead.

"**Eagle toe cost too, yeah?** (*ee-leh toh kohs-too-yeh*) What's the fee?"

"**Good, yeah? Yes, toe a letter** (*gdyeh yest toh-ah-leh-tah*) nearby?"

"**So toe jest** (*tso toh yest*) this thing I spy."

"**Chi movies, po, angel school?** (*chi moo-vish poh ahn-gyehl-skoo*) Do you know?"

"**Pro chef of tourist** (*proh-sheh pov-too-rzhih*), please repeat slow."

"**Yak shave NASA wash** (*yahk shyeh nah-zih-vahsh*) your name, friend?"

"**Me, oh me! Che pose notch** (*mee-woh mee chyeh poznahch*), nice to meet you in the end!"`
});

const polish_adjectives = [
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

polish_dataSets.push({ 
    name: 'Adjectives', 
    value: polish_adjectives,
    Mnemonic: `A **doozy** (*doo-zhih*, big) joke makes me laugh tall.

A **maui** (*mah-wih*, small) breeze feels small.

**Ship key** (*shihb-kih*, fast) boats sail quick.

**Volcano** (*vohl-nih*, slow) lava moves thick.

A **dough brie** (*doh-brih*, good) cheese tastes fine.

**Zwei** (*zwih*, bad) means two in a line.

A **pink knee** (*pyehk-nih*, beautiful) rose in sight.

A **bridges key** (*bzhid-kih*, ugly) locked up tight.

A **muddy** (*mwuh-dih*, young) puddle to behold.

A **starry** (*stah-rih*, old) night stories told.`
});

const polish_verbs = [
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

polish_dataSets.push({ 
    name: 'Verbs', 
    value: polish_verbs,
    Mnemonic: `I **yes, catch** (*yehstch*, to eat) the feast I seek.

I **peach** (*peech*, to drink) the juice so sweet.

Time to **spa at** (*spahtch*, to sleep) the cozy retreat.

Watch me **be a gosh** (*byeh-gach*, to run) athlete.

I **ska catch** (*skah-kach*, to jump) the highest peak.

With **peace hatch** (*peesach*, to write), stories leak.

I **cheetah** (*chitach*, to read) books each week.

I **move each** (*moov-eech*, to speak) word I tweak.

I **swoop hatch** (*swoo-hahch*, to listen) to birds in the creek.

I **pat check** (*paht-zhech*, to look) and take a peek.`
});
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

polish_dataSets.push({
    name: 'Prepositions',
    value: polish_prepositions,
    Mnemonic: `In a **pushy mech** (*pshih-yee-mek*, preposition) game we begin,

Playing **video** (*v*, in) games with a grin.

**Nah** (*nah*, on) the table, snacks we render,

Hiding **pods** (*pohd*, under) the sofa in splendor.

**Not** (*naht*, above) the lamp, the cat does sit,

We **pushed** (*pshehd*, before) him down a bit.

**Post** (*poh*, after) the party, we clean in shock,

Find **old books** (*oh-bohk*, next to) the clock.

Stand **pushing** (*pshih*, by) the door, keen,

Our thoughts **mingle** (*myend-zih*, between) the seen.

Sing **zee** (*z*, with) zeal, our song's ignition,

That's how we master preposition!`
});

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

polish_dataSets.push({
    name: 'Conjunctions',
    value: polish_conjunctions,
    Mnemonic: `The **spy nick** (*spoy-neek*, conjunction) said with glee,

It's **easy** (*ee*, and) as one, two, three.

Choose **all bow** (*ahl-boh*, or) or arrow straight,

**Ah, lay** (*ah-leh*, but) down your cards and wait.

**Good day** (*gdih*, when) we meet again,

**Yes, we** (*yeh-swee*, if) can dance in the rain.

**Pony of ash** (*poh-nyeh-vahzh*, because) the fire is near,

**Ah, bee** (*ah-bih*, in order to) make things clear.

Join the **loop** (*loob*, or) to the end,

**Vince** (*vyents*, so) the message we send.

**Me mojo** (*mee-moh zheh*, although) may be low,

But with conjunctions, our words will flow!`
});

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

polish_dataSets.push({
    name: 'Question Words',
    value: polish_questionWords,
    Mnemonic: `In **zany mech, pita young sea** (*zah-ee-mek pitah-yon-tsih*, question word) we find,

**So** (*tso*, what) is the answer? Nevermind.

**Kato** (*ktoh*, who) is the masked man there?

**Good, yeah?** (*gdyeh*, where) does he disappear?

**Candy** (*kyeh-dih*, when) will the show begin?

**Drums echo** (*dlah-cheh-goh*, why) make such a din?

**Healer** (*ee-leh*, how much) will you charge me now?

**Yak** (*yahk*, how) did you learn to plow?

**Chee** (*chi*, whether) or not, we shall see,

**Caterer** (*ktoh-rih*, which) dish will it be?

**Chee** (*chiy*, whose) hat is that on the tree?`
});

const polish_time = [
    {Phrase: "czas", Pronunciation: "chahs", English: "time"},
    {Phrase: "godzina", Pronunciation: "goh-dzee-nah", English: "hour"},
    {Phrase: "minuta", Pronunciation: "mee-noo-tah", English: "minute"},
    {Phrase: "sekunda", Pronunciation: "seh-koon-dah", English: "second"},
    {Phrase: "dzień", Pronunciation: "dzyen", English: "day"}
];

polish_dataSets.push({
    name: 'Time',
    value: polish_time,
    Mnemonic: `**Chas** (*chahs*, time) runs fast when having fun,

**Go, Gina** (*goh-dzee-nah*, hour), the race has begun.

Just a **minute** (*mee-noo-tah*, minute), wait for me,

Count each **second** (*seh-koon-dah*), one, two, three.

In the **zen** (*dzyen*, day) garden, we relax and sway,

That's how we measure the **time** today.`
});

const polish_phrase_Chcialbym = [
    {Phrase: "Chciałbym zamówić jedzenie", Pronunciation: "h-chyah-wim (I would like) zah-moo-veech (to order) yeh-dzen-yeh (food)", English: "I would like to order food"},
    {Phrase: "Chciałbym wypożyczyć film", Pronunciation: "h-chyah-wim (I would like) vih-poh-zhi-chyhts (to rent) film (a movie)", English: "I would like to rent a movie"},
    {Phrase: "Chciałbym kupić bilet", Pronunciation: "h-chyah-wim (I would like) koo-peech (to buy) bee-let (a ticket)", English: "I would like to buy a ticket"},
    {Phrase: "Chciałbym odwiedzić Polskę", Pronunciation: "h-chyah-wim (I would like) ohd-vyeh-dzich (to visit) Pol-skeh (Poland)", English: "I would like to visit Poland"},
    {Phrase: "Chciałbym nauczyć się polskiego", Pronunciation: "h-chyah-wim (I would like) nah-oo-chih-ts (to learn) shyeh (to) pol-skeh-go (Polish)", English: "I would like to learn Polish"},
    {Phrase: "Chciałbym pojechać na wakacje", Pronunciation: "h-chyah-wim (I would like) poh-yeh-hach (to go) nah (on) vah-kah-tsyeh (vacation)", English: "I would like to go on vacation"},
    {Phrase: "Chciałbym spotkać się z przyjaciółmi", Pronunciation: "h-chyah-wim (I would like) spot-kach (to meet) shyeh (with) z (with) pzhih-yah-choo-mee (friends)", English: "I would like to meet with friends"},
    {Phrase: "Chciałbym przeczytać tę książkę", Pronunciation: "h-chyah-wim (I would like) psheh-chy-tach (to read) ten (this) kshyawn-skeh (book)", English: "I would like to read this book"},
    {Phrase: "Chciałbym zjeść coś pysznego", Pronunciation: "h-chyah-wim (I would like) zhyest (to eat) chosh (something) pihsh-neh-go (delicious)", English: "I would like to eat something delicious"},
    {Phrase: "Chciałbym kupić nowy telefon", Pronunciation: "h-chyah-wim (I would like) koo-peech (to buy) noh-vih (new) teh-leh-fon (phone)", English: "I would like to buy a new phone"},
    {Phrase: "Chciałbym zobaczyć ten film", Pronunciation: "h-chyah-wim (I would like) zo-bah-chyhts (to see) ten (this) film (movie)", English: "I would like to see this movie"},
    {Phrase: "Chciałbym usłyszeć tę piosenkę", Pronunciation: "h-chyah-wim (I would like) oo-swi-shehch (to hear) ten (this) pyo-sen-keh (song)", English: "I would like to hear this song"},
    {Phrase: "Chciałbym mieć więcej czasu", Pronunciation: "h-chyah-wim (I would like) myetch (to have) vyen-tseh-choo (more) czas-u (time)", English: "I would like to have more time"},
    {Phrase: "Chciałbym dowiedzieć się więcej", Pronunciation: "h-chyah-wim (I would like) doh-vyeh-dzyeh (to learn) shyeh (to) vyen-tseh (more)", English: "I would like to learn more"},
    {Phrase: "Chciałbym wybrać się na spacer", Pronunciation: "h-chyah-wim (I would like) vih-brahts (to go) shyeh (for) nah (a) spah-tser (walk)", English: "I would like to go for a walk"},
    {Phrase: "Chciałbym dostać prezent", Pronunciation: "h-chyah-wim (I would like) doh-stahch (to receive) preh-zent (a gift)", English: "I would like to receive a gift"},
    {Phrase: "Chciałbym napić się kawy", Pronunciation: "h-chyah-wim (I would like) nah-peech (to have) shyeh (a) kah-vih (coffee)", English: "I would like to have a coffee"},
    {Phrase: "Chciałbym zagrać w grę", Pronunciation: "h-chyah-wim (I would like) zah-grahts (to play) v (a) greh (game)", English: "I would like to play a game"},
    {Phrase: "Chciałbym odwiedzić muzeum", Pronunciation: "h-chyah-wim (I would like) ohd-vyeh-dzich (to visit) moo-zeh-oom (a museum)", English: "I would like to visit a museum"},
    {Phrase: "Chciałbym kupić kwiaty", Pronunciation: "h-chyah-wim (I would like) koo-peech (to buy) kvya-ty (flowers)", English: "I would like to buy flowers"}
];

polish_dataSets.push({ 
    name: 'Chcialbym', 
    value: polish_phrase_Chcialbym, 
    Mnemonic: `At a restaurant, I (h-chyah-wim) would like to order food (zah-moo-veech yeh-dzen-yeh) while watching a movie (vih-poh-zhi-chyhts film) and buying a ticket (koo-peech bee-let). I dream of visiting Poland (ohd-vyeh-dzich Pol-skeh) and learning Polish (nah-oo-chih-ts shyeh pol-skeh-go) for my vacation (poh-yeh-hach nah vah-kah-tsyeh). On a walk (vih-brahts shyeh nah spah-tser) with friends (shyeh z pzhih-yah-choo-mee), I want to read a book (psheh-chy-tach ten kshyawn-skeh) and enjoy something delicious (zhyest chosh pihsh-neh-go). Let's grab a coffee (nah-peech shyeh kah-vih) and play a game (zah-grahts v greh) before visiting a museum (ohd-vyeh-dzich moo-zeh-oom).`
});

