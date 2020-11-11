/* ts 支持的格式, 在 node 中会被编译为 module.exports = ... , 所以其不允许次级导出 */
export = function () {
    console.log("I'm default")
}
