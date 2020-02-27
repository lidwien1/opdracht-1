/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

/*/jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* HTML element selecteren*/

var hart1 = document.querySelector('#hart1')
var hart2 = document.querySelector('#hart2')
var hart3 = document.querySelector('#hart3')
var hart4 = document.querySelector('#hart4')
var hartjes = document.querySelector('.hoofdhart')
var count=(function (){
    var counter = 0;
    return function (){return counter+=1;}
})();


function displaycount(){
    document.getElementById("carrier").innerHTML = count()
}


/* selecteren van html elementen */


/* door te klikken op het menu wordt de functie hamburgerMenu uitgevoerd */
hart1.addEventListener('click', hartjeVullen)

function hartjeVullen() {

    hart1.classList.toggle("hoofdhart")

}

hart2.addEventListener('click', hartjeVullen1)

function hartjeVullen1() {

    hart2.classList.toggle("hoofdhart")

}

hart3.addEventListener('click', hartjeVullen2)

function hartjeVullen2() {

    hart3.classList.toggle("hoofdhart")

}

hart4.addEventListener('click', hartjeVullen3)

function hartjeVullen3() {

    hart4.classList.toggle("hoofdhart")

}

//Bron: https://www.youtube.com/watch?v=RIYde5oY8IU

