export function objectIsEmpty(object)
{
  if(typeof object !== 'object') throw new Error("param object necesita ser del type object");
  
  let isEmpty = true;
  for (const key in object) {
    isEmpty = false;
    break;
  }
  return isEmpty;
}