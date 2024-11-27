export function handlePopstate(e, APP) {
  const pagina = e.state ? e.state.pagina : "inicio";

  // let flagIsModule = getFlagIsModule(pagina, rutas);

  cargarPagina(pagina, APP);
}