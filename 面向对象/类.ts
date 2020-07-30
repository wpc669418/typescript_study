class Person {

  // 访问控制符
  // public 为公共的 定义全局参数时 可以省略
  // private 私有的 只有内部可以访问
  // protected 受保护的 内部和子类都能访问
  // public name

  // public name 的public 不可省略 则表示定义了一个name
  constructor(public name: string) {
    console.log(`iam ${name}`)
  }

  protected eat() {
    console.log('iam eating')
  }

}

class Employ extends Person {
  constructor(public name: string, public no: string) {
    // 子类构造函数必须调用父类构造函数
    // 从而保证子类继承的父类 一定大于父类
    super(name)
    this.name = '代征伟2号'
    console.log(this.name)
    console.log(`iam ${no}`)
  }

  eat() {
    console.log('iam eating2号')
  }

  work() {
    super.eat()
    this.eat()
    super.eat()
    this.todoWork()
  }

  private todoWork() {
    console.log('iam working')
  }
}

const employ = new Employ('代征伟', '001')

console.log(employ)
console.log(Employ.prototype)
employ.eat()

// <Person> 泛型用来指定一个数组内数据的类型
var wokers: Array<Person> = []
wokers[0] = new Person('小代')
wokers[1] = new Employ('小征', '002')