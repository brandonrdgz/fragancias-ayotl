export async function  inicio() {
  let svgHoja  = await import ("../../js/components/svgHoja/svgHoja.js");
  let searchBar = await import ("../../js/components/searchBar/searchBar.js");
  let heroElement = await import ("../../js/components/heroElement/heroElement.js");
  return [svgHoja, searchBar, heroElement];
}