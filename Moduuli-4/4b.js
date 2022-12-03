'use strict';
const lomake = document.querySelector('form');
const apiUrl = 'https://api.tvmaze.com/search/shows?q=';

lomake.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const hakusana = document.querySelector('#query').value;

  const vastaus = await fetch(apiUrl + hakusana);
  if (!vastaus.ok) {
    throw new Error(vastaus.statusText)
  }

  const sarjat = await vastaus.json();

  const nimi = sarjat.map(element => {
    return `

<div class="divit">


<article>
<figure>
<p>${element.show.name}</p>
<img class="kuva1" src="${element.show.image.medium}">
 </figure>
 <p>${element.show.summary}</p>
  </article>
  
  </div>
 
  `;

  }).join("");
  console.log(nimi)

  document
  .querySelector("#name")
  .insertAdjacentHTML("afterbegin", nimi);


//   const nimi = sarjat.map(element => element.show.name);
//
//   const linkki = sarjat.map(element => element.show.url);
//
//   const kuva = sarjat.map(element => element.show.image);
//
//   const summary = sarjat.map(element => element.show.summary);
//
//   console.log(nimi, linkki, kuva, summary)
//
//
// for (let i in nimi) {
//   let figure = document.querySelector("#figure");
//   let element = document.createElement("figure");
//   element.innerHTML = nimi[i];
//   nimi.append(element);
// }

});


