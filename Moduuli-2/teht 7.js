'use strict';


var rollDice = function (side) {

  var dice = Math.floor(Math.random() * side + 1);
  return dice;

}

var dices = []

var sides = prompt('How many times would you like to roll the dice');
var sidess = rollDice(sides)
while(rollDice() !== sidess){

  dices.push(rollDice())
}

for ( let dice of dices) {
  document.getElementById('kohde').innerHTML += `<li>${dice}</li>`;
}


