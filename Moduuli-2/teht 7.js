'use strict';
var times = prompt('How many times would you like to roll the dice');

var rollDice = function () {

  var dice = Math.floor(Math.random() * times + 1);
  return dice;

}

var dices = []


while(rollDice() !== times){
  dices.push(rollDice())
}

for ( let dice of dices) {
  document.getElementById('kohde').innerHTML += `<li>${dice}</li>`;
}


