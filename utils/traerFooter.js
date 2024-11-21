
export default async function traerFooter(URL) {
   try {
      const respuesta = await fetch(URL);
      // Verificar si la respuesta fue exitosa
      if (!respuesta.ok) {
         throw new Error(`Error en la solicitud: ${response.status}`);
      }
      
      const htmlFooter = await respuesta.text();
      // console.log (htmlFooter);
      
      return htmlFooter;
      
   } catch (error) {
      console.error("Error al obtener la footer:", error);
   }
}

