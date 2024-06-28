let wordToGuess;
let wordLength;
let dashWord = "";
const hiddenWordElement = document.getElementById("hiddenWord");
const buttons = document.querySelectorAll(".btnKeyboard");
const unusedButtons = document.querySelectorAll(".btnDeco");
let countElement = document.getElementById("count");
let count = parseInt(countElement.textContent);
let tableauScoreElement = document.getElementById("tableauScore");
let cartePenduElement = document.querySelector("#cartePendu img");
console.log(cartePenduElement);
let choosenLetter;


function chooseWord (array){
let randomIndex = Math.floor(Math.random() * array.length);
wordToGuess = (array[randomIndex]);
wordLength = wordToGuess.length;
dashWord = "_".repeat(wordLength);
}

function addAnimation(element, animationClass){
    element.classList.remove("animate__animated", animationClass);
    void element.offsetWidth;
    element.classList.add("animate__animated", animationClass);
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
            
            addAnimation(tableauScoreElement, "animate__bounceInRight");
            addAnimation(cartePenduElement, "animate__bounceInLeft");

            tableauScoreElement.classList.remove("decompte4", "decompte3", "decompte2", "decompte1", "gameOver", "defaultClass");

            switch(count){
                case 5:
                    cartePenduElement.src = "assets/pictures/carte_hangman_05.png";
                    cartePenduElement.classList.add("img5");
                    break;
                case 4:
                    cartePenduElement.src = "assets/pictures/carte_hangman_04.png";
                    cartePenduElement.classList.add("img4");
                    tableauScoreElement.classList.add("decompte4");
                    break;
                case 3:
                    cartePenduElement.src = "assets/pictures/carte_hangman_03.png";
                    cartePenduElement.classList.add("img3");
                    tableauScoreElement.classList.add("decompte3");
                    break;
                case 2:
                    cartePenduElement.src = "assets/pictures/carte_hangman_02.png";
                    cartePenduElement.classList.add("img2");
                    tableauScoreElement.classList.add("decompte2");
                    break;
                case 1:
                    cartePenduElement.src = "assets/pictures/carte_hangman_01.png";
                    cartePenduElement.classList.add("img1");
                    tableauScoreElement.classList.add("decompte1");
                    break;
                case 0:
                    cartePenduElement.src = "assets/pictures/carte_hangman_00.png";
                    cartePenduElement.classList.add("img0");
                    tableauScoreElement.classList.add("gameOver");
                    hiddenWordElement.innerHTML = "GAME OVER";
                    buttons.forEach(btn => btn.disabled = true);
                    return;
                default:
                    tableauScoreElement.classList.add("defaultClass");
            }
           
        }

        if (newDashWord === wordToGuess) {
            hiddenWordElement.innerHTML = "Bravo!";
            buttons.forEach(btn => btn.disabled = true);
            return; // Sortie de la fonction si le jeu est gagné
        }

        dashWord = newDashWord;
        hiddenWordElement.innerHTML = dashWord;

        
    })

})





