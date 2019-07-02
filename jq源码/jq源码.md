## 定义了一些变量和函数 jQuery = function(){}
```python

        function jQuery() {
            return new jQuery.prototype.init();
        }
        jQuery.prototype.init = function () {};
        jQuery.prototype.css = function () {};
        jQuery.prototype.init.prototype = jQuery.prototype;
```
例子：1.html 

## 给JQ对象，添加一些方法和属性
* constructor : 修正指向问题
        ```python
        function Aaa(){
        }
        Aaa.prototype.constructor = Aaa;
        Aaa.prototype.constructor = Array;

        Aaa.prototype.name = 'hello';
        Aaa.prototype.age = 30;*/

        Aaa.prototype = {
                constructor : Aaa,
                name : 'hello',
                age : 30
        };
        var a1 = new Aaa();
        alert( a1.constructor );
        ```
* init() : 初始化和参数管理
例子：2.html
* selector : 存储选择字符串
* length : this对象的长度
* toArray() :  转数组
```python
$('div') : { 0 : div , 1 : div , 2 : div , length : 3 }
	
$('div').toArray() : [div,div,div]
$('div').get(-1).innerHTML = '222222222';
	
for(var i=0;i<$('div').get().length;i++){
$('div').get(i).innerHTML = '222222';
	}
```
* get() :  转原生集合
```python
get: function( num ) {//转原生集合（数组形式）
return num == null ?//转集合
Return a 'clean' array
this.toArray() :
Return just the object
( num < 0 ? this[ this.length + num ] : this[ num ] );
},
```
* pushStack() :  JQ对象的入栈
```python
类似
$('div').pushStack( $('span') ).css('background','red').css('background','yellow');
```
* each() :  遍历集合

* ready() :  DOM加载的接口

* slice() :  集合的截取
```python
$('div').slice(1,3).css('background','red').end().css('color','blue');
```
* first() :  集合的第一项
* last() :   集合的最后一项
* eq() :   集合的指定项
```python
$('div').eq(0).css('background','red');
```
* map() :   返回新集合
```python
var arr = ['a','b','c'];
	
arr = $.map(arr,function(elem,i){
	return elem + i;
});

alert( arr );
```
* end() :   返回集合前一个状态
```python
$('div').slice(1,3).css('background','red').end().css('color','blue');
```
* push() :    (内部使用)
* 
* sort() :    (内部使用)
* 
* splice() :  (内部使用)
## extend : JQ的继承方法
* 当只写一个对象自变量的时候，JQ中扩展插件的形式
```python
$.extend({     //扩展工具方法
	aaa : function(){
		alert(1);
	},
	bbb : function(){
		alert(2);
	}
});

$.fn.extend({     //扩展JQ实例方法
	aaa : function(){
		alert(3);
	},
	bbb : function(){
		alert(4);
	}
});


$.aaa();
$.bbb();

$().aaa();
$().bbb();
```
* 当写多个对象自变量的时候 , 后面的对象都是扩展到第一个对象身上
```python
/*var a = {};

$.extend( a , { name : 'hello' } , { age : 30 } );

console.log( a );*/

还可以做  深拷贝 和 浅拷贝

var a = {};
var b = {  name : { age : 30 } };

$.extend( true , a , b );

a.name = 'hi';

a.name.age = 20;

alert( b.name.age );
```
* 总体流程
```python
jQuery.extend = jQuery.fn.extend = function(){
	
	定义一些变量
	
	if(){}   看是不是深拷贝情况
	
	if(){}   看参数正确不
	
	if(){}   看是不是插件情况
	
	for(){   可能有多个对象情况
		
		if(){}  防止循环引用
		
		if(){}   深拷贝
		else if(){}   浅拷贝
		
	}
	
};
```
## jQuery.extend() : 扩展一些工具方法
* expando  :  生成唯一JQ字符串(内部)
```python
expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),//生成唯一jq字符串
```
* noConflict()  :  防止冲突
```python
var miaov = $.noConflict(true);


miaov(function(){
	
	//alert($);
	
	alert( jQuery );
	
});
```
* isReady  :  DOM是否加载完(内部)

