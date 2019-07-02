## 什么是面向对象编程
* 用对象的思想去写代码，就是面向对象编程

## 面向对象编程(OOP)的特点
* 抽象：抓住核心问题
* 封装：只能通过对象来访问方法
* 继承：从已有对象上继承出新的对象
* 多态：多对象的不同形态

## 对象中属性与方法的区分
* 看最后有没有() 有就是方法，没就是属性

## 创建面向对象
```python
var obj = new Object(); //创建了一个空的对象
 obj.name = '小明'; //属性
 obj.showName = function () { //方法
     alert(this.name);
 };
 obj.showName();//小明
```

## 工厂方式
```python
function createPerson(name) {
    //1.原料
    var obj = new Object();
    //2.加工
    obj.name = name;
    obj.showName = function () {
        alert(this.name);
    };
    //3.出场
    return obj;
}
var p1 = createPerson('小明');
p1.showName();//小明
var p2 = createPerson('小强');
p2.showName();//小强
```

## 构造函数
* new后面调用的函数 : 叫做构造函数
    注意：new 后面跟的首字母要大写.
例子：3构造函数.html

## 基本类型与对象类型 区别
* 基本类型 : 值相同就可以
```python
var a = 5;
var b = 5;
alert(a == b); //true
```
* 对象类型 : 值和引用都相同才行
```python
var a = [1, 2, 3];
var b = a;
alert(a == b); //true

var a = [1,2,3];
var b = [1,2,3];
alert( a == b );//false
```

## 原型 : 去改写对象下面公用的方法或者属性 , 让公用的方法或者属性在内存中存在一份 ( 提高性能 )
* 与普通方法区别
    例子：5原型与普通方法区别.html

## 面向对象改造
例子：6面向对象改写选项卡.html