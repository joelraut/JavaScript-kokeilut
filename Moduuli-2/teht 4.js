'use strict'

let num;
let loop;
let numero;
let numerolista = []

while (loop=true) {
  num = prompt("Anna numero:");
  numero = Number(num)
  numerolista.push(numero)
  console.log(numerolista);

  if (num == 0)

      break;
}
let suurimmastaPieninpaan = numerolista.sort((a, b) => b-a);
console.log(suurimmastaPieninpaan)