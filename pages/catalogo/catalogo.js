import { obtenerProductos } from "../../js/crudJSON.js";
import { loadPage } from "../../app.js";

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

  // Manejar clic en las cards
  document.querySelector(".shop-content").addEventListener("click", (event) => {
    const productCard = event.target.closest(".product-box");
    if (productCard) {
      const productId = productCard.dataset.id; // ID del producto
      const link = productCard.dataset.link; // Página a la que apunta
      navigateToPage(link, productId);
    }
  });

  // Función para navegar dentro de la SPA
  function navigateToPage(page, id) {
    window.history.pushState({}, "", `${page}?id=${id}`);
    loadPage(page, id); // Llamar a tu lógica para cargar la página
  }
}
