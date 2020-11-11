/* 命令空间进行了拆分 */
/* tsc <该文件> 进行编译*/

/// <reference path="a.ts" />
namespace Shape {
    export function square(x: number) {
        return x * x
    }
}

// 同一名称的命令空间 共享❗️
Shape.cricle(1)
Shape.square(1)

// 怕与同名命令空间混淆, 可以起个别名
import cricle = Shape.cricle /* 注意⚠️ 这里的 import 与模块的 import 不是一个东西 */
cricle(2)
