return ({TITLE, LINK}) => {
  return (
    <>
      <li class="nav-item">
        <a
          href=""
          data-link="${LINK}"
          class="link-dark px-2 link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        >
          ${TITLE}
        </a>
      </li>
    </>
  );
};