# wk06学习笔-重学JavaScript

## js语言通识-泛用语言分类方法
### 语言按语法分类
- 非形式语言
  - 中文 英文
- 形式语言 乔姆斯基谱系
  - 0- 型文法（无限制文法或短语结构文法）包括所有的文法。
  - 1- 型文法（上下文相关文法）生成上下文相关语言。
  - 2- 型文法（上下文无关文法）生成上下文无关语言。
  - 3- 型文法（正规文法）生成正则语言。
从上至下，是包含关系 

## js语言通识-产生式 BNF
- 用尖括号括起来的名称表示语法结构名
- 语法结构：基础结构、需要用其他语法结构定义的复合结构
  - 基础结构称 终结符 (类似叶子节点，并非终止代码)
  - 复合结构 非终结符
- 引号合中间的字符表示终结符
- 可以有括号 变成组
- * 表示重复多次
- | 表示 或
- + 至少出现一次
- 四则运算 1+2*3
  - 终结符
    - Number
    - + - * /
  - 非终结符
    - MultiplicativeExpression
    - AdditiveExpression
    ```xml
    <MultiplicativeExpression> ::= <Number>| 
        <MultiplicativeExpression> "*" <Number>|
        <MultiplicativeExpression> "/" <Number> 

    <AdditiveExpression> ::= <MultiplicativeExpression>|
        <AdditiveExpression>"+"<MultiplicativeExpression>|
        <AdditiveExpression>"-"<MultiplicativeExpression>
    ```

## js语言通识-深入理解产生式
> 通过产生式理解乔姆斯基谱系
- 0-型 无限制文法
- 1-型 上下文相关文法
- 2-型 上下文无关文法
- 3-型 正则语言
javaScript 是上下文相关文法
### EBNF, ABNF, Customized
### javascript的产生式

## js语言通识-现代语言的分类
- c++
- vb
- python
- javaScript
#### 分类
- 形式语言-用途
  - 数据描述语言
    - JSON, HTML, XAML, SQL, CSS
  - 编程语言
    - C,C++,JAVA,C#,Python, ruby, perl, lisp, t-sql, clojure, haskell, javascript
- 形式语言-表达方式
  - 声明式语言(结果是怎么样的)
    - 大部分的数据描述语言是声明式语言，另外 lisp，clojure, haskell
  - 命令型语言(达成结果的步骤是怎么的)
    - c, c++, js, python, ruby, perl, 

## js语言通识-编程语言的性质
### 图灵完备性
- 命令式-图灵机
  - goto
  - if while
- 声明式-lambda
  - 递归
### 动态与静态
- 动态
  - 在用户的设备、在线服务器上
  - 产品实际运行时
  - Runtime
- 静态
  - 在程序员的设备上
  - 产品开发时
  - Compiletime

### 类型系统
- 动态类型系统 与 静态类型系统
- 强类型与弱类型
- 复合类型
  - 结构体
  - 函数签名
- 子类型
- 泛型
  - 逆变/协变

## js语言通识-一般命令式变成语言的设计方式
### 一般命令式编程语言
- Atom
- Expression
- Statement
- Structure
- Program

### 重学js
> 重学的思路
- 语法
- 语义
- 运行时



## JS类型
### Atom
- Grammar
  - Literal
  - Variable
  - Keywords
  - WhiteSpace
  - Line Terminator
- Runtime
  - Types
  - ...
- Types
  - Number, String, Boolean, Object, Null, Undefined, Symbol
  - 不要用undefined赋值，用null初始化
  - Symbol 特殊的基本类型

## JS类型-Number
- IEEE754 Double Float
  - Sign(1) 
  - Exponent(11)
  - Fraction(52) 有个隐藏位
```md
浮点数
IEEE75定义了双精度的浮点数 1个符号位+11指数位+52精度位
精度损失 在转换为二进制的时候已经有损失
```
- grammar
  - 十进制
  - 二进制 0b 开头
  - 八进制 0o 开头
  - 十六进制 0x 开头

## JS类型-String
- character 字符集
- code point 码点
- encoding 编码

### 字符集
- ASCII
- Unicode
- UCS
- GB
  - GB2312
  - GBK
  - GB18030
- ISO-8859
- BIG5

### 编码 encoding
- UTF
  - UTF8
  - UTF16

### 语法
- "abc"
- 'abc'

## JS类型-其他类型
### boolean
- true
- false

### Null Undefined
- null 关键词
- undefined 全局变量
  - void 0;

## JS对象-对象的基础类型
- 任何一个对象都是唯一的，与其本身的状态无关
- 用状态描述对象
- 对象状态的改变即为行为
- 原型
- 对象的行为必须是改变对象的状态的
- 组成对象的三要素
  - state
  - identifier
  - behavior

## JS对象-JS中的对象
### 两个要素
- 属性 property
  - kv 对
    - key Symbol String
    - value
      - 数据属性 data property
        - 7种类型
        - writable
        - enumerable
        - configurable
        - 用于描述对象的状态
      - 访问性属性 accessor property
        - get\set
        - enumerable
        - configurable

- Prototype
- 访问 obj.a
  - 沿着原型找原型对象  
- api