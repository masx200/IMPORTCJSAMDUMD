/*在此页面
语法
描述
属性
AsyncFunction 原型对象
AsyncFunction 实例
示例
规范
浏览器兼容性
参见
 
AsyncFunction 构造函数用来创建新的 异步函数 对象，JavaScript 中每个异步函数都是  AsyncFunction 的对象。

注意，AsyncFunction 并不是一个全局对象，需要通过下面的方法来获取：
*/

export const AsyncFunctionconstructor: {
    new (...args: string[]): Function;
    (...args: string[]): Function;
} = Object.getPrototypeOf(async function() {}).constructor;
