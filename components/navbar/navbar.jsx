return async ({ navbarElement }) => {
  let executeAfter = (await import("/js/utils/executeAfter.js"))['executeAfter'];

  function init() {
    let menu = document.querySelector("#menu-icon");
    let navlist = document.querySelector(".navlist");
    const cartIcon = document.querySelector(".nav-cart");
    const cart = document.querySelector(".cart");
    const closeCart = document.querySelector("#close-cart");
    const searchContainer = document.querySelector(".search-container");
    const searchIcon = document.querySelector(".nav-search");

    searchIcon.onclick = () => {
      searchContainer.classList.toggle("active"); // Alternar clase "active"
    };

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

  executeAfter(init, 300);
  return (
    <>
      <header>
        <a class="logo"
        ><img src="../../assets/imgs/logo.svg" data-link="inicio"
          /></a>
        <ul class="navlist">
          <li class="font-parrafos"><a data-link="acerca">Nosotros</a></li>
          <li class="font-parrafos"><a data-link="catalogo">Tienda</a></li>
          <li class="font-parrafos"><a data-link="contactenos">Contactanos</a></li>
          <div class="right-content">
            <ul>
              ${navbarElement({ TITLE: "Buscar", ICON: "bi bi-search nav-search", IS_SEARCH: true })}
              ${navbarElement({ TITLE: "Wishlist", ICON: "bi bi-heart-fill nav-heart" })}
              ${navbarElement({ TITLE: "Carrito", ICON: "bi bi-bag-fill nav-cart" })}
              ${navbarElement({ TITLE: "Buscar", ICON: "bi bi-person-fill nav-user" })}
            </ul>
          </div>
        </ul>

        <div class="bi bi-list" id="menu-icon"></div>
        <div class="cart" id="cart-dropdown-menu">
          <h2 class="cart-title font-titulos">Tu Carrito</h2>
          <div class="cart-content"></div>
          <div class="total">
            <div class="total-title font-parrafos">Total</div>
            <div class="total-price font-parrafos">$0</div>
          </div>
          <button type="button" class="btn-buy font-parrafos" data-link="carrito">
            Comprar Ahora
          </button>
          <i class="bi bi-x" id="close-cart"></i>
        </div>
      </header>

    </>
  );
};