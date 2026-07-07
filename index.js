const targetPassword = "bez pracy nie ma kołaczy".toUpperCase();
const passwordContainer = document.querySelector('.password');
let failCount = 0;
const passwordArray = Array.from(targetPassword);
const yesSound = new Audio("yes.wav");
const noSound = new Audio("no.wav");

let imageContainer = document.querySelector('.hanging-tree');

let gameContainer = document.querySelector('.game-container');

let hiddenPassword = passwordArray.map(char => char === " " ? " " : "-")
  .join("");

function displayPassword(){
passwordContainer.textContent = hiddenPassword;
}

const alphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ";
const alphabetArray = Array.from(alphabet);

const alphabetContainer = document.querySelector('.alphabet');

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
    hiddenPassword = passwordArray.map((char, index) => char === letter ? char : hiddenPassword[index])
    .join("");
    button.style.backgroundColor = "#003300";
    button.style.borderColor = "#00C000";
    button.style.color = "#00C000";
    button.style.pointerEvents = "none";
    
    if (!hiddenPassword.includes("-")) { 
      endGame(true); 
    }
  }

  else {
    noSound.play();
    failCount++;
    imageContainer.src = `./img/s${failCount}.jpg`;
    button.style.backgroundColor = "#330000";
    button.style.borderColor = "#C00000";
    button.style.color = "#C00000";
    button.style.pointerEvents = "none";
   
    if (failCount>=9){
      endGame(false);
    }
  }
  displayPassword();
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
      hiddenPassword = passwordArray.map(char => char === " " ? " " : "-").join("");
      displayPassword();
      alphabetContainer.innerHTML = "";
      createKeyboard();
      });

}

createKeyboard();
displayPassword();