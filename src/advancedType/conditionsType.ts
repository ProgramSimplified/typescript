/**
 * @file 条件类型
 * @author Angus Yang
 * @date 2020/11/4
 * @description 由 条件表达式 来决定的类型
 */

// T extends U ? x : y

type TypeName<T> =
    T extends string ? string :
    T extends number ? number :
    T extends boolean ? boolean :
    T extends undefined ? undefined :
    T extends Function ? Function :
        object

type T1 = TypeName<string> // T1: string
type T2 = TypeName<string[]> // T2: object

/**
 * ❗️联合类型 extends 一个类型, 那么会拆解解析该联合类型.
 */
// (A | B) extends U ? x : y
//=> (A extends U ? x : y) | (B extends U ? x : y)
type T3 = TypeName<string | string[]>
//=> T3: string | object

/* 过滤掉, 官方已实现, 名为 Exclude<T, U> */
type Diff<T, U> = T extends U ? never : T
type T4 = Diff<"a" | "b" | "c", "a" | "e">
//=> T4: "b" | "c"
/* 解析 */
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// never | "b" | "c"
// "b" | "c"

/* 官方已实现, 名为 NonNullable<T> */
type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null> // T5: string | number

/* 其他官方类型 举例 */
// Extract<T, U> 从 T 中抽取出可以赋值给 U 的类型, 与 Exclude 相反
type T6 = Extract<"a" | "b" | "c", "a" | "e"> // T6: "a"

// ReturnType<T> 获取函数返回值的类型
type T7 = ReturnType<() => string> // T7: string
