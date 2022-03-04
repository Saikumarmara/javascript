//F1 F1bis
//On initialise un compteur de clique
let clickCount = 1;

//On cherche l'élément avec le tag footer
document.getElementsByTagName("footer")[0].addEventListener("click", function(){ 
    console.log(`clique numéro ${clickCount}`);
    clickCount ++;
});

//F2
//On initialise des variables
let navbarToggler = document.querySelector("button.navbar-toggler");
let navbarHeader = document.querySelector("#navbarHeader");

/*toggle( String [, force] )
Si un seul argument est présent : change la présence d'une classe dans la liste.
Si la classe existe, alors la supprime et renvoie false, dans le cas inverse, ajoute cette classe et retourne true.
Si le second argument est présent : Si l'argument force est à true, ajoute cette classe, si l'argument est à false, la supprime.*/

navbarToggler.addEventListener("click", function(){
    navbarHeader.classList.toggle("collapse")
});

//F3
//On cherche toutes les cards du DOM
let cards = document.querySelectorAll(".card");
//On cherche les boutons de la première card
let cardOneBtns = cards[0].querySelectorAll("button");

//On change la couleur de la première card si on clique sur le deuxième bouton
cardOneBtns[1].addEventListener("click", function() {
    cards[0].style.color = "red";
})

//F4
//On cherche les boutons de la première card
let cardTwoBtns = cards[1].querySelectorAll("button");

//On change la couleur de la deuxième card si on clique sur le deuxième bouton et on la rétablit si on clique encore
cardTwoBtns[1].addEventListener("click", function() {
    if (cards[1].style.color === '') {
        cards[1].style.color = 'green';
    } else {
        cards[1].style.color = '';
    }
})

//F5
/*La propriété Document.styleSheets est en lecture seule et retourne une liste StyleSheetList d'objets StyleSheet,
qui font référence à l'ensemble des feuilles de style contenues ou embarquées dans le document.*/

let styleSheetList = document.styleSheets;
let navbar = document.querySelector(".navbar")

navbar.addEventListener('dblclick', function(){
    if (styleSheetList[0].disabled){
        styleSheetList[0].disabled = false;
    } else {
        styleSheetList[0].disabled = true;
    }
})

//F6
/*La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.*/

cards.forEach(function(card){
    card.querySelector(".btn-success").addEventListener("mouseover", function() {
        card.querySelector("p").classList.toggle("collapse");
        let img = card.querySelector("img");
        if (img.style.width === "20%"){
            img.style.width = "100%";
        } else {
            img.style.width = "20%";
        }
    });
});

//F7
/* La méthode Node.insertBefore() insère un nœud juste avant le noeud de référence en tant qu'enfant du nœud parent spécifié.
Si l'enfant donné est une référence à un noeud existant dans le document, insertBefore() le déplace vers sa nouvelle position
(il n'est pas nécessaire de supprimer le noeud de son parent avant son ajout à un autre noeud).
Cela signifie que le noeud ne peut pas être à 2 points du document simultanément.
Donc, si le noeud a déjà un parent, le noeud est d'abord supprimé puis inséré dans la nouvelle position.
La méthode Node.cloneNode()  peut être utilisée pour réaliser une copie du noeud avant son ajout sous le nouveau parent.
Notez que les copies faites avec cloneNode ne seront pas automatiquement synchronisées.
Si le noeud de référence est null , le noeud spécifié est ajouté à la fin de la liste des enfants du noeud parent spécifié.*/

/*firstElementChild renvoie le premier élément enfant d'un élément ou null s'il n'y a pas de descendants.*/
/*En résumé on insert avant le node premier element firstElementChild de la row le dernier element lasElementChild
de la row*/

document.querySelectorAll("section a")[1].addEventListener("click", function () {
  let row = document.querySelector(".album .row")
  row.insertBefore(
    row.lastElementChild,
    row.firstElementChild
  );
})

//F8

/* La méthode Node.appendChild() ajoute un nœud à la fin de la liste des enfants d'un nœud parent spécifié.
Si l'enfant donné est une référence à un nœud existant dans le document, appendChild() le déplace  de sa position actuelle
vers une nouvelle position (il n'est pas nécessaire de supprimer le noeud sur son noeud parent avant de l'ajouter à un autre).
Cela signifie qu'un noeud ne peut pas être à deux points du document simultanément.
Donc, si le nœud a déjà un parent, le nœud est d'abord retiré, puis ajouté à la nouvelle position.
Le Node.cloneNode() peut être utilisé pour réaliser une copie de noeud avant de l'ajouter à son nouveau parent.
Notez que les copies faites avec cloneNode ne seront pas automatiquement synchronisées.*/

// En résumé ici on déplace le premier element de la row à la fin de la row

/*Explanation
    "click" is an event (when the selected element is clicked).
    "function(e)" is the event handling function (on event, object is created).
    "e" is the object handler (object is made accessible).
    "preventDefault()" is a method (function) provided by the object.
What's happening?
When a user clicks on the element with the id "#someLink" (probably an anchor tag), call an anonymous function, "function(e)",
and assign the resulting object to a handler, "e". Now take that handler and call one of its methods, "e.preventDefault()",
which should prevent the browser from performing the default action for that element.*/

document.querySelectorAll("section a")[0].addEventListener("click", function (e) {
    e.preventDefault();
    let row = document.querySelector(".album .row")
    row.appendChild(
        row.firstElementChild
    );
});
// F9

/*Ici par exemple, on stocke dans e l'event d'appuyer sur une touche en étant sur la nav_bar et on fait ensuite un switch-case
sur la nature de la key de e pour choisir les actions à entreprendre.*/

document.querySelector(".navbar-brand").addEventListener("keypress", function (e) {
  let body = document.body
  switch (e.key) {
    case "a":
      body.classList = ""
      body.classList.add("col-4")
      break;
    case "y":
      body.classList = ""
      body.classList.add("col-4","offset-md-4")
      break;
    case "p":
      body.classList = ""
      body.classList.add("col-4","offset-md-8")
      break;
    case "b":
      body.classList = ""
      break;
  }
})