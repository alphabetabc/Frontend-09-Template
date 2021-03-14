# 学习笔记
## 抽象语法树 LLT
层层嵌套的语法树

ll算法 从左到右规约

### 四则运算
tokenNumber 1~9 以及 小数点
operator 加减乘除
空白 sp
换行 lf lr

### 正则 
```js
 const regexp = /([0-9\.]+)|([ \t]+)|([\r\n]+)|(\*)|(\/)|(\+)|(\-)/g;
 const dictionary = ['Number', 'Whitespace', 'LineTerminator', '*', '/', '+', '-'];
```

### token
```js
// generator 函数
funcion* fn(){
    yield 1
}

for(let token of fn()){
    // for of 遍历可迭代的值
}
```

### MultiplicativeExpression 乘法
1. 乘法遇到的第一个字符可能是什么？ ===> [number, *, /]
   1. 遇到数字 创建一个数字节点
   2. 遇到操作符 创建一个操作符节点; 操作符节点的children存着整个乘除法的三个节点( a*b ===> [a节点, 操作符节点, b节点 ])
2. 非终结符节点 node = {type:'MultiplicativeExpression',children}
3. 递归自己的节点
4. 节点node的结构
    ```ts
    interface node:{
        type: 'Number'|'MultiplicativeExpression';
        operator?: '*'|'/';
        children?: node[];
        value?:{
            type: '/' | '*';
            value: Number;
        };
    }
    ```

### AdditiveExpression 加法
1. 包含了MultiplicativeExpression的所有逻辑, 当碰到数字的先进行乘法运算
2. 生成AdditiveExpression节点
3. 节点
    ```ts
    interface node:{
        type: 'Number'|'MultiplicativeExpression'|'AdditiveExpression';
        operator?: '*'|'/'|'+'|'-';
        children?: node[];
        value?:{
            type: '/' | '*';
            value: Number;
        };
    }
    ```
### Expression 产生式
- 注意看下最后节点的样子
```ts
interface node:{
    type: 'Number'|'MultiplicativeExpression'|'AdditiveExpression'|'Expression';
    operator?: '*'|'/'|'+'|'-';
    children?: node[];
    value?:{
        type: '/' | '*';
        value: Number;
    };
}
```

### 语法定义
1. Number、操作符 终结符
2. 其他为非终结符
```xml
<!-- 
    最终表达式
    1. 最终表达式就成了一个加法表达式
    2. <EOF> 终结 end of file 这段代码完了
 -->
<Expression> ::= <AdditiveExpression><EOF>
<!-- 
    加法运算
    1. 数个乘法连接的表达式
 -->
<AdditiveExpression> ::= 
    <MultiplicativeExpression>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><MultiplicativeExpression>
<!-- 
    乘法运算 最低层级
    1. 单独的数字也是一个乘法运算
    2. 乘除号链接的number的序列
-->
<MultiplicativeExpression> ::= 
    <Number>
    |<MultiplicativeExpression><*><Number>
    |<MultiplicativeExpression></><Number>
```

EOF 

### LL 语法分析
加法 
```xml
<!-- 
    乘法表达式
    1. 乘法展开可能是下面的样子
    2. 判断第一个操作的时候判断是乘法？
       - 数字 + 操作符
 -->
<MultiplicativeExpression> ::= 
    <Number>
    |<MultiplicativeExpression><*><Number>
    |<MultiplicativeExpression></><Number>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><MultiplicativeExpression>
```

### 代码
1. 正则表达式
2. 词典 token
3. tokenize regexp.exec
4. 循环词典的元素 获取token

### LL词法分析

### LL语法分析

