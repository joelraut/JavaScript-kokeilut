'use strict'
const question = confirm('Should I call the square root?');
if (question === false ){
  const yes= document.getElementById('yes');
  yes.innerHTML = `<li>The square root is not calculated.</li>`;

}

else if (question === true){
  const square = prompt('Tell me the number');
  const numb = parseInt(square);
  if (numb < 1) {
    const no = document.getElementById('no');
    no.innerHTML = `<li>The square root of a negative number is not defined.</li>`;
  }
else if (numb > 0) {
  const sqrt = Math.sqrt(numb)
  const yes1 = document.getElementById('yes1');
  yes1.innerHTML = `<li>The square root is ${sqrt}.</li>`;
  }
}