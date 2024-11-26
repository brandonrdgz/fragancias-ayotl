export function countParamsArrays(parameter, paramName = "", acc = 0) {
  let param = parameter[paramName]
  if (Array.isArray(param)) {
    if(param[1]['functionComponentName'].length > 0)
    {
      let resultados = [];
      for (let index = 0; index < param[1]['functionComponentName'].length; index++) {
        resultados.push(countParamsArrays(param[1] ,param[1]['functionComponentName'][index], acc = acc + 1));
        
      }
      return Math.max(...resultados);
    }else
    {
      return countParamsArrays(param[1], param[1]['functionComponentName'][0], acc = acc + 1);

    }
  }
  // Si no es un array, simplemente devuelve el acumulador.
  return acc;
}