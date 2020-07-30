"use strict";
function getStock() {
    return {
        code: 'IBM',
        price: 100
    };
}
// 获取 code 赋值给 codex
var _a = getStock(), codex = _a.code, price = _a.price;
console.log(codex);
console.log(price);
