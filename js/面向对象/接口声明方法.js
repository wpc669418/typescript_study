"use strict";
// 接口约束类中的方法 必须包含这个约束
var Sheep = /** @class */ (function () {
    function Sheep() {
    }
    Sheep.prototype.eat = function () {
        console.log('iam eating grass');
    };
    Sheep.prototype.speak = function () {
    };
    return Sheep;
}());
var Tiger = /** @class */ (function () {
    function Tiger() {
    }
    Tiger.prototype.eat = function () {
        console.log('iam eating meat');
    };
    return Tiger;
}());
