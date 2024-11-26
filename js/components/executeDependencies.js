
export async function executeDependencies(cantidadDeArrays, functionComponent, componentParam) {
  function getFunctionParam(parametro) {
    let arr = parametro[parametro['functionComponentName']];
    return arr[1];
  }
  let callBacksArrayCallFirst = [];
  let callBacksArrayCallFirstNames = [];

  // let parametro = componentParam;

  for (let indexAlfa = 0; indexAlfa < componentParam['functionComponentName'].length; indexAlfa++) {
    let callBacksArrayCallFirst = [];
    let callBacksArrayCallFirstNames = [];

    const paramName = componentParam['functionComponentName'][indexAlfa];
    const param = componentParam[paramName];

    for (let index = cantidadDeArrays; index >= 0; index--) {
      for (let i = 0; i < index; i++) { //Index no cambiara mientras ocurre este bucle
        param = getFunctionParam(param);
      }
      callBacksArrayCallFirstNames.push(param[paramName]);
      param = (index < cantidadDeArrays) ?
        param[paramName][0]
        :
        param[paramName];
      callBacksArrayCallFirst.push(param);
      param = componentParam[paramName];
    }

    const initialObject = { [callBacksArrayCallFirstNames[0]]: callBacksArrayCallFirst[0] };

    const resultObject = callBacksArrayCallFirst.slice(1).reduce((prevObject, callback, index) => {
      const name = callBacksArrayCallFirstNames[index + 1];
      return { [name]: (...args) => callback(prevObject, args) };
    }, initialObject);

  }

  return await functionComponent(resultObject);
}