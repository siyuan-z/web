## DOM结构关系
父子节点 ： 上下两层节点之间的关系。
祖先节点 ：当前节点上面的所有节点的统称。
兄弟节点 ：当前节点下面的所有节点的统称。

## 节点操作
* parentNode:查找某个元素的父节点。
* nextElementSibling:找到某个元素的下个兄弟节点。
* previousElementSibling:找到某个元素的上个兄弟节点。
* firstElementChild:某个元素下个第一个子节点
* lastElementChild:某个元素下个最后一个子节点

## 距离操作
* offsetParent:最近的有定位属性的祖先节点如果祖先节点都没有定位，那么默认为body
* offsetLeft:外边框到有定位父级的内边框的距离
* offsetTop:上外边框到有定位父级的上内边框的距离
* getBoundingClientRect(返回值为一个对象)：获取某个元素的信息（高版本：left,top,bottom,rigit,width,height）
注意：获取的值是会根据滚动条变化的。

## 元素属性操作
* elem.getAttribute('key')：获取元素行间的属性
* elem.setAttribute('key','value')：设置元素的行间属性
* elem.removeAttribute('key')：删除元素的行间属性

## 元素的尺寸
* elem.clientWidth/ elem.clientHeight (获取某个元素的宽高)
注意：不计算边框，加上padding
* elem.offsetWidth / elem.offsetHeight  (获取某个元素的宽高)
注意：计算边框。加上paddi

## 可视区的宽高
document.documentElement.clientWidth/document.documentElement.clientHeight

## 元素的操作
* document.createElement('标签的名字');  创建元素
* parentNode.appendChild(childNode)：插入元素（向父级末尾添加一个元素）
* parentNode.insertBefore(新添加的元素,已有的元素)：插入元素（向父级中的某个元素前插入元素）
特性：如果第二个参数为假的，那么会将某个元素添加到父元素的末位。
* 父级.removeChild(指定的子节点)：删除节点
注意：如果指定的子节点没有，那么会报错。（进行判断解决）
* 父级.replaceChild(要替换成什么,谁被替换)：替换节点
* 元素.cloneNode()  克隆某个元素
注意：在克隆的时候，默认（false）只克隆指定元素本身，不会克隆该元素下的所有子节点。（cloneNode(有参数，默认为false)），里面传入true，那么就可以克隆该元素下的所有子节点。事件是不会被克隆的。
* 注意：appendChild/insertBefore/replaceChild在操作一个已有的元素时，是将已有的元素移动，而不是复制一份进行操作。

## 表单元素
* table.tHead   获取tHead
* table.rows 获取tr 获取的是行数（一组）
* table.tFoot 获取表格底部
* table.tBodies 获取表格主体  
    注意：获取到的是一个集合
* rows[n].cells单元格  就是td