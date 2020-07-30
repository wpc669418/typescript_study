
// 声明约束类的接口
interface Animal {
  eat(): any;
}

// 接口约束类中的方法 必须包含这个约束
class Sheep implements Animal {
  eat() {
    console.log('iam eating grass')
  }
  speak() {

  }
}

class Tiger implements Animal {
  eat() {
    console.log('iam eating meat')
  }
}