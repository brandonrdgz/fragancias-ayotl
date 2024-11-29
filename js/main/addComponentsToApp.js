import { createNodesFromHTML } from "../html/createNodesFromHTML.js";
import { countParamsArrays } from "../components/countParamsArrays.js";
import { executeDependencies } from "../components/executeDependencies.js";
import { objectIsEmpty } from "../utils/objectIsEmpty.js";
export async function addComponentsToApp(APP, functionComponents = [], componentsParams = [], isPage = false, isBefore = false) {
  if (APP == false && !(APP instanceof Element))
    throw new Error("Parametro APP no puede ser falsy");
  for (let i = 0; i < functionComponents.length; i++) {
    let funcion = functionComponents[i];
    let parametros = componentsParams[i];
    let finalArgument = {}; 
    for (let iBeta = 0; iBeta < parametros.length; iBeta++) {
      const parametro = parametros[iBeta];
      const parametroName = parametro['functionComponentName']
      finalArgument = (objectIsEmpty(parametro))
      ?
      {[parametroName]: parametro[parametroName]}
      :
      { ...finalArgument, [parametroName]: parametro[parametroName]}
    }
    // let cantidadDeArrays = countParamsArrays(parametro, 0);
    
    // htmlString = (cantidadDeArrays > 0) ?
    //   await executeDependencies(cantidadDeArrays, funcion, parametro)
    //   :
    let htmlString = await funcion(finalArgument);
    
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