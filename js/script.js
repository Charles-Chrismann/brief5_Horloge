// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
let date = new Date();

//Stocker l'heure , minute , seconde  dans des varaiables
let secondes = date.getSeconds();
let minutes = date.getMinutes();
let heures = date.getHours();
if (heures >= 12 ){ // format 12h
    heures -= 12;
}


// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
const degSecondes = 360/60 * 1;
const degMinutes = 360/60 * 1/60;
const degHeures = 360/12 * 1/3600;

// Calcul des valeurs initailes pour le premier affichage de l'horloge
secondesInitiales = 6 * (secondes + 1);// +1 pour que la seconde soit bonne à la fin de la transition
minutesInitiales = 6 * minutes + 6 * (secondes/60);
heuresInitiales = 30 * heures + 30 * (minutes/60) + 30 * (secondes/3600);

// Affichage initiale
AIGUILLESEC.style.transform = "rotate(" + secondesInitiales + "deg)";
AIGUILLEMIN.style.transform = "rotate(" + minutesInitiales + "deg)";
AIGUILLEHR.style.transform = "rotate(" + heuresInitiales + "deg)";

// Ajout du delai d'actualisation
setInterval(demarrerLaMontre, 1000);

// Déplacer les aiguilles 
function demarrerLaMontre() {
    // Extraction de la nouvelle date et mise à jour des variables
    date = new Date();
    secondes = date.getSeconds();
    minutes = date.getMinutes();
    heures = date.getHours();
    if (heures >= 12 ){
        heures -= 12;
    }
    
    // Calcul des nouvelles valeurs pour l'affichage de l'horloge
    angleSecondes = 6 * (secondes + 1);// +1 pour que la seconde soit bonne à la fin de la transition
    angleMinutes = 6 * minutes + 6 * (secondes/60);
    angleHeures = 30 * heures + 30 * (minutes/60) + 30 * (secondes/3600);

    // Mise en place de la transition
    AIGUILLESEC.style.transition = "transform .5s ease-in-out";
    AIGUILLEMIN.style.transition = "transform .5s ease-in-out";
    AIGUILLEHR.style.transition = "transform .5s ease-in-out";
    

    //Modification de l'orientation des aiguilles

    //Modification de l'orientation des secondes
    if (angleSecondes == 360) {// Pour gerer la transition de 60 à 0 secondes
        AIGUILLESEC.style.transform = "rotate(" + angleSecondes + "deg)";
        setTimeout(function(){
            AIGUILLESEC.style.transition = "none";
            AIGUILLESEC.style.transform = "rotate(0deg)";}, 500);    
    } else {
        AIGUILLESEC.style.transform = "rotate(" + angleSecondes + "deg)";
    }

    //Modification de l'orientation des minutes
    if (angleMinutes == 0) {// Pour gerer la transition de 60 à 0 minutes
        setTimeout(function(){
            AIGUILLEMIN.style.transition = "none";
            AIGUILLEMIN.style.transform = "rotate(0deg)";}, 500);
    } else {
        AIGUILLEMIN.style.transform = "rotate(" + angleMinutes + "deg)";
    }

    //Modification de l'orientation des heures
    if (angleHeures == 0) {// Pour gerer la transition de 12 à 0 heures
        setTimeout(function(){
            AIGUILLEHR.style.transition = "none";
            AIGUILLEHR.style.transform = "rotate(0deg)";}, 500);
            console.log("ttttttttttttttttttttttttt")
    } else {
        AIGUILLEHR.style.transform = "rotate(" + angleHeures + "deg)";
    }
}