# wk08学习笔记 - 浏览器工作原理
## 浏览器
```md
url ---[http]---> 
    html ---[parse]---> 
        dom ---[css computing] ---> 
            dom with css ---[layout]---> 
                dom width position ---[render]---> bitmap
```

## 有限状态机
> 有限状态机处理字符串
- 每一个状态都是一个机器
  - 在每个机器里，我们可以做计算、存储、输出。。。
  - 所有的这些机器接收的输入是一致的
  - 状态机的每一个及其本身没有状态，如果我们用函数来表示的话，他应该是纯函数（无副作用）
- 每个机器知道下一个状态 两种状态
  - 每个机器都有确定的下一个状态(Moore) 
  - 每个机器根据输入决定下一个状态(Mealy)
```js
// Mealy
// 每个函数是一个状态
function state(input){
    return next;
}
```
## 状态机: 不使用状态机处理字符串
- 在一个字符串找到字符串'a'
- 在一个字符串中，找到字符'ab' 不用正则
- 在一个字符串中，找到字符'abcdef' 不用正则

## 状态机: 使用状态机处理字符串
- 每找到一个字符就切换一个状态
- reConsume

## http 协议解析
### ISO-OSI 七层网络模型
- 自下而上
  ```md
  1、 4G 、4G 、wi-fi
  物理层
  数据链路
  2、Internet
  网络
  3、TCP 
  传输
  4、http
  会话
  表示
  应用
  ```
### tcp ip 基础知识
  - 流 tcp 数据传输 没有分割单位 只保证顺序   ---> 包
  - 端口   ---> ip地址
  - require('net')   ---> c++的包 libnet(构造ip包) / libpcap

### HTTP
- request 文本型的协议 内容都是字符串
  ```
  ```
- response
    一个request 对应 一个 response

### send response
#### send函数的编写
- request 构造器中手机必要的信息

#### response http
- chunk body
```text
HTTP
```

### 发送请求
- 支持已有connection 或者 新建 connection

### response 解析

### response body
