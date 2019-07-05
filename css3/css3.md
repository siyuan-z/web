## 属性选择器
* E[attr]只使用属性名，但没有确定任何属性值
* E[attr="value"]指定属性名，并指定了该属性的属性值
* E[attr~="value"]指定属性名，并且具有属性值，此属性值是一个词列表并且以空格隔开，其中词列表中包含了一个value词，而且等号前面的“〜”不能不写
* E[attr^="value"]指定了属性名，并且有属性值，属性值是以value开头的
* E[attr$="value"]指定了属性名，并且有属性值，而且属性值是以value结束的
* E[attr*="value"]指定了属性名，并且有属性值，而且属值中包含了value
* E[attr|="value"]指定了属性名，并且属性值是value或者以“value-”开头     的值（比如说zh-cn）

 
## 结构性伪类
* E:nth-child(n)  表示E父元素中的第n个字节点
    p:nth-child(odd){background:red} 匹配奇数行
    p:nth-child(even){background:red} 匹配偶数行
    p:nth-child(2n){background:red}
* E:nth-last-child(n) 表示E父元素中的第n个字节点，从后向前计算
* E:nth-of-type(n)  表示E父元素中的第n个字节点，且类型为E
* E:nth-last-of-type(n)表示E父元素中的第n个字节点，且类型为E,从后向前计算
* E:empty 表示E元素中没有子节点。注意：子节点包含文本节点
* E:first-child 表示E元素中的第一个子节点
* E:last-child 表示E元素中的最后一个子节点
* E:first-of-type 表示E父元素中的第一个子节点且节点类型是E的
* E:last-of-type 表示E父元素中的最后一个子节点且节点类型是E的
* E:only-child表示E元素中只有一个子节点。注意：子节点不包含文本节点
* E:only-of-type 表示E的父元素中只有一个子节点，且这个唯一的子节点的    类型必须是E。注意：子节点不包含文本节点

## 伪类
* E:target 表示当前的URL片段的元素类型，这个元素必须是E
* E:disabled 表示不可点击的表单控件
* E:enabled 表示可点击的表单控件
* E:checked 表示已选中的checkbox或radio
* E:first-line 表示E元素中的第一行
* E:first-letter 表示E元素中的第一个字符
* E::selection表示E元素在用户选中文字时
* E::before 生成内容在E元素前
* E::after 生成内容在E元素后
* E:not(s) 表示E元素不被匹配
* E~F表示E元素毗邻的F元素

## 颜色
* rgba
    r	Red		红		0-255
    g	Green	绿		0-255
    b	Blue	蓝		0-255
    a	Alpha	透明	0-1
* Hsl
    H	Hue		    色调		任意数值
    S 	saturation  饱和度       0%-100%
    L	Lightness	亮度		0%-100%

## 文字阴影
* text-shadow：x y blur color, …
    x		横向偏移
    y		纵向偏移
    blur	模糊距离
    color	阴影颜色

## 文字描边 -webkit-text-stroke:宽度 颜色

## 文本新增功能
* Direction  定义文字排列方式(全兼容)
    tl 从右向左排列
    tr 从右向左排列
    注意要配合unicode-bidi 一块使用
* Text-overflow 定义省略文本的处理方式
    clip  无省略号
    Ellipsis 省略号 (注意配合overflow:hidden和white-space:nowrap一块使用) 

## 弹性盒子模型
* 注意在使用弹性盒模型的时候 父元素必须要加display:box 或 display:inline-box
* Box-orient 定义盒模型的布局方向（给父盒子加的）
    Horizontal 水平显示
    vertical 垂直方向
* box-direction 元素排列顺序（给父盒子加的）
    Normal 正序
    Reverse 反序
* box-ordinal-group 设置元素的具体位置（给子盒子加的）
* Box-flex 定义盒子的弹性空间  子元素的尺寸=盒子的尺寸*子元素的box-flex属性值 / 所有子元素的box-flex属性值的和 
* box-pack 对盒子富裕的空间进行管理
    Start 所有子元素在盒子左侧显示，富裕空间在右侧
    End 所有子元素在盒子右侧显示，富裕空间在左侧
    Center 所有子元素居中
    Justify 富余空间在子元素之间平均分布
* box-align 在垂直方向上对元素的位置进行管理 
    tar 所有子元素在据顶 
    nd 所有子元素在据底 
    enter 所有子元素居中

## 盒模型阴影
* 用法box-shadow:[inset] x y blur [spread] color
    参数
        inset：投影方式
        inset：内投影     
        不给：外投影
        x、y：阴影偏移
        blur：模糊半径
        spread：扩展阴影半径        
        先扩展原有形状，再开始画阴影
        color 颜色

