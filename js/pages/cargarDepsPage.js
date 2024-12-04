
export function cargarDepsPage(pageName) {
  // Si ya existe, no lo cargues de nuevo
  if (document.getElementById("deps-page")) return;

  const script = document.createElement("script");
  script.defer = true;
  script.id = "deps-page";
  script.src = `/pages/${pageName}/depsPage.js`;
  document.head.appendChild(script);
}