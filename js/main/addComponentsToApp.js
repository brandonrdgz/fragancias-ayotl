import { createNodesFromHTML } from "../html/createNodesFromHTML.js";

export function addComponentsToApp(APP, componentesFuncion = [], parametrosParaLosComponentes = [])
{
  if(APP == false && !(APP instanceof Element))
    throw new Error("Parametro APP no puede ser falsy");
    
    for (let i = 0; i < componentesFuncion.length; i++) {
    let htmlString= componentesFuncion[i](parametrosParaLosComponentes[i])
    APP.appendChild(createNodesFromHTML(htmlString));
  }
}