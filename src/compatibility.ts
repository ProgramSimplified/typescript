/**
 * @file 兼容性
 * @author Angus Yang
 * @date 2020/10/28
 * @description
 */

/**
 * X 兼容 Y: X(目标类型) = Y(源类型)
 */
// 🏖兼容性关系口诀
/**
 * 口诀:
 * 结构之间兼容: 成员少的兼容成员多的
 * 函数之间兼容: 参数多的兼容参数少的
 * */

// string 兼容 null
let s: string = 'a'
s = null

/*========================================*/

// 接口兼容性 (成员少的接口兼容成员多的)
interface X {
    a: any;
    b: any;
}
interface Y {
    a: any;
    b: any;
    c: any;
}
let x: X = {a: 1, b: 2}
let y: Y = {a: 1, b: 2, c: 3}
x = y // x 兼容 y
// y = x ❌

/*========================================*/

// 函数兼容性 (参数多的函数兼容参数少的)
type Handler = (a: number, b: number) => void
function hof(handler: Handler) { // 高阶函数
    return handler
}
// 1) 参数个数 (参数多的函数兼容参数少的)
let handler1 = (a: number) => {}
hof(handler1)
let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2) ❌

// 2) 可选参数和剩余参数 (均互相兼容)
let a = (p1: number, p2: number) => {}
let b = (p1?: number, p2?: number) => {}
let c = (...args: number[]) => {}
a = b
a = c
b = a
b = c
c = a
c = b

// 3) 参数类型 (参数类型不一致不兼容; 参数类型为对象那么对象成员多的兼容少的 ❗️ 这里是函数兼容, 非接口兼容, 注意区分)
let handler3 = (a: string) => {}
// hof(handler3) ❌

interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d
// p2d = p3d ❌

/*========================================*/

// 返回值类型兼容性 (成员少的兼容成员多的)
let f = () => ({name: 'Alice'})
let g = () => ({name: 'Alice', location: 'BeiJing'})
f = g
// g = f ❌

/*========================================*/

// 枚举兼容性
enum Fruit { Apple, Banana}
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 3  // 兼容非枚举的其他所有类型
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple ❌ 枚举类型间不兼容

/*========================================*/

// 类兼容性 (静态成员与构造函数不参与比较, 实例成员相同则实例相互兼容)
class A {
    constructor(p: number, q: number) {}
    id: number = 1
    // private name: string = '' 若含有私有成员, 那么实例不会兼容, 只有父类和子类实例间会相互兼容
}
class B {
    static s = 1
    constructor(p: number) {}
    id: number = 2
    // private name: string = ''
}
let aa = new A(1, 2)
let bb = new B(1)
aa = bb // 他们共同拥有相同实例成员 id
bb = aa

class C extends A {}
let cc = new C(1)
cc == aa
aa == cc

/*========================================*/

// 泛型兼容性
// 泛型接口
interface Empty<T> {
    value: T
}
let obj1: Empty<number> = { value: 3 }
let obj2: Empty<string> = { value: '3' }
// obj1 = obj2 ❌ 存在成员且类型不同, 则不兼容

// 泛型函数
let log1 = <T>(x: T): T => {
    return x
}
let log2 = <U>(y: U): U => {
    return y
}
log1 = log2

