'use strict'
  const numbers = []
  const number1 = prompt('Number 1')
  const number2 = prompt('Number 2')
  const number3 = prompt('Number 3')
  const number4 = prompt('Number 4')
  const number5 = prompt('Number 5')
  numbers.push(number1, number2, number3, number4, number5)


for (let i =  numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
