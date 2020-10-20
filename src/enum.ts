// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}

console.log(Role.Reporter)
console.log(Role)

// 字符串枚举
enum Message {
    Success = '成功了',
    Fail = '失败了'
}

// 枚举成员
enum Char {
    a,
    b = Char.a,
    c = 1 + 3,
    d = 2,
    e = Math.random()
}

console.log(Char.e)


// 常量枚举
const enum Month {
    Jan,
    Feb,
    Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b}
enum F { a = 0, b = 1}
enum G { a= 'apple', b = 'banana' }

// number 枚举可以随意赋值
let e1: E.a = 7
let e2: E.b = 7
let e3: E.a = 3

console.log(e1 === e3)

// string 枚举取值只能是成员的类型
let g1: G = G.a
let g2: G.a = G.a


// 作业: 利用枚举类型,判断多角色(更可读,后期好维护)

const enum RoleEnum{
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}

function initByRole(role: RoleEnum) {
    if (role === RoleEnum.Reporter || role === RoleEnum.Developer) {
        // do sth
    } else if (role === RoleEnum.Maintainer || role === RoleEnum.Owner) {
        // do sth
    } else if (role === RoleEnum.Guest) {
        // do sth
    } else {
        // do sth
    }
}
