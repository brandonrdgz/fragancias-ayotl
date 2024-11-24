return (TITLE, TEXT) => {
  return (
    <>
      <div class="col-12 col-md-6 text-start">
        <h4 class="p-2 fs-3 font-titulos">${TITLE}</h4>
        <p class="ps-2 fs-5 font-parrafros">
          ${TEXT}
        </p>
      </div>
    </>
  );
};
