
// Función para cargar CSS específico de una página
function cargarEstilos(id, url) {
  // Si ya existe, no lo cargues de nuevo
  if (document.getElementById(id)) return;

  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

// Función para cargar JS específico de una página
function cargarScript(id, url) {
  // Si ya existe, no lo cargues de nuevo
  if (document.getElementById(id)) return;

  const script = document.createElement("script");
  script.type = "module";
  // script.defer = true;
  script.id = id;
  script.src = url;
  document.head.appendChild(script);
}

// Función para limpiar CSS y JS específicos al cambiar de página
function limpiarRecursosPagina() {
  // Elimina el CSS y JS de la página anterior si existen
  const css = document.getElementById("estilos-pagina");
  const js = document.getElementById("script-pagina");
  if (css) css.remove();
  if (js) js.remove();
}

// Función para cargar contenido principal, CSS y JS de cada página
async function cargarPagina(pagina) {
  try {
    // Limpia recursos de la página anterior
    limpiarRecursosPagina();

    // Carga el contenido HTML de la página
    const respuesta = await fetch(`./pages/${pagina}/${pagina}.html`);
    if (!respuesta.ok) {
      document.getElementById("main-content").innerHTML =
        "<p>Página no encontrada.</p>";
      return;
    }

    // Inserta el contenido de la página en el contenedor principal
    const contenido = await respuesta.text();
    document.getElementById("main-content").innerHTML = contenido;

    // Actualiza el historial
    window.history.pushState({ pagina }, "", `#${pagina}`);

    // Carga el CSS y JS específicos de la página
    cargarEstilos("estilos-pagina", `./pages/${pagina}/${pagina}.css`);
    cargarScript("script-pagina", `./pages/${pagina}/${pagina}.js`);
  } catch (error) {
    document.getElementById("main-content").innerHTML =
      "<p>Error al cargar la página.</p>";
    console.error("Error al cargar la página:", error);
  }
}

// Inicializa la página principal
function iniciarEnrutador() {
  const paginaInicial = window.location.hash.substring(1) || "inicio";
  cargarPagina(paginaInicial);
}

// Evento delegado para manejar clics en los elementos con data-link
document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-link]");
  if (link) {
    event.preventDefault();
    const pagina = link.getAttribute("data-link");
    cargarPagina(pagina);
  }
});

// Maneja el historial para navegación hacia atrás y adelante
window.addEventListener("popstate", (e) => {
  const pagina = e.state.pagina || "inicio";
  cargarPagina(pagina);
});

// Ejecuta el enrutador cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", iniciarEnrutador);

const bodyContainer = document.querySelector("body");