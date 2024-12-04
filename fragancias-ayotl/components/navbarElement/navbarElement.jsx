return ({ TITLE, ICON, IS_SEARCH = false }) => {
  const search_input = (IS_SEARCH) ?
    `<input type="text" class="search-bar" placeholder="Buscar..." />`
    : "";

  const classSearch = (IS_SEARCH) ? 'search-container' : '';

  const dataLink = {
    Wishlist: "data-link=wishlist",
    Cuenta: "data-link=login",
  }[TITLE] || "";


  return (
    <>
      <li ${dataLink} class="${classSearch}">
        ${search_input}
        <i class="${ICON}">
        </i>
        <span class="nav-label font-parrafos">${TITLE}</span>
      </li>
    </>
  );
};
