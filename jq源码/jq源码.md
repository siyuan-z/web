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
var a = {};

$.extend( a , { name : 'hello' } , { age : 30 } );

console.log( a );

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
noConflict: function( deep ) {//防止冲突
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}
	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}
	return jQuery;
},
```
例子
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
holdReady: function( hold ) {//推迟dom触发
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
},
```
例子
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
ready: function( wait ) {//准备dom触发

	if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
		return;
	}
	jQuery.isReady = true;
	if ( wait !== true && --jQuery.readyWait > 0 ) {
		return;
	}
	readyList.resolveWith( document, [ jQuery ] );
	if ( jQuery.fn.trigger ) {
		jQuery( document ).trigger("ready").off("ready");
	}
	},
```
* isFunction()  :  是否为函数
```python
isFunction: function( obj ) {//是否为函数
	return jQuery.type(obj) === "function";
},
```
例子
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
isArray: Array.isArray,//是否为数组
```
* isWindow()  :  是否为window
```python
isWindow: function( obj ) {//是否为window
	return obj != null && obj === obj.window;
	},
```
* isNumeric()  :  是否为数字 
```python
isNumeric: function( obj ) {//是否为数字
return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},
```
* type()  :  判断数据类型
```python
type: function( obj ) {//判断数据类型
	if ( obj == null ) {
		return String( obj );
	}
	// Support: Safari <= 5.1 (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ core_toString.call(obj) ] || "object" :
		typeof obj;
},
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
isEmptyObject: function( obj ) {//是否为空对象
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},
```
* error()  :  抛出异常
```python
error: function( msg ) {//抛出异常
		throw new Error( msg );
	},
```
* parseHTML()  :  解析节点
```python
var str = '<li></li><li></li><script><\/script>';
console.log($.parseHTML(str,document,true))
```
* parseJSON()  :  解析JSON
```python
parseJSON: JSON.parse,
```
* parseXML()  :  解析XML

* noop()  :  空函数
* globalEval()  :  全局解析JS
* camelCase()  :  转驼峰(内部)
```python
camelCase: function( string ) {//转驼峰
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha fcamelCase );
	},
```
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

## Callbacks : 回调对象 : 对函数的统一管理，提供了一种强大的方法来管理回调函数队列
### 设计思想
pub/sub (观察者模式) 的背后，总的想法是在应用程序中增强松耦合性。并非是在其它对象的方法上的单个对象调用。一个对象作为特定任务或是另一对象的活动的观察者，并且在这个任务或活动发生时，通知观察者。观察者也被叫作订阅者（Subscriber），它指向被观察的对象，既被观察者（Publisher 或 subject)。当事件发生时，被观察者（Publisher）就会通知观察者（subscriber）
```python
var callbacks = $.Callbacks();

  callbacks.add(function() {
    alert('a');
  })

  callbacks.add(function() {
    alert('b');
  })

  callbacks.fire(); //输出结果: 'a' 'b'
```
### 核心方法fire()
* 其实就是拿出list中保存的回调函数，执行罢了
* 将该 fire() 方法作为私有方法被封装在函数中不可直接访问
```python
list[ firingIndex ].apply( data[ 0 ], data[ 1 ] )
```
### 源码
整个$.Callbacks的源码很少，它是一个工厂函数，使用函数调用（非new，它不是一个类）创建对象，它有一个可选参数flags用来设置回调函数的行为。
```python
jQuery.Callbacks = function( options ) {
        options = typeof options === "string" ?
	( optionsCache[ options ] || createOptions( options ) ) :
	jQuery.extend( {}, options );
        var 
        return self;
```
### 几个便捷的处理参数
* once: 确保这个回调列表只执行（ .fire() ）一次(像一个递延 Deferred).
* memory: 保持以前的值，将添加到这个列表的后面的最新的值立即执行调用任何回调 (像一个递延 Deferred).
* unique: 确保一次只能添加一个回调(所以在列表中没有重复的回调).
* stopOnFalse: 当一个回调返回false 时中断调用

