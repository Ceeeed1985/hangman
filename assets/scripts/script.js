let wordToGuess;
let wordLength;
let dashWord = "";
const hiddenWordElement = document.getElementById("hiddenWord");
const buttons = document.querySelectorAll(".btnKeyboard");
const unusedButtons = document.querySelectorAll(".btnDeco");
//JE DOIS ECRIRE CES DEUX LIGNES CONVENABLEMENT - A VERIFIER !!!!!!
let countElement = document.getElementById("count");
let count = parseInt(countElement.textContent);
let tableauScoreElement = document.getElementById("tableauScore");
console.log(count);
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
        let foundLetter = false;
        for (let i = 0; i < wordToGuess.length; i++){
            if (wordToGuess[i].toLowerCase() === choosenLetter.toLowerCase()){
                newDashWord += choosenLetter;
                button.classList.add("success");
                foundLetter = true;
            } else {
                newDashWord += dashWord[i];
            }
            
        }
        if(!foundLetter){
            button.classList.add("missed");
            count-= 1;
            countElement.textContent = count;
            
            tableauScoreElement.classList.remove("animate__animated", "animate__bounceInRight");
            void tableauScoreElement.offsetWidth;
            tableauScoreElement.classList.add("animate__animated", "animate__bounceInRight");


            tableauScoreElement.classList.remove("decompte4", "decompte3", "decompte2", "decompte1", "gameOver", "defaultClass");

            switch(count){
                case 4:
                case 3:
                    tableauScoreElement.classList.add("decompte4");
                    break;
                case 2:
                    tableauScoreElement.classList.add("decompte2");
                    break;
                case 1:
                    tableauScoreElement.classList.add("decompte1");
                    break;
                case 0:
                    tableauScoreElement.classList.add("gameOver");
                    hiddenWordElement.innerHTML = "GAME OVER";
                    buttons.forEach(btn => btn.disabled = true);
                    return;
                default:
                    tableauScoreElement.classList.add("defaultClass");
            }
        }

        
        // if (count == 0){
        //     hiddenWordElement.innerHTML = "GAME OVER";
        //     buttons.forEach(btn => btn.disabled = true);
        //     return;
        // }



        dashWord = newDashWord;
        hiddenWordElement.innerHTML = dashWord;
    })

})





