export async function compA () {
  let compB = await import ("../compB/compB.js");
  return [compB];
}