## Deferred : 延迟对象 : 对异步的统一管理
### Deferred的使用
```python
var cb = $.Deferred();

setTimeout(function(){

　　alert(1);

　　cb.resolve();

},1000)

cb.done(function(){

　　alert(2);

});
```
以上代码执行顺序：新建一个延迟对象cb -> setTimeout，一秒后执行方法弹出1 -> 执行cb.done方法，把弹出2的方法保存 ->一秒后，执行弹出1的方法，弹出1，然后调用cb.resolve()，只要调用了cb.resolve方法，就会执行弹出2的方法
### Deferred拥有三套处理方法集合
* 第一套，它代表完成，成功，触发
```python
 $.Deferred()，cb.fire()  <-> cb.resolve();，cb.add <-> cb.done
```
* 第二套是：代表未完成，失败，触发
```python
 $.Deferred()，cb.fire()  <-> cb.reject();，cb.add <-> cb.fail。
```
* 第三套是：进行时，触发
```python
  $.Deferred()，cb.fire()  <-> cb.notify();，cb.add <-> cb.progress。
```
### Deferred在Ajax中的应用举例
```python
$.ajax({

　　url:"xxx.php",

　　success:function(){},

　　error:function(){}

})
//使用延迟对象来操作Ajax时,done代表成功，fail代表失败
$.ajax('xxx.php').done(function(){}).fail(function(){});
```
## support : 功能检测  用于检查浏览器对各项特性的支持
* checkOn：动态创建的radio和checkbox的默认值是否为"on"，在老版本的webkit下默认值是""。
        例子：3checkOn.html
* optSelected：动态创建的下拉框中的第一个option是否默认被选中。
        例子：4optSelected.html
* $.support.submitBubbles, $.support.changeBubbles, $.support.focusinBubbles 冒泡 这三个检测要等DOM加载完才会进行判断，这里只是先定义一下。
        例子：5DOM加载完执行.html 
* $.support.noCloneEvent 是检测IE是否会复制元素的事件的属性
```python
if ( !div.addEventListener && div.attachEvent && div.fireEvent ) {
    div.attachEvent( "onclick", clickFn = function() {
        // Cloning a node shouldn't copy over any
        // bound event handlers (IE does this)
        support.noCloneEvent = false;
    });
    div.cloneNode( true ).fireEvent("onclick");
    div.detachEvent( "onclick", clickFn );
}
```

