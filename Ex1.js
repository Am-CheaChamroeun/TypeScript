"use strict";
exports.__esModule = true;
function myTest(name) {
    if (name.length > 5) {
        return true;
    }
    else {
        return false;
    }
}
var words1 = myTest("Welcome to Typescript");
console.log(words1);
var words2 = myTest("hi");
console.log(words2);
