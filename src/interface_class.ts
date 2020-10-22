/**
 * @file 接口约束类
 * @author Angus Yang
 * @date 2020/10/22
 * @description
 */

// 接口不能约束类的 私有成员 以及 构造函数
interface Human {
    // constructor(): void; ❌ 接口只能不能约束类的 构造函数
    name: string;
    // age: number; ❌ 接口只能不能约束类的 私有成员
    eat(): void;
}

// 类实现接口, 那么需要实现接口所有的属性
class Asian implements Human {
    constructor(name: string) {
        this.name = name
    }
    name: string
    private age: number
    eat() {}
}

/*------------------------------*/

// 接口继承接口
interface Man extends Human {
    run(): void
}

interface Child {
    cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
    name: '',
    run() {},
    eat() {},
    cry() {}
}

// 接口继承类, ‼️这就相当于接口将类的成员都抽象出来, 只要类的成员结构, 舍弃具体的实现
class Auto {
    state = 1
    // private state2 = 2 // 私有成员同样会被抽离到接口
    // protected state3 = 3 // 受保护成员同样会被抽离到接口
    // 接口继承类时，若如上设置了带有私有属性和受保护成员的类，那么除了 Auto 子类外, 都不能实现这个接口，
}

// 这相当于内置了 state: number
interface AutoInterface extends Auto {

}

// 实现一下
class C implements AutoInterface {
    state = 1234
}
let c: AutoInterface = {
    state: 1234
}
class Bus extends Auto implements AutoInterface{
    // 这里继承了 Auto, 当然也就不需要实现 state 了
}

// 🏖接口与类,关系混淆? 请查看 readme(接口与类的关系).
