/**
 * @file 索引类型
 * @author Angus Yang
 * @date 2020/11/2
 * @description
 */
let obj: {
    a: 1,
    b: 2,
    c: 3
}
// 抽取值形成数组, 一般实现
function getValues(obj: any, keys: string[]) {
    return keys.map(key => obj[key])
}

console.log(getValues(obj, ['a', 'b'])) // [1, 2]
console.log(getValues(obj, ['e', 'f'])) // [undefined, undefined] ts并没有进行约束

// 索引类型的查询操作符
// keyof T  表示类型 T 的所有公共属性字面量的[联合类型]
interface Obj {
    a: number;
    b: string
}
let key: keyof Obj  // 那么 key 就为 Obj key 的字面量联合类型

// T[K] 表示类型 T 的属性 K 代表的类型
let value: Obj['a']  // number

// T extends U 泛型约束, 泛型变量通过继承某个类型获取某些属性

// 改造 getValues; K 约束为是 T 的所有属性的联合类型(也就是索引类型)
function getValues2<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
}

console.log(getValues(obj, ['a', 'b'])) // [1, 2]
// console.log(getValues(obj, ['e', 'f'])) // ❌ ts 报错, 进行了约束
