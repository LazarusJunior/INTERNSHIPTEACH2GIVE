"use strict";
//Exercise 2: Default Function Parameters
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var node_test_1 = require("node:test");
var concatName = function (first, last) {
    if (last === void 0) { last = "Pocock"; }
    return "".concat(first, " ").concat(last);
};
(0, node_test_1.it)("should return the full name", function () {
    var result = concatName("John", "Doe");
    (0, chai_1.expect)(result).equal("John Doe");
});
(0, node_test_1.it)("should return the first name with default last name", function () {
    var result = concatName("John");
    (0, chai_1.expect)(result).equal("John Pocock");
});
