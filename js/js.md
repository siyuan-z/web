## 获取属性
var btn1 = document.getElementById('btn1');

## 数据类型
JS中的数据类型：数字（NaN）、字符串、布尔、函数、对象(obj、[]、{}、null)、未定义

## 显示转换
显式类型转换（强制类型转换）：
Number()
parseInt()
parseFloat()

## 隐式转换
隐式类型转换：
	+				200 + '3'		变成字符串
	- * / %				'200' - 3     变成数字
	++ --			变成数字
	> < 		数字的比较 、字符串的比较
	!	取反	把右边的数据类型转成布尔值
	==

## 函数传递参数
参数=JS的数据类型：
		数字、字符串、布尔、函数、对象、未定义

## 作用域
作用域： 域：空间、范围、区域…… 作用：读、写
浏览器：
		“JS解析器”
			1）“找一些东西”	：var  function 参数
			
							a = ...
									所有的变量，在正式运行代码之前，都提前赋了一个值：未定义
							fn1 = function fn1(){ alert(2); }
									所有的函数，在正式运行代码之前，都是整个函数块

							JS 的预解析

						遇到重名的：只留一个
							变量和函数重名了，就只留下函数
									
			2）逐行解读代码：
						表达式：= + - * / % ++ -- ! 参数……
						
						表达式可以修改预解析的值！

## 用算符
&& 与,|| 或  .!否

## 流程
break; //跳出
continue;  //跳过

## 真假
真假的问题： 数据类型-数字（NaN），字符串，布尔
 真：非0的数字，非空字符串，true，函数，能找到的元素，数组，json
 假：0 ，NaN ，空字符串，false，不能找到的元素，null，未定义

 ## argument 
 当函数的参数个数无法确定的时候

 ## 定时器：时间概念
 var timer = setInterval( 函数, 毫秒 );		重复执行（发动机）
		clearInterval( timer );		清除
		
		var timer = setTimeout( 函数, 毫秒 );		执行一次（炸弹）
		clearTimeout( timer );

## 倒计时
var iNow = new Date();
var iNew = new Date( 'November 27,2013 22:3:0' );
var t = Math.floor((iNew - iNow)/1000);
var str = Math.floor(t/86400)+'天'+Math.floor(t%86400/3600)+'时'+Math.floor(t%86400%3600/60)+'分'+t%60+'秒';

## 转换大小写
str.toUpperCase() 转成大写
str.toLowerCase() 转成小写

