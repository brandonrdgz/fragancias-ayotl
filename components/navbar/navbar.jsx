return ({ navbarElement, searchBar }) => {

  function rawString(input) {
    return String.raw`${input}`;
  }
  const svgFavoritos = rawString`
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="25"
  height="25"
  fill="currentColor"
  class="bi bi-heart"
  viewBox="0 0 16 16"
>
  <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
</svg>   
`;
  const svgCarrito = rawString`
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="25"
  height="25"
  fill="currentColor"
  class="bi bi-cart3"
  viewBox="0 0 16 16"
>
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4z" />
  <path d="M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
</svg>   
`;
  const svgUsuario = rawString`
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="25"
  height="25"
  fill="currentColor"
  class="bi bi-person"
  viewBox="0 0 16 16"
>
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 14s-1 0-1-1 1-4 7-4 7 3 7 4-1 1-1 1H2z" />
</svg>
`;


  return (
    <>
      <header>
        <nav class="navbar navbar-expand-sm bg-body-tertiary fixed-top shadow p-3 mb-5 bg-body-tertiary rounded">
          <div class="container-fluid">
            <a class="navbar-brand" data-link="inicio">
              <img
                src="assets/imgs/logo.svg"
                class="logo-size"
                alt="logo"
                id="logo"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              ${searchBar()}

              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                ${navbarElement({TITLE: "Favoritos", SVG: svgFavoritos})}
                ${navbarElement({TITLE: "Carrito", SVG: svgCarrito})}
                ${navbarElement({TITLE: "Usuario", SVG: svgUsuario})}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
