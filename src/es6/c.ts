/**
 * @file 若编辑执行 tsc <该文件> -t es5 -m umd (默认情况下 -t 为 es5, -m 为 commonjs, 详情见 tsconfig.json)
 * @author Angus Yang
 * @date 2020/11/11
 * @description
 */

import { a, b, c } from './a' // 批量导入
import { P } from './a'       // 导入接口
import { f as F } from './a'  // 导入时起别名
import * as All from './a'    // 导入模块中的所有成员, 绑定在 All 上
import myFunction from './a'  // 不加 {} 导入默认

console.log(a, b, c) // 1 2 3

let p: P = {
    x: 1,
    y: 2
}

console.log(All)
// G: ƒ g()
// a: 1
// b: 2
// c: 3
// default: ƒ default_1()
// f: ƒ f()
// hello: (...)
// __esModule: true
// get hello: ƒ ()
// __proto__: Object

myFunction() // I'm default

