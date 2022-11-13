'use strict'
const name = prompt('What is your name?')

const number = Math.random() * 3;

if (number === 0) {
  const Gryffindor = 'Gryffindor'
  document.getElementById('0').innerHTML+= `<li>${name}, you are in  ${Gryffindor}</li>`;
}
else if (number === 1) {
  const Slytherin = 'Slytherin'
  document.getElementById('1').innerHTML+= `<li>${name}, you are in  ${Slytherin}</li>`;

}
else if (number === 2) {
  const Hufflepuff = 'Hufflepuff'
  document.getElementById('2').innerHTML+= `<li>${name}, you are in  ${Hufflepuff}</li>`;

}
else if (number === 3) {
  const Ravenclaw = 'Ravenclaw'
  document.getElementById('3').innerHTML+= `<li>${name}, you are in  ${Ravenclaw}</li>`;

}

