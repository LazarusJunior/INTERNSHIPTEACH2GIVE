"use strict";
//Exercise 1: Optional Function Parameters
const concatName = (first, last) => {
    if (!last) {
        return first;
    }
    return `${first} ${last}`;
};
const result = concatName("John", "Doe");
const result2 = concatName("John");
