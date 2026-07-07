const targetPassword = "Bez pracy nie ma kołaczy".toUpperCase();
const passwordContainer = document.querySelector('.password');


const passwordArray = Array.from(targetPassword);

let hiddenPassword = passwordArray
  .map(char => char === " " ? " " : "-")
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
    alphabetContainer.appendChild(button);
  })
}

createKeyboard();
displayPassword();