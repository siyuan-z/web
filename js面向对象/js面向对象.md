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
* 原型链  实例对象与原型之间的连接，叫做原型链  原型链的最外层 : Object.prototype
```python
Object.prototype.num = 30;

var a1 = new Aaa();
alert(a1.num);
```
* hasOwnProperty : 看是不是对象自身下面的属性
```python
var arr = [];
arr.num = 10;
Array.prototype.num2 = 20;

//alert(  arr.hasOwnProperty('num')  );  //true

alert(  arr.hasOwnProperty('num2')  );  //false
```
* constructor : 查看对象的构造函数
```python
function Aaa(){
}

Aaa.prototype.name = 10;
Aaa.prototype.constructor = Aaa;

for( var attr in Aaa.prototype ){
	alert(attr);
}
```
* instanceof : 对象与构造函数在原型链上是否有关系
```python
function Aaa(){
}

var a1 = new Aaa();

//alert( a1 instanceof Object );  //true


var arr = [];

alert( arr instanceof Array );
```
* toString() : 系统对象下面都是自带的 , 自己写的对象都是通过原型链找object下面的
例子：8tostring.html

## 面向对象改造
例子：6面向对象改写选项卡.html

## 继承 
* 继承 : 子类不影响父类，子类可以继承父类的一些功能 ( 代码复用 )
* 属性的继承 : 调用父类的构造函数 call
* 方法的继承 : for in :  拷贝继承 (jquery也是采用拷贝继承extend)
例子：9继承.html
* 类式继承 JS是没有类的概念的 , 把JS中的构造函数看做的类,要做属性和方法继承的时候，要分开继承
例子：11类式继承.html
* 原型继承 无new的对象
例子：12原型继承.html

## 组件开发
```python
var a = {   //配置参数
	
};

var b = {   //默认参数
	name : '小强'
};

extend( b , a );

alert( b.name );


function extend(obj1,obj2){
	for(var attr in obj2){
		obj1[attr] = obj2[attr];
	}
}
```

## 自定义事件 : 主要是跟函数有关系,就是让函数能够具备事件的某些特性
```python
window.addEventListener('show',function(){
	alert(1);
},false);
window.addEventListener('show',function(){
	alert(2);
},false);
window.addEventListener('show',function(){
	alert(3);
},false);

show();  //主动触发自定义事件
```
例子：15自定义事件.html