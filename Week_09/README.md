# wk09学习笔记 - 浏览器工作原理html的解析

## HTML解析
### html parse模块的文件拆分
- parser单独铲粪
- parser接收html文本作为参数

### 用FSM实现html的分析
- 标准里面就有状态机描述token
```js
const EOF = Symbol('EOF');

function data(c){

}

parseHTML = function(html){
    let state = data;
    for(let c of html){
        state = state(c);
    }

    state = state(EOP)
}
```
- 有限状态机FSM

### 解析标签
tag 开始标签 结束标签 自封闭标签

### 创建元素
- emitToken
- 在状态机中，除了状态迁移，还要加入业务逻辑
- 标签结束提交token

### 处理属性

### 用token构建dom树
- 用栈构建
- 遇到开始标签入栈 结束标签 出栈
  

### 将文本节点加入dom树
追加文本内容
- 与自封闭标签处理类似
- 多个文本节点需要合并

## css计算 css computing
> npm css包 构建ast
### 收集css规则
遇到style的结束标签的时候计算css规则 addCSSRules
不考虑link @import
- 保存css规则
- css parser 进行分析
- 研究css这个库的解析规则

### 添加调用
把css规则应用上去 在startTag的时候进行判断css规则 computeCSS
- 创建一个语速的时候，立即计算css
- 真实的浏览器

### 获取父元素序列
reverse 
从当前元素逐级匹配
- 在computeCSS 中，必须知道元素所有的父元素

### 选择器与元素的匹配
- 选择器也要从当前元素向外排列
- 用循环匹配父元素队列

### 计算选择器与元素匹配
- 根据选择器的类型和元素属性，计算是否与当前的元素符合


### 生成computed属性
- 把属性存到computedStyle

### specificity的计算逻辑
> 专指的程度

