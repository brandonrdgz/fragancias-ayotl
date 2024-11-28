export async function acerca() {
  let cardAcerca = await import("/components/cardAcerca/cardAcerca.js");
  let cardAcercaImg = await import(
    "/components/cardAcercaImg/cardAcercaImg.js"
  );
  return [cardAcerca, cardAcercaImg];
}
