
export default async function traerNavbar(URL) {
   try {
      const respuesta = await fetch(URL);
      // Verificar si la respuesta fue exitosa
      if (!respuesta.ok) {
         throw new Error(`Error en la solicitud: ${response.status}`);
      }
      
      const htmlNav = await respuesta.text();
      // console.log (htmlNav);
      
      return htmlNav;
      
   } catch (error) {
      console.error("Error al obtener la Navbar:", error);
   }
}

