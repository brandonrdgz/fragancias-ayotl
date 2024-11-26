import { sumObjects } from "../utils/sumObjects.js"

export async function getResolvedDepencyObject(cantidadDeArrays, componentParam) {
  function getLastFunctionParam(parametro, paramName) {
    let arr = parametro[paramName];
    return arr[1];
  }
  let objectFinal = {};
  for (let indexAlfa = 0; indexAlfa < componentParam['functionComponentName'].length; indexAlfa++) {
    let callBacksArrayCallFirst = [];
    let callBacksArrayCallFirstNames = [];

    let paramName = componentParam['functionComponentName'][indexAlfa];
    let param = componentParam;

    for (let index = cantidadDeArrays; index >= 0; index--) {
      for (let i = 0; i < index; i++) { //Index no cambiara mientras ocurre este bucle
        param = getLastFunctionParam(param, paramName);
        paramName = param['functionComponentName'][0];
      }
      callBacksArrayCallFirstNames.push(param, paramName);
      param = (index < cantidadDeArrays) ?
        param[paramName][0]
        :
        param[paramName];
      callBacksArrayCallFirst.push(param);
      param = componentParam;
    }

    const initialObject = { [callBacksArrayCallFirstNames[0]]: callBacksArrayCallFirst[0] };

    const resultObject = callBacksArrayCallFirst.slice(1).reduce((prevObject, callback, index) => {
      const name = callBacksArrayCallFirstNames[index + 1];
      return { [name]: (...args) => callback(prevObject, args) };
    }, initialObject);

    objectFinal = sumObjects(objectFinal, resultObject);
  }
  return objectFinal;
}