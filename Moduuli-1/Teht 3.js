'use strict';


var numero1 = prompt('Syötä numero 1');
var numero2= prompt('Syötä numero 2');
var numero3 = prompt('Syötä numero 3');

const v1 = numero1 + numero2 + numero3

const target = document.getElementById('kohde').innerHTML+= `<li>${v1}</li>`;
