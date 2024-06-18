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
    <button class="btnListeFilms">${boutonFilms}</button>
    <button class="btnListePersonnages">${boutonPersonnages}</button>
    <button class="btnListeAnimaux">${boutonAnimaux}</button>
    <button class="btnListeMots">${boutonMots}</button>
    <button class="btnListeVerbes">${boutonVerbes}</button>
    `
});

