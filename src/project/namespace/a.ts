/**
 * @file 命令空间
 * @author Angus Yang
 * @date 2020/11/11
 * @description 通常用作创建一个全局变量, 然后通过 script 标签直接引入编译好的 js 就可以, 就像开发一个 sdk 或类库一样
 */

/*
* 命名空间不要与模块混用, 通常在一个全局的环境中使用
* */
namespace Shape {
    const pi = Math.PI

    // 外界若想使用, 则通过 export 导出
    export function cricle(r: number) {
        return pi * r **2
    }
}

/* 编译后 */
// var Shape;
// (function (Shape) {
//     var pi = Math.PI;
//     // 外界若想使用, 则通过 export 导出
//     function cricle(r) {
//         return pi * Math.pow(r, 2);
//     }
//     Shape.cricle = cricle;
// })(Shape || (Shape = {}));
