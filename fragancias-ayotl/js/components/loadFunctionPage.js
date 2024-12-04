import { loadComponentsFromFunctionComponent } from "./loadComponentsFromFunctionComponent.js";

export async function loadFunctionPage(functionPage) {
  const { functionComponentCode, functionComponentParams } = await loadComponentsFromFunctionComponent(functionPage, true);
  return { 
    functionComponents : functionComponentCode,
    paramsForFunctions : functionComponentParams
  };
}