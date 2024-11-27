return async ({ cardProduct }) => {
  const IMG_FOLDER = "/assets/imgs/perfumes/";
  let obtenerProductos = (await import("/js/utils/crudJSON.js"))['obtenerProductos'];

  const productos = await obtenerProductos("/data/fragancias.json");

  let perfumes = "";
  if (productos) {
    const divPerfumesContainer = document.querySelector(
      "#perfumes"
    );
    // caracteristicas.tamaño
    perfumes = productos.reduce((acc, val) => {
      
      const {precio, nombre, img, moneda, caracteristicas, id } = val;
      const ID= id;
      const TITLE= nombre;
      const TAMAÑO= caracteristicas.tamaño;
      const IMG= IMG_FOLDER + img;
      const PRECIO= precio;
      const MONEDA= moneda;
      return acc+= cardProduct(
        {

          ID,
          TITLE,
          TAMAÑO,
          IMG,
          PRECIO,
          MONEDA
        }
      );
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
}