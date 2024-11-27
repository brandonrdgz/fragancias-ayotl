export function getDependenciesNames(dependencyModule)
{ 
  if(dependencyModule['Module'] == false) throw new Error("El param dependencyModule debe ser un modulo");

  const dependencyNames = Object.keys(dependencyModule);

  return {dependencyModule, dependencyNames} ;
}