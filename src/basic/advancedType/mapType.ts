/**
 * @file 映射类型
 * @author Angus Yang
 * @date 2020/11/4
 * @description 从旧类型中创建新类型的一种方式, 类似高阶操作, 一般为泛型接口
 */

interface Obj {
    a: string;
    b: number;
    c: boolean;
}

/**
 * 同态 : 以下三种类型不会创建新的属性
 */
type ReadOnlyObj = Readonly<Obj>
/* Readonly 为 ts 内置的泛型接口 (这就是映射类型, 像是高阶函数, 造出一个新的类型)*/
/**
 * Make all properties in T readonly
 */
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };

type PartialObj = Partial<Obj>
/**
 * Make all properties in T optional
 */
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };

type PickObj = Pick<Obj, 'a' | 'b'>
/**
 * From T, pick a set of properties whose keys are in the union K
 */
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };

/**
 * 非同态: 为创建的类型添加新的属性
 */
type RecordObj = Record<'x' | 'y', Obj>
/**
 * Construct a type with a set of properties K of type T
 */
// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };
