return ({svgHoja}) => {


  return (
    <>
      ${svgHoja({LEFT: "10", DURATION: "10"})}
      ${svgHoja({LEFT: "25", DURATION: "12"})}
      ${svgHoja({LEFT: "40", DURATION: "9"})}
      ${svgHoja({LEFT: "55", DURATION: "14"})}
      ${svgHoja({LEFT: "70", DURATION: "11"})}
      ${svgHoja({LEFT: "85", DURATION: "8"})}
      <div class="d-flex align-items-center" style="min-height: 65vh;">
        <div class="container py-5 px-0 my-5">
          <p class="mb-0 font-titulos text-center text-uppercase ayotl-size">
            AYOTL
          </p>
          <p class="text-center font-parrafros text-uppercase ayotl-sub-size">Fragancias y perfumes</p>

        </div>
      </div>
    </>
  )
}