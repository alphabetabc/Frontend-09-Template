# wk07学习笔记-重学JS
## 语法树和优先级 tree vs priority
### Expressions 产生式
- Member
```md
  - a.b , a[b] 成员访问
  - foo`string` 函数+字符串
  - super.b super[b] super关键字
  - new.target
  - new Foo()
```
- New
```md
new Foo 不带括号优先级低

new a()()
new new a()
```

### 运行时 reference 引用
- Object
- key

- delete
- assign

### call expression
- Call
```md
  - foo()
  - super()
  - foo()['b']
  - foo().b
  - foo()`abc`
```

### left handside vs right handside

### update expression
```md
- a++
- a--
- --a
- ++a
```

### unary expression 单目运算符
```md
delete a.b
void foo()
typeof a
+a
-a
~a 位运算
!a
await a 
```

### exponental 乘方
- ** 右结合

### 优先级更低 更高级的运算符
- Multiplicative
  - * / %
- Additive
  - + -
- shift
  - <<  >> >>>
- relationship
  - <  >  <= >= instanceOf

### equality
### bitwise 位运算
### logical 逻辑运算
- 短路原则
  
### conditional 运算符
- 三目  ？ :


## 类型转换 type convertion

### unboxing 拆箱转换
- toPrimitive
- toString vs valueOf
- Symbol.toPrimitive

### boxing 装箱转换

### stringToNumber
### numberToString

## 语句 statement
用语句完成控制流程
- grammer
  - 简单 语句
  - 组合语句
  - 声明

### completion record 语句完成状态的记录
```md
[[type]] normal break continue return throw
[[value]] 基本类型
[[target]] label
```
### 简单语句
- expressionStatement
- emptyStatement 空
- debuggerStatement 断点语句
- 控制语句
  - ThrowStatement 
  - ContinueStatement
  - BreakStatement 结束整个循环
  - ReturnStatement

### 复合语句
- BlockStatement
- ifStatement
- SwitchStatement if else 更ok？？
- iterationStatement for while do while
- withStatement 别用了
- labelledStatement
- tryStatement try catch finally

#### blockStatement
```
[[]]
```
#### interationStatement
- while
- do while
- for
- for in
- for of

#### 标签 。。。

#### try

### 声明
- functionDecalaration
- generatorDecalaration
- asyncFunctionDecalaration
- asyncGeneratorDecalaration
- variableStatement 变量声明
- classDeclaration
- lexicalDecalaration const let 

### 预处理 pre-process

### 作用域

## js结构化-宏任务和微任务
- 宏任务
- 微任务
- 函数调用
- 语句/声明
- 表达式
- 直接量、变量、this
### 宏任务

### 事件循环event loop
- get code
- execute
- wait

## js结构化-函数调用
- stack 调用栈
- 执行上下文
  - 执行上下文栈
    - 栈顶 运行时

