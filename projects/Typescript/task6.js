"use strict";
//Exercise 6: void vs undefined
const acceptsCallback = (callback) => {
    callback();
};
const returnString = () => {
    return "Hello!";
};
acceptsCallback(returnString); // Now this works without error
