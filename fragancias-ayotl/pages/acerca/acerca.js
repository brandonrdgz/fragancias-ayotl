export async function acerca() {
  let cardAcerca = await import("/fragancias-ayotl/components/cardAcerca/cardAcerca.js");
  let cardAcercaImg = await import(
    "/fragancias-ayotl/components/cardAcercaImg/cardAcercaImg.js"
  );
  return [cardAcerca, cardAcercaImg];
}
