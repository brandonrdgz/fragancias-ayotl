return ({ svgHoja, searchBar, heroElement }) => {

  /* ${svgHoja({ LEFT: "10%", DURATION: "10s" })}
  ${svgHoja({ LEFT: "25%", DURATION: "12s" })}
  ${svgHoja({ LEFT: "40%", DURATION: "9s" })}
  ${svgHoja({ LEFT: "55%", DURATION: "14s" })}
  ${svgHoja({ LEFT: "70%", DURATION: "11s" })}
  ${svgHoja({ LEFT: "85%", DURATION: "8s" })} */

  return (
    <>
      <div class="main-hero" style="min-height: 85vh;">
        <div class="marca-text-container">
          <h1 class="font-titulos text-uppercase ayotl-size">
            AYOTL
          </h1>
          <p class="font-parrafros text-uppercase ayotl-sub-size">
            Fragancias y perfumes
          </p>
        </div>
        <div class="description-container">
          <p class="font-parrafros">
            Empresa 100% Mexicana.
            En Ayotl queremos generar en ti experiencias aromáticas fuera de este mundo, de manera ética, ecológica y
            con una alta calidad.
          </p>
        </div>
        <div class="searchbar-container">
          ${searchBar()}
        </div>
        <div class="container-main-button">
          <button class="button-catalog font-parrafros" data-link="catalogo">
            Ver Catálogo
          </button>
        </div>
        <div class="container-product">
       
        </div>
      </div>
    </>
  )
}