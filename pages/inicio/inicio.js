export async function  inicio() {
  let svgHoja  = await import ("../../components/svgHoja/svgHoja.js");
  let searchBar = await import ("../../components/searchBar/searchBar.js");
  let heroElement = await import ("../../components/heroElement/heroElement.js");
  return [svgHoja, searchBar, heroElement];
}