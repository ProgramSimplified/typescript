/**
 * @file 声明合并
 * @author Angus Yang
 * @date 2020/11/11
 * @description ⚠️ 并不建议同名声明来使用, ts 这样做是为了兼容老的开发模式
 */

// ====================接口的合并======================
interface A {
    x: number;
    foo (bar: number): number; // 3
}

interface A {
    y: number;
    // x: string; 不允许类型不同

    // 函数重载, 那么函数的实现必须最为宽泛
    foo (bar: string): string; // 1 接口合并后的排序 (例外: 若函数参数为字符串字面量, 则会被排在函数重载最顶端)
    foo (bar: number[]): number[]; // 2
    foo (bar: 'b'): number; // 排序的例外 (若函数参数为字符串字面量, 则会被排在函数重载最顶端)
}

// 变量 a 的类型为接口 A, 那么 a 就需要定义 A 的所有成员
let a: A = {
    x: 1,
    y: 1,
    foo(bar: any) {
        return bar
    }
}

// ====================命名空间与函数\类\枚举的合并======================
// ❗️命名空间进行合并时, 需要放在函数\类的后面, 枚举无所谓(why? 请看该文件末尾)

function Lib() {}
namespace Lib {
    export let version = '1.0' // 为函数添加了属性
}
console.log(Lib.version) // 1.0

class CC {}
namespace CC {
    export let state = 1 // 为类添加了静态属性
}
console.log(CC.state) // 1

enum Color {
    Red,
    Yellow,
    Bule
}
namespace Color {
    export function mix() {} // 为枚举增加了方法
}

/* 编译成es5之后不难发现，声明枚举类型时，会提前声明变量，因此不需要提前声明函数；而其他的不同，都是需要将函数变量传入闭包中，因此函数需要写在前面。 */
// function Lib() {}
// namespace Lib {
//     export const version = '0.1'
// }
// 编译之后
// function Lib() { }
// (function (Lib) {
//     Lib.version = '0.1';
// })(Lib || (Lib = {}));
//
// 枚举情况：
// enum Color {
//     RED,
//     BLUE,
// }
// namespace Color {
//     export const version = '0.1'
// }
// 编译之后：
// var Color;
// (function (Color) {
//     Color[Color["RED"] = 0] = "RED";
//     Color[Color["BLUE"] = 1] = "BLUE";
// })(Color || (Color = {}));
// (function (Color) {
//     Color.version = '0.1';
// })(Color || (Color = {}));
