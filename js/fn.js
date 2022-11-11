"use strict";
console.log("fn.js");

// 'https://dummyjson.com/products';
const BASE_URL = "https://dummyjson.com";
const BASE_URL_DEVELOPMENT = "db.json";

// bendrine fetch funkcija
function getData(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .catch((err) => console.warn("klaida getData", err));
}

// konkreti funkcija gauti produktams
function getProducts() {
  return getData(`${BASE_URL_DEVELOPMENT}`).then((data) => data.products);
}

function getSingleProduct(id) {
  return getData(`${BASE_URL}/products/${id}`).then((item) => item);
}

// getSingleProduct(5);
// getProducts().then(products);

function makeOneSingleItem(itemObj) {
  const divEl = document.createElement("div");
  divEl.className = "shop-item card";
  divEl.innerHTML = `
    <img src="${itemObj.thumbnail}" alt="preke">
      <p class="price">${itemObj.price} eur</p>
      <p>Category: ${itemObj.category} (id:${itemObj.id})</p>
      <p>Description: ${itemObj.description}</p>
      <p><i>Stock: ${itemObj.stock}</i></p>
      <div class="control">
        <button>Add to cart</button>
        <a href="index.html">Go back ></a>
      </div>
  `;
  return divEl;
}
