/* 命令空间进行了拆分 */
/// <reference path="a.ts" />
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
// 同一名称的命令空间 共享❗️
Shape.cricle(1);
Shape.square(1);
