var _a;
var hasKey = function (obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
};
// Test cases
var stringObj = { foo: "bar" };
console.log(hasKey(stringObj, "foo")); // true
console.log(hasKey(stringObj, "bar")); // false
var numberObj = { 1: "bar" };
console.log(hasKey(numberObj, 1)); // true
console.log(hasKey(numberObj, 2)); // false
var fooSymbol = Symbol("foo");
var barSymbol = Symbol("bar");
var symbolObj = (_a = {}, _a[fooSymbol] = "bar", _a);
console.log(hasKey(symbolObj, fooSymbol)); // true
console.log(hasKey(symbolObj, barSymbol)); // false
