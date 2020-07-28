"use strict";
var mynama = 'zhang';
// 1、如果为三个参数 就必须传递三个 不然就会报错
// 2、赋值一个默认参数的话 则可以省略其中一个参数
// 3、默认值的参数必须从后往前 否则不能省去参数
/**
 *
 * @param a
 * @param b
 * @param c 默认值的参数必须从后往前 否则不能省去参数
 */
function fun1(a, b, c) {
    if (c === void 0) { c = 'bo'; }
    console.log('c', c);
    console.log('b', b);
    console.log('a', a);
}
// 
fun1('xx', 'yy', 'zz');
fun1('xx', 'yy');
