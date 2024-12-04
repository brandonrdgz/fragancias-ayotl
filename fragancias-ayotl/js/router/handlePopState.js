import { cargarPagina } from "../pages/cargarPagina.js";

export function handlePopState(e, APP) {
  const pagina = e.state ? e.state.pagina : "p404";
  cargarPagina(pagina, APP);
}