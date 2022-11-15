'use strict'
const dice = prompt('How many times would you like to roll the dice');

var rolls = []
for (let i = 1; i < dice; i++){
  var d1 = Math.floor(Math.random() * 6) + 1;
    rolls.push(d1)

}

let sum = 0
for (const value of rolls) {
  sum += value;
}

 const yes1 = document.getElementById('yes1');
  yes1.innerHTML = `<li>Result: ${sum}</li>`;
