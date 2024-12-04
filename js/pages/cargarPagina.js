import { cleanPreviousComps } from "../components/cleanPreviousComps.js";
import { loadFunctionPage } from "../components/loadFunctionPage.js";
import { limpiarRecursosPagina } from "./limpiarRecursosPagina.js";
import { addComponentsToApp } from "../main/addComponentsToApp.js";
import { cargarEstilos } from "./cargarEstilos.js";
import { cargarScript } from "./cargarScript.js";
import { p404 } from "../../pages/p404/p404.js"

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
    
    //Encontrar dependencias del jsx de pagina
    const paginaModulo = await import(`../../pages/${pagina}/${pagina}.js`);
    
    const functionPage = await paginaModulo[pagina];
    ({ functionComponents, paramsForFunctions } = await loadFunctionPage(functionPage));

    cssPage = `../../pages/${pagina}/${pagina}.css`;
    
    cargarScript("script-pagina", `../../pages/${pagina}/deps.js`);
    
  } catch (error) {
    ({ functionComponents, paramsForFunctions } = await loadFunctionPage(p404));
    cssPage = `/pages/p404/p404.css`;
  }
  finally
  {
    limpiarRecursosPagina();
    cargarEstilos("estilos-pagina", cssPage);
    cleanPreviousComps();
    await addComponentsToApp(APP, [functionComponents], [paramsForFunctions], true);
  }
}