import { loadPageDependencies } from "./loadPageDependencies.js";
import { addComponentsToApp } from "../main/addComponentsToApp.js";

import { loadFunctionComponents } from "../components/loadFunctionsComponents.js";

import { cargarJSXPagina } from "../jsx/cargarJSXPagina.js"
import { cargarEstilos } from "./cargarEstilos.js";
import { cargarScript } from "./cargarScript.js";

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
    const paginaModulo = await import(`/pages/${pagina}/${pagina}.js`);
    
    const dependenciasPagina = await paginaModulo[pagina];
    const { functionComponents, paramsForFunctions } = await loadFunctionComponents([dependenciasPagina]);
    // console.log(functionComponents, paramsForFunctions)

    addComponentsToApp(APP, functionComponents, paramsForFunctions);
    // for (let i = 0; i < paramsForFunctions.length; i++) {
    //   let funcion = functionComponents[i];
    //   let parametro = paramsForFunctions[i];
    
    //   let cantidadDeArrays = countParamsArrays(parametro, 0);
    //   let htmlString = "";
    
    //   htmlString = (cantidadDeArrays > 0) ?
    //     executeDependencies(cantidadDeArrays, funcion, parametro)
    //   :
    //     funcion(parametro);
    //   APP.appendChild(createNodesFromHTML(htmlString));
    // }










    // // Actualiza el historial
    // window.history.pushState({ pagina }, "", `#${pagina}`);
    
    // // Carga el CSS y JS específicos de la página
    cargarEstilos("estilos-pagina", `./pages/${pagina}/${pagina}.css`);
    // cargarScript("script-pagina", `./pages/${pagina}/${pagina}.js`);
    
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