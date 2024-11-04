// Función para cargar CSS específico de una página
function cargarEstilos(id, url) {
  // Si ya existe, no lo cargues de nuevo
  if (document.getElementById(id)) return Promise.resolve();

  return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = url;

      link.onload = () => resolve();  // Confirma que el CSS ha cargado
      link.onerror = () => reject(`Error al cargar CSS en ${url}`);
      
      document.head.appendChild(link);
  });
}

// Función para cargar JS específico de una página
function cargarScript(id, url) {
  // Si ya existe, no lo cargues de nuevo
  if (document.getElementById(id)) return Promise.resolve();

  return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.defer = true;
      script.id = id;
      script.src = url;

      script.onload = () => resolve();  // Confirma que el JS ha cargado
      script.onerror = () => reject(`Error al cargar JS en ${url}`);

      document.head.appendChild(script);
  });
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

      // Carga el CSS y JS específicos de la página con await
      console.log("Cargando recursos...");
      await cargarEstilos("estilos-pagina", `./pages/${pagina}/${pagina}.css`);
      await cargarScript("script-pagina", `./pages/${pagina}/${pagina}.js`);
      console.log("Recursos cargados correctamente");
      
  } catch (error) {
      document.getElementById("main-content").innerHTML =
          "<p>Error al cargar la página.</p>";
      console.error("Error al cargar la página:", error);
  }
}

// Función de espera, si necesitas un retraso manual
function esperar(segundos) {
  return new Promise(resolve => {
      setTimeout(resolve, segundos * 1000);
  });
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
  const pagina = e.state ? e.state.pagina : "inicio";
  cargarPagina(pagina);
});

// Ejecuta el enrutador cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", iniciarEnrutador);
