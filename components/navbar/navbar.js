export async function navbar () {
   let navbarElement = await import ("../navbarElement/navbarElement.js");
   // Regresando objecto Modulo (la idea es regresar sus dependencias)
   return navbarElement;
}