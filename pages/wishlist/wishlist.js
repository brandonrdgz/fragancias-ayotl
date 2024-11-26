// Variables de estado
let products = [];

// Función para agregar un producto a la wishlist
export function agregarAlaWishlist(producto) {
  // Verificar si el producto ya está en la wishlist
  const existente = products.find((p) => p.id === producto.id);
  if (!existente) {
    products.push(producto); // Si no está, agregarlo a la lista
    alert(`Producto "${producto.name}" añadido a la wishlist`);
  } else {
    alert(`El producto "${producto.name}" ya está en tu wishlist.`);
  }

  // Guardar en localStorage
  localStorage.setItem("wishlist", JSON.stringify(products));
  actualizarWishlist();
}

// Función para actualizar la interfaz de la wishlist
function actualizarWishlist() {
  const wishlist = document.getElementById("wishlist");
  const totalCount = document.getElementById("total-count");

  // Limpiar la lista
  wishlist.innerHTML = "";

  // Renderizar los productos
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} 
      <button class="remove" data-id="${product.id}">Eliminar</button>`;
    wishlist.appendChild(li);
  });

  // Actualizar el contador de productos
  totalCount.textContent = products.length;

  // Escuchar eventos de eliminación
  wishlist.querySelectorAll(".remove").forEach((button) =>
    button.addEventListener("click", (event) => {
      const index = event.target.dataset.id;
      products = products.filter((product) => product.id !== index);
      localStorage.setItem("wishlist", JSON.stringify(products)); // Actualizar el localStorage
      actualizarWishlist();
    }),
  );
}

// Función para cargar productos desde localStorage
export function cargarWishlistDesdeLocalStorage() {
  const data = localStorage.getItem("wishlist");
  if (data) {
    products = JSON.parse(data);
    actualizarWishlist();
  }
}

// Inicializar la lista de la wishlist cuando se carga la página
export function initWishlist() {
  cargarWishlistDesdeLocalStorage(); // Cargar desde localStorage al iniciar
  actualizarWishlist(); // Actualizar la interfaz
}

// Inicializar la lista de la wishlist cuando se carga la página
document.addEventListener("DOMContentLoaded", cargarWishlistDesdeLocalStorage);
