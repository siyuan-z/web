

## DOM (Document Object Model 文档对象模型)
文档：html页面
文档对象：页面中元素
文档对象模型：定义 为了能够让程序(js)去操作页面中的元素

## DOM节点
getElementById
getElementByTagName
document
document.body

## 元素.childNodes 只读 属性 子节点列表集合
标准下：包含了文本和元素类型的节点，也会包含非法嵌套的子节点
非标准下：只包含元素类型的节点，ie7以下不会包含非法嵌套子节点
childNodes只包含一级子节点，不包含后辈孙级以下的节点

## 元素.firstChild : 只读 属性 第一个子节点
标准下：firstChild会包含文本类型的节点
非标准下：只包含元素节点
元素.lastElementChild 最后一个子节点
元素.nextElementSibling 下一个兄弟节点
元素.previousElementSibling 上一个兄弟节点
元素.parentNode : 只读 属性 当前节点的父级节点

## 元素.offsetParent : 只读 属性 离当前元素最近的一个有定位属性的父节点
如果没有定位父级，默认是body
ie7以下，如果当前元素没有定位默认是body，如果有定位则是html
ie7以下，如果当前元素的某个父级触发了layout，那么offsetParent就会被指向到这个触发了layout特性的父节点上

## 元素.offsetLeft[Top] : 只读 属性 当前元素到定位父级的距离（偏移值）
到当前元素的offsetParent的距离

如果没有定位父级
	offsetParent -> body
	offsetLeft -> html

如果有定位父级
	ie7以下：如果自己没有定位，那么offsetLeft[Top]是到body的距离
			如果自己有定位，那么就是到定位父级的距离
	其他：到定位父级的距离

## 操作元素属性
元素.getAttribute(属性名称); 方法 获取指定元素的指定属性的值
元素.setAttribute(属性名称，属性值); 方法 给指定元素指定的属性设置值
元素.removeAttribute(属性名称); 方法 移除指定的元素的指定的属性

## appendchild
父级.appendChild(要添加的元素) 方法 追加子元素

## replacChild
父级.replaceChild(新节点，被替换节点) 替换子节点

## BOM : Browser Object Model 浏览器对象模型
open(地址默认是空白页面，打开方式默认新窗口) 打开一个新窗口
window.navigator.userAgent : 浏览器信息

## window.location : 地址
window.location.href = window.location内容
window.location.search = url?后面的内容
window.location.hash = url#后面的内容

## event : 事件对象 ,当一个事件发生的时候，和当前这个对象发生的这个事件有关的一些详细的信息都会被临时保存到一个指定地方-event对象，供我们在需要的调用。飞机-黑匣子

事件对象必须在一个事件调用的函数里面使用才有内容
事件函数：事件调用的函数，一个函数是不是事件函数，不在定义的决定，而是取决于这个调用的时候

兼容
ie/chrome : event是一个内置全局对象
标准下 : 事件对象是通过事件函数的第一个参数传入

如果一个函数是被事件调用的那么，这个函数定义的第一个参数就是事件对象

## onmousemove : 当鼠标在一个元素上面移动的触发
触发频率不是像素，而是间隔时间，在一个指定时间内（很短），如果鼠标的位置和上一次的位置发生了变化，那么就会触发一次

## 事件绑定
ie：obj.attachEvent(事件名称，事件函数);
	1.没有捕获
	2.事件名称有on
	3.事件函数执行的顺序：标准ie-》正序   非标准ie-》倒序
	4.this指向window
标准：obj.addEventListener(事件名称，事件函数，是否捕获);
	1.有捕获
	2.事件名称没有on
	3.事件执行的顺序是正序
	4.this触发该事件的对象

## 键盘事件
onkeydown : 当键盘按键按下的时候触发
onkeyup : 当键盘按键抬起的时候触发

event.keyCode : 数字类型 键盘按键的值 键值
	ctrlKey,shiftKey,altKey 布尔值
	当一个事件发生的时候，如果ctrl || shift || alt 是按下的状态，返回true，否则返回false

## 拖拽事件
onmousedown : 选择元素
onmousemove : 移动元素
onmouseup 	: 释放元素

## 拖拽的封装
```python
window.onload = function() {
	
	var oDiv = document.getElementById('div1');
	var oImg = document.getElementById('img1');
	
	drag(oImg);
	
	drag(oDiv);
	
	function drag(obj) {
		
		obj.onmousedown = function(ev) {
			var ev = ev || event;
			
			var disX = ev.clientX - this.offsetLeft;
			var disY = ev.clientY - this.offsetTop;
			
			if ( obj.setCapture ) {
				obj.setCapture();
			}
			
			document.onmousemove = function(ev) {
				var ev = ev || event;
				
				obj.style.left = ev.clientX - disX + 'px';
				obj.style.top = ev.clientY - disY + 'px';
			}
			
			document.onmouseup = function() {
				document.onmousemove = document.onmouseup = null;
				//释放全局捕获 releaseCapture();
				if ( obj.releaseCapture ) {
					obj.releaseCapture();
				}
			}
			
			return false;
			
		}
		
	}
	
}
```

## 鼠标滚动
ie/chrome : onmousewheel
		event.wheelDelta
			上：120
			下：-120
		
	firefox : DOMMouseScroll 必须用addEventListener
		event.detail
			上：-3
			下：3
			
	return false阻止的是  obj.on事件名称=fn 所触发的默认行为
	addEventListener绑定的事件需要通过event下面的preventDefault();

## cookie
cookie : 存储数据，当用户访问了某个网站（网页）的时候，我们就可以通过cookie来像访问者电脑上存储数据
	1.不同的浏览器存放的cookie位置不一样，也是不能通用的
	2.cookie的存储是以域名形式进行区分的
	3.cookie的数据可以设置名字的
	4.一个域名下存放的cookie的个数是有限制的，不同的浏览器存放的个数不一样
	5.每个cookie存放的内容大小也是有限制的，不同的浏览器存放大小不一样
	
	我们通过document.cookie来获取当前网站下的cookie的时候，得到的字符串形式的值，他包含了当前网站下所有的cookie。他会把所有的cookie通过一个分号+空格的形式串联起来
	
	如果我们想长时间存放一个cookie。需要在设置这个cookie的时候同时给他设置一个过期的时间
	cookie默认是临时存储的，当浏览器关闭进程的时候自动销毁

