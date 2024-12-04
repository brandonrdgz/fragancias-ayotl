return async ({ cardProduct }) => {
  const IMG_FOLDER = "/fragancias-ayotl/assets/imgs/perfumes/";
  let obtenerProductos = (await import("/fragancias-ayotl/js/utils/crudJSON.js"))[
    "obtenerProductos"
  ];

  const productos = await obtenerProductos("http://127.0.0.1:8080/api/products");
console.log(productos);
  let perfumes = "";
  if (productos) {
    const divPerfumesContainer = document.querySelector("#perfumes");
    // caracteristicas.tamaño
    perfumes = productos.reduce((acc, val) => {
      const { price, name, imageFile, id } = val;
      const ID = id;
      const TITLE = name;
      const IMG = imageFile;
      const PRECIO = price;
      return (acc += cardProduct({
        ID,
        TITLE,
        IMG,
        PRECIO,
      }));
    }, "");
  }
  return (
    <>
      <section class="shop" id="catalog-container">
        <h2 class="section-title">Perfumes Ayotl</h2>
        <div class="shop-content" id="perfumes">
          ${perfumes}
        </div>
      </section>
    </>
  );
};
