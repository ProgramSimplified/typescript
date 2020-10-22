// 此例列举了各种修饰符
class Dog {
    // 此处的 private, 表明类不能被实例化, 也不能被继承; 此处的 protected, 表面类只能继承, 不能被实例化
    // public 表明为实例属性, 就不需要手动赋值了
    /*private | protected*/ constructor(name: string, public age: number) {
        this.name = name
    }
    name: string
    run() {}
    private pri() {}  // 私有化成员
    protected pro() {} // 受保护成员, 只能在类或者子类内访问, 不能在实例中访问
    readonly legs: number = 4
    static food: string = 'bones' // 同 es6 一样,只能被类本身调用 Dog.food; 可以被子类继承
}

let dog = new Dog('wangwang', 23)
console.log(dog)

// 继承
class Husky extends Dog {
    constructor(name: string, age: number, color: string) {
        super(name, age);
        this.color = color
    }
    color: string
}

// 抽象类: 只能被继承, 不能实例化;  主要做抽象提取|方法复用
abstract class Animal {
    eat() {
        console.log('eat')
    }
    abstract sleep(): void // 抽象类中的抽象方法, 不需要实现, 这表明子类去自行实现 (称之为多态性)
}
// let animal = new Animal() // ❌

class Dog1 extends Animal {
    sleep() {
        console.log('dog sleep')
    }
}

class Cat extends Animal {
    sleep() {
        console.log('cat sleep')
    }
}

let dog1 = new Dog1()
dog1.eat()
let cat = new Cat()

let animals: Animal[] = [dog1, cat]
animals.forEach(i => i.sleep())

// this: 链式调用
class Workflow {
     step1() {
         return this
     }
     step2() {
         return this
     }
 }

 new Workflow().step1().step2()

class Myflow extends Workflow{
    next() {
        return this
    }
}

new Myflow().next().step1().next()
