/**
 * @file 泛型, 在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 * @author Angus Yang
 * @date 2020/10/22
 * @description
 */
/*泛型的优点
1. 函数和类可以轻松地支持多种类型, 增强程序的扩展性
2. 不必写多条函数重载, 冗长的联合类型声明, 增强代码可读性
3. 灵活控制类型之间的约束
 */
// 泛型定义函数
function log<T>(value: T): T {
// function log<T = string[]>(value: T): T { // 也可以指定默认类型
    return value
}

log<string[]>(['sth'])
log(['sth']) // 也可自动推断
// 类型推论：若直接实参无法确定类型，则向实参内部查找推断。实践参考：https://typescript-exercises.github.io/#exercise=10&file=%2Findex.ts

// 泛型定义类型
type Log = <T>(value: T) => T
// type Log<T> = (value: T) => T

let myLog: Log = log

/*=========================================*/

// 泛型定义接口
interface Log1 {
    <T>(value: T): T;
}
// 泛型也可以约束整个接口
interface Log2<T> {
// interface Log2<T = number> { // 也可以指定默认类型
    (value: T): T;
}
let myLog1: Log2<number> = log
myLog1(123)

/*=========================================*/

// 泛型定义类
class Log3<T> {
    // static eat(value: T) {}  // 泛型不能约束类的静态成员
    run(value: T): T {
        return value
    }
}

let log3 = new Log3<number>()
log3.run(123)
let log33 = new Log3() // 当不传入类型参数, 则参数可为任意类型的值
log33.run({})
log33.run('str')

/*========================================*/

// 泛型继承接口
interface Length {
    length: number
}

function log4<T extends Length>(value: T): T {
    console.log(value, value.length) // 若想使用 length 属性, 如果不继承接口 Length, 那么会报 T 没有 length 属性的错误
    return value
}
log4([])
log4('1234')
log4({length: 1})
