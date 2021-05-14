# wk11学习笔记 - 重学css

## css总论
### css 语法研究
- css总体结构
  - css 2.1
  - @charset
  - @import
  - rules
    - @media
    - @page
    - rule

### @规则的结构 at-rules
- @charset
- @import
- **@media** 
- @page
- @counter-style
- **@keyframes**
- **@fontface**
- @supports
- @namespace

### css规则的结构
- 选择器
- 声明
  - key
  - value

### 收集标准
写一段脚本 

### 总结
- css 语法
- at-rule
- selector
- variables
- value
- 实验

## css选择器
### 选择器语法
- 简单选择器
  - `* `
  - `div svg|a  标签选择器`
    - html有命名空间 命名空间分隔符
  - `.cls class选择器`
  - `#id  id选择器`
  - `[attr=value] 属性选择器`
  - `:hover 伪类选择器`
  - `::before 伪元素选择器（双冒号）`
- 复合选择器
  - `<简单选择器><简单选择器><简单选择器>`
  - `* 或者 div 必须写在最前面`
- 复杂选择器
  - `<复合选择器><sp><复合选择器>`
  - `<复合选择器>">"<复合选择器>`
  - `<复合选择器>"~"<复合选择器>`
  - `<复合选择器>"+"<复合选择器>`
  - `<复合选择器>"||"<复合选择器>`

### 选择器优先级
- 简单选择器计数
<!-- -  -->

### 伪类
> 内容非常多的简单选择器
- 链接/行为  最开始都是对超链接设置的
  - `:any-link`
  - `:link :visited`
    - 一旦设置，除了设置字体颜色其他都不能设置了
  - `:hover`
  - `:active`
    - 激活状态
  - `:focus`
  - `:target`
- 树结构
  - `:empty`
  - `:nth-child()`  
  - `:nth-last-child`
  - `:first-child :last-child :only-child`
- 逻辑型
  - `:not` 简单用就好
  - `:where  :has`

### 伪元素
- `::before`
- `::after`
- `::first-line`
  - 可能控制的元素范围不一样
  - 
- `::first-letter`
  - 第一个字符

```md
伪元素通过选择器向页面提交一个元素
一旦设置 content 就可以在页面中参与排版
```

#### `::before ::after`
```html
<div>
  <::before/>
  content content content content content
   content content content content content
    content content content content content
  <::after/>
</div>
```
#### `::first-line`

#### `::first-letter`
- font
- color
- background

---
- rule
  - selector
    - selector group
    - selector
        - >
        - <sp>
        - + 
        - -
    - simple-selector
        - 
  - declaration
    - key
      - variables
      - properties
    - value
      - calc
      - number
      - length