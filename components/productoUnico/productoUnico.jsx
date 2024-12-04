return ({ IMG, TITLE, DESCRIPTION, PRICE }) => {
  return (
    <>
      <div class="product-details">
        <img src="${IMG}" alt="${TITLE}" />
        <h1>${TITLE}</h1>
        <p>${DESCRIPTION}</p>
        <span>${PRICE}</span>
        <button class="btn add-cart">Agregar al Carrito</button>
      </div>
    </>
  );
};
