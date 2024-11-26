// carrito.js

let carrito = []; // Estado del carrito en memoria

// Agregar producto al carrito
export function agregarAlCarrito(producto) {
  const existente = carrito.find((item) => item.id === producto.id);
  if (existente) {
    existente.cantidad += 1; // Incrementar la cantidad si ya existe
  } else {
    carrito.push({ ...producto, cantidad: 1 }); // Agregar un nuevo producto
  }
  actualizarCarritoLocalStorage();
}

// Obtener productos del carrito
export function obtenerCarrito() {
  return carrito;
}

// Eliminar producto del carrito
export function eliminarDelCarrito(id) {
  carrito = carrito.filter((producto) => producto.id !== id);
  actualizarCarritoLocalStorage();
}

// Actualizar la lista en localStorage
function actualizarCarritoLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Cargar carrito desde localStorage
export function cargarCarritoDesdeLocalStorage() {
  const datos = localStorage.getItem("carrito");
  if (datos) {
    carrito = JSON.parse(datos);
  }
}
