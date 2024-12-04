import { loadComponentsFromFunctionComponent } from "../components/loadComponentsFromFunctionComponent.js";
import { getDependenciesNames } from "../module/getDependenciesNames.js";

export async function loadPageDependencies(dependencyModules = []) {
  let functionComponents = [];
  let paramsForFunctions = [];
  for (let index = 0; index < dependencyModules.length; index++) {
    const {dependencyModule, dependencyNames} = getDependenciesNames(dependencyModules[index]);
    for (let i = 0; i < dependencyNames.length; i++) {
      const {functionComponentCode, functionComponentParams } = await loadComponentsFromFunctionComponent(dependencyModule[dependencyNames[i]]);
      functionComponents.push(functionComponentCode);
      paramsForFunctions.push(functionComponentParams);
    }
  }
  return {functionComponents, paramsForFunctions};
}