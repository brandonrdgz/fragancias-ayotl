
export function executeDependencies(cantidadDeArrays, functionComponent, componentParam) {
  function getLastFunctionParam(parametro) {
    let arr = parametro[parametro['functionComponentName']];
    return arr[1];
  }
  
  let callBacksArrayCallFirst = [];
  let callBacksArrayCallFirstNames = [];
  
  let parametro = componentParam;
  for (let index = cantidadDeArrays; index >= 0; index--) {
    for (let i = 0; i < index; i++) { //Index no cambiara mientras ocurre este bucle
      parametro = getLastFunctionParam(parametro);
    }
    callBacksArrayCallFirstNames.push(parametro['functionComponentName']);
    parametro = (index < cantidadDeArrays) ?
      parametro[parametro['functionComponentName']][0]
      :
      parametro[parametro['functionComponentName']];
    callBacksArrayCallFirst.push(parametro);
    parametro = componentParam;
  }

  const initialObject = { [callBacksArrayCallFirstNames[0]]: callBacksArrayCallFirst[0] };

  const resultObject = callBacksArrayCallFirst.slice(1).reduce((prevObject, callback, index) => {
    const name = callBacksArrayCallFirstNames[index + 1];
    return { [name]: () => callback(prevObject) };
  }, initialObject);

  return functionComponent(resultObject);
}