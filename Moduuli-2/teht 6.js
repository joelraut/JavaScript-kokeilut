'use strict';

var rollDice = function () {

  var dice = Math.floor(Math.random() * 6 + 1);
  return dice;

}

var dices = []

while(rollDice() !== 6){
  dices.push(rollDice())
}

for ( let dice of dices) {
  document.getElementById('kohde').innerHTML += `<li>${dice}</li>`;
}

