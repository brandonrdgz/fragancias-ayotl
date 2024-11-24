// Función para cargar CSS específico de una página
function cargarEstilos(id, url) {
  if (document.getElementById(id)) return; // Si ya existe, no lo cargues de nuevo

  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

// Función para cargar JS específico de una página como script estándar
function cargarScript(id, url) {
  if (document.getElementById(id)) return; // Si ya existe, no lo cargues de nuevo

  const script = document.createElement("script");
  script.defer = true;
  script.id = id;
  script.src = url;
  document.head.appendChild(script);
}

// Función para cargar un módulo dinámicamente y ejecutar su contenido si es necesario
async function cargarYEjecutarFuncion(url) {
  try {
    console.log(`Cargando módulo desde URL: ${url}`);

    const modulo = await import(url); // Cargar el módulo dinámicamente

    if (modulo.default) {
      console.log("Ejecutando exportación predeterminada del módulo.");
      modulo.default(); // Ejecutar la función predeterminada si existe
    } else if (modulo.init) {
      console.log("Ejecutando función 'init' del módulo.");
      modulo.init(); // Ejecutar una función específica opcional como 'init'
    } else {
      console.log(
        "El módulo no tiene funciones específicas para ejecutar. Solo cargado.",
      );
    }
  } catch (error) {
    console.error("Error al cargar o ejecutar el módulo:", error);
  }
}

// Función para limpiar CSS y JS específicos al cambiar de página
function limpiarRecursosPagina() {
  const css = document.getElementById("estilos-pagina");
  const js = document.getElementById("script-pagina");
  if (css) css.remove();
  if (js) js.remove();
}

// Función para cargar el contenido principal, CSS y JS de cada página
async function cargarPagina(pagina, module = true) {
  try {
    limpiarRecursosPagina(); // Limpia recursos de la página anterior

    const respuesta = await fetch(`./pages/${pagina}/${pagina}.html`);
    if (!respuesta.ok) {
      document.getElementById("main-content").innerHTML =
        "<p>Página no encontrada.</p>";
      window.scrollTo(0, 0); // Desplaza al inicio incluso en caso de error
      return;
    }

    const contenido = await respuesta.text();
    document.getElementById("main-content").innerHTML = contenido;

    // Actualiza el historial
    window.history.pushState({ pagina }, "", `#${pagina}`);

    // Asegúrate de cargar estilos y scripts
    cargarEstilos("estilos-pagina", `./pages/${pagina}/${pagina}.css`);
    if (module) {
      await cargarYEjecutarFuncion(`./pages/${pagina}/${pagina}.js`);
    } else {
      cargarScript("script-pagina", `./pages/${pagina}/${pagina}.js`);
    }

    // Forzar scroll al inicio
    window.scrollTo(0, 0);
  } catch (error) {
    document.getElementById("main-content").innerHTML =
      "<p>Error al cargar la página.</p>";
    window.scrollTo(0, 0); // En caso de error también fuerza el scroll
    console.error("Error al cargar la página:", error);
  }
}

export function loadPage(page, id) {
  if (page === "product") {
    fetch("./pages/product/product.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("main-content").innerHTML = html;
        loadProductDetails(id); // Cargar los detalles del producto
      })
      .catch((error) => console.error("Error al cargar la página:", error));
  }
}

export function loadProductDetails(id) {
  // Obtener datos del producto usando el ID
  fetch("./js/crudJSON.js")
    .then((response) => response.json())
    .then((data) => {
      const producto = data.find((item) => item.id === id);
      if (producto) {
        document.getElementById("product-container").innerHTML =
          `<div class="single-product">
    <div class="row">
      <div class="col-6">
        <div class="product-image">
          <div class="product-image-main">
            <img src="" alt="" id="product-main-image" />
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="breadcrumb">
          <span><a data-link="inicio">Inicio</a></span>
          <span><a data-link="catalogo">Productos</a></span>
          <span class="active">Perfume</span>
        </div>

        <div class="product">
          <div class="product-title">
            <h2></h2>
          </div>
          <div class="product-price">
            <span class="sale-price">$0.00</span>
          </div>

          <div class="product-details">
            <h3>Descripcion</h3>
            <p></p>
          </div>
          <div class="product-color">
            <h4></h4>
            <div class="color-layout">
              <input
                type="radio"
                name="color"
                value="black"
                class="color-input"
              />
              <label for="black" class="black"></label>
              <input
                type="radio"
                name="color"
                value="red"
                class="color-input"
              />
              <label for="red" class="red"></label>

              <input
                type="radio"
                name="color"
                value="blue"
                class="color-input"
              />
              <label for="blue" class="blue"></label>
            </div>
          </div>
          <span class="divider"></span>

          <div class="product-btn-group">
            <div class="button buy-now"><i class="bx bxs-zap"></i> Comprar</div>
            <div class="button add-cart">
              <i class="bx bxs-cart"></i>
            </div>
            <div class="button heart">
              <i class="bx bxs-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
      } else {
        console.error("Producto no encontrado");
      }
    })
    .catch((error) =>
      console.error("Error al cargar los datos del producto:", error),
    );
}

// Inicialización del SPA, escuchando los cambios en el hash
window.addEventListener("hashchange", handleRouteChange);

// Función para manejar los cambios en el hash y cargar la página correspondiente
function handleRouteChange() {
  const hash = window.location.hash; // Obtener el hash de la URL
  const [page, params] = hash.slice(1).split("?");
  const paramsObj = new URLSearchParams(params);
  const id = paramsObj.get("id"); // Obtener el id del producto

  if (page && id) {
    loadPage(page, id); // Cargar la página correspondiente
  }
}

// Ejecutar cuando se carga la página inicialmente
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash) {
    handleRouteChange(); // Cargar la página según el hash actual
  }
});

// Inicializa la página principal
function iniciarEnrutador() {
  const paginaInicial = window.location.hash.substring(1) || "inicio";

  let flagModule = true;
  switch (paginaInicial) {
    case "inicio":
    case "contactenos":
      flagModule = false; // Estas páginas no usan módulos
      break;

    default:
      flagModule = true; // Otras páginas sí usan módulos
      break;
  }
  cargarPagina(paginaInicial, flagModule);
}

// Maneja clics en elementos con data-link para navegación
document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-link]");
  if (!link) return;

  event.preventDefault();

  const dataLink = link.getAttribute("data-link");
  if (!dataLink) {
    console.error("El atributo data-link está vacío o no válido.");
    return;
  }

  const [pagina, opcion] = dataLink.split(" ");
  const flagModule = !(opcion === "noModule");

  cargarPagina(pagina, flagModule);
});

// Maneja el historial para navegación hacia atrás y adelante
window.addEventListener("popstate", (e) => {
  const pagina = e.state?.pagina || "inicio";
  cargarPagina(pagina)
    .then(() => {
      window.scrollTo(0, 0); // Forzar el scroll al inicio
    })
    .catch((error) => console.error(error));
});

// Ejecuta el enrutador cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", iniciarEnrutador);

// Exportación opcional para usar en otros scripts
export const bodyContainer = document.querySelector("body");
export const navContainer = document.querySelector("nav");
