return ({ TITLE, ICON, IS_SEARCH = false }) => {
  const search_input = (IS_SEARCH) ?
   `<input type="text" class="search-bar" placeholder="Buscar..." />`
   : "";
   const special_li = (TITLE === "Wishlist") ? 'data-link="wishlist"' : '';
   const classSearch = (IS_SEARCH) ? 'search-container' : '';
  return (
    <>
       
      <li ${special_li} class="${classSearch}">
        ${search_input}
        <i class="${ICON}">
        </i>
        <span class="nav-label font-parrafos">${TITLE}</span>
      </li>
    </>
  );
};
