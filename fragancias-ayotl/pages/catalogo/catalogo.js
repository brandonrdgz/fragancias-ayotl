export async function catalogo()
{
   let cardProduct  = await import ("/fragancias-ayotl/components/cardProduct/cardProduct.js");
   return [cardProduct];
}