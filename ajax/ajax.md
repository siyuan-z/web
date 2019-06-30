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

## 什么是跨域
同源策略是由 Netscape 提出的著名安全策略，是浏览器最核心、基本的安全功能，它限制了一个源（origin）中加载文本或者脚本与来自其他源（origin）中资源的交互方式，所谓的同源就是指协议、域名、端口相同。
当浏览器执行一个脚本时会检查是否同源，只有同源的脚本才会执行，如果不同源即为跨域

## 怎么解决跨域
* jsonp 
    最常见的一种跨域方式，其背后原理就是利用了 script 标签不受同源策略的限制，在页面中动态插入了 script，script 标签的 src 属性就是后端 api 接口的地址，并且以 get 的方式将前端回调处理函数名称告诉后端，后端在响应请求时会将回调返还，并且将数据以参数的形式传递回去
    前端
```python
    // http://127.0.0.1:8888/jsonp.html
    var script = document.createElement('script');
    script.src = 'http://127.0.0.1:2333/jsonpHandler?callback=_callback';
    document.body.appendChild(script);      //插入script标签
    // 回调处理函数 _callback
    var _callback = function(obj) {
    for(key in obj) {
     console.log('key: ' + key +' value: ' + obj[key]);
    }
}
```
    后端
```python
    // http://127.0.0.1:2333/jsonpHandler
    app.get('/jsonpHandler', (req, res) => {
     let callback = req.query.callback;
     let obj = {
    type: 'jsonp',
    name: 'weapon-x'
    };
    res.writeHead(200, {"Content-Type": "text/javascript"});
    res.end(callback + '(' + JSON.stringify(obj) + ')');
})
```

* CORS Cross-Origin Resource Sharing（跨域资源共享）
    是一种允许当前域（origin）的资源（比如html/js/web service）被其他域（origin）的脚本请求访问的机制。
    当使用 XMLHttpRequest 发送请求时，浏览器如果发现违反了同源策略就会自动加上一个请求头 origin，后端在接受到请求后确定响应后会在 Response Headers 中加入一个属性 Access-Control-Allow-Origin，值就是发起请求的源地址(http://127.0.0.1:8888)，浏览器得到响应会进行判断 Access-Control-Allow-Origin 的值是否和当前的地址相同，只有匹配成功后才进行响应处理。
    注意：代浏览器中和移动端都支持 CORS（除了opera mini），IE 下需要8+
    前端
```python
// http://127.0.0.1:8888/cors.html
var xhr = new XMLHttpRequest();
xhr.onload = function(data) {
  var _data = JSON.parse(data.target.responseText)
  for(key in _data) {
    console.log('key: ' + key + ' value: ' + _data[key]);
  }
};
xhr.open('POST','http://127.0.0.1:2333/cors',true);
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
xhr.send();
```

    后端
```python
// http://127.0.0.1:2333/cors
app.post('/cors', (req, res) => {
  if(req.headers.origin) {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
      "Access-Control-Allow-Origin": 'http://127.0.0.1:8888'
    });
    let people = {
      type: 'cors',
      name: 'weapon-x'
    }
    res.end(JSON.stringify(people));
  }
})
```

* 服务器跨域
    在前后端分离的项目中可以借助服务器实现跨域，具体做法是：前端向本地服务器发送请求，本地服务器代替前端再向真实服务器接口发送请求进行服务器间通信，本地服务器其实充当个「中转站」的角色，再将响应的数据返回给前端
    前端
```python
// http://127.0.0.1:8888/server
var xhr = new XMLHttpRequest();
xhr.onload = function(data) {
   var _data = JSON.parse(data.target.responseText)
   for(key in _data) {
        console.log('key: ' + key +' value: ' + _data[key]);
   }
};
xhr.open('POST','http://127.0.0.1:8888/feXhr',true);  // 向本地服务器发送请求   
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
xhr.send("url=http://127.0.0.1:2333/beXhr");    // 以参数形式告知需要请求的后端接口
```

    后端
```python
// http://127.0.0.1:8888/feXhr
app.post('/feXhr', (req, res) => {
  let url  = req.body.url;
  superagent.get(url)           //使用 superagent 向实际接口发起请求
      .end((err, docs) => {
          if(err) {
              console.log(err);
              return
          }
          res.end(docs.res.text); // 返回给前端
      })
})

// http://127.0.0.1:2333/beXhr
app.get('/beXhr', (req, res) => {
  let obj = {
    type: 'superagent',
    name: 'weapon-x'
  };
  res.writeHead(200, {"Content-Type": "text/javascript"});
  res.end(JSON.stringify(obj));     //响应
})
```
