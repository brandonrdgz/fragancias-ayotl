
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

      // Mostrar la lista de productos en consola
      console.log(productos);

      // Retornar la lista de productos para poder usarla en otras partes del código
      return productos;
   } catch (error) {
      console.error("Error al obtener productos:", error);
   }
}


obtenerProductos("../../data/objectos.json").then(productos => {
   if (productos) {
     console.log("producto 1:", productos[1]);
   }
 });