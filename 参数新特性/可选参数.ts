/**
 * 
 * @param a 
 * @param b 可选参数也必须在必选参数之后
 * @param c 
 */
function fun2(a: string, b?: string, c: string = 'koko') {
  console.log('c', c)
  console.log('b', b)
  console.log('a', a)
}

fun2('kkj')