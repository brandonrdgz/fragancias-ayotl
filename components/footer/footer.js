const footer = document.querySelector('footer');

footer.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') { // Verifica si el target es un enlace
    event.preventDefault(); // Evita el comportamiento predeterminado

    // Ejecuta tu código aquí
    console.log(`Enlace clickeado: ${event.target.href}`);
    
    // Lógica adicional si es necesario
  }
});