export function executeAfter(resolve, miliS) {
  return new Promise(() => setTimeout(resolve, miliS));
}