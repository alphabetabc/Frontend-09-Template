# wk12学习笔记-重学css

## css 排版

### 盒 Box
#### 概念
- 源代码 标签 tag
- 语义 元素 element
- 表现 盒 box
```md
html代码中书写的是 标签 开始标签 结束标签  自封闭标签
一对起止标签 表示一个元素
```

#### 盒模型
- content
- padding 
- margin

- `box-sizing: content-box border-box`


### 正常流
> flex 布局最简单
- css排版主要就是：盒 + 文字
- 写字规则
  - 从左向右
  - 同一行对齐
  - 一行写满 换到下一行
- 排版规则
  - 收集盒进行
  - 计算盒在行内排布
  - ？？

- inline-box
- block-level-box

块级 bfc  行级 ifc

### 正常流的行级排布
行内排布
- 基线
  - 基线对齐
  - line-top
  - text-top
  - base-line
  - text-bottom
  - line-bottom

### 正常流的块级排布
- float clear
  - 依附于正常流
  - 高度所占的范围都会影响
  - 会受影响上一个元素的位置
  - float 换行 clear
- margin collapse 
  - 垂直方向 margin 折叠
  - 只有bfc里面有

### BFC 合并

- block Container
- block-level box
- block box = block container + block-level box

#### block container
- block
- inline-block
- table-cell
- flex item
- grid cell
- table-caption

#### block-level box
- inline-block
- inline-flex
- inline-table
- inline-grid
- ...

display:run-in

#### 设立BFC
- floats
- absolutely positioned elements
- block container
  - flex items
  - grid cell
- overflow

### flex布局
- main axis
- cross axis
- flex元素

## css动画与绘制
### 动画
- `@keyframes` 定义
- `animation` 使用
  - `animation-name`
  - `animation-duration`
  - `animation-timing-function`
  - `animation-delay`
  - `animation-iteration-count`
  - `animation-direction`
- transition
  - `transition-property`
  - `transition-duration`
  - `transition-timing-function`
  - `transition-delay`
- cubic-bezier 三次贝塞尔曲线
  - 牛顿积分法
  - 贝塞尔曲线的拟合

### 颜色
- 可见波段 400nm ~ 760nm
- 三原色 红黄蓝
- 代码 rgb 
  - hsl
    - 色相、纯度、亮度
  - hsv
    - 色相、纯度、亮度


### 绘制
- 几何图形
  - border 
  - box-shadow
  - border-radius
- 文字
  - font
  - text-decoration
- 位图
  - background-image

#### 应用技巧
- data uri + svg 背景