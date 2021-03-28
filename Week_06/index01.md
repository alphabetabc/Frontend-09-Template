### 2 编写带括号的四则运算产生式
```xml
<MultiplicativeExpression> ::= <Number>| 
    <MultiplicativeExpression> "*" <Number>|
    <MultiplicativeExpression> "/" <Number> 

<AdditiveExpression> ::= <MultiplicativeExpression>|
    <AdditiveExpression>"+"<MultiplicativeExpression>|
    <AdditiveExpression>"-"<MultiplicativeExpression>

<Expression> ::= "("<AdditiveExpression>")"| <AdditiveExpression>

```

### 4. 尽可能寻找你知道的计算机语言，尝试把它们分类
> 抄同学的，直呼专业，自己搜都不知道怎么开始~~~
```md
- 数据描述语言 vs. 编程语言
数据描述语言：JSON, XML, HTML, SQL, CSS
编程语言：Java, Python, JavaScript, Perl, PHP, C, C++, C#, OCaml, Bash, Lisp, Clojure, Haskell

- 声明式语言 vs. 命令式语言
声明式: JSON, XML, HTML, SQL, CSS, Lisp, Clojure, Haskell
命令式：Java, Python, JavaScript, Perl, PHP, C, C++, C#, OCaml, Bash

- 编译语言 vs. 解释性语言
编译语言：Java, C, C++, C#, OCaml
解释性语言：Python, JavaScript, Bash

面向对象语言 vs. 面向过程语言
面向对象语言：Java, JavaScript, Python, C#
面向过程语言：C, OCaml,
```

### 8.写一段 JS 的函数，把一个 string 它代表的字节给它转换出来，用 UTF8 对 string 进行遍码。
```js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
function utf8_encoding(str) {
    const code = encodeURIComponent(str);
    const bytes = [];
    for (var i = 0; i < code.length; i++) {
        const c = code.charAt(i);
        if (c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16);
            bytes.push(hexVal);
            i += 2;
        } else {
            bytes.push(c.charCodeAt(0));
        }
    }
    return bytes;
}
```

### 10.用 JavaScript 去设计狗咬人的代码
```js
class Animal {
    // state
    #hurt = null;

    get type() {
        return null;
    }

    get hurt() {
        return this.#hurt;
    }
    set hurt(value) {
        this.#hurt = value;
        typeof this.#hurtCb === 'function' && this.#hurtCb(this.hurt);
    }

    // action
    bite(biteCallback) {
        typeof biteCallback === 'function' && biteCallback();
    }

    // show state change
    #hurtCb = undefined;
    showHurt(cb) {
        this.#hurtCb = cb;
    }
}

class Person extends Animal {
    get type() {
        return 'person';
    }
}

class Dog extends Animal {
    get type() {
        return 'dog';
    }
}

const person = new Person();
const dog = new Dog();

person.showHurt((hurt) => {
    console.log('人被咬了', hurt);
});

dog.bite(() => {
    person.hurt = {
        type: dog.type,
        msg: '要了一口',
    };
});
```

### 11.找出 JavaScript 标准里面所有具有特殊行为的对象
- 特殊行为 不能用属性+原型描述的对象
```
- Array：Array 的 length 属性根据最大的下标自动发生变化。
- Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
- String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。
- Arguments：arguments 的非负整数型下标属性跟对应的变量联动。
- 模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。
- 类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。
- bind 后的 function：跟原来的函数相关联。
```
