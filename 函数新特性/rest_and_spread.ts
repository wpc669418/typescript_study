
// 1.可以传入任意个参数
function rest(...args: any[]) {
  args.forEach((item => {
    console.log('rest -> item', item)
  }))
}

rest(1, 2, 3)

function rest2(a: string, b: string, c: string) {
  console.log('c', c)
  console.log('b', b)
  console.log('a', a)
}

var args = [1, 2]
// rest2(...args) // 暂未支持