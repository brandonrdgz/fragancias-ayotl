import {navbar} from './components/navbar/navbar.js'
import {footer} from './components/footer/footer.js'
import {main } from './js/main/main.js'


const APP = document.getElementById("main-content");


main(
  {
    navbar,
    APP,
    footer
  }
).then();