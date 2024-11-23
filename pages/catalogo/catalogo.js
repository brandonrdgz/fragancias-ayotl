import { obtenerProductos } from "../../js/crudJSON.js";

export function init() {
  const IMG_FOLDER = "./assets/imgs/perfumes/";

  obtenerProductos("./data/fragancias.json").then((productos) => {
    if (productos) {
      // console.log("Lista de productos:", productos);
      const divPerfumesContainer = document.querySelector("#perfumes");
      productos.forEach((element) => {
        // console.log(element.caracteristicas);
        const card = `
            <div class="product-box">
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
}
