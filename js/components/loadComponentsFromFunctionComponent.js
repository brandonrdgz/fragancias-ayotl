import { cargarJSXComponente } from "../jsx/cargarJSXComponente.js"
import { cargarJSXPagina } from "../jsx/cargarJSXPagina.js";
import { getDependencieName } from "../module/getDependencieName.js";
import { objectIsEmpty } from "../utils/objectIsEmpty.js";


export async function loadComponentsFromFunctionComponent(functionComponent, isPage = false) {
  if (typeof functionComponent !== 'function') throw new Error("Param functionComponent debe ser una función.");

  let funcCompParams = { 'functionComponentName': [] };
  let funcCompName = functionComponent.name;
  let funcCompCode = (isPage)
  ?
  await cargarJSXPagina(funcCompName)
  :
  await cargarJSXComponente(funcCompName);
  const dependencyModules = await functionComponent();
  
  const visited = new Set();
  async function resolveDependencies(dependencyModules) {
    for (let dependency of dependencyModules) {
      const { dependencyName } = getDependencieName(dependency);

      if (visited.has(dependencyName)) {
        console.warn(`Ciclo detectado: ${dependencyName}`);
        continue;
      }
      visited.add(dependencyName);

      const { functionComponentCode, functionComponentParams, functionComponentName } = await loadComponentsFromFunctionComponent(dependency[dependencyName]);
      if (functionComponentParams['functionComponentName'].length === 0) {
        funcCompParams[functionComponentName] = functionComponentCode;
        funcCompParams['functionComponentName'].push(functionComponentName);
      } else {
        funcCompParams[functionComponentName] = [functionComponentCode, functionComponentParams ];
        funcCompParams['functionComponentName'].push(functionComponentName);
      }
    }
  }

  if (dependencyModules) {
    await resolveDependencies(dependencyModules);
  }
  return {
    functionComponentCode: funcCompCode,
    functionComponentParams: funcCompParams,
    functionComponentName: funcCompName
  };
}