
export async function  inicio() {
  let svgHoja  = await import ("/components/svgHoja/svgHoja.js");
  return [svgHoja];
}