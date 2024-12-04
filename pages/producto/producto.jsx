return async ({ productoUnico }) => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  let getProducto = (await import("/js/utils/crudJSON.js"))[
    "getProducto"
  ];

  let producto = await getProducto(productId);

  if (producto) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = productoUnico(
      {
        IMG: producto.img,
        TITLE: producto.title,
        DESCRIPTION: producto.description,
        PRICE: producto.price,
      }
    );
  } else {
    producto = "Producto no encontrado";
  }
  return (
    <>
      <div class="product-container">
        ${producto}
      </div>
    </>
  );
};
