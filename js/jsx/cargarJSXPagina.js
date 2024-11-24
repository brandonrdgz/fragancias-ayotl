export async function cargarJSXPagina(pagina)
{
  try {
    // Carga el contenido HTML de la página
    const respuesta = await fetch(`/pages/${pagina}/${pagina}.jsx`);
    if (!respuesta.ok) {
      throw new Error("No se pudo obtener el jsx");
    }
    const componenteCodigo = (await respuesta.text())
    .replace("<>", "`")
    .replace("<\/>", "`");
    const componenteFunctionWrapper = new Function(componenteCodigo);

    // Regresar la función anónima (El componente funcion en este caso la pagina)
    return componenteFunctionWrapper();
    
  } catch (error) {
    throw new Error("No se pudo cargar la pagina. " + pagina);
    
  }
}