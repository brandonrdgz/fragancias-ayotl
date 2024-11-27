return ({TITLE, SVG}) => {
  return (
    <>
      <li class="nav-item" id="item">
        <a class="nav-link active" aria-current="page" href="#">
          ${SVG}
          <span class="d-sm-block d-sm-none ms-2">${TITLE}</span>
        </a>
      </li>
    </>
  );
};
