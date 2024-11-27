import { createNodesFromHTML } from "../html/createNodesFromHTML.js";
import { countParamsArrays } from "../components/countParamsArrays.js";
import { executeDependencies } from "../components/executeDependencies.js";

export async function addComponentsToApp(APP, functionComponents = [], componentsParams = [], isPage = false, isBefore = false) {
  if (APP == false && !(APP instanceof Element))
    throw new Error("Parametro APP no puede ser falsy");
  for (let i = 0; i < functionComponents.length; i++) {
    let funcion = functionComponents[i];
    let parametro = componentsParams[i];
    let cantidadDeArrays = countParamsArrays(parametro, 0);
    let htmlString = "";

    htmlString = (cantidadDeArrays > 0) ?
      await executeDependencies(cantidadDeArrays, funcion, parametro)
      :
      await funcion(parametro);
    
    if(isPage)
    {
      const fragment = createNodesFromHTML(htmlString);
      APP.replaceChildren(...fragment.childNodes);
    }else if(isBefore)
    {
      APP.parentElement.insertBefore(createNodesFromHTML(htmlString), APP);
    }else
    {
      APP.appendChild(createNodesFromHTML(htmlString));
    }
  }
}