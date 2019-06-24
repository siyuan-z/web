## 什么是JQ？
一个优秀的JS库，大型开发必备

## JQ的好处？
简化JS的复杂操作
不再需要关心兼容性
提供大量实用方法

## 如何学习JQ？
www.jquery.com
JQ只是辅助工具，要正确面对
需要分阶段学习

## 选择网页元素
模拟CSS选择元素  $('#div1').css('background', 'red');
独有表达式选择
多种筛选方法

## JQ写法
方法函数化  $(function(){});
链式操作 $('#div1').html('hello').css('background','res').click( function(){ alert(123);  }  )
取值赋值合体  oDiv.innerHTML = 'hello';  //赋值  alert( oDiv.innerHTML );  //取值

## JQ与JS关系
可以共存，不能混用

## $()下的常用方法
* has() 包含
* not() 反义词
* filter() 过滤
* next() 下一个
* prev() 上一个
* find() 找到所有
* eq() 相当于下标
* index() 索引就是当前元素在所有兄弟节点中的位置
* attr() 方法设置或返回被选元素的属性值。
* addClass()   添加
* removeClass() 移除
* width()    width
* innerWidth()   width + padding
* outerWidth() width + padding + border
* insertBefore()  before() 把##放在##前
* insertAfter()   after() 把##放在##后
* appendTo()   把##放在##后
* prependTo()    把##放在##前
* append() 在被选元素的结尾（仍位于内部）插入指定内容。
* prepend() 在被选元素的开头（仍位于内部）插入指定内容。
* remove() 移除元素
* on()  添加事件
* off() 取消事件
* scrollTop() 滚动距离
* ev  pageX  which   
* preventDefault  阻止默认事件
* stopPropagation 阻止冒泡的操作
* one() 只执行事件一次
* offset() 获取到屏幕的距离
*  position() 到有定位的父级的方位值,把当前元素转化成类似定位的形式
* offsetParent() 获取有定位的父级
* val() 获取value值
* size() 返回被 jQuery 选择器匹配的元素的数量。
* each() 为每个匹配元素规定运行的函数。
* hover() 鼠标移入移出
* show()  显示
* hide() 隐藏
* fadeIn()  淡入
* fadeOut() 淡出
* fadeTo() 被选元素的不透明度逐渐地改变为指定的值
* slideDown()   滑出
* slideUp()  滑入   

