import { cargarPagina } from "../pages/cargarPagina.js";

export function handleClicksToAnchorElements(event, APP) {
  const link = event.target.closest("[data-link]");
  if (!link) {
    return;
  }
  event.preventDefault();

  let pagina = link.getAttribute("data-link");
  let result = pagina.split("?");
  
  pagina = result[0];
  window.history.pushState({ pagina }, "", `#${pagina}`);
  if(result.length > 1 )  
  {
    const url = new URL(window.location.href);
    url.searchParams.set("product", result[1]);
    window.history.pushState({}, '', url);

  }
  cargarPagina(pagina, APP);
}
