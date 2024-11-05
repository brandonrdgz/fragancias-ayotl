
async function obtenerProductos(URL) {
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


function addProducto(productList, product) {
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

function getProducto(productList, productId) {
   // Buscar el índice del producto con el id especificado
   const index = productList.findIndex(p => p.id === productId);

   if (index !== -1) {
      // console.log(`Producto con id ${productId} obtenido correctamente.`);
      return productList.splice(index, 1)[0];
   }

   // En caso de no existir  
   return undefined;
}

function removeProduct(productList, productId) {
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


objectoProducto =
{
   "id": "011",
   "nombre": "Eau de Parfum Floral Essence",
   "marca": "Esencias de Verano",
   "categoria": "Perfumes",
   "descripcion": "Un perfume fresco y floral, ideal para el uso diario. Combina notas de jazmín, rosa y un toque de vainilla.",
   "precio": 2200,
   "moneda": "MXN",
   "cantidad_disponible": 200,
   "valoraciones": {
      "promedio": 4.5,
      "total_valoraciones": 120
   },
   "caracteristicas": {
      "concentracion": "Eau de Parfum",
      "duracion": "Hasta 8 horas",
      "tipo_piel": "Todo tipo de piel",
      "tamaño": "50 ml"
   },
   "ingredientes": [
      "Agua",
      "Alcohol",
      "Aceite esencial de jazmín",
      "Aceite esencial de rosa",
      "Extracto de vainilla"
   ],
   "en_oferta": false,
   "fecha_lanzamiento": "2024-10-01"
}


obtenerProductos("./data/objectos.json").then(productos => {
   if (productos) {
      console.log("Lista de productos:", productos);
      console.log("producto 1:", productos[1]);

      console.log("Vamos a añadir un producto");
      nuevaLista = addProducto(productos, objectoProducto);
      console.log(nuevaLista);

      console.log("Vamos a obtener el producto con el id 002");
      id='002'
      producto = getProducto(productos, id);
      console.log(producto.id);
      console.log(producto.nombre);
      console.log(producto);

      console.log("Vamos a remover un producto con el id 004");
      id='004'
      nuevaLista = removeProduct(productos, id);
      console.log(nuevaLista)
   }
});

