export async function producto() {
  let productoUnico  = await import ("/fragancias-ayotl/components/productoUnico/productoUnico.js");
  return [productoUnico];
}
