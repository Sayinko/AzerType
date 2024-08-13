/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

function choixJeu() {
  return new Promise((resolve) => {
    inputBtn.forEach(function (input) {
      input.addEventListener("click", (event) => {
        if (input.id === "mots") {
          resolve("mots");
        } else if (input.id === "phrases") {
          resolve("phrases");
        }
      });
    });
  });
}

function lancerBoucleJeu(listePropositions) {
  let score = 0;
  for (let i = 0; i < listePropositions.length; i++) {
    let motUtilisateur = `<div class="zoneProposition">${listePropositions[i]}</div>`;
    motPropose.innerHTML = motUtilisateur;

    if (motUtilisateur === listePropositions[i]) {
      score++;
    }
  }
  return score;
}

function afficherResultat(score, nbMotsProposes) {
  let messageScore = "Votre score : " + score + " / " + nbMotsProposes;
  let scoreHTML = `<div class="zoneScore">${messageScore}</div>`;
  zoneScore.innerHTML = scoreHTML;
}

async function lancerJeu() {
  let choix = await choixJeu();
  console.log(choix);
  let score = 0;
  let nbMotsProposes = 0;

  if (choix === "mots") {
    score = lancerBoucleJeu(listeMots);
    nbMotsProposes = listeMots.length;
  } else if (choix === "phrases") {
    score = lancerBoucleJeu(listePhrases);
    nbMotsProposes = listePhrases.length;
  }

  afficherResultat(score, nbMotsProposes);
}
