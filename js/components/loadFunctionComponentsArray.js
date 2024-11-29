import { loadComponentsFromFunctionComponent } from "./loadComponentsFromFunctionComponent.js";

export async function loadFunctionComponentsArray(componentes = []) {
  let functionComponents = [];
  let paramsForFunctions = [];
  for (let index = 0; index < componentes.length; index++) {
    const component = componentes[index];
    const { functionComponentCode, functionComponentParams } = await loadComponentsFromFunctionComponent(component);
    functionComponents.push(functionComponentCode);
    paramsForFunctions.push(functionComponentParams);
  }
  return { functionComponents, paramsForFunctions };
}