export function cargarEstilos(idCss, url) {
  // Si ya existe, no lo cargues de nuevo
  if (document.getElementById(idCss)) return;

  const link = document.createElement("link");
  link.id = idCss;
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}