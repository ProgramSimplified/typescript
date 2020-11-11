/**
 * @file 命令空间
 * @author Angus Yang
 * @date 2020/11/11
 * @description 通常用作创建一个全局变量
 */
/*
* 命名空间不要与模块混用, 最好在一个全局的环境中使用
* */
var Shape;
(function (Shape) {
    var pi = Math.PI;
    // 外界若想使用, 则通过 export 导出
    function cricle(r) {
        return pi * Math.pow(r, 2);
    }
    Shape.cricle = cricle;
})(Shape || (Shape = {}));
