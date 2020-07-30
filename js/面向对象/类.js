"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // 访问控制符
    // public 为公共的 定义全局参数时 可以省略
    // private 私有的 只有内部可以访问
    // protected 受保护的 内部和子类都能访问
    // public name
    // public name 的public 不可省略 则表示定义了一个name
    function Person(name) {
        this.name = name;
        console.log("iam " + name);
    }
    Person.prototype.eat = function () {
        console.log('iam eating');
    };
    return Person;
}());
var Employ = /** @class */ (function (_super) {
    __extends(Employ, _super);
    function Employ(name, no) {
        var _this = 
        // 子类构造函数必须调用父类构造函数
        // 从而保证子类继承的父类 一定大于父类
        _super.call(this, name) || this;
        _this.name = name;
        _this.no = no;
        _this.name = '代征伟2号';
        console.log(_this.name);
        console.log("iam " + no);
        return _this;
    }
    Employ.prototype.eat = function () {
        console.log('iam eating2号');
    };
    Employ.prototype.work = function () {
        _super.prototype.eat.call(this);
        this.eat();
        _super.prototype.eat.call(this);
        this.todoWork();
    };
    Employ.prototype.todoWork = function () {
        console.log('iam working');
    };
    return Employ;
}(Person));
var employ = new Employ('代征伟', '001');
console.log(employ);
console.log(Employ.prototype);
employ.eat();
// <Person> 泛型用来指定一个数组内数据的类型
var wokers = [];
wokers[0] = new Person('小代');
wokers[1] = new Employ('小征', '002');
