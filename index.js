const GAME_DATA = {
  "Przysłowia": [
    "bez pracy nie ma kołaczy", "baba z wozu koniom lżej", "co dwie głowy to nie jedna",
    "darovanemu koniowi w zęby się nie zagląda", "dzieci i ryby głosu nie mają",
    "gdzie kucharek sześć tam nie ma co jeść", "grosz do grosza a będzie kokosza",
    "jabłko spada niedaleko od jabłoni", "jaki ojciec taki syn", "jak kuba bogu tak bóg kubie",
    "jak sobie pościelesz tak się wyśpisz", "kto rano wstaje temu pan bóg daje",
    "kto pod kim dołki kopie sam w nie wpada", "lepszy wróbel w garści niż gołąb na dachu",
    "mowa jest srebrem a milczenie złotem", "nie chwal dnia przed zachodem słońca",
    "nie wszystko złoto co się świeci", "nie bądź w gorącej wodzie kąpany",
    "oliwa sprawiedliwa zawsze na wierzch wypływa", "pieniądze szczęścia nie dają",
    "pokorne cielę dwie matki ssie", "śmiech to zdrowie", "szewc bez butów chodzi",
    "ten się śmieje kto się śmieje ostatni", "w marcu jak w garncu", "w zdrowym ciele zdrowy duch",
    "wszędzie dobrze ale w domu najlepiej", "wybierać się jak sójka za morze",
    "z dużej chmury mały deszcz", "złodziej krzyczy łap złodzieja",
    "ziarnko do ziarnka aż zbierze się miarka", "zły to ptak co własne gniazdo kala",
    "apetyt rośnie w miarę jedzenia", "biednemu zawsze wiatr w oczy", "co nagle to po diable",
    "czas to pieniądz", "człowiek strzela pan bóg kule nosi", "dla chcącego nic trudnego",
    "do wesela się zagoi", "gdy kota nie ma myszy harcują", "głupi ma zawsze szczęście",
    "gra nie warta świeczki", "idzie luty podkuj buty", "iskra rozpala wielki ogień",
    "jaka praca taka płaca", "jedna jaskółka wiosny nie czyni", "każdy jest kowalem własnego losu",
    "kłamstwo ma krótkie nogi", "koniec wieńczy dzieło", "krowa która dużo ryczy mało mleka daje",
    "kto pyta nie błądzi", "kto ma miękkie serce musi mieć twardą skórę", "kuj żelazo póki gorące",
    "łatwiej powiedzieć niż zrobić", "miłość jest ślepa", "miażdżąca praca wszystko zwycięża",
    "na bezrybiu i rak ryba", "na złodzieju czapka gore", "nadzieja umiera ostatnia",
    "nie ma dymu bez ognia", "nie mów hop póki nie przeskoczysz", "nie od razu kraków zbudowano",
    "nie taki diabeł straszny jak go malują", "początek jest połową całości",
    "podróż kształci wykształconych", "prawda w oczy kole", "prawdziwych przyjaciół poznaje się w biedzie",
    "przepisy są po to żeby je łamać", "raz na wozie raz pod wozem", "ręka rękę myje",
    "strach ma wielkie oczy", "szukajcie a znajdziecie", "w nocy wszystkie koty są czarne",
    "wiara góry przenosi", "wypadek to chodzenie po ludziach", "z deszczu pod rynnę",
    "zgoda buduje niezgoda rujnuje", "życie pisze własne scenariusze", "głupich nie sieją sami się rodzą",
    "kto sieje wiatr ten zbiera burzę", "nie wywołuj wilka z lasu", "co z oczu to z serca",
    "ciekawość to pierwszy stopień do piekła", "cel uświęca środki", "wilk syty i owca cała",
    "tonący brzytwy się chwyta", "co się odwlecze to nie uciecze", "cicha woda brzegi rwie",
    "bujać to my a nie nas", "gdzie drwa rąbią tam wióry lecą", "nie dziel skóry na niedźwiedziu",
    "każdy kij ma dwa końce", "głodem go nie weźmiesz", "co popadnie to uwiędnie",
    "szukać igły w stogu siana", "lepsza gorzka prawda niż słodkie kłamstwo", "stara miłość nie rdzewieje",
    "pieczone gołąbki nie lecą same do gąbki", "komu w drogę temu czas", "kto nie ryzykuje ten nie pije szampana"
  ],
  "Filmy i Seriale": [
    "władca pierścieni", "gwiezdne wojny", "skazani na shawshank", "zielona mila",
    "ojciec chrzestny", "stranger things", "gra o tron", "pulp fiction",
    "mroczny rycerz", "forrest gump", "matrix", "gladiator",
    "inzepcja", "król lew", "piraci z karaibów", "breaking bad",
    "chłopcy z ferajny", "siedem", "milczenie owiec", "interstellar",
    "pianista", "podziemny krąg", "czarnobyl", "peaky blinders",
    "wikingowie", "dom z papieru", "biuro", "wiedźmin",
    "gop pod ciemną gwiazdą", "szczęki", "obcy ósmy pasażer nostromo", "poszukiwacze zaginionej arki",
    "powrót do przyszłości", "gwiezdne wrota", "park jurajski", "gliniarz z beverly hills",
    "szklana pułapka", "zabójcza broń", "rambo", "terminator dwa",
    "milioner z ulicy", "bękarty wojny", "django", "wilk z wall street",
    "la la land", "avatar", "tytanik", "podróż za jeden uśmiech",
    "czterej pancerni i pies", "stawka większa niż życie", "alternatywy cztery", "janosik",
    "kariera nikodema dyzmy", "miś", "seksmisja", "chłopaki nie płaczą",
    "poranek kojota", "kiler", "dzień świra", "samotni w sieci",
    "bogowie", "zimna wojna", "boże ciało", "wesele",
    "kler", "listy do em", "symetria", "dług",
    "psy", "rejs", "znachor", "potop",
    "ogniem i mieczem", "pan tadeusz", "w pustyni i w puszczy", "krótki film o zabijaniu",
    "trzy kolory niebieski", "podwójne życie weroniki", "amator", "przypadek",
    "wielki szu", "sztos", "pieniądze to nie wszystko", " Vinci",
    "testosteron", "leisw", "wojna żeńsko męska", " job czyli ostatnia szara komórka",
    "kołysanka", "rewers", "sala samobójców", "róża",
    "idw", "wołyń", "najlepszy", "cicha noc",
    "boże ciało", "pętla", "gierek", "chłopi"
  ],
  "Geografia": [
    "morze bałtyckie", "stany zjednoczone", "pustynia sahara", "tatrzański park narodowy",
    "rzeka wisła", "morze śródziemne", "góry tatry", "półwysep helski",
    "ocean spokojny", "ocean atlantycki", "ocean indyjski", "morze czerwone",
    "morze czarne", "rzeka odra", "jezioro śniardwy", "jezioro mamry",
    "bieszczadzki park narodowy", "pieniny", "karkonosze", "góry świętokrzyskie",
    "wyżyna krakowsko częstochowska", "pustynia błędowska", "puszcza białowieska", "puszcza kampinoska",
    "przylądek rozewie", "zatoka gdańska", "zatoka pucka", "zalew szczeciński",
    "zalew wiślany", "wielka brytania", "ameryka południowa", "ameryka północna",
    "afryka równikowa", "azja mniejsza", "bliski wschód", "daleki wschód",
    "ameryka łacińska", "nowa zelandia", "arabia saudyjska", "republika południowej afryki",
    "wielka rafa koralowa", "góry himalaje", "góry andy", "góry alpy",
    "góry pireneje", "góry uralskie", "rzeka amazonka", "rzeka nil",
    "rzeka missisipi", "rzeka dunaj", "rzeka ren", "rzeka wołga",
    "jezioro bajkał", "jezioro wiktorii", "jezioro michigan", "morze kaspijskie",
    "wyspy kanaryjskie", "wyspy bachalors", "nowa gwinea", "wyspa madagaskar",
    "wyspa grenlandia", "wyspa islandia", "półwysep iberyjski", "półwysep apeniński",
    "półwysep bałkański", "półwysep skandynawski", "cieśnina gibraltarska", "kanał sueski",
    "kanał panamski", "wodospad niagara", "wodospad wiktoria", "zatoka meksykańska",
    "morze karaibskie", "zjednoczone emiraty arabskie", "ameryka środkowa", "europa wschodnia",
    "skandynawia", "kraje nadbałtyckie", "wyżyna tybetańska", "pustynia gobi",
    "pustynia kalahari", "góra kilimandżaro", "góra mount everest", "góra mont blanc",
    "góra rysy", "góra śnieżka", "wyżyna lubelska", "kotlina sandomierska",
    "nizina mazowiecka", "nizina wielkopolska", "pojezierze mazurskie", "pojezierze pomorskie",
    "brama morawska", "dolina prądnika", "mierzeja wiślana", "mierzeja helska"
  ],
  "Literatura i Książki": [
    "pan tadeusz", "ogniem i mieczem", "w pustyni i w puszczy", "quod vadis",
    "kamienie na szaniec", "wesele", "dziady", "lalka",
    "kordian", "nie boska komedia", "przedwiośnie", "granica",
    "ferdydurke", "sklepy cynamonowe", "mistrz i małgorzata", "zbrodnia i kara",
    "proces", "sto lat samotności", "mały książę", "stary człowiek i morze",
    "boska komedia", "faust", "cierpienia młodego wertera", "makbet",
    "hamlet", "romeo i julia", "król edyp", "antygona",
    "iliada", "odyseja", "boska komedia", "don kichote",
    "podróże guliwera", "robinson cruzoe", "wyspa skarbów", "hrabia monte christo",
    "trzej muszkieterowie", "nędznicy", "pani bovey", "zola",
    "portret doriana graya", "dracula", "frankenstein", "wehiwkuł czasu",
    "wojna światów", "wielki gatsby", "myszy i ludzie", "grona gniewu",
    "komu bije dzwon", "pożegnanie z bronią", "rok tysiąc dziewięćset osiemdziesiąt czwarty", "folwark zwierzęcy",
    "nowy wspaniały świat", "władca much", "lolita", "paragraf dwadzieścia dwa",
    "lot nad kukułczym gniazdem", "sto lat samotności", "gra szklanych paciorków", "wilk stepowy",
    "czarodziejska góra", "doktor faustus", "blaszany bębenek", "nieznośna lekkość bytu",
    "imię róży", "wahadło foucaulta", "cień wiatru", "gra o tron",
    "władca pierścieni", "hobbit czyli tam i z powrotem", "silmarillion", "kroniki narnii",
    "czarnoksiężnik z krainy oz", "alicja w krainie czarów", "piotruś pan", "kubuś puchatek",
    "drobne ustroje", "król Maciuś pierwszy", "akademia pana kleksa", "władca marginesu",
    "chłopi", "ziemia obiecana", "nad niemnem", "noce i dnie",
    "popioły", "syzyfowe prace", "wierna rzeka", "krzyżacy"
  ],
  "Historia i Postacie": [
    "mieszko pierwszy", "bolesław chrobry", "kazimierz wielki", "władysław jagiełło",
    "królowa jadwiga", "zygmunt stary", "stefan batory", "jan trzeci sobieski",
    "tadeusz kościuszko", "józef piłsudski", "mikołaj kopernik", "maria skłodowska curie",
    "fryderyk chopin", "adam mickiewicz", "juliusz słowacki", "henryk sienkiewicz",
    "władysław reymont", "czesław miłosz", "wisława szymborska", "olga tokarczuk",
    "lech wałęsa", "jan paweł drugi", "ignacy jan paderewski", "roman dmowski",
    "wincenty witos", "władysław sikorski", "stefan wyszyński", "jerzy popiełuszko",
    "albert einstein", "isaac newton", "galileusz", "karol darwin",
    "ludwik pasteur", "nikola tesla", "thomas edison", "leonardo da vinci",
    "michał anioł", "rembrandt", "vincent van gogh", "pablo picasso",
    "juliusz cezar", "aleksander wielki", "kleopatra", "oktawian august",
    "karol wielki", "rzeczpospolita obojga narodów", "bitwa pod grunwaldem", "bitwa pod wiedniem",
    "bitwa warszawska", "powstanie kościuszkowskie", "powstanie listopadowe", "powstanie styczniowe",
    "powstanie warszawskie", "wielka rewolucja francuska", "wojna secesyjna", "pierwsza wojna światowa",
    "druga wojna światowa", "starożytny egipt", "starożytna grecja", "imperium rzymskie",
    "cesarstwo bizantyjskie", "święte imperium rzymskie", "odkrycie ameryki", "chrzest polski",
    "konstytucja trzeciego maja", "unia lubelska", "unia krewska", "pokój w toruniu",
    "hołd pruski", "potop szwedzki", "konfederacja barska", "konfederacja targowicka",
    "królestwo polskie", "księstwo warszawskie", "wiosna ludów", "traktat wersalski",
    "wielki kryzys", "zimna wojna", "okrągły stół", "upadek muru berlińskiego",
    "reforma klistenesa", "wojny perskie", "wojna peloponeska", "wyprawa krymska",
    "wojny punickie", "powstanie spartakusa", "wędrówka ludów", "bitwa pod maratonem",
    "bitwa pod termopilami", "joanna d arc", "krzysztof kolumb", "vasco da gama",
    "ferdynand magellan", "marco polo", "winston churchill", "franklin delano roosevelt"
  ]
};

