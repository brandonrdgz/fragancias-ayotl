export async function compB () {
  let compC = await import ("../compC/compC.js");
  return [compC];
}