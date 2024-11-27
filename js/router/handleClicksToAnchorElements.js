import { cargarPagina } from "../pages/cargarPagina.js";

export function handleClicksToAnchorElements(event, APP) {
  const link = event.target.closest("[data-link]");
  if (!link) {
    return;
  }
  event.preventDefault();

  let pagina = link.getAttribute("data-link");

  cargarPagina(pagina, APP);
}