* readyWait  :  等待多少文件的计数器(内部)

* holdReady()  :  推迟DOM触发
```python
$.holdReady(true);

$.getScript('a.js',function(){
	$.holdReady(false);
});


$.holdReady(true);

$.getScript('b.js',function(){
	$.holdReady(false);
});

$.holdReady(true);

$.getScript('c.js',function(){
	$.holdReady(false);
});


$(function(){
	alert(2);
});
```
* ready()  :  准备DOM触发
```python
$(document).on('ready',function(){
	alert(123);
});
```
* isFunction()  :  是否为函数
```python
function isFunction(fn){ 
       
if( !fn )
	return false;
var s   = "toString",
	v   = "valueOf",
	t   = typeof fn[s] === "function" && fn[s],
	o   = typeof fn[v] === "function" && fn[v],
	r;
if( t )
	delete fn[s];
if( o )
	delete fn[v];
r   = typeof fn !== "string" && !(fn instanceof String) && !fn.nodeName && fn.constructor != Array && /^[\s[]?function/.test(fn + "";
if( t )
	fn[s]   = t;
if( o )
	fn[v]   = o;
return r;
        
}
```
* isArray()  :  是否为数组
```python
alert( Array.isArray([]) );
```
* isWindow()  :  是否为window
```python
alert( $.isWindow(window) );
```
* isNumeric()  :  是否为数字 
```python
alert( $.isNumeric(123) );
```
* type()  :  判断数据类型
```python
var a = new Date;
alert( $.type(a) );
```
* isPlainObject()  :  是否为对象自变量
```python
var obj = { name : 'hello' };
var obj = new Object();
var obj = [];
alert($.isPlainObject(obj));



```
* isEmptyObject()  :  是否为空的对象
```python
var arr = [];
function Aaa(){
}
var obj = new Aaa();
alert( $.isEmptyObject(obj) );
```
* error()  :  抛出异常
```python
function Aaa(){
}

Aaa.prototype.constructor = Aaa;
Aaa.prototype.show = function(){};

for( var attr in Aaa.prototype ){
	alert(attr);
}

$.error('这是错误');
```
* parseHTML()  :  解析节点
```python
var str = '<li></li><li></li><script><\/script>';
console.log($.parseHTML(str,document,true))
```
* parseJSON()  :  解析JSON
```python
var str = '{"name":"hello"}';
alert($.parseJSON(str).name);
```
* parseXML()  :  解析XML

* noop()  :  空函数
* globalEval()  :  全局解析JS
* camelCase()  :  转驼峰(内部)
* nodeName()  :  是否为指定节点名(内部)
* each()  :  遍历集合
* trim()  :  去前后空格
* makeArray()  :  类数组转真数组
* inArray()  :  数组版indexOf
* merge()  :  合并数组
* grep()  :  过滤新数组
* map()  :  映射新数组
* guid  :  唯一标识符(内部)
* proxy()  :  改this指向
* access()  :  多功能值操作(内部)
* now()  :  当前时间
* swap()  :  CSS交换(内部)
## Sizzle : 复杂选择器的实现 

## Callbacks : 回调对象 : 对函数的统一管理

## Deferred : 延迟对象 : 对异步的统一管理

## support : 功能检测

## data() : 数据缓存

## queue() : 队列方法 : 执行顺序的管理 

## attr() prop() val() addClass()等 : 对元素属性的操作

## on() trigger() : 事件操作的相关方法

## DOM操作 : 添加 删除 获取 包装 DOM筛选

## css() : 样式的操作

## 提交的数据和ajax() : ajax() load() getJSON()

## animate() : 运动的方法

## offset() : 位置和尺寸的方法## 

## JQ支持模块化的模式## 	

## window.jQuery = window.$ = jQuery;
