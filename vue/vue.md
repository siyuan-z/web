## 变量声明
* var
```python
console.log(miaov);
 var miaov = 'ketang';
 var miaov = '123'
 console.log(miaov);
```
* let
    1. 不允许重复声明变量
    2. 不存在变量提升
```python
console.log(leo);
let leo = 123;
console.log(leo);
```
* const 
    常量 声明变量赋值，变量不能被重新赋值
```python
const miaov = 10;
console.log(miaov);
```

## 解构赋值
```python
var [a,b,c,d,e='默认值'] = [1,2,3,4];
console.log(a);//1
console.log(e);//默认值
```
例子:2解构赋值.html

## 指令
* v-bind:属性名="表达式"  动态地绑定一个或多个特性
    例子:2v-bind.html
* v-on用于监听DOM事件,用法和v-bind类似，例如给button添加点击事件，v-on也可以使用简写，用@符号代替
    例子:3v-on.html
* v-model   双向数据绑定
    例子:4v-model.html
* v-if是条件渲染指令，它根据表达式的真假来删除和插入元素
```python
<div id="app">
            <div v-if="isMale">男士</div>
            <div v-if="age>=20">age:{{age}}</div>
        </div>
        
var vm = new Vue({
            el: '#app',
            data: {
                age:25,
                isMale:true,
            }
        })
```
* v-show不管条件是否成立，都会渲染html,而v-if只有条件成立才会渲染
```python
<div id="app">
            <div v-if="isMale">男士v-if</div>
            <div v-show="isMale">男士v-show</div>
        </div>
var vm = new Vue({
            el: '#app',
            data: {
                isMale:false
            }
        })
```
* v-else指令与v-if或者v-show同时使用，v-if条件不成立则会显示v-else内容
```python
<div id="app">
            <div v-if="isMale">男士</div>
            <div v-else>女士</div>
        </div>
        var vm = new Vue({
            el: '#app',
            data: {
                isMale:true
            }
        })
```
* v-for指令基于一个数组渲染一个列表
```python
<div id="app">
            <table>
                <tr class="thead">
                    <td>序号</td>
                    <td>姓名</td>
                    <td>年龄</td>
                </tr>
                <tr v-for="(item,index) in list">
                    <td v-text="index+1"></td>
                    <td v-text="item.name"></td>
                    <td v-text="item.age"></td>
                </tr>
            </table>
        </div>
        
var vm = new Vue({
            el: '#app',
            data: {
                list:[{
                    name:'章三',
                    age:18
                },{
                    name:'李四',
                    age:23
                }]
            }
        })
```

## 安装脚手架
* npm install cnpm -g 首先利用淘宝镜像安装cnpm
* cnpm install -g vue-cli  然后全局安装 vue-cli
* vue init webpack  使用vue-cli来创建一个基于 webpack 模板的新项目(cmd利用cd指令进入到保存项目的文件夹下)
* cnpm install  安装项目所需要的依赖 
* cnpm run dev   运行项目

## 路由(大都写在index.js中)
```python
routes: [{
      path: '/',
      component: home,
      meta: {
        index: 0,
        title: 'home'
      }
    },
    {
      path: '/user/:tip?/:userId?', // /user/vip/1  /user/common/2  /user
      component: user,
      meta: {
        index: 3,
        title: 'user'
      }
    },
]
```
* 子路由
```python
{
      path: '/abult',
      component: abult,
      children: [{
          path: '', // 默认的子路由  /about
          name: 'Abult',
          component: study,
          meta: {
            index: 2,
            title: 'abult'
          }
        },
        {
          path: '/work', // /work
          name: 'Work',
          component: work
        },
        {
          path: '/hoddy', // /hobby
          name: 'Hoddy',
          component: hoddy
        }
      ]
    }
```
* export default router; 抛出接口(在main.js中接收)

## 引用模板
    例子：app.vue
    注意:引用模板后以(<router-view ></router-view>)结束数据才会显示在浏览器上

## router-link配置项
* to 表示目标路由的链接
```python
<router-link to="/user" event="mouseover">user</router-link>
```
* tag 指定渲染的标签，会监听导点击，触发导航
```python
<router-link to="/" exact tag="li" event="mouseover">
```
* active-class 设置 链接激活时使用的 CSS 类名
```python
<router-link :to="{path:'/document'}" event="mouseover" active-class="activeClass" >document</router-link>
```
* exact 是否给该激活链接类名
```python
<router-link to="/" exact tag="li" event="mouseover">
```
* event 声明可以用来触发导航的事件
```python
<router-link to="/" exact tag="li" event="mouseover">
```

## 钩子函数
 * beforeRouteEnter()  进入组件前钩子函数
    钩子函数接收的参数
	to:  	要进入的目标 路由对象    到哪里去
	from: 	正要离开导航的路由对象  从哪里来
	next: 	用来决定跳转或取消导航

```python
router.beforeEach((to, from, next) => {
  console.log("beforeEach")
  // next()
   // next(false)

   if(to.meta.login){
    next('/login')
  }else{
    next()
  }

  next()

})
```
* beforeRouteLeave()  离开组件前钩子函数
```python
router.afterEach((to, from) => {
  if( to.meta.title ){
    window.document.title = to.meta.title
  }else{
    window.document.title = 'miaov'
  }
})
```