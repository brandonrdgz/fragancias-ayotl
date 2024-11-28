import { addComponentsToApp } from "../main/addComponentsToApp.js";

import { loadFunctionComponents } from "../components/loadFunctionsComponents.js";

import { cargarEstilos } from "./cargarEstilos.js";

import { limpiarRecursosPagina } from "../router/limpiarRecursosPagina.js";

import { p404 } from "../../pages/p404/p404.js";

export async function cargarPagina(pagina, APP) {
  if (!APP || !(APP instanceof Element)) {
    throw new Error(
      !APP
        ? `El parámetro no contiene la propiedad APP`
        : `El parámetro APP no es del tipo Element`,
    );
  }

  try {
    limpiarRecursosPagina();

    //Encontrar dependencias del jsx de pagina
    const paginaModulo = await import(`/pages/${pagina}/${pagina}.js`);

    const dependenciasPagina = await paginaModulo[pagina];
    const { functionComponents, paramsForFunctions } =
      await loadFunctionComponents([dependenciasPagina], true);

    await addComponentsToApp(APP, functionComponents, paramsForFunctions, true);

    // Actualiza el historial
    window.history.pushState({ pagina }, "", `#${pagina}`);

    // Carga el CSS y JS específicos de la página
    cargarEstilos("estilos-pagina", `./pages/${pagina}/${pagina}.css`);
    // cargarScript("script-pagina", `./pages/${pagina}/${pagina}.js`);
  } catch (error) {
    const { functionComponents, paramsForFunctions } =
      await loadFunctionComponents([p404], true);
    await addComponentsToApp(APP, functionComponents, paramsForFunctions, true);
    cargarEstilos("estilos-pagina", `./pages/p404/p404.css`);
  }
}
