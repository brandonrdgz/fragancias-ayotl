export async function producto() {
  let productoUnico  = await import ("/components/productoUnico/productoUnico.js");
  return [productoUnico];
}
