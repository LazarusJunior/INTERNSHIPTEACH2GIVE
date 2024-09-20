
//filterAndSort Function
const filterAndSort = (filterFn, ...numbers) => {
  return numbers.filter(filterFn).sort((a, b) => a - b);
}
const isEven = (num) => num % 2 === 0;
console.log(filterAndSort(isEven, 3, 8, 6, 2));



// merge objects
function mergeObj(...objs) {
  return objs.reduce((prev, next, index) => {
    for (let key in next) {
      if (prev[key]) {
        prev[`${key}_${index + 1}`] = next[key];
      } else {
        prev[key] = next[key];
      }
    }
    return prev;
  }, {});
}

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 3, b: 4 };
const obj3 = { a: 1, c: 2 };
const obj4 = { a: 1, c: 2 };

console.log(mergeObj(obj1, obj2, obj3, obj4));


//combineArrays
const combineArrays = (...arrays) => {
  return [...new Set(arrays.flat())];
};
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [5, 6, 7];
console.log(combineArrays(arr1, arr2, arr3));

//extractProperties Function
const extractProperties = (objects, ...properties) => {
  return objects.map(obj => {
    return properties.reduce((newObj, prop) => {
      if (obj.hasOwnProperty(prop)) {
        newObj[prop] = obj[prop];
      }
      return newObj;
    }, {});
  });
};

