import {obtenerProductos} from "../../js/crudJSON.js"
import ProductCard from "../../components/productCard/productCard.js"
import Carrousel from "../../components/carrousel/carrousel.js"

export function logic_main()
{  
   const IMG_FOLDER = "./assets/imgs/perfumes/";
   const sectionPerfumes = document.querySelector("#ATRAS_DE_ESTO_VA_EL_CARROUSEL");
   
   const images= [
"https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
"https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
];
   sectionPerfumes.insertAdjacentHTML("beforebegin", Carrousel({images: images}));

   obtenerProductos("./data/fragancias.json").then(productos => {
      if (productos) {
         // console.log("Lista de productos:", productos);
         const divPerfumesContainer = document.querySelector("#AQUI_VAN_LOS_PERFUMES");
         productos.forEach(element => {
            const card = 
            ProductCard({src: IMG_FOLDER + element.img, alt: element.nombre, 
               title: element.nombre + " " + element.caracteristicas.tamaño,
               price: element.precio + element.moneda,
               marca: element.marca});
            divPerfumesContainer.insertAdjacentHTML("afterbegin", card);
         });
      }
   });
}