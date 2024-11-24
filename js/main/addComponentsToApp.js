import { createNodesFromHTML } from "../html/createNodesFromHTML.js";

export function addComponentsToApp(APP, functionComponents = [], parametrosParaLosComponentes = [])
{
  if(APP == false && !(APP instanceof Element))
    throw new Error("Parametro APP no puede ser falsy");
    
    for (let i = 0; i < functionComponents.length; i++) {
    let htmlString= functionComponents[i](parametrosParaLosComponentes[i])
    APP.appendChild(createNodesFromHTML(htmlString));
  }
}