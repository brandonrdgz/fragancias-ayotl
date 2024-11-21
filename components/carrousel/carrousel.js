// import sanitize from "../../utils/sanitize.js"

export default function Carrousel({ images = [] } = {}) {
   images = (!Array.isArray(images)) ? [] : images;

   let imagesPart = images.reduce((acc, val, i) => acc += (i>0) ? 
   `<div class="carousel-item" style="background-image: url('${val}')"></div>`
   : "", 
   `<div class="carousel-item active" style="background-image: url('${images[0]}')"></div>`);
   console.log(imagesPart);
   return `
<div class="carousel">
${imagesPart}
   <div class="carousel-control">
      <div class="wheel">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" width="100" height="50">
            <path d="M50 0 C20 20 20 40 50 50 C80 40 80 20 50 0" fill="#4CAF50" />
            <path d="M50 5 C25 20 25 35 50 45 C75 35 75 20 50 5" fill="#45a049" />
         </svg>
      </div>
      <div class="left-arrow"></div>
      <div class="right-arrow"></div>
   </div>
   <div class="carousel-nav">
      <div class="carousel-nav-item active"></div>
      <div class="carousel-nav-item"></div>
      <div class="carousel-nav-item"></div>
      <div class="carousel-nav-item"></div>
   </div>
</div>
 `
}