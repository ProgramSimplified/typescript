<h1 align="center" style="margin: 30px 0 35px;">Typescript Learning</h1>

## 接口(interface) 与 类(class) 的关系
![img](http://img.imyangyong.com/blog/2020-11-04%2016-31-01.png)

## typescript-基础篇
![img](http://img.imyangyong.com/blog/typescript-%E5%9F%BA%E7%A1%80%E7%AF%87.jpg)

## typescript 模块解析策略

- classic: 前端常用的 AMD | System | ES2015

![img](http://img.imyangyong.com/blog/2020-11-13%2021-10-40.png)

- node

![img](http://img.imyangyong.com/blog/2020-11-13%2021-13-51.png)

## 关于 typescript 文件的编译

在 Babel 7 之前, Babel 自身并不对 ts 良好支持, 那么通用的做法是:

TS => tsc(ts-loader) => JS => Babel =>JS

Babel 7 之后, Babel 与 TypeScript 官方合作, Babel 编译 ts , tsc 来作类型检查:

![img](http://img.imyangyong.com/blog/2020-11-14%2001-07-45.png)

> ❗️babel 目前不能编译命名空间 namespace, 类型断言 as, 常量枚举 emun, 默认导出 export =

![img](http://img.imyangyong.com/blog/2020-11-14%2002-23-25.png)

> 开发ts，Babel不是必选项。使用Babel有两个原因，一个是大部分已存系统依赖了Babel，另一个是Babel有非常丰富的插件，它的生态发展得很好
