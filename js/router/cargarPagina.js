import { loadPageDependencies } from "../pages/loadPageDependencies.js";
import {cargarJSXPagina } from "../jsx/cargarJSXPagina.js";


export async function cargarPagina(pagina , APP) {
  if (!APP || !(APP instanceof Element)) {
    throw new Error(
      !APP
        ? `El parámetro no contiene la propiedad APP`
        : `El parámetro APP no es del tipo Element`
    );
  }
  
  try {
    
    // const componentFunctionPagina = cargarJSXPagina(pagina);
    
    //Encontrar dependencias del jsx de pagina
    const paginaModulo = await import(`/pages/${pagina}/${pagina}.js`);
    
    const dependenciasPagina = await paginaModulo[pagina]();
    const { functionComponents, paramsForFunctions } = await loadPageDependencies(dependenciasPagina);

    console.log(functionComponents);
    console.log(paramsForFunctions);










    // // Actualiza el historial
    // window.history.pushState({ pagina }, "", `#${pagina}`);
    
    // // Carga el CSS y JS específicos de la página
    // cargarEstilos("estilos-pagina", `./pages/${pagina}/${pagina}.css`);
    // if (isModule) {
    //   await cargarYEjecutarFuncion(`./pages/${pagina}/${pagina}.js`);
    // } else {
    //   cargarScript("script-pagina", `./pages/${pagina}/${pagina}.js`);
    // }
  } catch (error) {
    throw error;
    // document.getElementById("main-content").innerHTML =
    //   "<p>Error al cargar la página.</p>";
    // console.error("Error al cargar la página:", error);
  }
  return  
}