'use strict'
const name = prompt('What is your name?')

const number = Math.random() * 3;

if (number === 0) {
            const Gryffindor = 'Gryffindor'
            const target = document.getElementById('0').innerHTML+= `<li>${name}, you are in  ${Gryffindor}</li>`;
        }
        else {
            console.log('You entered an odd number.');
        }

