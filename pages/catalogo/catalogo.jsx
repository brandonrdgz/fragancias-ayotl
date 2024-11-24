return async (TITLE, {CardProducts}) => {
  const IMG_FOLDER = "./assets/imgs/perfumes/";

  const productos = await obtenerProductos("./data/fragancias.json");
  let PEFUMES = "";
  if (productos) {
    // console.log("Lista de productos:", productos);
    const divPerfumesContainer = document.querySelector(
      "#AQUI_VAN_LOS_PERFUMES"
    );
    productos.reduce((acc, val) => {
      acc += CardProducts(val);
    }, "");
  } else {
    console.log("oma wea");
  }
  return (
    <>
      <section class="py-5">
        <div class="container">
          <h2 class="text-center mb-4">${TITLE}</h2>
          <div class="row" id="AQUI_VAN_LOS_PERFUMES"></div>
          ${PEFUMES}
        </div>
      </section>
    </>
  );
};
