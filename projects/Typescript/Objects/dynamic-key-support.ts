const hasKey = (obj: object, key: string | number | symbol): boolean => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

// Test cases
const stringObj = { foo: "bar" };
console.log(hasKey(stringObj, "foo")); // true
console.log(hasKey(stringObj, "bar")); // false

const numberObj = { 1: "bar" };
console.log(hasKey(numberObj, 1)); // true
console.log(hasKey(numberObj, 2)); // false

const fooSymbol = Symbol("foo");
const barSymbol = Symbol("bar");
const symbolObj = { [fooSymbol]: "bar" };
console.log(hasKey(symbolObj, fooSymbol)); // true
console.log(hasKey(symbolObj, barSymbol)); // false
