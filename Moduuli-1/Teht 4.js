'use strict';
const name = prompt('What is your name?')

const numero = (Math.floor(Math.random() * 3) + 1;

if (numero === 1) {
  const Gryffindor = 'Gryffindor';
  const gri = document.getElementById('house1');
  gri.innerHTML = `<li>${name}, you are in  ${Gryffindor}</li>`;
}
else if (numero === 2) {
  const Slytherin = 'Slytherin';
  const sly = document.getElementById('house2');
  sly.innerHTML = `<li>${name}, you are in  ${Slytherin}</li>`;

}
else if (numero === 3) {
  const Hufflepuff = 'Hufflepuff';
  const huf = document.getElementById('house3');
  huf.innerHTML = `<li>${name}, you are in  ${Hufflepuff}</li>`;

}
else if (numero === 4) {
  const Ravenclaw = 'Ravenclaw';
  const rav = document.getElementById('house4');
  rav.innerHTML = `<li>${name}, you are in  ${Ravenclaw}</li>`;

}