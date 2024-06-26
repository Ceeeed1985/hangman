/////////////////////////////////////////////////////////////
////////////////// MES FONTIONS /////////////////////////////
/////////////////////////////////////////////////////////////


// TROUVER UN MOT DANS UN TABLEAU

function trouverUnMot(array) {
    if (array.length === 0){
        return null;
    }
    const indexAleatoire = Math.floor(Math.random() * array.length);
    return array[indexAleatoire];
};

// DECOMPOSER UN MOT EN LETTRES
// function splitMot (mot) {
//     return mot.split('');
// };


/////////////////////////////////////////////////////////////
////////////////// MES VARIABLES/////////////////////////////
/////////////////////////////////////////////////////////////

const filmAleatoire = trouverUnMot(listeFilms);
const personnageAleatoire = trouverUnMot(listePersonnages);
const animalAleatoire = trouverUnMot(listeAnimaux);
const motAleatoire = trouverUnMot(listeMots);
const verbeAleatoire = trouverUnMot(listeVerbes);


let boutonFilms = "Liste de films";
let boutonPersonnages = "Liste de personnages";
let boutonMots = "Liste de mots";
let boutonVerbes = "Liste de verbes";
let boutonAnimaux = "Liste d'animaux";


// let filmEnLettres = splitFilm(filmAleatoire);
// let personnageEnLettres = splitMot(personnageAleatoire);
// let animalEnLettres = splitMot(animalAleatoire);
// let motEnLettres = splitMot(motAleatoire);
// let verbeEnLettres = splitMot(verbeAleatoire);





let boutonStart = document.getElementById("start");

boutonStart.addEventListener("click", () => {
    let choixJeu = document.getElementById("ecranDeJeu");
    choixJeu.innerHTML = `
    <h2>Faites votre choix</h2>
    <button id="btnListeFilms" class="btnListeFilms">${boutonFilms}</button>
    <button id="btnListePersonnages" class="btnListePersonnages">${boutonPersonnages}</button>
    <button id="btnListeAnimaux" class="btnListeAnimaux">${boutonAnimaux}</button>
    <button id="btnListeMots" class="btnListeMots">${boutonMots}</button>
    <button id="btnListeVerbes" class="btnListeVerbes">${boutonVerbes}</button>
    `

    document.getElementById("btnListeFilms").addEventListener("click", () => {
        let chargerListeFilms = document.getElementById("ecranDeJeu");
        chargerListeFilms.innerHTML = `
        <h3 class="motCache">${filmAleatoire}</h3>
        `
    })
    document.getElementById("btnListePersonnages").addEventListener("click", () => {
        let chargerListePersonnages = document.getElementById("ecranDeJeu");
        chargerListePersonnages.innerHTML = `
        <h3 class="motCache">${personnageAleatoire}</h3>
        `
    })
    document.getElementById("btnListeAnimaux").addEventListener("click", () => {
        let chargerListeAnimaux = document.getElementById("ecranDeJeu");
        chargerListeAnimaux.innerHTML = `
        <h3 class="motCache">${animalAleatoire}</h3>
        `
    })
    document.getElementById("btnListeMots").addEventListener("click", () => {
        let chargerListeMots = document.getElementById("ecranDeJeu");
        chargerListeMots.innerHTML = `
        <h3 class="motCache">${motAleatoire}</h3>
        `
    })
    document.getElementById("btnListeVerbes").addEventListener("click", () => {
        let chargerListeVerbes = document.getElementById("ecranDeJeu");
        chargerListeVerbes.innerHTML = `
        <h3 class="motCache">${verbeAleatoire}</h3>
        `
    })



    const lettres = document.querySelectorAll('.touchesClavier');
    let motAffiche = document.querySelector('motCache');
    console.log(motAffiche);


    lettres.forEach(lettre => {
        lettre.addEventListener('click', () => {
            const lettreActive = lettre.textContent;
            console.log(lettreActive)

            if(filmAleatoire.includes(lettreActive)) {
                lettre.classList.add('succes')
                lettre.setAttribute('disabled', 'true')
                
            } else {
                lettre.classList.add('missed')
                lettre.setAttribute('disabled', 'true')
            }

            
        })
    })

});

