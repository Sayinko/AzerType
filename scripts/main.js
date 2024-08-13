/*********************************************************************************
 *
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu.
 *
 *********************************************************************************/

// JAI ENLEVE LES VARIABLES EN DESSOUS POUR LES METTRES DANS CONFIG POUR QUELLE PUISSE ETRE UTILISE DANS SCRIPT

let zoneTexte = document.getElementById("inputEcriture");
let btnValiderMot = document.getElementById("btnValiderMot");
let btnEnvoyerMail = document.getElementById("btnEnvoyerMail");

let motPropose = document.querySelector(".zoneProposition");
let zoneScore = document.querySelector(".zoneScore");
let formulaireMail = document.querySelector(".popup form");

let inputBtn = document.querySelectorAll(".optionSource input");

lancerJeu();
