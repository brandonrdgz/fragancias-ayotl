
export async function  inicioPagina() {
  let svgHoja  = await import ("/components/svgHoja/svgHoja.js");
  return [svgHoja];
}