
import { loadFunctionComponents } from "../components/loadFunctionsComponents.js";
import { addComponentsToApp } from "./addComponentsToApp.js";
import { iniciarEnrutador } from "../router/iniciarEnrutador.js";
import { handleClicksToAnchorElements } from "../router/handleClicksToAnchorElements.js";

export async function main(app) {
  const { APP, ...comps } = app;

  if (!APP || !(APP instanceof Element)) {
    throw new Error(
      !APP
        ? `El parámetro no contiene la propiedad APP`
        : `El parámetro APP no es del tipo Element`
    );
  }

  const components = Object.values(comps);
  components.forEach((fn, index) => {
    if (typeof fn !== 'function') {
      throw new Error(`El parámetro en la posición ${index + 1} no es una función.`);
    }
  });

  await iniciarEnrutador(APP);

  const params = Object.values(app);
  const indexAPP = params.indexOf(APP);

  if (indexAPP === -1) {
    throw new Error(`No se pudo localizar APP en los parámetros.`);
  }

  // Cargar componentes antes y después de APP
  const loadAndAddComponents = async (paramSubset, Nodo, isBefore = false) => {
    const { functionComponents, paramsForFunctions } = await loadFunctionComponents(paramSubset);
    await addComponentsToApp(Nodo, functionComponents, paramsForFunctions, false, isBefore);
  };

  await loadAndAddComponents(params.slice(0, indexAPP), APP, true);
  await loadAndAddComponents(params.slice(indexAPP + 1), APP.parentElement);

  document.addEventListener("click", (e) => handleClicksToAnchorElements(e, APP));

  window.addEventListener("popstate", (e) => handlePopstate(e, rutasNoModule, APP));
}