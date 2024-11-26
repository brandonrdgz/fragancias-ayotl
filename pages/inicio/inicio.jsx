return ({svgHoja , dada }) => {

  return (
    <>
      ${svgHoja({LEFT: "10%", DURATION: "10s"})}
      ${svgHoja({LEFT: "25%", DURATION: "12s"})}
      ${svgHoja({LEFT: "40%", DURATION: "9s"})}
      ${svgHoja({LEFT: "55%", DURATION: "14s"})}
      ${svgHoja({LEFT: "70%", DURATION: "11s"})}
      ${svgHoja({LEFT: "85%", DURATION: "8s"})}
      <div class="d-flex align-items-center" style="min-height: 65vh;">
        <div class="container py-5 px-0 my-5">
          <p class="mb-0 font-titulos text-center text-uppercase ayotl-size">
            AYOTL
          </p>
          <p class="text-center font-parrafros text-uppercase ayotl-sub-size">Fragancias y perfumes</p>
          ${dada()}
        </div>
      </div>
    </>
  )
}