/**
 * @file 若编辑执行 tsc <该文件> -t es5 -m umd (默认情况下 -t 为 es5, -m 为 commonjs, 详情见 tsconfig.json)
 * @author Angus Yang
 * @date 2020/11/11
 * @description
 */

// 单独导出
export let a = 1

// 批量导出
let b = 2
let c = 3
export { b, c }

// 导出接口
export interface P {
    x: number;
    y: number;
}

// 导出函数
export function f() {}

// 导出时起别名
function g() {}
export { g as G }

// 默认导出, 无需函数名
export default function() {
    console.log("I'm default")
}

// 引入外部模块, 重新导出
export { str as hello } from './b'
