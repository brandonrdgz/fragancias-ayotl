export async function cargarJSXComponente(componente)
{
  try {
    // Carga el contenido HTML de la página
    const respuesta = await fetch(`./components/${componente}/${componente}.jsx`);
    if (!respuesta.ok) {
      throw new Error("No se pudo obtener el jsx");
    }
    const componenteCodigo = (await respuesta.text())
    .replace("<>", "`")
    .replace("<\/>", "`");
    const componenteFunctionWrapper = new Function(componenteCodigo);
    // Regresar la función anónima (El componente funcion)
    return componenteFunctionWrapper();
    
  } catch (error) {
    throw error;
  }
}