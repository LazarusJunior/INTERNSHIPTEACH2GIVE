"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatenate = concatenate;
//Exercise 3: Rest Parameters
function concatenate() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return strings.join("");
}
