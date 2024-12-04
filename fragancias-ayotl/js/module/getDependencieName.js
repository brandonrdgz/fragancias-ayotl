export function getDependencieName(dependencyModule)
{ 
  if(dependencyModule['Module'] == false) throw new Error("El param dependencyModule debe ser un modulo");

  const dependencyName = Object.keys(dependencyModule)[0];

  return {dependencyName} ;
}