"use strict";
var myName = 'hello';
var x = '123';
x = 1;
function test(name) {
    return '123';
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'bob';
        this.age = 18;
    }
    return Person;
}());
var zhangsan = new Person();
zhangsan.age = 18;
zhangsan.name = '张三';
