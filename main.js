// Tableau d'interprétation IMC (objets)
let imcDetails = [
  {
    category: "Dénutrition sévère",
    interpretation: "Risque élevé pour la santé. Requiert un suivi médical.",
    explanation:
      "Votre IMC est inférieur à 16.5, ce qui indique une grave dénutrition. Cela représente un danger immédiat pour votre santé et nécessite un suivi médical urgent.",
  },
  {
    category: "Dénutrition modérée",
    interpretation: "Risque pour la santé, un suivi est conseillé.",
    explanation:
      "Votre IMC est entre 16.5 et 16.9, ce qui montre une maigreur importante. Vous devez consulter un professionnel de la santé pour évaluer votre état nutritionnel.",
  },
  {
    category: "Maigreur",
    interpretation: "Vous êtes sous poids. Risque modéré pour la santé.",
    explanation:
      "Votre IMC est entre 17 et 18.4. Bien que vous soyez en sous-poids, le risque pour votre santé reste modéré. Il est conseillé de consulter un spécialiste pour des conseils nutritionnels.",
  },
  {
    category: "Poids normal",
    interpretation: "Plage de poids idéale pour la santé. Risque faible.",
    explanation:
      "Votre IMC est entre 18.5 et 24.9, ce qui indique que vous êtes dans la plage de poids idéale. Cela est généralement associé à un bon état de santé.",
  },
  {
    category: "Surpoids",
    interpretation: "Risque modéré pour la santé, à surveiller.",
    explanation:
      "Votre IMC est entre 25 et 29.9, ce qui signifie que vous avez un excès de poids. Bien que le risque pour votre santé soit modéré, il est important de surveiller votre poids et de maintenir une activité physique régulière.",
  },
  {
    category: "Obésité modérée",
    interpretation:
      "Risque élevé pour la santé. Un suivi médical est recommandé.",
    explanation:
      "Votre IMC est entre 30 et 34.9, ce qui indique un excès de poids important. Cela augmente votre risque de maladies comme le diabète ou l'hypertension. Un suivi médical est recommandé.",
  },
  {
    category: "Obésité sévère",
    interpretation:
      "Risque très élevé pour la santé. Nécessite un suivi médical immédiat.",
    explanation:
      "Votre IMC est entre 35 et 39.9, ce qui signifie que vous êtes en obésité sévère. Vous êtes à un risque très élevé de problèmes de santé graves et il est urgent de consulter un médecin.",
  },
  {
    category: "Obésité morbide",
    interpretation:
      "Risque extrêmement élevé pour la santé. Requiert une prise en charge urgente.",
    explanation:
      "Votre IMC est supérieur ou égal à 40, ce qui signifie que vous souffrez d'obésité morbide. Cela présente un risque de complications graves et nécessite une prise en charge urgente.",
  },
];

// D'abord je créé ma fonction calcul (+ affichage)

function calculateIMC() {
  // 1 : récupérer les valeurs des champs pour les stocker dans une variable
  var poids = parseFloat(document.getElementById("poids").value);
  var taille = parseFloat(document.getElementById("taille").value);

  // 2 : vérifier la validité des valeurs
  if (isNaN(poids) || isNaN(taille) || poids <= 0 || taille <= 0) {
    alert("Veuillez entrer des valeurs valides pour le poids et la taille.");
    return;
    // Le return est utilisé ici pour arrêter la fonction immédiatement si les données saisies par l'utilisateur sont incorrectes, évitant ainsi toute tentative de calcul ou d'action supplémentaire qui serait basée sur ces données invalides.
  }

  // 3 : calcul
  var imc = poids / (taille * taille);

  // 4 : affichage
  let index;

  if (imc < 16.5) index = 0;
  else if (imc >= 16.5 && imc <= 16.9) index = 1;
  else if (imc >= 17 && imc <= 18.4) index = 2;
  else if (imc >= 18.5 && imc <= 24.9) index = 3;
  else if (imc >= 25 && imc <= 29.9) index = 4;
  else if (imc >= 30 && imc <= 34.9) index = 5;
  else if (imc >= 35 && imc <= 39.9) index = 6;
  else if (imc >= 40) index = 7;

  document.getElementById(
    "imcResult"
  ).textContent = `Votre IMC est de ${imc.toFixed(2)}`;

  // Màj des balises avec le contenu correspondant du tableau
  document.getElementById("imcCategory").textContent =
    imcDetails[index].category;
  document.getElementById("imcInterpretation").textContent =
    imcDetails[index].interpretation;
  document.getElementById("imcExplanation").textContent =
    imcDetails[index].explanation;

  // Changement de la couleur du H3 #imcCategory en fonction de l'index
  let imcCategoryElement = document.getElementById("imcCategory");

  if (index === 0 || index === 1 || index === 5 || index === 6 || index === 7) {
    imcCategoryElement.style.color = "red";
  } else if (index === 2 || index === 4) {
    imcCategoryElement.style.color = "orange";
  } else if (index === 3) {
    imcCategoryElement.style.color = "green";
  }

  //   // Rendre les éléments visibles car hidden au départ dans le CSS
  //   document.getElementById("imcResult").style.visibility = "visible";
  //   document.getElementById("imcCategory").style.visibility = "visible";
  //   document.getElementById("imcInterpretation").style.visibility = "visible";
  //   document.getElementById("imcExplanation").style.visibility = "visible";

  // Appliquer les effets de transition
  document.getElementById("imcResult").classList.add("visible");
  document.getElementById("imcCategory").classList.add("visible");
  document.getElementById("imcInterpretation").classList.add("visible");
  document.getElementById("imcExplanation").classList.add("visible");
}

// Puis je créé mon évènement de déclenchement de la fonction sur le bouton de mon form

// Je créé ma const pour pouvoir appliquer mon addEventListener
const btnCalc = document.getElementById("btnCalc");

// J'ajoute un addEventListener à ma const au click
btnCalc.addEventListener("click", () => {
  calculateIMC();
});
