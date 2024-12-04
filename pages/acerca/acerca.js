export async function acerca() {
  let cardAcerca = await import("../../js/components/cardAcerca/cardAcerca.js");
  let cardAcercaImg = await import(
    "../../js/components/cardAcercaImg/cardAcercaImg.js"
  );
  return [cardAcerca, cardAcercaImg];
}
