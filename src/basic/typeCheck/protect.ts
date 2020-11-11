/**
 * @file 类型保护机制
 * @author Angus Yang
 * @date 2020/11/2
 * @description
 * TypeScript 能够在特定的区块中保证变量属于某个确定的类型
 * 可以在此区块中放心地引用此类型的属性,或者调用此类型的方法
 */

enum Type { Strong, Week }

class Java {
    helloJava() {
        console.log('hello Java')
    }
}

class JavaScript {
    helloJavaScript() {
        console.log('hello JavaScript')
    }
}

function getLanguage(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java : new JavaScript()
    // ❌ ts 无法判断 lang 属于哪种类型 (可以使用 as 一顿断言, 显然很不理想)
    // if (lang.hellJava) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }

    // 1. instanceof
    if (lang instanceof Java) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }

    // 2. in
    if ('helloJava' in lang) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }

    // 3. typeof 只能判断基本类型
    if (typeof x === 'string') {
        x.length
    } else {
        x.toFixed(2)
    }

    // 4.
    if (isJava(lang)) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }

    return lang
}

// 4. 创建类型保护函数
function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined
}
