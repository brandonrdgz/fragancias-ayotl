export async function dada () {
  let compA = await import ("../compA/compA.js")
  return [compA];
}