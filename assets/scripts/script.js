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
    <button id="btrListeFilms" class="btnListeFilms">${boutonFilms}</button>
    <button id="btnListePersonnages" class="btnListePersonnages">${boutonPersonnages}</button>
    <button id="btnListeAnimaux" class="btnListeAnimaux">${boutonAnimaux}</button>
    <button id="btnListeMots" class="btnListeMots">${boutonMots}</button>
    <button id="btnListeMots" class="btnListeVerbes">${boutonVerbes}</button>
    `
});

