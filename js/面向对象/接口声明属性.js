"use strict";
var Person1 = /** @class */ (function () {
    // 使用interface 约束传入的类型
    function Person1(config) {
        this.config = config;
    }
    return Person1;
}());
// 必须满足的结构类型是name 和 age
var p1 = new Person1({
    name: '张三',
    age: 19
});
