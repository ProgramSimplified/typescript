如果项目中存在多个工程, 它们独立构建, 并相互引用, 那么可以通过各个工程中 tsconfig 的一些配置完成

该例子中 client 和 server 可以独立构建, 并引用 common 公共工程

ts 为了允许我们工程独立构建, 引入了 build 构建模式, 使用 -b 或 build

- server

```bash
tsc -b server --verbose
``` 

- client

```bash
tsc -b client --verbose
``` 


清除构建文件方式

```bash
tsc -b client --clean
```

❗️ 更好的例子请参考 typescript github 中自身的多工程应用
