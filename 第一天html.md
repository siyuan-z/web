l块的特征

  1、默认独占一行默认独占一行

  2、没有宽度时，默认撑满一排

  3、支持所有css命令



l内嵌(内联、行内)的特征

  1、同排可以继续跟同类的标签

  2、内容撑开宽度

  3、不支持宽高

  4、不支持上下的margin

  5、代码换行被解析



ldisplay：block        显示为块

使内联元素具备块属性标签的特性

ldisplay：inline        显示为内嵌

使行块属性标签具备内联元素的特性

  lInline-block的特点

特性：

1、块在一行显示；

2、行内属性标签支持宽高；

3、没有宽度的时候内容撑开宽度





lfloat:left| right | none | inherit;

l

l文档流是文档中可显示对象在排列时所占用的位置。

l

l浮动的定义：使元素脱离文档流，按照指定方向发生移动，遇到父级边界或者相邻的浮动元素停了下来。

lclear:left| right | both | none | inherit；元素的某个方向上不能有浮动元素

  clear:both; 在左右两侧均不允许浮动元素。



lclear:left| right | both | none | inherit；元素的某个方向上不能有浮动元素

  clear:both; 在左右两侧均不允许浮动元素。



l1.加高

问题：扩展性不好

l2.父级浮动

问题：页面中所有元素都加浮动，margin左右自动失效（floatsbad ！）

l3.inline-block清浮动方法：

  问题：margin左右auto失效；

l

l4.空标签清浮动

问题：IE6最小高度 19px；（解决后IE6下还有2px偏差）

l5.br清浮动

问题：不符合工作中：结构、样式、行为，三者分离的要求。

l

l6.after伪类清浮动方法（现在主流方法）

.clear:after{content:'';display:block;clear:both;}

.clear{zoom:1;}

lafter伪类：元素内部末尾添加内容；

  :after{content"添加的内容";} IE6，7下不兼容

lzoom缩放 

  a、触发IE下 haslayout，使元素根据自身内容计算宽高。

  b、FF 不支持；



l7.overflow:hidden清浮动方法；

  问题：需要配合 宽度 或者 zoom 兼容IE6 IE7；

loverflow:  scroll | auto | hidden；

  overflow:hidden;溢出隐藏（裁刀！）



lBFC(block formatting context)  标准浏览器

  a、float的值不为none。

  b、overflow的值不为visible。

  c、display的值为table-cell, table-caption,inline-block中的任何一个。

  d、position的值不为relative和static。

​     e、width|height|min-width|min-height:(!aotu)

lhaslayout      IE浏览器

l

​          a、writing-mode:tb-rl

​           b、-ms-writing-mode:tb-rl

​           c、zoom:(!normal)





lposition:relative;  相对定位

  a、不影响元素本身的特性；

b、不使元素脱离文档流（元素移动之后原始位置会被保留）；

c、如果没有定位偏移量，对元素本身没有任何影响；

d、提升层级

l

l定位元素位置控制

​    top/right/bottom/left  定位元素偏移量。



lposition:absolute;  绝对定位

a、使元素完全脱离文档流；

b、使内嵌支持宽高；

c、块属性标签内容撑开宽度；

d、如果有定位父级相对于定位父级发生偏移，没有定位父级相对于document发生偏移；

e、相对定位一般都是配合绝对定位元素使用；

f、提升层级

lz-index:[number]；  定位层级

​    a、定位元素默认后者层级高于前者；

  b、建议在兄弟标签之间比较层级

lz-index:[number]；  定位层级

lposition:fixed；固定定位

  与绝对定位的特性基本一致，的差别是始终相对整个文档进行定位；

  问题：IE6不支持固定定位；

l

l定位其他值：

  position:static ； 默认值

  position:inherit ;  从父元素继承定位属性的值 (不兼容)

l

lposition:relative| absolute | fixed | static | inherit;



lposition:absolute;绝对定位元素子级的浮动可以不用写清浮动方法；

lposition:fixed;  固定定位元素子级的浮动可以不用写清浮动方法；（IE6不兼容）

l

l

l遮罩弹窗（优酷弹窗）

标准不透明度：  opacity:0~1; 

IE滤镜：          filter:alpha(opacity=0~100); 





l表格标签：

  table 表格

  thead 表格头

  tbody 表格主体

  tr 表格行

  th 元素定义表头

  td 元素定义表格单元

l表格样式重置

table{border-collapse:collapse;}单元格间隙合并

th,td{padding:0;}重置单元格默认填充



lform   表单

l<inputtype="…… " name="" value="" /> 

ltext              文本框

lpassword     密码

lradio            单选

lcheckbox     复选

lsubmit         提交

lreset            重置

lbutton         按钮

limage          图片

lfile               上传

lhidden         隐藏





llabel  标签为 input 元素定义标注

  <inputtype="checkbox" name="" id="a"/>

  <labelfor="a">……</label>

lchecked  在页面加载时默认选定的 input 元素。

  <input type="checkbox"name="" checked/>

l

ldisabled  属性规定应该禁用 input 元素。

  <input type="checkbox"name="" disabled/>



lselect/option下拉选框

  对高度的支持不兼容；

l

l

ltextarea      文本域

  各个浏览器下的默认滚动条显示不兼容

  css3新增 resize 调整尺寸属性；