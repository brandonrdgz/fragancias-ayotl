import traerNavbar from '../components/navbar/navbar.js'
import traerFooter from '../components/footer/footer.js'
import { bodyContainer } from '../app.js';

traerNavbar("./components/navbar/navbar.html").then(navbar => {
   if (navbar) {
      bodyContainer.insertAdjacentHTML("afterbegin", navbar);
   }
}
)

traerFooter("./components/footer/footer.html").then(footer => {
   if (footer) {
      bodyContainer.insertAdjacentHTML("beforeend", footer);
   }
}
)