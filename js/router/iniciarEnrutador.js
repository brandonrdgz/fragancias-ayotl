import { cargarPagina } from "../pages/cargarPagina.js";

export async function iniciarEnrutador(APP) {
  if (!APP || !(APP instanceof Element)) {
    throw new Error(
      !APP
        ? `El parámetro no contiene la propiedad APP`
        : `El parámetro APP no es del tipo Element`
    );
  }
  const paginaInicial = window.location.hash.substring(1) || "inicio";
  await cargarPagina(paginaInicial, APP);
}

