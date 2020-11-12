/**
 * @file 如何编写声明文件
 * @author Angus Yang
 * @date 2020/11/12
 * @description
 */

/* 在 ts 中使用外部的非 ts 类库时, 除非 npm 包中直接带有声明文件, 否则需要单独安装其声明文件
*  大多数主流类库的声明文件社区已经编写好了, 需要单独安装 npm i @types/<类库名>
*  是否存在声明文件可在该网站中查询 https://www.typescriptlang.org/dt/search?search=
*  若没有. 则需要自行去编写, 你还可以为社区做出贡献 http://definitelytyped.org/guides/contributing.html
*  */

// 若未安装 jquery 的声明文件, 则会提示: 无法找到 jquery 的声明文件, 需 npm install @types/jquery
import $ from 'jquery'

$('.app').css('color', 'red')

/*                      自行编写声明文件                   */
// =========================全局类库==========================
// 在 html 通过 script 引入该类库
globalLib({x: 1})
globalLib.doSomething()

// =========================模块类库==========================
import moduleLib from './libs/module-lib'
moduleLib.doSomething()

// =========================umd库==========================
import umdLib from './libs/umd-lib' // 或者从 html 中 script 引入, 因为是 umd
umdLib.doSometing()

// ===end===
// 若一个类库比较大, 那么它的声明文件可进行拆分, 可参考 @types/jquery
// /// <reference types="sizzle" /> /* 此处是模块依赖, 从 @types 文件夹中寻找依赖 */
// /// <reference path="JQueryStatic.d.ts" /> /* 此处是路径依赖 */
// /// <reference path="JQuery.d.ts" />
// /// <reference path="misc.d.ts" />
// /// <reference path="legacy.d.ts" />
//
// export = jQuery;

// 若对声明文件的编写还有所困扰, 可以多参考主流类库声明文件是如何编写的

/*                          编写插件                       */
// 插件就是给 全局类库 或者 模块类库 添加一些自定义的方法
// =========================模块插件==========================
import m from 'moment'

// 为 moment 定义个 myFunction 需要声明定义一个插件
declare module 'moment' {
    export function myFunction(): void;
}
m.myFunction = () => {}

// =========================全局插件==========================
// 这样对全局空间造成了污染, 不建议这样做
declare global {
    namespace globalLib {
        function doAnything(): void
    }
}
globalLib.doAnything = () => {}

