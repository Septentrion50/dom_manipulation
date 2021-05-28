// Question 1 - Combien de balises p ?
// ------------------------
console.log("Question 1 - Combien de balises p ?");
let pTagNum = document.getElementsByTagName("p");
console.log(pTagNum.length);

// Question 2 - Quel est le contenu de l'élément avec l'id "coucou" ?
// ------------------------
console.log("Question 2 - Quel est le contenu de l'élément avec l'id 'coucou' ?");
console.log(document.getElementById("coucou").textContent);

// Question 3 - Vers quel url pointe le troisième élément a de la page html ?
// ------------------------
console.log("Question 3 - Vers quel url pointe le troisième élément a de la page html ?");
let aTags = document.getElementsByTagName("a");
console.log(aTags[2].href);

// Question 4 - Combien d'éléments portent la classe "compte-moi" ?
// ------------------------
console.log("Question 4 - Combien d'éléments portent la classe 'compte-moi' ?");
let compteMoi = document.getElementsByClassName("compte-moi");
console.log(compteMoi.length);

// Question 5 - Combien d'éléments li portent la classe 'compte-moi' ?
// ------------------------
console.log("Question 5 - Combien d'éléments li portent la classe 'compte-moi' ?");
let liCompteMoi = document.querySelectorAll("li.compte-moi");
console.log(liCompteMoi.length);

// Question 6 - Combien d'éléments li se trouvant dans un ol portent la classe 'compte-moi' ? 
// ------------------------
console.log("Question 6 - Combien d'éléments li se trouvant dans un ol portent la classe 'compte-moi' ? ");
let olLiCompteMoi = document.querySelectorAll("ol > li.compte-moi");
console.log(olLiCompteMoi.length);

// Question 7 - Afficher le contenu du li caché du deuxième élément ul du seul div de la page
// ------------------------
console.log("Question 7 - Afficher le contenu du li caché du deuxième élément ul du seul div de la page");
let onlyDiv = document.querySelectorAll("div ul")[1];
console.log(onlyDiv.children[0].textContent);
