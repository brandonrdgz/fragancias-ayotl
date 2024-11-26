import { cargarPagina } from "../pages/cargarPagina.js";

export function handleClicksToAnchorElements(event, APP) {
  const link = event.target.closest("[data-link]");
  if (!link) {
    // throw new Error("No existe atributo data-link en a seleccionado");
    return;
  }
  event.preventDefault();

  let pagina = link.getAttribute("data-link");

  // let x = pagina.split(" ");

  // pagina = x[0];

  // let flagNoModule = !(x.length === 2 && x[1] === "noModule");
  
  cargarPagina(pagina, APP);
}
