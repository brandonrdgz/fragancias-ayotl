import {obtenerProductos} from "../../js/crudJSON.js"

export function catalogo({})
{
   return 
}

export function logic_main()
{
   const IMG_FOLDER = "./assets/imgs/perfumes/";

   obtenerProductos("./data/fragancias.json").then(productos => {
      if (productos) {
         // console.log("Lista de productos:", productos);
         const divPerfumesContainer = document.querySelector("#AQUI_VAN_LOS_PERFUMES");
         productos.forEach(element => {
            // console.log(element.caracteristicas);
            const card = `
            <div class="col-md-4 mb-4">
               <div class="card">
                  <img src="${ IMG_FOLDER + element.img}" class="card-img-top" alt="${element.nombre}">
                  <div class="card-body text-center">
                     <h5 class="card-title">${element.nombre + " " + element.caracteristicas.tamaño}</h5>
                     <p class="card-text">${element.precio + element.moneda}</p>
                     <a href="#" class="btn btn-primary">Comprar ahora</a>
                  </div>
               </div>
            </div>`
            divPerfumesContainer.insertAdjacentHTML("afterbegin", card);
         });
      }
      else
      {
         console.log("oma wea")
      }
   });
}