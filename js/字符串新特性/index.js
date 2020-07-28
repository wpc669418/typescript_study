"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
function testcs(template, name, age) {
    console.log('test -> age', age);
    console.log('test -> name', name);
    console.log('test -> template', template);
}
var names = '小明';
var age = 18;
testcs(__makeTemplateObject(["my name is ", ",age is ", " "], ["my name is ", ",age is ", " "]), names, age);
