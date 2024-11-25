import { cargarJSXComponente } from "../jsx/cargarJSXComponente.js"
import { cargarJSXPagina } from "../jsx/cargarJSXPagina.js";
import { getDependencieName } from "../module/getDependencieName.js";
import { objectIsEmpty } from "../utils/objectIsEmpty().js";


// ull@x
// export async function loadComponentsFromFunctionComponent(functionComponent) {
//   if (typeof functionComponent !== 'function') throw new Error("Param functionComponent debe ser una función.");

//   let funcCompParams = {}; 
//   let funcCompName = functionComponent.name;
//   let funcCompCode = await cargarJSXComponente(funcCompName); // @x - x 
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
//         funcCompParams[functionComponentName] = functionComponentCode;
//       }else
//       {
//         funcCompParams[functionComponentName] = {functionComponentCode, functionComponentParams};
//       }
//     } 
//   }

//   if (dependencyModules) {
//     await resolveDependencies(dependencyModules);
//   }
//   // ull&y+a= fCode = a-fcode - paramObj = {} - fCompName =  a |
//   // ull&y= fCode = y-fCode - paramObj = {a: a-fCode} - fCompName = y
//   return { 
//     functionComponentCode: funcCompCode, 
//     functionComponentParams: funcCompParams, 
//     functionComponentName: funcCompName 
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





export async function loadComponentsFromFunctionComponent(functionComponent) {
  if (typeof functionComponent !== 'function') throw new Error("Param functionComponent debe ser una función.");

  let funcCompParams = {};
  let funcCompName = functionComponent.name;
  let funcCompCode = (functionComponent.name.endsWith("Pagina"))
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
      
      if (objectIsEmpty(functionComponentParams)) {
        funcCompParams[functionComponentName] = functionComponentCode;
        funcCompParams['functionComponentName'] = functionComponentName;
      } else {
        funcCompParams[functionComponentName] = [functionComponentCode, functionComponentParams ];
        funcCompParams['functionComponentName'] = functionComponentName;
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