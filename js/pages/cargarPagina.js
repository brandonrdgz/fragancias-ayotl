import { addComponentsToApp } from "../main/addComponentsToApp.js";

import { loadFunctionComponents } from "../components/loadFunctionsComponents.js";

import { cargarEstilos } from "./cargarEstilos.js";

import { limpiarRecursosPagina } from "../router/limpiarRecursosPagina.js";

export async function cargarPagina(pagina , APP) {
  if (!APP || !(APP instanceof Element)) {
    throw new Error(
      !APP
        ? `El parámetro no contiene la propiedad APP`
        : `El parámetro APP no es del tipo Element`
    );
  }
  
  try {
    
    limpiarRecursosPagina();
    
    //Encontrar dependencias del jsx de pagina
    const paginaModulo = await import(`/pages/${pagina}/${pagina}.js`);
    
    const dependenciasPagina = await paginaModulo[pagina];
    const { functionComponents, paramsForFunctions } = await loadFunctionComponents([dependenciasPagina], true);
    console.log(functionComponents);
    console.log( paramsForFunctions);
    await addComponentsToApp(APP, functionComponents, paramsForFunctions, true);

    // Actualiza el historial
    window.history.pushState({ pagina }, "", `#${pagina}`);
    
    // Carga el CSS y JS específicos de la página
    cargarEstilos("estilos-pagina", `./pages/${pagina}/${pagina}.css`);
    // cargarScript("script-pagina", `./pages/${pagina}/${pagina}.js`);
    
  } catch (error) {
    throw error;
  }
}