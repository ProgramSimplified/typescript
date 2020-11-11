/**
 * @author Angus Yang
 * @date 2020/11/9
 * @description 可以全局安装 ts-node , 然后 ts-node 运行这个 ts 文件
 */

/* 全局安装 ts-node , 则可通过 ts-node <该文件> 执行 ts 文件 */

let c1 = require('./a.node')
let c2 = require('./b.node')
let c3 = require('../es6/a') /* a 为 es6 模块, 所以其顶级导出被处理为 default 属性 */
import c4 from '../es6/d'
// 等于 import c4  = require('../es6/d')

console.log(c1) // { x: 1, y: 2 }
console.log(c2) // { c: 3, d: 4 }
console.log(c3)
/* {
  __esModule: true,
  a: 1,
  b: 2,
  c: 3,
  f: [Function: f],
  G: [Function: g],
  hello: [Getter],
  default: [Function: default_1]
}
 */
console.log(c4) // [Function]
