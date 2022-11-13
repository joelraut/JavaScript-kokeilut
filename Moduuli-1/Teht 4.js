'use strict'
const name = prompt('What is your name?')

 const number = Math.random() * 3;

if (number === 0) {
  const Gryffindor = 'Gryffindor'
  const gri = document.getElementById('0')
  gri.innerHTML = `<li>${name}, you are in  ${Gryffindor}</li>`;
}
else if (number === 1) {
  const Slytherin = 'Slytherin'
  const sly = document.getElementById('1')
  sly.innerHTML = `<li>${name}, you are in  ${Slytherin}</li>`;

}
else if (number === 2) {
  const Hufflepuff = 'Hufflepuff'
  const huf = document.getElementById('2')
  huf.innerHTML = `<li>${name}, you are in  ${Hufflepuff}</li>`;

}
else if (number === 3) {
  const Ravenclaw = 'Ravenclaw'
  const rav = document.getElementById('3')
  rav.innerHTML = `<li>${name}, you are in  ${Ravenclaw}</li>`;

}

