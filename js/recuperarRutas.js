export default async function recuperarRutas(HTMLText) {
   try {
      const respuesta = await fetch(URL);
      // Verificar si la respuesta fue exitosa
      if (!respuesta.ok) {
         throw new Error(`Error en la solicitud: ${response.status}`);
      }
      
      const htmlFooter = await respuesta.text();
      
      return htmlFooter;
      
   } catch (error) {
      console.error("Error al obtener la footer:", error);
   }
}

