import { cargarJSXPagina } from "../jsx/cargarJSXPagina.js";

export async function cargarPagina(pagina , APP) {
  if (!APP || !(APP instanceof Element)) {
    throw new Error(
      !APP
        ? `El parámetro no contiene la propiedad APP`
        : `El parámetro APP no es del tipo Element`
    );
  }
  
  try {
    
    const componentFunctionPagina = cargarJSXPagina(pagina);
    
    //Encontrar dependencias del jsx de pagina

    
    // Actualiza el historial
    window.history.pushState({ pagina }, "", `#${pagina}`);
    
    // Carga el CSS y JS específicos de la página
    cargarEstilos("estilos-pagina", `./pages/${pagina}/${pagina}.css`);
    if (isModule) {
      await cargarYEjecutarFuncion(`./pages/${pagina}/${pagina}.js`);
    } else {
      cargarScript("script-pagina", `./pages/${pagina}/${pagina}.js`);
    }
  } catch (error) {
    document.getElementById("main-content").innerHTML =
      "<p>Error al cargar la página.</p>";
    console.error("Error al cargar la página:", error);
  }
  return  
}