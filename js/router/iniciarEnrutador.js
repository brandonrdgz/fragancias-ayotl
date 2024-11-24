import { cargarPagina } from "./cargarPagina.js";

export function iniciarEnrutador() {
  const paginaInicial = window.location.hash.substring(1) || "inicio";
  cargarPagina(paginaInicial);
}

