export async function catalogo()
{
   let cardProduct  = await import ("../../js/components/cardProduct/cardProduct.js");
   return [cardProduct];
}