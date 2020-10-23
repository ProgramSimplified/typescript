/**
 * @file 接口
 * @author Angus Yang
 * @date 2020/10/20
 * @description 接口约束对象, 函数, 类的结构; 基本类型约束基本类型值的结构
 */

interface List {
    readonly id: number;
    name: string;
    // [x: string]: any;
    age?: number;
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id, value.name)
        if (value.age) {
            console.log(value.age)
        }
    })
}

render({
    data: [
        {
            id: 1,
            name: 'yangyong',
            age: 22
        }
    ]
})

// 当不确定接口中属性个数时,需要使用 索引签名
interface StingArray {
    [idx: number]: string
}
let charts: StingArray = ['A', 'B']

interface Names {
    [x: string]: string
}
let string: Names = { 3: 'sss' } // 3 自动转为 string

//❗️索引签名, 键(索引)的类型只有 string 和 number, 若同时存在: number 类型键的值必须为 string 类型键的子集或相同
interface NamesHybrid {
    // [x: string]: Object;
    // [y: number]: Date;
    [x: string]: string;
    [x: number]: string;
    // [y: number]: number; ❌
}
let hybrid: NamesHybrid = {}
hybrid[1] = 'string'  // 因为像 1 这种索引, 既可是数字也可是字符串, 所以它的值类型必须兼容


/* =============================== */
// 接口函数
interface Add {
    (x: number, y?: number): number
}

function add2(x:number, y = 0, z: number): number {
    return x + y + z
}

// function add3(x: number, ...rest: number[]): number {
function add3(x: number, ...rest: Array<number>): number {
    return x + rest.reduce((pre, cur) => pre + cur)
}
console.log(add3(1, 2, 3))

// 函数重载 (从上到下进行匹配)
function add4(x: string): string;
function add4(x: number): number;
function add4(x: string | number) { // 函数重载的实现函数,约束必须最为宽泛
    if (typeof x === 'string') return 'string:' + x
    if (typeof x === 'number') return x
}
console.log(add4(7)) // 此函数重载: 若传入值为字符串,返回string+入参; 数字则返回原值

// 类型别名
// type Add = (x: number, y: number) => number

let plus: Add = (x, y) => x + y

// 混合类型接口, 既可以定义函数, 也可以定义对象
interface Lib {
    (): void;
    version: string;
    adSth(): void;
}

function getLib() {
    const lib: Lib = (() => {}) as Lib // 需加断言, 才不报错
    // lib.version = '1.0'
    // lib.adSth = () => {}
    return lib
}


