export async function producto() {
  let productoUnico  = await import ("../../js/components/productoUnico/productoUnico.js");
  return [productoUnico];
}
