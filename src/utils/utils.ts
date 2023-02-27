export function isNil(any: any): any is undefined | null {
  return typeof any === 'undefined' || any === null;
}

export function padNumber(amountOfNumber: number, number?: number) {
  if (isNil(number)) return null;

  if (typeof number !== 'number') {
    throw new Error('only number can use padNumber function');
  }

  const maxNumber = 10 ** (amountOfNumber - 1);
  let stringNumber = String(number);
  if (number < maxNumber) {
    stringNumber = stringNumber.padStart(amountOfNumber, '0');
  }

  return stringNumber;
}

export function filterNumber(inputString: string) {
  return inputString.replace(/\D/g, '');
}

export function createUpdatedObject<T extends { [key: string]: any }, K extends keyof T>(
  object: T,
  key: K,
  newValue: T[K]
) {
  const newObject = { ...object };
  newObject[key] = newValue;
  return newObject;
}

export function createUpdatedArray<T extends Array<unknown>, K extends keyof T>(array: T, key: K, newValue: T[K]) {
  const newObject = array.slice() as T;
  newObject[key] = newValue;
  return newObject;
}

export function checkIsArrayLast(array: any[], index: number) {
  return index >= array.length - 1;
}