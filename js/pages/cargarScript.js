
// Función para cargar JS específico de una página
export function cargarScript(idScript, url) {
  // Si ya existe, no lo cargues de nuevo
  if (document.getElementById(idScript)) return;

  const script = document.createElement("script");
  script.defer = true;
  script.id = idScript;
  script.src = url;
  document.head.appendChild(script);
}