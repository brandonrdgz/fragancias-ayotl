import { createNodesFromHTML } from "../html/createNodesFromHTML.js";
import { countParamsArrays } from "../components/countParamsArrays.js";
import { executeDependencies } from "../components/executeDependencies.js";

export function addComponentsToApp(APP, functionComponents = [], componentsParams = []) {
  // [
  //   (TEXT) => TEXT,
  //   ({compC}) => compC("dada"),
  //   ({compB}) => compB(),
  //   ({compA}) => compA(),
  // ] 
  //   const dada = ({compA}) => compA();
  //   const compA = ({compB}) => compB();
  //   const compB = ({compC}) => compC("dada");
  //   const compC = (TEXT) => TEXT;
  // let x = dada({ compA: () => compA({ compB: () => compB({ compC }) }) });
  // console.log(x);

  // const dada = ({ compA }) => compA;
  // const compA = ({ compB }) => compB;
  // const compB = ({ compC }) => compC("dada");
  // const compC = (TEXT) => TEXT;

  // let x = dada({ compA: compA({ compB: compB({ compC: compC }) }) });

  // console.log(x); // Outputs: "dada"
  // // return;
  if (APP == false && !(APP instanceof Element))
    throw new Error("Parametro APP no puede ser falsy");
  for (let i = 0; i < functionComponents.length; i++) {
    let funcion = functionComponents[i];
    let parametro = componentsParams[i];
    let cantidadDeArrays = countParamsArrays(parametro, 0);
    let htmlString = "";

    htmlString = (cantidadDeArrays > 0) ?
      executeDependencies(cantidadDeArrays, funcion, parametro)
    :
      funcion(parametro);
    APP.appendChild(createNodesFromHTML(htmlString));
  }
}