return async ({ cardAcerca, cardAcercaImg}) => {
  let executeAfter = (await import ("/js/utils/executeAfter.js"))['executeAfter'];

  let taniaText = 
  `
Tania Falcón es licenciada en Relaciones Internacionales,
desarrolladora web y cofundadora de Fragancias Ayotl. Con una
trayectoria que abarca la colaboración con clientes de diversas
nacionalidades y contextos, Tania se destaca por su enfoque ético y su
compromiso con la sostenibilidad. Su trabajo refleja sus principios y
su dedicación a causas sociales y medioambientales, siempre orientada
a crear soluciones que generen un impacto positivo.
`
  let tereText = 
  `
Teresa Ortiz es una politóloga y administradora pública, apasionada
por el desarrollo sostenible y la tecnología. Desde joven, siempre
estuvo interesada en la política y cómo esta afectaba el medio
ambiente y la sociedad. Después de completar sus estudios
universitarios, Teresa comenzó a trabajar en organizaciones no
gubernamentales enfocadas en la protección del medio ambiente y la
creación de políticas públicas para la sostenibilidad. Sin embargo, su
interés en la tecnología no desaparecía. Decidió aprender todo lo que
pudiera sobre desarrollo web, para poder contribuir a la creación de
soluciones tecnológicas que ayudaran a resolver problemas ambientales
y sociales. Teresa se especializó en tecnologías web, programación y
diseño, y trabajó en proyectos que integraban soluciones tecnológicas
en la política pública y en la gestión de recursos naturales. Su
enfoque en la tecnología y la sustentabilidad la llevó a destacar en
proyectos nacionales de gran importancia y participando en
conferencias y eventos en la Ciudad de México.  
`
  let nuestroOrigen =
    `
Observamos que la industria de la perfumería tiene un impacto
ambiental negativo, ya que las sustancia empleadas para su
elaboración, como disolventes, alcoholes y aceites sintéticos, se
volatilizan con facilidad y contaminan las aguas residuales. Como
aficionados de los perfumes, no podíamos mirar hacia otro lado ante
esta situación, por lo que Ayotl surge como respuesta a una demanda de
perfumes y fragancias sustentables. Su nombre proviene del nahuatl
ayotl, el cual tiene un doble significado entre “zumo de hierbas
maceradas o estrujadas” y “tortuga”
`
  let carlosText =
    `
Con sus conocimientos amplios en programación y gusto por las
fragancias, Carlos ha ayudado a implementar sus conocimientos en la
búsqueda por popularizar nuestra marca y llevarla al mundo por medio
del conocimiento de nuestra marca en la web ayudando en la
estructuración de la página y ayudando a miembros del equipo en la
estructuración de código.
`
const resolve = () => {
  const hiddenElements = document.querySelectorAll(".hidden");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }); 
  hiddenElements.forEach((el) => observer.observe(el));
}

  executeAfter(resolve, 300);

  return (
    <>
      <div class="container text-end hidden">
        <h4 class="p-2 fs-1 font-titulos">Sobre Nosotros</h4>
      </div>
      <div class="container-fluid p-5 hidden">
        <div class="container p-5 text-center">
          <div class="d-flex align-items-center row">
            <div
              class="col-12 col-md-6 d-flex justify-content-center align-items-center order-last order-md-first"
            >
              <img
                src="/assets/imgs/image_7.png"
                class="img-fluid hidden"
                alt="perfume"
              />
            </div>
            <div
              class="col-12 col-md-6 order-md-first order-md-last text-start hidden"
            >
              <h4 class="p-2 fs-3 font-titulos">Nuestra misión</h4>
              <p class="ps-2 fs-5 font-parrafros my-auto p-2">
                Tu aroma refleja quién eres. En Ayotl, queremos que nuestras
                fragancias y perfumes hagan algo más que hacerte sentir bien. Queremos
                generar en ti experiencias aromáticas fuera de este mundo, de manera
                ética, ecológica y con una alta calidad. Nos dedicamos a ofrecer un
                servicio excepcional que supere tus expectativas. Buscamos que
                experimentes aromas florales y dulces, cálidos y elevados, perfectos
                para el día y la noche.
              </p>
            </div>
          </div>
        </div>

        <div class="container p-5 text-center hidden">
          <div class="d-flex align-items-center row">
            ${cardAcerca({ TITLE: "Nuestro Origen", TEXT: nuestroOrigen })}
            ${cardAcercaImg({ IMG: "../../assets/imgs/image_8.png" })}
          </div>
        </div>
        <div class="container text-start hidden">
          <h4 class="p-2 fs-1 font-titulos">Equipo</h4>
        </div>

        <div class="container p-5 text-center hidden">
          <div class="d-flex align-items-center row">
            ${cardAcerca({ TITLE: "Tania Falcón", TEXT: taniaText })}
            ${cardAcercaImg({ IMG: "../../assets/imgs/team-imgs/tania.jpg" })}
          </div>
        </div>

        <div class="container p-5 text-center hidden">
          <div class="d-flex align-items-center row">
            ${cardAcercaImg({ IMG: "../../assets/imgs/team-imgs/tere.jpg" })}
            ${cardAcerca({ TITLE: "Teresa Ortiz", TEXT: tereText })}
          </div>
        </div>
        <div class="container p-5 text-center hidden">
          <div class="d-flex align-items-center row">
            ${cardAcercaImg({ IMG: "../../assets/imgs/team-imgs/carlos.jpg" })}
            ${cardAcerca({ TITLE: "Carlos Peña", TEXT: carlosText })}
          </div>
        </div>
      </div>
    </>
  )
}