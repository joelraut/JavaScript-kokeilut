'use strict'

let num;
let loop;
let numero;
let numerolista = []

while (loop = true) {
  num = prompt("Anna numero:");
  numero = Number(num)
  numerolista.push(numero)
  console.log(numerolista);
  
  if (num in numerolista)
      alert('That the number has already been given!')
      break;
}
let suurimmastaPieninpaan = numerolista.sort((a, b) => a-b);

console.log(suurimmastaPieninpaan)