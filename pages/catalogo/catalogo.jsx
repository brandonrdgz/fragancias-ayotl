return async ({ cardProduct }) => {
  const IMG_FOLDER = "./assets/imgs/perfumes/";
  let obtenerProductos = (await import("../../js/utils/crudJSON.js"))[
    "obtenerProductos"
  ];

  // const productos = await obtenerProductos("http://127.0.0.1:8080/api/products");
  const productos = await obtenerProductos("../../data/fragancias.json");
  let perfumes = "";
  if (productos) {
    const divPerfumesContainer = document.querySelector("#perfumes");
    // caracteristicas.tamaño
    perfumes = productos.reduce((acc, val) => {
      const { price, name, img, id } = val;
      const ID = id;
      const TITLE = name;
      const IMG = img;
      const PRECIO = price;
      return (acc += cardProduct({
        ID,
        TITLE,
        IMG: `./assets/imgs/perfumes/${IMG}`,
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
