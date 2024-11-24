return (TITLE,PRECIO,IMAGE) => {
  return (
    <>
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="${IMAGE}"
            class="card-img-top"
            alt="${TITLE}"
          />
          <div class="card-body text-center">
            <h5 class="card-title">
              ${TITLE}
            </h5>
            <p class="card-text">${PRECIO}</p>
            <a href="#" class="btn btn-primary">
              Comprar ahora
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
/* <div class="col-md-4 mb-4">
<div class="card">
   <img src="${ IMG_FOLDER + element.img}" class="card-img-top" alt="${element.nombre}">
   <div class="card-body text-center">
      <h5 class="card-title">${element.nombre + " " + element.caracteristicas.tamaño}</h5>
      <p class="card-text">${element.precio + element.moneda}</p>
      <a href="#" class="btn btn-primary">Comprar ahora</a>
   </div>
</div>
</div> */