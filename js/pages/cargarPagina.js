import { limpiarRecursosPagina } from "../router/limpiarRecursosPagina.js";
import { loadFunctionPage } from "../components/loadFunctionPage.js";
import { addComponentsToApp } from "../main/addComponentsToApp.js";
import { cargarEstilos } from "./cargarEstilos.js";
import { cargarScript } from "./cargarScript.js";
import { p404 } from "/pages/p404/p404.js"

export async function cargarPagina(pagina , APP) {
  if (!APP || !(APP instanceof Element)) {
    throw new Error(
      !APP
        ? `El parámetro no contiene la propiedad APP`
        : `El parámetro APP no es del tipo Element`
    );
  }
  let functionComponents, paramsForFunctions;
  let cssPage = "";
  try {
    
    limpiarRecursosPagina();
    //Encontrar dependencias del jsx de pagina
    const paginaModulo = await import(`/pages/${pagina}/${pagina}.js`);
    
    const functionPage = await paginaModulo[pagina];
    ({ functionComponents, paramsForFunctions } = await loadFunctionPage(functionPage));

    cssPage = `./pages/${pagina}/${pagina}.css`;
    
    cargarScript("script-pagina", `./pages/${pagina}/deps.js`);
    
    window.history.pushState({ pagina }, "", `#${pagina}`);
  } catch (error) {
    ({ functionComponents, paramsForFunctions } = await loadFunctionPage(p404));
    cssPage = `./pages/p404/p404.css`;
  }
  finally
  {
    cargarEstilos("estilos-pagina", cssPage);
    await addComponentsToApp(APP, [functionComponents], [paramsForFunctions], true);
  }
}