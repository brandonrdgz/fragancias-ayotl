// export default function ProductCard({ src = "", alt = "", title = "", price = "", marca = "" } = {})
// {
// function sanitize(str) {
//   return String(str)
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#39;");
// }
// src = sanitize(src);
// alt = sanitize(alt);
// title = sanitize(title);
// price = sanitize(price);
// marca = sanitize(marca);

//   return `
// <div class="product-card">
//    <img src="${src}" alt="${alt}">
//    <div class="product-info">
//        <h3>${title}</h3>
//        <p class="price">${price}</p>
//    </div>
//    <div class="categories-bar">
//        <span class="category floral">${marca}</span>
//    </div>
// </div>
// `
// }

export default function ProductCard({ src = "", alt = "", title = "", price = "", marca = "" } = {}) {
  function sanitize(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  src = sanitize(src);
  alt = sanitize(alt);
  title = sanitize(title);
  price = sanitize(price);
  marca = sanitize(marca);

  return `
<div class="col-12 col-sm-6 col-md-4 mb-4">
  <div class="producto-perfume">
    <a href="" >
      <div class="">
        <img src="${src}" class="" alt="${alt}">
        <div class="">
            <h5 class="font-parrafros">${title}</h5>
            <p class="">${price}</p>
        </div>
      </div>
      <div class="">
        <span class="">${marca}</span>
      </div>
    </a>
  </div>
</div>
`
}