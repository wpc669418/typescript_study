let myName: string = 'hello'
var x: any = '123'
x = 1

function test(name: string): string {
  return '123'
}

class Person {
  name: string;
  age: number;
  constructor() {
    this.name = 'bob'
    this.age = '123'
  }
}

var zhangsan: Person = new Person()
zhangsan.age = 18
zhangsan.name = '张三'