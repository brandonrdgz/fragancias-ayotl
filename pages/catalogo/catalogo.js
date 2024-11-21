import {obtenerProductos} from "../../js/crudJSON.js"
import ProductCard from "../../components/productCard/productCard.js"

export function logic_main()
{
   const IMG_FOLDER = "./assets/imgs/perfumes/";

   obtenerProductos("./data/fragancias.json").then(productos => {
      if (productos) {
         // console.log("Lista de productos:", productos);
         const divPerfumesContainer = document.querySelector("#AQUI_VAN_LOS_PERFUMES");
         productos.forEach(element => {
            // console.log(element.caracteristicas);
            const card = 
            ProductCard({src: IMG_FOLDER + element.img, alt: element.nombre, 
               title: element.nombre + " " + element.caracteristicas.tamaño,
               price: element.precio + element.moneda,
               marca: element.marca});
            divPerfumesContainer.insertAdjacentHTML("afterbegin", card);
            // divPerfumesContainer.insertAdjacentElement("afterbegin", card);
         });
      }
      else
      {
         console.log("oma wea")
      }
   });
}