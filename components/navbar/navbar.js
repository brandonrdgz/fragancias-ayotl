import { obtenerCarrito } from "../../pages/carrito/carrito.js";

export function init() {
  let menu = document.querySelector("#menu-icon");
  let navlist = document.querySelector(".navlist");
  const cartIcon = document.querySelector(".nav-cart");
  const cart = document.querySelector(".cart");
  const closeCart = document.querySelector("#close-cart");
  const searchContainer = document.querySelector(".search-container");
  const searchIcon = document.querySelector(".nav-search");

  searchIcon.addEventListener("click", () => {
    searchContainer.classList.toggle("active"); // Alternar clase "active"
  });

  menu.onclick = () => {
    menu.classList.toggle("bi-x");
    navlist.classList.toggle("open");
  };
  cartIcon.onclick = () => {
    cart.classList.add("active");
  };

  closeCart.onclick = () => {
    cart.classList.remove("active");
  };
}

export function renderizarCarritoEnNavbar() {
  const carrito = obtenerCarrito();
  const menu = document.getElementById("cart-dropdown-menu");
  const cartCount = document.getElementById("cart-count");

  // Limpiar contenido actual
  menu.innerHTML = "";

  // Renderizar productos
  carrito.forEach((producto) => {
    const item = document.createElement("li");
    item.className = "dropdown-item";
    item.innerHTML = `
      <div class="cart-item">
        <img src="${producto.img}" alt="${producto.title}" width="50" />
        <span>${producto.title}</span>
        <span>${producto.price} x ${producto.cantidad}</span>
      </div>
    `;
    menu.appendChild(item);
  });

  // Actualizar contador
  cartCount.innerText = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0,
  );
}

export default async function traerNavbar(URL) {
  try {
    const respuesta = await fetch(URL);
    // Verificar si la respuesta fue exitosa
    if (!respuesta.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const htmlNav = await respuesta.text();
    // console.log (htmlNav);

    return htmlNav;
  } catch (error) {
    console.error("Error al obtener la Navbar:", error);
  }
}
