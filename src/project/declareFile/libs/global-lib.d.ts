// ⚠️ 注意! 函数的声明尽量写成声明形式, 而不是表达式:
// declare const globalLib: (options: globalLib.Options) => void;
// 因为函数才有重载, 所以写成表达式形式, 就不能使用同名的命名空间了.
declare function globalLib(options: globalLib.Options): void;

declare namespace globalLib {
    const version: string;
    function doSomething(): void;
    interface Options {
        [key: string]: any
    }
}
