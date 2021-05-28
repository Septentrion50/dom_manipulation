function changeTitles(newTitle, newSubTitle) {
    let title = document.getElementsByTagName("h1")[0];
    title.textContent = `${newTitle}`;
    let subTitle = title.nextElementSibling;
    subTitle.textContent = newSubTitle;
};

function changeCallToActions() {
    let jumboElemts = document.getElementsByClassName("jumbotron text-center")[0].children[0];
    let calls = jumboElemts.children[2];
    let call1 = calls.children[0];
    let call2 = calls.children[1];
    call1.textContent = "OK je veux tester !"
    call1.href = "http://www.thehackingproject.org"
    call2.textContent = "Non Merci"
    call2.href = "https://www.pole-emploi.fr/accueil/"

};

function changeLogoName() {
    let navTitle = document.querySelector("a.navbar-brand").children[1];
    navTitle.textContent = "The THP Experience";
    navTitle.style.fontSize = "2em";
};

function populateImgages() {
    let cardImages = document.getElementsByClassName("card-img-top");
    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthinkster.io%2Fassets%2Fhomepage%2Frails-9b13de39de9d2eed10a2418734ee1e584cdc9634c04206af1c2bfcc8b0d0e3d5.png&f=1&nofb=1", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

    for (let i = 0; i < cardImages.length; i++)  {
        cardImages[i].src = imagesArray[i]
    };
   
};

function deleteLastCards() {
    let cards = document.getElementsByClassName("col-md-4");
    for (let i = (cards.length - 1); i >= 6; i --) {
        cards[i].parentNode.removeChild(cards[i]);
    };
};

function changeCardsText() {
    let cards = document.getElementsByClassName("card-text");
    let futureContent = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
    for (let i = 0; i < 3; i++) {
        cards[i].textContent = futureContent[i];
    };
};

function changeViewButtons() {
    let viewButtons = document.getElementsByClassName("btn-group");
    for (let i = 0; i < viewButtons.length; i ++) {
        viewButtons[i].children[0].className = "btn btn-success"
    };
};

function modifTordue() {
    let jsCard = document.getElementsByClassName("col-md-4")[2];
    let newRow = document.createElement("div");
    newRow.className = "row";
    newRow.appendChild(jsCard);
    let container = document.getElementsByClassName("album py-5 bg-light")[0].children[0];
    container.appendChild(newRow);
};

changeTitles("Ce que j'ai appris à THP", "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !");
changeCallToActions();
changeLogoName();
populateImgages();
deleteLastCards();
changeCardsText();
changeViewButtons();
modifTordue();