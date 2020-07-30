function getStock() {
  return {
    code: 'IBM',
    price: 100
  }
}

// 获取 code 赋值给 codex
var { code: codex, price } = getStock()

console.log(codex)
console.log(price)