## data() : 数据缓存 就是让一个对象和一组数据一对一的关联
* Data.prototype.key() - 钥匙
```python
Data.prototype = {
        //获取缓存的钥匙
        key: function (owner) {
            //检测是否可以存放钥匙
            if (!Data.accepts(owner)) {
                return 0; //return false
            }
 
            var descriptor = {},
                //获取钥匙，还是在Element上挂载jQuery属性
             unlock = owner[this.expando];
            //如果钥匙没有则创建
            if (!unlock) {
                unlock = Data.uid++;
                try {
                    //把expando转移到Data中，没一个Data实例都有不同的expando
                    descriptor[this.expando] = { value: unlock };
                    //参考：http://msdn.microsoft.com/zh-cn/library/ie/ff800817%28v=vs.94%29.aspx
                    //这个属性不会被枚举
                    Object.defineProperties(owner, descriptor);
                } catch (e) {
                    //如果没有Object.defineProperties，则采用jQuery.extend
                    descriptor[this.expando] = unlock;
                    jQuery.extend(owner, descriptor);
                }
            }
            if (!this.cache[unlock]) {
                this.cache[unlock] = {};
            }
            //返回这个钥匙
            return unlock;
        }
    };
```
* access() - 通用接口
```python
var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
        //元素，委托的方法，属性名，属性值，是否链式，当返回空数据的时候采用的默认值,fn参数是否是Function
        //一组通用（内部）方法，既然设置也能获取Data
        var i = 0,
        len = elems.length,
        bulk = key == null;
        //Object
        if (jQuery.type(key) === "object") {
            //如果是放数据，Object类型，则循环执行fn
            chainable = true;//这里修正了是否链式....
            for (i in key) {
                jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
            }
 
            // Sets one value
        } else if (value !== undefined) {
            chainable = true;
            //如果设置的value是Function
            if (!jQuery.isFunction(value)) {
                raw = true;
            }
            //当参数是这样的：access(elems,fn,null)
            if (bulk) {
                if (raw) {
                    //参数是这样的：access(elems,fn,null,function)
                    fn.call(elems, value);
                    fn = null;
                } else {
                    //参数是这样的：access(elems,fn,null,String/Object)
                    bulk = fn;//这里把fn给调换了
                    fn = function (elem, key, value) {
                        //这个jQuery()封装的真是....
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }
            //到了这里如果还可以执行的话那么参数是：access(elems,fn,key,Function||Object/String)
            if (fn) {
                for (; i < len; i++) {
                    //循环每一项执行
                    fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                }
            }
        }
 
        return chainable ?
            //如果是设置数据，这个elems最终被返回，而在jQuery.fn.data中这个elems是this——也就是jQuery对象，保证了链式
            elems :
 
        // Gets
            //如果上面的设置方法都没有走，那么就是获取
        bulk ?//bulk是不同的工作模式，参阅jQuery.css，jQuery.attr
            fn.call(elems) :
            len ? fn(elems[0], key) : emptyGet;
    };
```
* jQuery.fn.data() - 曝露API
```python
jQuery.fn.extend({
        data: function (key, value) {
            var i, name, data,
            elem = this[0],
            attrs = elem && elem.attributes;
 
            // 获取全部的数据，和1.x思路一致
            if (key === undefined) {
                if (this.length) {
                    data = data_user.get(elem);
 
                    if (elem.nodeType === 1 && !data_priv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while (i--) {
 
                            // Support: IE11+
                            // The attrs elements can be null (#14894)
                            if (attrs[i]) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = jQuery.camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name]);
                                }
                            }
                        }
                        data_priv.set(elem, "hasDataAttrs", true);
                    }
                }
 
                return data;
            }
 
            // 设置Object类型的的数据
            if (typeof key === "object") {
                return this.each(function () {
                    data_user.set(this, key);
                });
            }
            //调用jQuery.access
            return access(this, function (value) {
                //value则是挂载的数据名（即使外面挂载的Object也会被拆开到这里一个个循环执行）
                var data,
             camelKey = jQuery.camelCase(key);//转换驼峰
                if (elem && value === undefined) {
                    //拿数据
                    data = data_user.get(elem, key);
                    if (data !== undefined) {
                        return data;
                    }
                    //用驼峰拿
                    data = data_user.get(elem, camelKey);
                    if (data !== undefined) {
                        return data;
                    }
                    //用HTML5拿
                    data = dataAttr(elem, camelKey, undefined);
                    if (data !== undefined) {
                        return data;
                    }
                    return;
                }
                //循环每一项设置
                this.each(function () {
                    //提前设置驼峰的...
                    data_user.set(this, camelKey, value);
                    if (key.indexOf("-") !== -1 && data !== undefined) {
                    //如果有name-name命名再设一边
                        data_user.set(this, key, value);
                    }
                });
            }, null, value, arguments.length > 1, null, true);
        },
 
        removeData: function (key) {
            return this.each(function () {
                //调用相应Data实例方法移除即可
                data_user.remove(this, key);
            });
        }
    });
```
## queue() : 队列方法 : 队列是一种特殊的线性表，是属于先进先出，而且只允许在表的前端进行删除操作（出队），在表的后端（队尾）进行插入操作（入队） 
* 基本使用 
```python
$('div').queue('q',[function(next){alert('队列函数1')},function(next){alert('队列函数2')},function(next){alert('队列函数3')}])

var queue = $('div').queue(); // 获取第一个div元素的队列"q"
var queue1 = $("#n1").queue("q");
var queue2 = $("#n2").queue("q");
var queue3 = $("#n3").queue("q");
document.writeln( queue === queue1 ); // true
document.writeln( queue === queue2 ); // false
document.writeln( queue === queue3 ); // false

document.writeln( queue.length ); // 3
$('div').dequeue('q');

```
```python
$(document.body).click(function () {
  $("div").show("slow");
  $("div").animate({left:'+=200'},2000);
  $("div").queue(function () {
    $(this).addClass("newcolor");
    $(this).dequeue();
  });
  $("div").animate({left:'-=200'},500);
  $("div").queue(function () {
    $(this).removeClass("newcolor");
    $(this).dequeue();
  });
  $("div").slideUp();
});
```
## attr() prop() val() addClass()等 : 对元素属性的操作

## on() trigger() : 事件操作的相关方法

## DOM操作 : 添加 删除 获取 包装 DOM筛选

## css() : 样式的操作

## 提交的数据和ajax() : ajax() load() getJSON()

## animate() : 运动的方法

## offset() : 位置和尺寸的方法## 

## JQ支持模块化的模式## 	

## window.jQuery = window.$ = jQuery;
