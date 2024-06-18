function trouverUnMot(array) {
    if (array.length === 0){
        return null;
    }
    const indexAleatoire = Math.floor(Math.random() * array.length);
    return array[indexAleatoire];
}


const filmAleatoire = trouverUnMot(listeFilms);
const personnageAleatoire = trouverUnMot(listePersonnages);
const animalAleatoire = trouverUnMot(listeAnimaux);
const motAleatoire = trouverUnMot(listeMots);
const verbeAleatoire = trouverUnMot(listeVerbes);

console.log(filmAleatoire);
console.log(personnageAleatoire);
console.log(animalAleatoire);
console.log(motAleatoire);
console.log(verbeAleatoire);




let boutonFilms = "Liste de films";
let boutonPersonnages = "Liste de personnages";
let boutonMots = "Liste de mots";
let boutonVerbes = "Liste de verbes";
let boutonAnimaux = "Liste d'animaux";


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
        <h3>${filmAleatoire}</h3>
        `
    })
    document.getElementById("btnListePersonnages").addEventListener("click", () => {
        let chargerListePersonnages = document.getElementById("ecranDeJeu");
        chargerListePersonnages.innerHTML = `
        <h3>${personnageAleatoire}</h3>
        `
    })
    document.getElementById("btnListeAnimaux").addEventListener("click", () => {
        let chargerListeAnimaux = document.getElementById("ecranDeJeu");
        chargerListeAnimaux.innerHTML = `
        <h3>${animalAleatoire}</h3>
        `
    })
    document.getElementById("btnListeMots").addEventListener("click", () => {
        let chargerListeMots = document.getElementById("ecranDeJeu");
        chargerListeMots.innerHTML = `
        <h3>${motAleatoire}</h3>
        `
    })
    document.getElementById("btnListeVerbes").addEventListener("click", () => {
        let chargerListeVerbes = document.getElementById("ecranDeJeu");
        chargerListeVerbes.innerHTML = `
        <h3>${verbeAleatoire}</h3>
        `
    })
});

