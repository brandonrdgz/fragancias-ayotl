
export async function footer() {
   let footerElement  = await import ("../footerElement/footerElement.js");
   return [footerElement];
}