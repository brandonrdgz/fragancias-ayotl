export function cleanPreviousComps() {
  // Seleccionar todos los elementos <link> cuyo id empieza con "componente-"
  const links = document.querySelectorAll('link[id^="component-"]');

  // Iterar sobre los elementos seleccionados y eliminarlos del DOM
  if (links.length > 0 ) links.forEach(link => link.remove());

}
