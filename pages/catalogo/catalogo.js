import { obtenerProductos } from "../../js/crudJSON.js";
import { agregarAlCarrito } from "../carrito/carrito.js";
import { agregarAlaWishlist } from "../wishlist/wishlist.js";

export function init() {
  const IMG_FOLDER = "./assets/imgs/perfumes/";

  obtenerProductos("./data/fragancias.json").then((productos) => {
    if (productos) {
      // console.log("Lista de productos:", productos);
      const divPerfumesContainer = document.querySelector("#perfumes");
      productos.forEach((element) => {
        // console.log(element.caracteristicas);
        const card = `
<div class="product-box" data-id="${element.id}" data-link="product">
                  <img src="${IMG_FOLDER + element.img}" class="product-img" alt="${element.nombre}">
                     <h5 class="product-title">${element.nombre + " " + element.caracteristicas.tamaño}</h5>
<span class = "price">${"$" + element.precio + element.moneda}</span>
<div class="product-actions">
<i class="bi bi-bag-fill add-cart"></i>
<i class="bi bi-heart add-wishlist"></i>
</div>
            </div>`;
        divPerfumesContainer.insertAdjacentHTML("afterbegin", card);
      });
    } else {
      console.log("oma wea");
    }
  });
  document
    .getElementById("catalog-container")
    .addEventListener("click", (event) => {
      const addButton = event.target.closest(".add-cart");
      if (addButton) {
        const productCard = addButton.closest(".product");
        const producto = {
          id: productCard.dataset.id,
          title: productCard.querySelector(".product-title").innerText,
          price: productCard.querySelector(".price").innerText,
          img: productCard.querySelector(".product-img").src,
        };

        agregarAlCarrito(producto); // Agregar producto al carrito
        renderizarCarritoEnNavbar(); // Actualizar la lista desplegable del carrito
      }
    });

  // Detectar clic en los botones "Añadir a Wishlist"
  document.querySelectorAll(".add-to-wishlist").forEach((button) => {
    button.addEventListener("click", (event) => {
      // Obtener el producto de la tarjeta
      const productCard = event.target.closest(".product");
      const producto = {
        id: productCard.dataset.id,
        name: productCard.querySelector(".product-title").innerText,
        price: productCard.querySelector(".price").innerText,
        img: productCard.querySelector("img").src,
      };

      // Llamar a la función para agregar a la wishlist
      agregarAlaWishlist(producto);
    });
  });
}

export function initCatalogo() {
  const catalogContainer = document.getElementById("catalog-container");

  // Datos simulados de productos
  const productos = [];

  // Renderizar productos en el contenedor
  catalogContainer.innerHTML = "";
  productos.forEach((producto) => {
    const productCard = document.createElement("div");
    productCard.className = "product";
    productCard.dataset.id = producto.id;

    productCard.innerHTML = `
      <img src="${producto.img}" alt="${producto.name}">
      <h3 class="product-title">${producto.name}</h3>
      <p class="price">$${producto.price}</p>
      <button class="add-to-wishlist">Añadir a Wishlist</button>
    `;

    catalogContainer.appendChild(productCard);
  });

  // Vincular eventos de los botones "Añadir a Wishlist"
  document.querySelectorAll(".add-to-wishlist").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productCard = event.target.closest(".product");
      const producto = {
        id: productCard.dataset.id,
        name: productCard.querySelector(".product-title").innerText,
        price: parseFloat(
          productCard.querySelector(".price").innerText.replace("$", ""),
        ),
        img: productCard.querySelector("img").src,
      };

      agregarAlaWishlist(producto); // Agregar el producto a la wishlist
    });
  });
}
