return async ({ cardProduct }) => {
  const IMG_FOLDER = "./assets/imgs/perfumes/";
  let obtenerProductos = (await import ("/js/utils/crudJSON.js"))['obtenerProductos'];
  
  const productos = await obtenerProductos("/data/fragancias.json");
  
  let PERFUMES = "";
  if (productos) {
    const divPerfumesContainer = document.querySelector(
      "#AQUI_VAN_LOS_PERFUMES"
    );
    productos.reduce((acc, val) => {
      const { precio, nombre, img } = val;
      const TITLE = nombre;
      const PRECIO = precio;
      const IMAGE = IMG_FOLDER + img;
      PERFUMES += cardProduct({ TITLE, PRECIO, IMAGE });
    }, "");
  } 
  return (
    <>
      <section class="py-5">
        <div class="container">
          <h2 class="text-center mb-4">Nuestros Productos</h2>
          <div class="row" id="AQUI_VAN_LOS_PERFUMES"></div>
          ${PERFUMES}
        </div>
      </section>
    </>
  );
}