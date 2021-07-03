# wk14学习笔记 组件基本知识 

## 组件的基本概念和基本组成
> 组件化  拓展
> 架构模式 mvc mvvm
组件化体系 提升复用率
### 对象与组件
- 对象
  - Properties
  - Methods
  - Inherit

- 组件 适合描述ui 树形结构
  - Properties
  - Methods
  - Inherit
  - Attribute 
  - Config & State
  - Event 
  - Lifecycle
  - Children

### Component
- Component user`s Markup code
  - attribute xml里面
- Js coder     
  - Method
  - Property 设置一个property会促使组件变化 强调一个从属关系
    - resolve过的值
  - Event 

### Attribute vs Property

### 如何设计组件状态
- property
- attribute
- state 只能从内部改变
- config 一次性的结果 不可更改

### lifecircle
- created
  - mount
    - unmount
  - js change/set
    - render/update
  - user input
    - render/update
- destroyed

### Children
- Content
  - 直接显示
- Template
  - 模板作用的children


## 为组件添加JSX语法
- markup 
- javascript

### dependices
- webpack
- webpack-cli
- babel-loader
- @babel/core
- @babel/preset-env
- @babel/plugin-transform-react-jsx


## jsx的基本使用方法

## 轮播组件
- 资源
- 定时器 自动轮播
- 手势动作

