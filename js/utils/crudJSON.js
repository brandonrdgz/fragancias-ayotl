
export async function obtenerProductos(URL) {
   try {
      // Hacer la llamada al endpoint usando fetch
      const response = await fetch(URL); // Reemplaza la URL con tu endpoint

      // Verificar si la respuesta fue exitosa
      if (!response.ok) {
         throw new Error(`Error en la solicitud: ${response.status}`);
      }

      // Convertir la respuesta en JSON
      const data = await response.json();
      
      // Convertir data en una array de objectos
      const productos = data.productos.map(producto => ({
         id: producto.id,
         nombre: producto.nombre,
         marca: producto.marca,
         img: producto.img,
         categoria: producto.categoria,
         descripcion: producto.descripcion,
         precio: producto.precio,
         moneda: producto.moneda,
         cantidad_disponible: producto.cantidad_disponible,
         valoraciones: {
            promedio: producto.valoraciones.promedio,
            total_valoraciones: producto.valoraciones.total_valoraciones
         },
         caracteristicas: {
            concentracion: producto.caracteristicas.concentracion,
            duracion: producto.caracteristicas.duracion,
            tipo_piel: producto.caracteristicas.tipo_piel,
            tamaño: producto.caracteristicas.tamaño
         },
         ingredientes: producto.ingredientes,
         en_oferta: producto.en_oferta,
         fecha_lanzamiento: producto.fecha_lanzamiento
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

export function getProducto(productList, productId) {
   // Buscar el índice del producto con el id especificado
   const index = productList.findIndex(p => p.id === productId);

   if (index !== -1) {
      // console.log(`Producto con id ${productId} obtenido correctamente.`);
      return productList.splice(index, 1)[0];
   }

   // En caso de no existir  
   return undefined;
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
