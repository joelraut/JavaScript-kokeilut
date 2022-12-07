'use strict';
const form = document.querySelector('form');
const section = document.querySelector('section');

async function fetchjson(url, options = {}){
  if (!answer.ok){
    throw new Error(answer.statusText);
  }
  return await answer.json()
}

form.addEventListener('submit', async function(evt) {
  console.clear()
  section.innerText= '';
  evt.preventDefault();
  const q = document.querySelector('#query').value;
  const search = 'https://api.tvmaze.com/search/shows?q='+ q;
  const json = await fetchjson(search);

  for (let i in json){
  const article = document.createElement('article');
  const img = document.createElement('img');
  const genres = document.createElement('p')
  const button = document.createElement('button');
  let title = json[i]['show']['name'];
  const link = json[i]['show']['id'];

  (json[i]['show']['genres'].length === 0) ?
      genres.innerHTML = '(No genres listed)':
      genres.append(json[i]['show']['genres'].join('/'));

  if (json)[i]['show']['image'] === null) {
    img.src ='https://via.placeholder.com/210x295?text=no+image';
}   else if (json)[i]['show']['image']['medium'] === null){
    img.src ='https://via.placeholder.com/210x295?text=no+image';
}   else {
    img.src = (json)[i]['show']['image']['medium'];
    }
    img.alt='picture';

    article.innerHTML += `<h2>${title}</h2>`;
    button.append('info modal');
    const iframe = document.querySelector('iframe');
    const dialog = document.querySelector('dialog');
    const span = document.querySelector('span');

    button.addEventListener('click', function(evt){
      evt.preventDefault();
    dialog.showModal();
    iframe.scr = json [i]['show']['url'];
    });
    span.addEventListener('click, fucntion(evt') {
      evt.preventDefault();
      dialog.close()
    }
  })





  }




