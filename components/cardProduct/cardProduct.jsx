return (
  { 
    ID,
    TITLE,
    IMG,
    PRECIO,
  }
) => {
  return (
    <>
      <div class="product-box" data-id="${ID}">
        <img src="${IMG}" class="product-img" alt="${TITLE}" data-link="producto?${ID}" />
          <h5 class="product-title">${TITLE}</h5>
          <span class="price">${"$" + PRECIO}</span>
          <div class="product-actions">
            <button type = "submit"><i class="bi bi-bag-fill add-cart"></i></button>
            <button type = "submit"><i class="bi bi-heart add-wishlist"></i></button>
          </div>
      </div>
    </>
  );
}