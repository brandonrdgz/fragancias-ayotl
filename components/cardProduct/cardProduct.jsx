return (
  { 
    ID,
    TITLE,
    TAMAÑO,
    IMG,
    PRECIO,
    MONEDA,
  }
) => {
  return (
    <>
      <div class="product-box" data-id="${ID}" data-link="producto?${ID}">
        <img src="${IMG}" class="product-img" alt="${TITLE}" />
          <h5 class="product-title">${TITLE + " " + TAMAÑO}</h5>
          <span class="price">${"$" + PRECIO + MONEDA}</span>
          <div class="product-actions">
            <i class="bi bi-bag-fill add-cart"></i>
            <i class="bi bi-heart add-wishlist"></i>
          </div>
      </div>
    </>
  );
}