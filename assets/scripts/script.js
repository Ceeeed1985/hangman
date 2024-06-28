///////////////////////// MES VARIABLES /////////////////////////

let wordToGuess;
let wordLength;
let dashWord = "";
const hiddenWordElement = document.getElementById("hiddenWord");
const buttons = document.querySelectorAll(".btnKeyboard");
const unusedButtons = document.querySelectorAll(".btnDeco");
const vieElements = document.querySelectorAll(".vies");
const startButton = document.getElementById("start");
startButton.addEventListener("click", resetGame);
let countElement = document.getElementById("count");
let count = parseInt(countElement.textContent);
let tableauScoreElement = document.getElementById("tableauScore");
let cartePenduElement = document.querySelector("#cartePendu img");
let choosenLetter;


///////////////////////// MES FONCTIONS /////////////////////////

//Chercher un mot dans un tableau
function chooseWord (array){
    let randomIndex = Math.floor(Math.random() * array.length);
    wordToGuess = (array[randomIndex]);
    wordLength = wordToGuess.length;
    dashWord = "_".repeat(wordLength);
}


//Fonction pour ajouter une class à des éléments afin d'animer ces mêmes éléments
function addAnimation(element, animationClass){
    element.classList.remove("animate__animated", animationClass);
    void element.offsetWidth;
    element.classList.add("animate__animated", animationClass);
}

function resetGame(){
    count = 6;
    countElement.textContent = count;

    chooseWord(movieList);
    dashWord = "_".repeat(wordLength);
    hiddenWordElement.innerHTML = dashWord;

    cartePenduElement.src = "assets/pictures/carte_hangman_06.png";

    buttons.forEach(btn => {
        btn.classList.remove("success", "missed");
        btn.disabled = false;
    });

    vieElements.forEach(vie => vie.classList.remove("viesOranges"));

    tableauScoreElement.classList.remove("decompte4", "decompte3", "decompte2", "decompte1", "gameOver", "defaultClass");

    hiddenWordElement.innerHTML = dashWord;

    hiddenWordElement.classList.remove("bravo");
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
        choosenLetter = button.textContent.toLowerCase();
        let newDashWord = "";
        let foundLetter = false;

        for (let i = 0; i < wordToGuess.length; i++) {
            let targetLetter = wordToGuess[i].toLowerCase();
            if (targetLetter === choosenLetter) {
                newDashWord += wordToGuess[i];
                button.classList.add("success");
                foundLetter = true;
            } else {
                newDashWord += dashWord[i];
            }  
        }

        if(!foundLetter) {
            button.classList.add("missed");
            count-= 1;
            countElement.textContent = count;
            
            addAnimation(tableauScoreElement, "animate__bounceInRight");
            addAnimation(cartePenduElement, "animate__bounceInLeft");

            tableauScoreElement.classList.remove("decompte4", "decompte3", "decompte2", "decompte1", "gameOver", "defaultClass");

            switch(count){
                case 5:
                    cartePenduElement.src = "assets/pictures/carte_hangman_05.png";
                    document.getElementById("vie06").classList.add("viesOranges");
                    cartePenduElement.classList.add("img5");
                    break;
                case 4:
                    cartePenduElement.src = "assets/pictures/carte_hangman_04.png";
                    document.getElementById("vie05").classList.add("viesOranges");
                    cartePenduElement.classList.add("img4");
                    tableauScoreElement.classList.add("decompte4");
                    break;
                case 3:
                    cartePenduElement.src = "assets/pictures/carte_hangman_03.png";
                    document.getElementById("vie04").classList.add("viesOranges");
                    cartePenduElement.classList.add("img3");
                    tableauScoreElement.classList.add("decompte3");
                    break;
                case 2:
                    cartePenduElement.src = "assets/pictures/carte_hangman_02.png";
                    document.getElementById("vie03").classList.add("viesOranges");
                    cartePenduElement.classList.add("img2");
                    tableauScoreElement.classList.add("decompte2");
                    break;
                case 1:
                    cartePenduElement.src = "assets/pictures/carte_hangman_01.png";
                    document.getElementById("vie02").classList.add("viesOranges");
                    cartePenduElement.classList.add("img1");
                    tableauScoreElement.classList.add("decompte1");
                    break;
                case 0:
                    cartePenduElement.src = "assets/pictures/carte_hangman_00.png";
                    document.getElementById("vie01").classList.add("viesOranges");
                    cartePenduElement.classList.add("img0");
                    tableauScoreElement.classList.add("gameOver");
                    hiddenWordElement.innerHTML = `
                    <h2><strong>GAME OVER</strong></h2>
                    <h3>Le bon film :</h3>
                    <h4>${wordToGuess}</h4>
                    `
                    buttons.forEach(btn => btn.disabled = true);
                    return;
                default:
                    tableauScoreElement.classList.add("defaultClass");
            }
           
        }

        dashWord = newDashWord;
        hiddenWordElement.innerHTML = dashWord;


        if (dashWord === wordToGuess) {
            hiddenWordElement.classList.add("bravo");
            hiddenWordElement.innerHTML = "Bravo !";
            console.log(hiddenWordElement);
            buttons.forEach(btn => btn.disabled = true);
            return;
        }

 

        
    });

});





