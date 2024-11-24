import { loadComponentsFromFunctionComponent } from "./loadComponentsFromFunctionComponent.js";

export async function loadFunctionComponents(componentes = [],) {
  let functionComponents = [];
  let paramsForFunctions = [];
  for (let index = 0; index < componentes.length; index++) {
    const component = componentes[index];
    const { functionComponentCode, functionComponentParams } = await loadComponentsFromFunctionComponent(component);
    console.log(functionComponentCode);
    console.log(functionComponentParams);
    functionComponents.push(functionComponentCode);
    paramsForFunctions.push(functionComponentParams);
  }
  return { functionComponents, paramsForFunctions };
}