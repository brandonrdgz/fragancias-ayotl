import traerNavbar from './utils/traerNavbar.js'
import traerFooter from './utils/traerFooter.js'

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
  script.defer = true;
  script.id = id;
  script.src = url;
  document.head.appendChild(script);
}

async function cargarYEjecutarFuncion(url) {
  try {
    // Cargar el módulo dinámicamente
    const modulo = await import(url);

    // Llamar a una función específica dentro del módulo
    if (modulo.logic_main) {
      modulo.logic_main();
    } else {
      console.error("La función especificada no existe en el módulo");
    }
  } catch (error) {
    console.error("Error al cargar el módulo:", error);
  }
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
async function cargarPagina(pagina, isModule = true) {
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
    if (isModule) {
      await cargarYEjecutarFuncion(`./pages/${pagina}/${pagina}.js`);
    } else {
      cargarScript("script-pagina", `./pages/${pagina}/${pagina}.js`);
    }
  } catch (error) {
    document.getElementById("main-content").innerHTML =
      "<p>Error al cargar la página.</p>";
    console.error("Error al cargar la página:", error);
  }
}






function handleClicksToAnchorElements (event) {
  const link = event.target.closest("[data-link]");
  if (!link) {
    // throw new Error("No existe atributo data-link en a seleccionado");
    return;
  }
  event.preventDefault();
  
  let pagina = link.getAttribute("data-link");

  let x = pagina.split(" ");
  
  pagina = x[0];
  
  let flagNoModule = !(x.length === 2 && x[1] === "noModule");
  cargarPagina(pagina, flagNoModule);
}

function getFlagIsModule(pagina, rutas) {
  return (rutas.filter(current => current === pagina + " noModule").length === 1 )
  ? false
  : true;

}

// Inicializa la página principal
function iniciarEnrutador(rutas = []) {
  const paginaInicial = window.location.hash.substring(1) || "inicio";
  let flagIsModule = getFlagIsModule(paginaInicial, rutas);
  cargarPagina(paginaInicial, flagIsModule);
}

function getNoModuleRoutes() {
  return [... new Set(Array.from(document.querySelectorAll('footer a[data-link$=" noModule"]'))
    .map(link => link.getAttribute('data-link'))
  )];
}

function handlePopstate(e, rutas) {
  const pagina = e.state ? e.state.pagina : "inicio";
  
  let flagIsModule = getFlagIsModule(pagina, rutas);

  cargarPagina(pagina, flagIsModule);
}

async function mainLogic() {
  // Paso 1 : Cargar la información proveniente del html footer
  let navbar = await traerNavbar("./components/navbar/navbar.html");
  let footer = await traerFooter("./components/footer/footer.html");


  if (!navbar && !footer) {
    throw new Error("No se pudo cargar el Navbar ni el Footer");
  }

  bodyContainer.insertAdjacentHTML("afterbegin", navbar);
  bodyContainer.insertAdjacentHTML("beforeend", footer);

  let rutasNoModule = getNoModuleRoutes();
  // Paso 2 : Utilizar dicha información para crear las rutas con modulos o sin modulos
  iniciarEnrutador(rutasNoModule);

  // Paso 3 : 
    // Evento delegado para manejar clics en los elementos con data-link
  document.addEventListener("click", handleClicksToAnchorElements);

  // Maneja el historial para navegación hacia atrás y adelante
  window.addEventListener("popstate", (e) => handlePopstate(e, rutasNoModule));
}













const bodyContainer = document.querySelector("body");

mainLogic().then();