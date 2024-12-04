export async function  inicio() {
  let svgHoja  = await import ("/fragancias-ayotl/components/svgHoja/svgHoja.js");
  let searchBar = await import ("/fragancias-ayotl/components/searchBar/searchBar.js");
  let heroElement = await import ("/fragancias-ayotl/components/heroElement/heroElement.js");
  return [svgHoja, searchBar, heroElement];
}