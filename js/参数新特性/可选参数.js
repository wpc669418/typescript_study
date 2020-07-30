"use strict";
/**
 *
 * @param a
 * @param b 可选参数也必须在必选参数之后
 * @param c
 */
function fun2(a, b, c) {
    if (c === void 0) { c = 'koko'; }
    console.log('c', c);
    console.log('b', b);
    console.log('a', a);
}
fun2('kkj');
