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