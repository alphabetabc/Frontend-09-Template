# wk04学习笔记


## 字符串分析算法总论
- 字典树
  - 大量高重复字符串的存储与分析
  - **精确匹配**
  - 1亿长度的字符串？？ 搜索关键词
- KMP
  - 字符串里找模式
  - 检查长字符串里面有没有一个短字符串的部分
  - **部分匹配**
- Wildcard
  - KMP的基础上带通配符（? * ）的字符串模式
  - 可以在O(n)/O(m+n)的时间复杂度内完成
  - 贪心算法？？
- 正则
  - 字符串通用模式匹配
  - 表达式
- 状态机
  - 通用的字符串分析
  - 需要设计
  - 有限状态机
- LL LR
  - 字符串多层级结构分析

## 字典树
- 第一个字母、第二个字母、... 最后变成了一棵树tree
  - hierarchy？？
  - 分支
- trie
- 字典树是哈希树的一个特例
  - 数字 可以用别的算法

## KMP
- pattern 
  - 长传中找短的字符串(pattern)
  - 上帝视角：直接映射字段，是不是就是上帝视角，擦~~
  - pattern的自重复特性
    - 创建一个pattern长度的数组 ---> table
    - kmp匹配的回退表格
    - 对比的时候不需要回退的到第一位去对比
- 暴力解

## wildcard
- 只有*的情况
- 只有？的情况
```md
wildcard ab*c?d*abc*a?d
- 简化问题
 - 只有*  ab*cd*abd*a?b
 - 只有?  c?d,a?d

最后一个*尽量多匹配, 其他尽量少匹配
```