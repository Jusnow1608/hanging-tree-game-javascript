
const PASSWORDS = [
  "bez pracy nie ma kołaczy",
  "baba z wozu koniom lżej",
  "co dwie głowy to nie jedna",
  "darovanemu koniowi w zęby się nie zagląda",
  "dzieci i ryby głosu nie mają",
  "gdzie kucharek sześć tam nie ma co jeść",
  "grosz do grosza a będzie kokosza",
  "jabłko spada niedaleko od jabłoni",
  "jaki ojciec taki syn",
  "jak kuba bogu tak bóg kubie",
  "jak sobie pościelesz tak się wyśpisz",
  "kto rano wstaje temu pan bóg daje",
  "kto pod kim dołki kopie sam w nie wpada",
  "lepszy wróbel w garści niż gołąb na dachu",
  "mowa jest srebrem a milczenie złotem",
  "nie chwal dnia przed zachodem słońca",
  "nie wszystko złoto co się świeci",
  "nie bądź w gorącej wodzie kąpany",
  "oliwa sprawiedliwa zawsze na wierzch wypływa",
  "pieniądze szczęścia nie dają",
  "pokorne cielę dwie matki ssie",
  "śmiech to zdrowie",
  "szewc bez butów chodzi",
  "ten się śmieje kto się śmieje ostatni",
  "w marcu jak w garncu",
  "w zdrowym ciele zdrowy duch",
  "wszędzie dobrze ale w domu najlepiej",
  "wybierać się jak sójka za morze",
  "z dużej chmury mały deszcz",
  "złodziej krzyczy łap złodzieja",
  "ziarnko do ziarnka aż zbierze się miarka",
  "zły to ptak co własne gniazdo kala",
  "apetyt rośnie w miarę jedzenia",
  "biednemu zawsze wiatr w oczy",
  "co nagle to po diable",
  "czas to pieniądz",
  "człowiek strzela pan bóg kule nosi",
  "dla chcącego nic trudnego",
  "do wesela się zagoi",
  "gdy kota nie ma myszy harcują",
  "głupi ma zawsze szczęście",
  "gra nie warta świeczki",
  "idzie luty podkuj buty",
  "iskra rozpala wielki ogień",
  "jaka praca taka płaca",
  "jedna jaskółka wiosny nie czyni",
  "każdy jest kowalem własnego losu",
  "kłamstwo ma krótkie nogi",
  "koniec wieńczy dzieło",
  "krowa która dużo ryczy mało mleka daje",
  "kto pyta nie błądzi",
  "kto ma miękkie serce musi mieć twardą skórę",
  "kuj żelazo póki gorące",
  "łatwiej powiedzieć niż zrobić",
  "miłość jest ślepa",
  "miażdżąca praca wszystko zwycięża",
  "na bezrybiu i rak ryba",
  "na złodzieju czapka gore",
  "nadzieja umiera ostatnia",
  "nie ma dymu bez ognia",
  "nie mów hop póki nie przeskoczysz",
  "nie od razu kraków zbudowano",
  "nie taki diabeł straszny jak go malują",
  "początek jest połową całości",
  "podróż kształci wykształconych",
  "prawda w oczy kole",
  "prawdziwych przyjaciół poznaje się w biedzie",
  "przepisy są po to żeby je łamać",
  "raz na wozie raz pod wozem",
  "ręka rękę myje",
  "strach ma wielkie oczy",
  "szukajcie a znajdziecie",
  "w nocy wszystkie koty są czarne",
  "wiara góry przenosi",
  "wypadek to chodzenie po ludziach",
  "z deszczu pod rynnę",
  "zgoda buduje niezgoda rujnuje",
  "życie pisze własne scenariusze",
  "głupich nie sieją sami się rodzą",
  "kto sieje wiatr ten zbiera burzę",
  "nie wywołuj wilka z lasu",
  "co z oczu to z serca",
  "ciekawość to pierwszy stopień do piekła",
  "cel uświęca środki",
  "wilk syty i owca cała",
  "tonący brzytwy się chwyta",
  "co się odwlecze to nie uciecze",
  "cicha woda brzegi rwie",
  "bujać to my a nie nas",
  "gdzie drwa rąbią tam wióry lecą",
  "nie dziel skóry na niedźwiedziu",
  "każdy kij ma dwa końce",
  "głodem go nie weźmiesz",
  "co popadnie to uwiędnie",
  "szukać igły w stogu siana",
  "lepsza gorzka prawda niż słodkie kłamstwo",
  "stara miłość nie rdzewieje",
  "pieczone gołąbki nie lecą same do gąbki",
  "komu w drogę temu czas",
  "kto nie ryzykuje ten nie pije szampana"
];

let targetPassword = "";
let passwordArray = [];
let hiddenPassword = "";
let failCount = 0;

const passwordContainer = document.querySelector('.password');
const alphabetContainer = document.querySelector('.alphabet');
const imageContainer = document.querySelector('.hanging-tree');
const gameContainer = document.querySelector('.game-container');

const yesSound = new Audio("yes.wav");
const noSound = new Audio("no.wav");

const alphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ";
const alphabetArray = Array.from(alphabet);

function drawPassword(){
  const passwordIndex = Math.floor(Math.random() * PASSWORDS.length);
  targetPassword = PASSWORDS[passwordIndex].toUpperCase();
  passwordArray = Array.from(targetPassword);
  hiddenPassword = passwordArray.map(char => char === " " ? " " : "-").join("");
}


function displayPassword(){
passwordContainer.textContent = hiddenPassword;
}


function createKeyboard(){
  alphabetArray.forEach(letter => {
    const button = document.createElement('div');
    button.classList.add('letter');
    button.textContent = letter;
    
    button.addEventListener('click', () => {
      checkLetter(letter, button);
      });

    alphabetContainer.appendChild(button);
  })
}

function checkLetter(letter, button){
  
  if (targetPassword.includes(letter)) {
    yesSound.play();
    hiddenPassword = passwordArray.map((char, index) => char === letter ? char : hiddenPassword[index]).join("");
    button.classList.add('correct');
  }
  else {
    noSound.play();
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
      imageContainer.src = `./img/s${failCount}.jpg`;
      alphabetContainer.style.pointerEvents = "auto";
      drawPassword();
      displayPassword();
      alphabetContainer.innerHTML = "";
      createKeyboard();
  });

}

drawPassword();
createKeyboard();
displayPassword();