## 其他盒模型新增属性
* box-reflect 倒影
    direction  方向     above|below|left|right;
    距离
    渐变（可选）
* resize 自由缩放
    Both 水平垂直都可以缩放
    Horizontal 只有水平方向可以缩放
    Vertical 只有垂直方向可以缩放
    注意：一定要配合overflow:auto 一块使用只有水平方向可以缩放
* box-sizing 盒模型解析模式
    Content-box  标准盒模型 width/height=border+padding+content
    Border-box 怪异盒模型 width/height=content

## 分栏布局
* column-width 栏目宽度
* column-count 栏目列数
* column-gap   栏目距离
* column-rule  栏目间隔线 

## 响应式布局
* @media screen and (min-width:800px) {} 适配多大的屏幕

## 圆角
* border-radius：上 右 下 左;
* border-radius: 1-4个数字 / 1-4个数字  前面是水平，后面是垂直

##  边框图片 border-image
* border-image-sourceg 引入图片
* border-image-slice 切割图片
* border-image-width 边框宽度
* border-image-repeat 图片的排列方式
    round 平铺,repeat 重复,stretch拉伸 

## 线性渐变
* linear-gradient([<起点> || <角度>,]? <点>, <点>…)
    参数
    起点：从什么方向开始渐变		默认：top
    left、top、left top
    角度：从什么角度开始渐变
    xxx deg的形式
    点：渐变点的颜色和位置
    black 50%，位置可选
* repeating-linear-gradient 平铺

## 径向渐变
* radial-gradient([<起点>]? [<形状> || <大小>,]? <点>, <点>…);
    起点：可以是关键字（left,top,right,bottom），具体数值或百分比
    形状： ellipse、circle
    大小 :具体数值或百分比，也可以是关键字（最近端，最近角，最远端，最远角，包含或覆盖 (closest-side, closest-corner, farthest-side, farthest-corner, contain or cover)）;
    注意firefox目前只支持关键字

## 背景
* 多背景
    逗号分开 background: url(a.jpg) 0 0, url(b.jpg) 0 100%;
* 背景尺寸
    background-size:x y
        background-size:100% 100%
        Cover 放大
         Contain 缩小
* background-origin ： border | padding | content 
    border-box： 从border区域开始显示背景。 
    padding-box： 从padding区域开始显示背景。 
    content-box： 从content区域开始显示背景。
* background-clip
    border： 从border区域向外裁剪背景。 
    padding： 从padding区域向外裁剪背景。 
    content： 从content区域向外裁剪背景。 
    no-clip： 从border区域向外裁剪背景。

## 遮罩 mask
* 参数
    图片   是否平铺  位置

## 过度 transition
* transition-property  要运动的样式  （all || [attr] || none）
* transition-duration 运动时间
* transition-delay 延迟时间
* transition-timing-function 运动形式 
    ease：（逐渐变慢）默认值
    linear：（匀速）
    ease-in：(加速)
    ease-out：（减速）
    ease-in-out：（先加速后减速）
    cubic-bezier 贝塞尔曲线（ x1, y1, x2, y2 ） 

## 2D转换
* transform
    rotate()  旋转函数 取值度数
        deg  度数
T       ransform-origin 旋转的基点
    skew() 倾斜函数 取值度数 
        skewX()
        skewY()
    scale() 缩放函数 取值 正数、负数和小数
        scaleX()
        scaleY()
    translate() 位移函数
        translateX()
        translateY()

## 3D转换
* transform-style（preserve-3d） 建立3D空间
* Perspective 景深
* Perspective- origin 景深基点
* Transform 新增函数
    rotateX()
    rotateY()
    rotateZ()
    translateZ()
    scaleZ()

## animation
* 关键帧——keyFrames
    @keyframes  动画名称
    {
        from { background:red; }
        to { background:green; }
    }
* 调用 
    animation:关键帧名称 时间;

## 可选属性
 *  animation-timing-function	动画运动形式
        linear	匀速。
        ease	缓冲。
        ease-in	由慢到快。
        ease-out	由快到慢。
        ease-in-out	由慢到快再到慢。
        cubic-bezier(number, number, number, number)：	特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内
* animation-delay			动画延迟
    只是第一次
* animation-iteration-count		重复次数
    infinite为无限次
* animation-direction			播放前重置
    动画是否重置后再开始播放
    alternate	动画直接从上一次停止的位置开始执行
    normal	动画第二次直接跳到0%的状态开始执行
