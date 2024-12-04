export async function catalogo()
{
   let cardProduct  = await import ("../../components/cardProduct/cardProduct.js");
   return [cardProduct];
}