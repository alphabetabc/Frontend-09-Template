# wk13学习笔记-重学html、浏览器api
## 重学HTML
### HTML的定义:XML,SGML
- 源流：xml SGML 独立的语言

### DTD 与 XML namespace
- `&nbsp;`

- namespace
  - html
  - svg
  - mathML

### HTML语义标签
- aside
- main
- article
- hgroup
- h1 ...
- nav
- figure
- dfn
- samp
- pre
- code
- footer

### HTML语法
- element
- text
- comment  注释
- DocumentType H5之后只有一种
- ProcessingInstruction 预处理语法
- CDATA

#### 字符引用
- `&#161;`
- `&amp;`
- `&lt;`
- `&quot;`

## 浏览器Api
### DOM api
- node节点
  - Element
  - Document
  - CharacterData
  - DocumentFragment
  - DocumentType

#### 导航类操作
- node导航节点
  - parentNode
  - childNodes
  - firstChild
  - lastChild
  - nextSibling
  - previousSibling
- element导航操作
  - parentElement
  - children
  - ...

#### 修改操做
- appendChild
- insetBefore
- removeChild
- replaceChild

#### 高级操作
- compareDocumentPosition
- contains
- isEqualNode
- cloneNode
- isSameNode

### 事件api
- `target.addEventListener(type,listener,[,options])`
- 冒泡 捕获

### Range API
批量操作，操作dom树操作
使用range
- living collection

#### API
- `var range = new Range()`
- `range.setStart(element, 9)`
- `range.setEnd(element,4)`
- `var range = document,getSelection().getRangeAt(0)`

- `range.setStartBefore`
- `range.setEndBefore`
- `range.setStartAfter`
- `range.setEndAfter`
- `range.setlectNode`
- `range.setlectNodeContents`

- `var fragment = range.extractContents()`
- `range.insertNode(document.createTextNode('aaaa'))`

### CSSOM
- `document.styleSheets`
  - `document.styleSheets[0].cssRules`
  - `document.styleSheets[0].insertRule`
  - `document.styleSheets[0].removeRule`

#### rule

- CSSStyleRule
  - selectorText String
  - style k-v结构

#### getComputedStyle
- `window.getComputedStyle(el,prop)`

### CSSOM View
cssom 是与css语言对应的
获取render 之后的样式信息
#### window
- **window.innerHeight  window.innerWidth**  html实际的尺寸
- window.outerWidth  window.outerHeight 浏览器总共的尺寸
- **window.devicePixelRatio** 物理像素/实际像素
- window.screen
  - window.screen.width
  - window.screen.height
  - window.availWidth
  - window.availHeight

#### window API
- `window.open()`
- moveTo(x,y)
- moveBy(x,y)
- resizeTo(x,y)
- ..

#### scroll
- scrollTop
- scrollLeft
- scrollWidth
- scrollHeight
- scroll(x,y)
- scrollBy(x,y)
- scrollIntoView()

#### layout
- getClientRects()
- getBoundingClientRect()


### 其他API
全部的api的分类和整理

