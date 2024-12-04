export function createNodesFromHTML(htmlString) {
  // Crear un contenedor temporal para mantener el HTML
  const tempContainer = document.createElement('div');

  // Insertar la cadena HTML en el contenedor
  tempContainer.innerHTML = htmlString.trim(); // Trim elimina espacios en blanco extra

  // Convertir el contenido del contenedor en nodos reales
  const fragment = document.createDocumentFragment();

  // Iterar sobre los hijos del contenedor y moverlos al fragmento
  while (tempContainer.firstChild) {
    fragment.appendChild(tempContainer.firstChild);
  }

  return fragment; // Devolver el fragmento con los nodos generados
} 