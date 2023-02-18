export const arrayToString = (array: any[], key: string, delimiter: string) =>
  array.map(u => u[key]).join(delimiter);
