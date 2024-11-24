import { cargarJSXComponente } from "../jsx/cargarJSXComponente.js";

export async function cargarComponentesLayout(componentes =[] , ) {
   let parametrosParaLosComponentes = [];
   let componentesFuncion = [];
 
   for (let index = 0; index < componentes.length; index++) {
     const component = componentes[index];
     componentesFuncion.push(await cargarJSXComponente(component.name));
     const componenteDependenciasModulo =  await component();
   
     const nombresDeExportaciones = Object.keys(componenteDependenciasModulo);
     const nombresDependencias = [];
     const dependencias = [];
     let objectParametro = {};
 
     for (let i = 0; i < nombresDeExportaciones.length; i++) {
       //Esto solo sirve considerando que las dependencias del componente todas son funciones.
       dependencias.push(await cargarJSXComponente(nombresDeExportaciones[i]));
       nombresDependencias.push(nombresDeExportaciones[i]);
     }
     for (let i = 0; i < nombresDependencias.length; i++) {
       objectParametro[nombresDependencias[i]] = dependencias[i];
     }
     parametrosParaLosComponentes.push(objectParametro);
   }
 
   return {componentesFuncion, parametrosParaLosComponentes};
}