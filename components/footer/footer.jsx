return ({footerElement}) => {
  return (
    <>
      <div id="footbar" class="container">
        <footer class="justify-content-between align-items-center py-3 mt-4 border-top border-danger d-flex flex-md-row flex-column-reverse">
          <p class="col-md-4 mb-0 text-body-secondary">© 2024 Ayotl</p>

          <a
            data-link="inicio"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <img class="logo-size" src="../../assets/imgs/logo.svg" alt="" />
          </a>

          <ul class="nav col-md-4 justify-content-center">
            ${footerElement({TITLE: "Perfumes", LINK: "catalogo"})}
            ${footerElement({TITLE: "Promociones", LINK: "inicio"})}
            ${footerElement({TITLE: "FAQs", LINK: "contactenos"})}
            ${footerElement({TITLE: "NewItemForm", LINK: "newitemform"})}
            ${footerElement({TITLE: "Nosotros", LINK: "acerca"})}
          </ul>
        </footer>
      </div>
    </>
  );
};