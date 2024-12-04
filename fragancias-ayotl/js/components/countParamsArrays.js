export function countParamsArrays(parameter, acc = 0) {
  parameter = parameter[parameter['functionComponentName']]
  if (Array.isArray(parameter)) {
    // Incrementa el acumulador por 1 para este array y revisa el índice 1 recursivamente.
    return countParamsArrays(parameter[1], acc + 1);
  }
  // Si no es un array, simplemente devuelve el acumulador.
  return acc;
}