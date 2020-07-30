"use strict";
// 1.可以传入任意个参数
function rest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach((function (item) {
        console.log('rest -> item', item);
    }));
}
rest(1, 2, 3);
function rest2(a, b, c) {
    console.log('c', c);
    console.log('b', b);
    console.log('a', a);
}
var args = [1, 2];
// rest2(...args) // 暂未支持
