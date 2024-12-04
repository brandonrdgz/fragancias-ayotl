import { cargarJSXComponente } from "../jsx/cargarJSXComponente.js"
import { cargarJSXPagina } from "../jsx/cargarJSXPagina.js";
import { getDependencieName } from "../module/getDependencieName.js";
// import { objectIsEmpty } from "../utils/objectIsEmpty.js";

// ull@x
// export async function loadComponentsFromFunctionComponent(functionComponent) {
//   if (typeof functionComponent !== 'function') throw new Error("Param functionComponent debe ser una función.");
//   let localCompParams = {}; 
//   let localCompName = functionComponent.name;
//   let localCompCode = await cargarJSXComponente(localCompName); // @x - x 
//   /* @x 1
//    ull&y - y | ull&y+a - a
//   */
//   /* @x 2
//    ull&z - z | ull&y+b - b
//   */
//   const dependencyModules = await functionComponent(); // @x - [y, z] 
//   /* @x 1
//     ull&y - a | ull&y+a - null
//   */
//   /* @x 2
//     ull&z - b | ull&y+b - c | ull&y+b - null
//   */
//   async function resolveDependencies(dependencyModules) {
//     for (let dependency of dependencyModules) { // @x = [y,z] 
//       /* @x 1
//         ull&y - [a]
//       */
//       /* @x 2
//         ull&z - [b]
//         ull&z+b - [c]
//       */
//       const { dependencyName } = getDependencieName(dependency); // @x 1- y | ull&y - a
//       // @x 2- z | ull&z - b | ull&b -c 
//       // @x 1($-ull&y | $-ull&y+a)
//       // @x 2($-ull&z | $-ull&z+b | $-ull&z+c )
//       const {functionComponentCode, functionComponentParams, functionComponentName} = loadComponentsFromFunctionComponent(dependency[dependencyName]);
//       /*
//         @x 1
//         //continue ull&y # ull&y+a=
//         //continue @x 1# ull&y=
//       */
//       if(objectIsEmpty(functionComponentParams))
//       {
//         localCompParams[functionComponentName] = functionComponentCode;
//       }else
//       {
//         localCompParams[functionComponentName] = {functionComponentCode, functionComponentParams};
//       }
//     } 
//   }
//   if (dependencyModules) {
//     await resolveDependencies(dependencyModules);
//   }
//   // ull&y+a= fCode = a-fcode - paramObj = {} - fCompName =  a |
//   // ull&y= fCode = y-fCode - paramObj = {a: a-fCode} - fCompName = y
//   return { 
//     functionComponentCode: localCompCode, 
//     functionComponentParams: localCompParams, 
//     functionComponentName: localCompName 
//   };
// }
// let result = {
//   xFcode: 'x', 
//   xParams: { 
//     yName: { 
//       yFcode: 'y', 
//       yParams: { aName: 'a' } 
//     },
//     zName: { 
//       zFcode: 'z', 
//       zParams: { 
//         bName: {
//           bFcode: 'b', 
//           bParams: { cName: 'c' } 
//         }
//       }
//     }
//   }
// };


export async function loadComponentsFromFunctionComponent(functionComponent, isPage = false) {
  if (typeof functionComponent !== 'function') throw new Error("Param functionComponent debe ser una función.");

  let localCompParams = [];
  let localCompName = functionComponent.name;
  let localCompCode = (isPage)
  ?
  await cargarJSXPagina(localCompName)
  :
  await cargarJSXComponente(localCompName);
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
      let localArrayParams = [];
      if (functionComponentParams.length === 0) { //Quiere decir que el componente no tiene parametros
        localArrayParams = [{[functionComponentName] : functionComponentCode, 'functionComponentName':  functionComponentName}];
      } else {
        for (let index = 0; index < functionComponentParams.length; index++) {
          const objectParam = functionComponentParams[index];
          const funcParamName = objectParam['functionComponentName'];
          localArrayParams.push({[functionComponentName]: objectParam[funcParamName], 'functionComponentName': funcParamName})
        }
      }
      localCompParams = [...localCompParams, ...localArrayParams];
    }
  }

  if (dependencyModules) {
    await resolveDependencies(dependencyModules);
  }
  return {
    functionComponentCode: localCompCode,
    functionComponentParams: localCompParams,
    functionComponentName: localCompName,
  };
}