# wk05学习笔记

## Proxy的基本用法
###  代理对象
```js
const obj = {};
const proxy = new Proxy(obj,handlers)
```
### handlers
  - get()
    ```ts
    /**
     * - 如果要访问的目标属性是不可写以及不可配置的，
     *   则返回的值必须与该目标属性的值相同。
     * - 如果要访问的目标属性没有配置访问方法，
     *   即get方法是undefined的，则返回值必须为undefined
     */
    get(target, property, receiver):any
    ```
  - set()
    - 返回 true 代表属性设置成功
    ```ts
    /**
     * - 若目标属性是一个不可写及不可配置的数据属性，则不能改变它的值
     * - 如果目标属性没有配置存储方法，即 [[Set]] 属性的是 undefined，
     *   则不能设置它的值。
     * - 在严格模式下，如果 set() 方法返回 false，
     *   那么也会抛出一个 TypeError 异常 
     */
    set(target, property, value, receiver):boolean
    ```
  - getPrototypeOf()
    ```ts
    /**
     * - getPrototypeOf() 方法返回的不是对象也不是 null
     * - 目标对象是不可扩展的，且 getPrototypeOf() 方法返回的原型
     *   不是目标对象本身的原型。
     */
    getPrototypeOf(target):Object|null
    ```
  - setPrototypeOf()
    - 如果成功修改了[[Prototype]], setPrototypeOf 方法返回 true,否则返回 false.
    ```ts
    /**
     * 如果 target 不可扩展, 原型参数必须
     * 与Object.getPrototypeOf(target) 的值相同. 
     */  
    setPrototypeOf(target, prototype):boolean
    ```
  - isExtensible()
    ```ts
    /**
     * Object.isExtensible(proxy) 必须同Object.isExtensible(target)返回相同值
     */
    isExtensible(target):boolean // 必须返回一个 Boolean值或可转换成Boolean的值
    ```
  - preventExtensions()
    ```ts
    // 如果目标对象是可扩展的，那么只能返回 false
    preventExtensions(target):boolean
    ```
  - getOwnPropertyDescriptor()
    ```ts
    /**
     * - getOwnPropertyDescriptor 必须返回一个 object 或 undefined。
     * - 如果属性作为目标对象的不可配置的属性存在，则该属性无法报告为不存在。
     * - 如果属性作为目标对象的属性存在，并且目标对象不可扩展，
     *   则该属性无法报告为不存在。
     * - 如果属性不存在作为目标对象的属性，并且目标对象不可扩展，
     *   则不能将其报告为存在。
     * - 属性不能被报告为不可配置，如果它不作为目标对象的自身属性存在，
     *   或者作为目标对象的可配置的属性存在。
     * - Object.getOwnPropertyDescriptor（target）的结果可以使用 
     *   Object.defineProperty 应用于目标对象，也不会抛出异常。 
     */
    getOwnPropertyDescriptor(target, prop):object | undefined
    ```
  - defineProperty()
    ```ts
    /**
     * - 如果目标对象不可扩展， 将不能添加属性。
     * - 不能添加或者修改一个属性为不可配置的，
     *   如果它不作为一个目标对象的不可配置的属性存在的话。
     * - 如果目标对象存在一个对应的可配置属性，这个属性可能不会是不可配置的。
     * - 如果一个属性在目标对象中存在对应的属性，那么
     *   Object.defineProperty(target, prop, descriptor) 将不会抛出异常。 
     * - 在严格模式下， false 作为 handler.defineProperty 方法的返回值
     *   的话将会抛出 TypeError 异常.
     */
    defineProperty(target, property, descriptor):boolean
    ```
  - has()
    ```ts
    /**
     * 如果目标对象的某一属性本身不可被配置，则该属性不能够被代理隐藏.
     * 如果目标对象为不可扩展对象，则该对象的属性不能够被代理隐藏
     */
    has(target, prop):boolean
    ```
  - deleteProperty()
    ```ts
    /**
     * - 如果目标对象的属性是不可配置的，那么该属性不能被删除。
     * - 必须返回一个 Boolean 类型的值，表示了该属性是否被成功删除。
     */
    deleteProperty(target, property):boolean
    ```
  - ownKeys()
    ```ts
    /**
     * - ownKeys 的结果必须是一个数组.
     * - 数组的元素类型要么是一个 String ，要么是一个 Symbol.
     * - 结果列表必须包含目标对象的所有不可配置（non-configurable ）、
     *   自有（own）属性的key.
     * - 如果目标对象不可扩展，那么结果列表必须包含目标对象的所有自有
     *  （own）属性的key，不能有其它值.
     */
    ownkeys(target):Array<string | symbol>
    ```
  - apply()
    ```ts
    /**
     * target必须是可被调用的。也就是说，它必须是一个函数对象。
     */
    apply(target, thisArg, argumentsList):any
    ```
  - construct()
    ```ts
    /**
     * 必须返回一个对象
     */
    construct(target, argumentsList, newTarget):object
    ```

## reactive
- 初步实现
  - reactive不是阻止set、get, 是在set、get的过程中完成响应式
  - 所以reactive目测不会影响整个对象的数据结构 别再乱想了~~~~
- effect中获取依赖关系
  - 没声明一个effect, 就会自动执行一次callback, 用来获取proxy对象上的依赖关系
  - 一定程度上是不是自动init了一次呢？
- 深层代理
  - 当前属性值是对象的时候深度代理
  - 这是递归么？并不是
- 全局存在的两个变量
  - callbacks 保存每一个target的callback
  - reactivities 保存每个target


--- 新的知识点---
## 拖拽
```js
const dragableEl = document.getElementById('dragable');
let baseX = 0,
    baseY = 0;
dragableEl.addEventListener('mousedown', (e) => {
    const startX = e.clientX,
        startY = e.clientY;

    const up = (ev) => {
        baseX = baseX + ev.clientX - startX;
        baseY = baseY + ev.clientY - startY;
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
    };
    const move = (ev) => {
        const x = baseX + ev.clientX - startX;
        const y = baseY + ev.clientY - startY;
        dragableEl.style.transform = `translate(${x}px,${y}px)`;
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
});
```

## range
