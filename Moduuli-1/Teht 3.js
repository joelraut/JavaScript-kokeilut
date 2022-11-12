'use strict';


var numero1 = prompt('Syötä numero 1');
var numero2= prompt('Syötä numero 2');
var numero3 = prompt('Syötä numero 3');
const nmr1 = parseInt(numero1);
const nmr2 = parseInt(numero2);
const nmr3 = parseInt(numero3);

const v1 = nmr1 + nmr2 + nmr3;
const v2 = (nmr1 + nmr2 + nmr3) / 3;
const v3 = nmr1 * nmr2 * nmr3;

const target = document.getElementById('sum').innerHTML+= `<li>Summa: ${v1}</li>`;
const target1 = document.getElementById('keski').innerHTML+= `<li>Keskiarvo: ${v2}</li>`;
const target2= document.getElementById('tulo').innerHTML+= `<li>Tulo: ${v3}</li>`;


