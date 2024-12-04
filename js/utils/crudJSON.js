import {constantes} from "../constantes.js";

/*const token = "tu-token-de-autenticacion";
const productos = await obtenerToken('http://192.168.10.123:8080/api/login', token);
console.log(productos);*/

// function getAuthHeaders() {
//    const token = localStorage.getItem("authToken");
//    if (!token) {
//       throw new Error("Token de autenticación no disponible. Debes iniciar sesión.");
//    }
//    return {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//    };
// }

export async function obtenerProductos(URL) {
   try {
      // Hacer la llamada al endpoint usando fetch
      // const headers = getAuthHeaders();
      const response = await fetch('https://brandonrdgz.github.io/fragancias-ayotl/data/fragancias.json');
    // Reemplaza la URL con tu endpoint

      // Verificar si la respuesta fue exitosa
      
      if (!response.ok) {
         throw new Error(`Error en la solicitud: ${response.status}`);
      }
      // Convertir la respuesta en JSON
      const data = await response.productos.json();
      
      // Convertir data en una array de objectos
      const productos = data.map(producto => ({
         id:producto.id,
         name:producto.name,
         description:producto.description,
         price:producto.price,
         // categoryId:producto.categoryId,
         stock:producto.stock,
         img:producto.img
   
      }));

      // Retornar la lista de productos para poder usarla en otras partes del código
      return productos;
   } catch (error) {
      console.error("Error al obtener productos:", error);
   }
}


export function addProducto(productList, product) {
   // Verificar si el producto ya existe en la lista (comparando el id)
   const productoExistente = productList.some(p => p.id === product.id);

   if (productoExistente) {
      return productList
   } else {
      // Agregar el producto a la lista de productos
      productList.push(product)
      return productList;
   }
}

export async function getProducto(productId) {
   try {
      // Hacer la llamada al endpoint usando fetch
      const response = await fetch("http://" + constantes.IP_SERVER + "./api/products/" + productId); 

      // Verificar si la respuesta fue exitosa
      if (!response.ok) {
         throw new Error(`Error en la solicitud: ${response.status}`);
      }

      // Convertir la respuesta JSON a un objecto
      const product = await response.json();
      
      // Retornar la lista de productos para poder usarla en otras partes del código
      return product;
   } catch (error) {
      console.error("Error al obtener productos:", error);
   }
}

export function removeProduct(productList, productId) {
   // Buscar el índice del producto con el id especificado
   const index = productList.findIndex(p => p.id === productId);

   if (index !== -1) {
      // Eliminar el producto si existe
      const removedProduct = productList.splice(index, 1);
      // console.log(`Producto con id ${productId} eliminado correctamente.`);
   } else {
      // console.log(`El producto con id ${productId} no se encontró en la lista.`);
   }

   // Retornar la lista actualizada
   return productList;
}