let targetPassword = "";
let passwordArray = [];
let hiddenPassword = "";
let failCount = 0;
let isGameOver = false;

const passwordContainer = document.querySelector('.password');
const alphabetContainer = document.querySelector('.alphabet');
const imageContainer = document.querySelector('.hanging-tree');
const gameContainer = document.querySelector('.game-container');
const categorySpan = document.querySelector('.category-display span');

const yesSound = new Audio("yes.wav");
const noSound = new Audio("no.wav");

const alphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ";
const alphabetArray = Array.from(alphabet);

const letterButtonsMap = {};

function playSound(audio) {
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function drawPassword(){
  const categories = Object.keys(GAME_DATA);
  const randomCategoryIndex = Math.floor(Math.random() * categories.length);
  const chosenCategory = categories[randomCategoryIndex];

  categorySpan.textContent = chosenCategory;

  const passwordsInCategory = GAME_DATA[chosenCategory];
  const randomPasswordIndex = Math.floor(Math.random() * passwordsInCategory.length);

  targetPassword = passwordsInCategory[randomPasswordIndex].toUpperCase();
  passwordArray = Array.from(targetPassword);
  hiddenPassword = passwordArray.map(char => char === " " ? " " : "-").join("");
}


function displayPassword(){
passwordContainer.textContent = hiddenPassword;
}


function createKeyboard(){
  alphabetContainer.innerHTML = "";
  for (let key in letterButtonsMap) delete letterButtonsMap[key];

  alphabetArray.forEach(letter => {
    const button = document.createElement('div');
    button.classList.add('letter');
    button.textContent = letter;
    
    button.addEventListener('click', () => {
      checkLetter(letter, button);
      });

    alphabetContainer.appendChild(button);
    letterButtonsMap[letter] = button;
  })
}

function checkLetter(letter, button){

  if (isGameOver || button.classList.contains('correct') || button.classList.contains('wrong')) return;

  if (targetPassword.includes(letter)) {
    playSound(yesSound);
    hiddenPassword = passwordArray.map((char, index) => char === letter ? char : hiddenPassword[index]).join("");
    button.classList.add('correct');
  }
  else {
     playSound(noSound);
    failCount++;
    imageContainer.src = `./img/s${failCount}.jpg`;
    button.classList.add('wrong');
  }
    displayPassword();
  
   if (!hiddenPassword.includes("-")) { 
      endGame(true); 
    } 
    else if (failCount>=9){
      endGame(false);
    }
  }


function endGame(isWin){

  isGameOver = true;
  alphabetContainer.style.pointerEvents = "none";
  
  if (isWin===true){
    passwordContainer.textContent = "GRATULACJE! WYGRAŁEŚ!";
  } 
  else {
    passwordContainer.textContent = "PRZEGRANA! PRAWIDŁOWE HASŁO TO: " + targetPassword;
  }
    
  const newGameButton = document.createElement('button');
  newGameButton.textContent = "ZAGRAJ PONOWNIE";
  newGameButton.classList.add('btn-reset');
  gameContainer.appendChild(newGameButton);

  newGameButton.addEventListener('click', () => {
      gameContainer.removeChild(newGameButton);
      failCount = 0;
      isGameOver = false;
      imageContainer.src = `./img/s${failCount}.jpg`;
      alphabetContainer.style.pointerEvents = "auto";
      
      drawPassword();
      displayPassword();
      createKeyboard();
  });

}

window.addEventListener('keydown', (event) => {
  const pressedKey = event.key.toUpperCase();
  
  if (letterButtonsMap[pressedKey]) {
    checkLetter(pressedKey, letterButtonsMap[pressedKey]);
  }
});

drawPassword();
createKeyboard();
displayPassword();