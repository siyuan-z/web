# ajax
## 什么是Ajax
Asynchronous JavaScript and XML（异步JavaScript和XML) 
节省用户操作，时间，提高用户体验，减少数据请求,传输获取数据

## ajax过程
### 创建一个ajax对象（XMLHttpRequest） ie6以下 new ActiveXobject('Microsoft.XMLHTTP')
*  兼容处理
   var xhr = null;
    try{
        xhr = new XMLHttpRequest()
         }catch(e){
         xhr = new ActiveXobject('Microsoft.XMLHTTP')
      }


### 在地址栏输入地址
 * open方式
    参数
      1.打开方式 Form-method
      2.地址    Form-action
      3，是否异步
              异步：非阻塞 前面代码不会影响后面代码的运行
              同步：阻塞  前面代码会影响后面代码的运行
xhr.open('get','1.txt',true);
### 提交  发送请求
* xhr.send(); 发送数据请求，相当于Form的submit
### 等待服务器范湖内容
* readyState:ajax工作状态
  0	（初始化）还没有调用open()方法
  1	（载入）已调用send()方法，正在发送请求
  2	（载入完成）send()方法完成，已收到全部响应内容
  3	（解析）正在解析响应内容
  4	（完成）响应内容解析完成，可以在客户端调用了
* responseText:ajax请求返回的内容就被存放到这个属性下面
* on readystate change :当readyState改变是触发
* sattus:服务器状态码，http状态码

 ## 表单
* action : 数据提交的地址，默认是当前页面
* method : 数据提交的方式，默认是get方式

## get和post区别
* get
把数据名称和数据值用=连接，如果有多个的话，那么他会把多个数据组用&进行连接，然后把数据放到url?后面传到指定页面
url长度限制的原因，我们不要通过get方式传递过多的数据

* post
理论上无限制
enctype : 提交的数据格式，默认application/x-www-form-urlencoded

## 后端数据的接收
* $_GET
    通过URL传递给该脚本的变量的数组
* $_POST
    通过HTTP POST方法（表单）传递给该脚本的变量的数组

## JSONP json padding
* script标签 
* 用script标签加载资源是没有跨域问题的 在资源加载进来之前定义好一个函数，这个函数接收一个参数（数据），函数里面利用这个参数做一些事情 然后需要的时候通过script标签加载对应远程文件资源，当远程的文件资源被加载进来的时候，就会去执行我们前面定义好的函数，并且把数据当作这个函数的参数传入进去

