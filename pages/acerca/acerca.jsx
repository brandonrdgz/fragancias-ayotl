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
por el desarrollo sostenible y la tecnología. Siempre
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
  let luisText =
    `
Administrador de empresas, con especialidad en Project Management y
aficionado de las fragancias decidió impartir junto con los demás
miembros del equipo este proyecto que ayuda a conseguir la apreciación
de las materias primas mexicanas capturando su esencia en varias de
nuestras fragancias, el posicionamiento en el mercado nacional e
internacional con sus conocimientos y creatividad aportando ideas al
proyecto.
`
  let oscarText =
    `
Hola, me llamo Oscar y soy del sur de la Ciudad de México. Me apasiona
la naturaleza, el senderismo y la comida mexicana. Estudié Ecología en
la UNAM, sin embargo, la vida me condujo al mundo de la programación.
Aprendiendo tecnología me di cuenta de lo relevante que es aprender
cosas que te facilitan la vida. Eso me motivo a comenzar un Bootcamp
en Generation México donde me estoy formando profesionalmente como
Desarrollador Java Full Stack. Actualmente estoy desarollando partes
de un proyecto titulado "Ayotl" que es una e-commerce dedicada a la
venta de perfumes y fragancias sustentables.
`
  let neriText =
    `
Administrador de proyectos y aficionado de las fragancias decidido a
impartir junto con los demás miembros del equipo este proyecto que
ayuda a conseguir la apreciación de las materias primas mexicanas
capturando su esencia en varias de nuestras fragancias, el
posicionamiento en el mercado nacional con sus conocimientos y
creatividad aportando ideas al proyecto.
`
  let arturoText =
    `
Como programador Fullstack, me especializo en el desarrollo de
soluciones web completas, asegurando tanto el diseño visual como la
funcionalidad técnica en cada proyecto. Me apasiona crear experiencias
de usuario intuitivas y optimizar el rendimiento en el backend para
lograr sitios eficientes y atractivos.
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
            ${cardAcerca({ TITLE: "Carlos Peña", TEXT: carlosText })}
            ${cardAcercaImg({ IMG: "../../assets/imgs/team-imgs/carlos.jpg" })}
          </div>
        </div>

        <div class="container p-5 text-center hidden">
          <div class="d-flex align-items-center row">
            ${cardAcercaImg({ IMG: "../../assets/imgs/team-imgs/luis.JPG" })}
            ${cardAcerca({ TITLE: "Luis Angel Padilla", TEXT: luisText })}
          </div>
        </div>

        <div class="container p-5 text-center hidden">
          <div class="d-flex align-items-center row">
            ${cardAcerca({ TITLE: "Oscar Ortega", TEXT: oscarText })}
            ${cardAcercaImg({ IMG: "../../assets/imgs/team-imgs/oscar.jpg" })}
          </div>
        </div>

        <div class="container p-5 text-center hidden">
          <div class="d-flex align-items-center row">
            ${cardAcercaImg({ IMG: "../../assets/imgs/team-imgs/neri.jpg" })}
            ${cardAcerca({ TITLE: "Neri Gutiérrez", TEXT: neriText })}
          </div>
        </div>
      </div>
    </>
  )
}