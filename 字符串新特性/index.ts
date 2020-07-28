function testcs(template: any, name: string, age: number) {
  console.log('test -> age', age)
  console.log('test -> name', name)
  console.log('test -> template', template)
}

let names: string = '小明'
let age: number = 18
testcs`my name is ${names},age is ${age} `