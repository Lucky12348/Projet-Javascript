// 1 création des tableaux
let motsFrancais = new Array("huître","pomme de terre","pain","lapin","arbre");
let motsAnglais = new Array("osyster","potato","bread","rabbit","tree");
// 1 end

// 2  Ajout des getElement
let motAT = document.getElementById("motAT"); // Mot à traduire
let motT = document.getElementById("motT"); // Saisir la traduction
let btn1 = document.getElementById("btn1"); // Vérifier
let btn2 = document.getElementById("btn2"); // Anglais
let btn3 = document.getElementById("btn3"); // Francais
let btn4 = document.getElementById("btn4"); // Rejouer
let btn5 = document.getElementById("btn5"); // Quitter
let btn6 = document.getElementById("btn6"); // Quitter
let retry = document.getElementById("retry"); // Retry après lose
let win = document.getElementById("win"); // Message quand on win
let score = document.getElementById("score");
let exo1 = document.getElementById("exo1");
let selectL = document.getElementById("selectL");
let titreAN = document.getElementById("ghf");
let titreFR = document.getElementById("bonChan");
let div1 = document.getElementById("div1");
let deadline = document.getElementById("deadline");

  
//cacher les div
win.style.display = "none";
retry.style.display = "none";
deadline.style.display = "none";
titreFR.style.display = "none";
titreAN.style.display = "none";
selectL.style.display = "block";
exo1.style.display = "none";
// 2 end

// 3 Ajout des addEvent 
window.addEventListener("load",bonjour); //refresh + sup les éléments de la pages
btn2.addEventListener("click",exoAn); //exercice exemple en An
btn3.addEventListener("click",ecoFr); //exercice exemple en Fr
btn4.addEventListener("click",reload); //exercice exemple en Fr
btn5.addEventListener("click",retour);
btn6.addEventListener("click",reload);
// 3 end

// 4 Création des variables
let cle = 0 //correspond à la cle du tableau
let min=0; 
let max=motsFrancais.length;  
let random = Math.floor(Math.random() * (max - min)) + min; 
let timed;
// 4 end

// 5 les fonctions
function finCompteur() {    
    retry.style.display = "block";
    deadline.style.display = "none";
    titreFR.style.display = "none";
    titreAN.style.display = "none";
    div1.style.display = "none";
    exo1.style.display = "none";
} 
function exoAn() { //si on clique sur le btn AN
    if (confirm('Vous êtes prêt ? \n\nVous avez 50 secondes pour gagner !')) {
        timed = setTimeout(finCompteur, 50000);
        deadline.style.display = "block";
        titreAN.style.display = "block";
        selectL.style.display = "none";
        exo1.style.display = "block";
    }
    if (btn1.addEventListener) { // si une langue à été sélectionné 
        btn1.removeEventListener("click",verifFR); // alors on désélectionne la fonction associe
    }
    motAT.value = motsAnglais[random]; // introduit le mot à traduire en AN
    btn1.addEventListener("click",verifAN); // Verif avec la fonction verif si le mots en FR juste
    motT.value = null;
}
function ecoFr() {
    alert ("Vous êtes prêt ? \n\nVous avez 50 secondes pour gagner !");
    timed = setTimeout(finCompteur, 50000);
    deadline.style.display = "block";
    titreFR.style.display = "block";
    selectL.style.display = "none";
    exo1.style.display = "block";
    if (btn1.addEventListener) {// si une langue à été sélectionné 
        btn1.removeEventListener("click",verifAN);// alors on désélectionne la fonction associe
    }
    motAT.value = motsFrancais[random]; // introduit le mot à traduire en FR
    btn1.addEventListener("click",verifFR); //Verif avec la fonction verif  si le mots en AN juste
    motT.value = null;
}
function verifFR() { // on verif si la trad en AN est juste
        if (motT.value==motsAnglais[random])
            {
               let doublon = random;
               do {
                   random = Math.floor(Math.random() * (max - min)) + min;
               } while (doublon==random);
               motAT.value = motsFrancais[random];
               motT.value = null;
               cle++;
               score.value = cle + "/10";
               if (score.value == "10/10") {
                clearTimeout(timed);
                deadline.style.display = "none";
                titreFR.style.display = "none";
                titreAN.style.display = "none";
                div1.style.display = "none";
                exo1.style.display = "none";
                alert("Vous avez gagné !");
                win.style.display = "block";
                }
           }
}
function verifAN() { // on verif si la trad en FR est juste
        if (motT.value==motsFrancais[random]){
               let doublon = random;
               do {
                   random = Math.floor(Math.random() * (max - min)) + min;
               } while (doublon==random);
               motAT.value = motsAnglais[random];
               motT.value = null;
               cle++;
               score.value = cle + "/10";
               if (score.value == "10/10") {
                   clearTimeout(timed);
                    deadline.style.display = "none";
                    titreFR.style.display = "none";
                    titreAN.style.display = "none";
                    div1.style.display = "none";
                    exo1.style.display = "none";
                   alert("Vous avez gagné !");
                   win.style.display = "block"; 
               }
        }
}
function showDiv1() {
    div1.style.display = "none";
    contenuSite.style.display = "block";
  }
function retour() {
    if (confirm('Êtes vous de vouloir Quitter la session ?')) {
        location.reload();  
    }    
}
function bonjour() {
    let contenuSite = document.getElementById("contenuSite");
    contenuSite.style.display = "none";
    setTimeout(showDiv1, 1000);
    motAT.value = null; // supprimer la valeur dans Mot trad
    motT.value = null; // supprimer la valeur dans Saisir la trad
    score.value = "0/10";
}
function reload() {
    if (confirm('Êtes vous sûr de vouloir Rejouer ?')) {
        score.value = "0/10";
        timed = setTimeout(finCompteur, 50000);
        retry.style.display = "none";
        win.style.display = "none";
        deadline.style.display = "block";
        titreAN.style.display = "block";
        selectL.style.display = "none";
        exo1.style.display = "block";
        retry.style.display = "none";
    }    
    else {
        location.reload();  
    }  
}
// 5 end 