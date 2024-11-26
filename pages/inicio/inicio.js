
export async function  inicio() {
  let svgHoja  = await import ("/components/svgHoja/svgHoja.js");
  let dada  = await import ("/components/dada/dada.js");
  return [svgHoja, dada];
  // return [svgHoja];
  // return [dada];
}