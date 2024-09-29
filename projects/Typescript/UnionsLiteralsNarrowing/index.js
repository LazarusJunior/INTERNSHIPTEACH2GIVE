var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Exercise 1: Destructuring a Discriminated Union
function calculateAreaWithDestructuring(shape) {
    if (shape.kind === 'circle') {
        var radius = shape.radius;
        return Math.PI * radius * radius;
    }
    else {
        var sideLength = shape.sideLength;
        return sideLength * sideLength;
    }
}
// Test for Exercise 1
var circle = { kind: 'circle', radius: 5 };
var square = { kind: 'square', sideLength: 4 };
console.log('Exercise 1 - Circle Area:', calculateAreaWithDestructuring(circle));
console.log('Exercise 1 - Square Area:', calculateAreaWithDestructuring(square));
// Exercise 2: Narrowing a Discriminated Union with a Switch Statement
function calculateAreaWithSwitch(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius * shape.radius;
        case 'square':
            return shape.sideLength * shape.sideLength;
    }
}
// Test for Exercise 2
console.log('Exercise 2 - Circle Area:', calculateAreaWithSwitch(circle));
console.log('Exercise 2 - Square Area:', calculateAreaWithSwitch(square));
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://api.example.com/data')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        return [2 /*return*/, ['error', 'An error occurred']];
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, ['success', data]];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, ['error', 'An error occurred']];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Test for Exercise 3
function testFetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, status, value;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetchData()];
                case 1:
                    _a = _b.sent(), status = _a[0], value = _a[1];
                    if (status === 'success') {
                        console.log('Exercise 3 - Success:', value);
                    }
                    else {
                        console.error('Exercise 3 - Error:', value);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
testFetchData();
function calculateAreaWithDefault(shape) {
    if (shape.kind === 'square') {
        return shape.sideLength * shape.sideLength;
    }
    else {
        return Math.PI * shape.radius * shape.radius;
    }
}
// Test for Exercise 4
var defaultCircle = { radius: 5 };
var explicitCircle = { kind: 'circle', radius: 5 };
var squareEx4 = { kind: 'square', sideLength: 4 };
console.log('Exercise 4 - Default Circle Area:', calculateAreaWithDefault(defaultCircle));
console.log('Exercise 4 - Explicit Circle Area:', calculateAreaWithDefault(explicitCircle));
console.log('Exercise 4 - Square Area:', calculateAreaWithDefault(squareEx4));
// Run all tests
console.log('Run this file to see the console output for each exercise.');
