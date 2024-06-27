let wordToGuess;
let wordLength;
let dashWord = "";
const hiddenWordElement = document.getElementById("hiddenWord");
const buttons = document.querySelectorAll(".btnKeyboard");
const unusedButtons = document.querySelectorAll(".btnDeco")
let choosenLetter;


function chooseWord (array){
let randomIndex = Math.floor(Math.random() * array.length);
wordToGuess = (array[randomIndex]);
wordLength = wordToGuess.length;
dashWord = "_".repeat(wordLength);
    // for (i = 0; i < wordLength; i++){
    //     dashWord += "_";
    // }
// console.log(wordToGuess);
// console.log(wordLength);
}

chooseWord(movieList);
hiddenWordElement.innerHTML = dashWord;
hiddenWordElement.classList.add("hiddenWord");



unusedButtons.forEach(unusedButton => {
    unusedButton.addEventListener("click", () => {
        alert("\nCe bouton ne sert absolument à rien !\nIl faut cliquer sur les lettres uniquement !");
    });
});

buttons.forEach(button =>{
    button.addEventListener("click", () => {
        choosenLetter = button.textContent;
        let newDashWord = "";
        for (let i = 0; i < wordToGuess.length; i++){
            if (wordToGuess[i].toLowerCase() === choosenLetter.toLowerCase()){
                newDashWord += choosenLetter;
                button.classList.add("success");
            } else {
                newDashWord += dashWord[i];
                button.classList.add("missed");
            }
        }
        dashWord = newDashWord;
        hiddenWordElement.innerHTML = dashWord;
    })
})





