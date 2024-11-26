import { createNodesFromHTML } from "../html/createNodesFromHTML.js";
import { countParamsArrays } from "../components/countParamsArrays.js";
import { executeDependencies } from "../components/executeDependencies.js";
import { getResolvedDepencyObject } from "../components/getResolvedDepencyObject.js";
import { sumObjects } from "../utils/sumObjects.js";

export async function addComponentsToApp(APP, functionComponents = [], componentsParams = [], isPage = false, isBefore = false) {
  if (APP == false && !(APP instanceof Element))
    throw new Error("Parametro APP no puede ser falsy");
  for (let i = 0; i < functionComponents.length; i++) {
    let funcion = functionComponents[i];
    let parametro = componentsParams[i];
    // if (parametro['functionComponentName'].length > 1) {
      let finalObjectDependency = {};
      for (let index = 0; index < parametro['functionComponentName'].length; index++) {
        const paramName = parametro['functionComponentName'][index];
        const param = parametro[paramName];

        let cantidadDeArrays = countParamsArrays( parametro, paramName, 0);
        
        const resolvedDependencyObject = (cantidadDeArrays > 0)
        ? await getResolvedDepencyObject(cantidadDeArrays, { functionComponentName: paramName, [paramName]: param })
        : {[paramName]: param}
        ;
        finalObjectDependency = sumObjects(finalObjectDependency,resolvedDependencyObject);
      }

    // } else if (parametro['functionComponentName'].length > 0) {
    //   const paramName = parametro['functionComponentName'][0];
    //   let cantidadDeArrays = countParamsArrays(paramName, 0);
    //   let htmlString = "";

      // htmlString = (cantidadDeArrays > 0) ?
      //   await executeDependencies(cantidadDeArrays, funcion, parametro)
      //   :
      //   await funcion(parametro);

      // if (isPage) {
      //   const fragment = createNodesFromHTML(htmlString);
      //   APP.replaceChildren(...fragment.childNodes);
      // } else if (isBefore) {
      //   APP.parentElement.insertBefore(createNodesFromHTML(htmlString), APP);
      // } else {
      //   APP.appendChild(createNodesFromHTML(htmlString));
      // }
    // }
    
    let htmlString =
      await funcion(finalObjectDependency);

    if (isPage) {
      const fragment = createNodesFromHTML(htmlString);
      APP.replaceChildren(...fragment.childNodes);
    } else if (isBefore) {
      APP.parentElement.insertBefore(createNodesFromHTML(htmlString), APP);
    } else {
      APP.appendChild(createNodesFromHTML(htmlString));
    }
  }
}