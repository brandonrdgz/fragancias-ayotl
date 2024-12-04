const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch("../../data/fragancias.json")
  .then((response) => response.json())
  .then((data) => {
    const producto = data.find((item) => item.id === productId);

    if (producto) {
      const productContainer = document.getElementById("product-container");
      productContainer.innerHTML = `
        <div class="product-details">
          <img src="${producto.img}" alt="${producto.title}" />
          <h1>${producto.title}</h1>
          <p>${producto.description}</p>
          <span>${producto.price}</span>
          <button class="btn add-cart">Agregar al Carrito</button>
        </div>
      `;
    } else {
      console.error("Producto no encontrado");
    }
  })
  .catch((error) =>
    console.error("Error al cargar los datos del producto:", error),
  );
