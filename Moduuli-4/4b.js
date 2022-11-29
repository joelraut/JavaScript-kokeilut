'use strict';
const lomake = document.querySelector('form');
const apiUrl = 'https://api.tvmaze.com/search/shows?q=';

lomake.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const hakusana =document.querySelector('#query').value;

  const vastaus = await fetch(apiUrl + hakusana);
  if(!vastaus.ok) {
    throw new Error(vastaus.statusText)
  }

  const sarjat  = await vastaus.json();
  console.log(sarjat);
});