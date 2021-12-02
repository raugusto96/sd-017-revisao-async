function createFilmImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function getSkuFromFilmItem(item) {
  return item.querySelector('span.item_sku').innerText;
}

function saveToFavoriteList({ nome, dataDeLancamento, notaDoFilme }) {
  const li = document.createElement('li');
  li.className = 'favorite_item';
  li.innerText = `Nome: ${nome} | Data de lançamento: ${dataDeLancamento} | Nota: $${notaDoFilme}`;
  return li;
}

async function favoriteItemClickListener(event) {
  // seu código aqui
}

function createFilmCard({ sku, name, image, description }) {
  const section = document.createElement('section');
  section.className = 'film';
  section.appendChild(createCustomElement('span', 'item_sku', sku));
  section.appendChild(createCustomElement('span', 'item_title', name));
  section.appendChild(createCustomElement('span', 'item_description', description));
  section.appendChild(createFilmImageElement(image));
  section.appendChild(createCustomElement('button', 'item_add', 'Adicionar aos favoritos!'));
  return section;
}

window.onload = () => { };
