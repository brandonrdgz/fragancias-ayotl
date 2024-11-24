export function init() {
  const cartIcon = document.querySelector(".cart-nav");
  const cart = document.querySelector(".cart");
  const closeCart = document.querySelector("#close-cart");

  cartIcon.onclick = () => {
    cart.classList.add("active");
  };

  closeCart.onclick = () => {
    cart.classList.remove("active");
  };

  if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }

  function ready() {
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
      var button = removeCartButtons[i];
      button.addEventListener("click", removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
      input.addEventListener("change", quantityChanged);
    }

    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
      var button = addCart[i];
      button.addEventListener("click", addCartClicked);
    }
  }

  function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
  }

  function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateTotal();
  }

  function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title =
      shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
  }

  function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.querySelector(".cart-content");

    // Verificar si el producto ya existe en el carrito
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
      if (cartItemsNames[i].innerText === title) {
        alert("Ya has agregado este artículo a tu carrito");
        return;
      }
    }

    // HTML con botones - y +
    var cartBoxContent = `
    <img src="${productImg}" class="cart-img" />
    <div class="detail-box">
      <div class="cart-product-title">${title}</div>
      <div class="cart-price">${price}</div>
      <div class="quantity-control">
        <button class="btn-quantity decrease">-</button>
        <span class="cart-quantity">1</span>
        <button class="btn-quantity increase">+</button>
      </div>
    </div>
    <i class="bi bi-trash3 cart-remove"></i>
  `;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);

    // Agregar eventos a los botones del nuevo producto
    cartShopBox
      .querySelector(".decrease")
      .addEventListener("click", decreaseQuantity);
    cartShopBox
      .querySelector(".increase")
      .addEventListener("click", increaseQuantity);
    cartShopBox
      .querySelector(".cart-remove")
      .addEventListener("click", removeCartItem);

    updateTotal();
  }

  function decreaseQuantity(event) {
    const button = event.target;
    const quantityElement = button.nextElementSibling; // Elemento <span> con la cantidad
    let quantity = parseInt(quantityElement.innerText);

    if (quantity > 1) {
      quantity--;
      quantityElement.innerText = quantity;
      updateTotal();
    }
  }

  function increaseQuantity(event) {
    const button = event.target;
    const quantityElement = button.previousElementSibling; // Elemento <span> con la cantidad
    let quantity = parseInt(quantityElement.innerText);

    quantity++;
    quantityElement.innerText = quantity;
    updateTotal();
  }

  function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content");
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
      var cartBox = cartBoxes[i];
      var priceElement = cartBox.getElementsByClassName("cart-price");
      var quantityElement = cartBox.getElementsByClassName("cart-quantity");
      var price = parseFloat(priceElement.innerText.replace("$", ""));
      var quantity = parseInt(quantityElement.innerText);
      total += price * quantity;
    }
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total-price").innerText = "$" + total;
  }
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
