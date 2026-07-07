const targetPassword = "bez pracy nie ma kołaczy".toUpperCase();
const passwordContainer = document.querySelector('.password');

const passwordArray = Array.from(targetPassword);

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
  hiddenPassword = passwordArray.map((char, index) => char === letter ? char : hiddenPassword[index])
  .join("");
  button.style.backgroundColor = "#003300";
  button.style.borderColor = "#00C000";
  button.style.color = "#00C000";
  button.style.pointerEvents = "none";
}

else {
  // Skucha!
}

displayPassword();
}

createKeyboard();
displayPassword();