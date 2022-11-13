'use strict';
const year = prompt('Enter a leap year');

if ((year % 4 == 0) && (year % 100!=0)){
  const yes1= document.getElementById('yes1');
  yes1.innerHTML = `<li>Year ${year} is a leap year!</li>`;

}
else if (year % 400 == 0){
  const yes2= document.getElementById('yes2');
  yes2.innerHTML = `<li>Year ${year} is a leap year!</li>`;
}

else{
  const no= document.getElementById('no');
  no.innerHTML = `<li>Year ${year} is not a leap year!</li>`;
}