
// 声明接口的形式
interface IPerson {
  name: string;
  age: number
}

class Person1 {
  // 使用interface 约束传入的类型
  constructor(public config: IPerson) {

  }
}

// 必须满足的结构类型是name 和 age
var p1 = new Person1({
  name: '张三',
  age: 19
})