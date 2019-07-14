## nodejs  与js的区别
* 在ecmascript部分node和js其实是一样的，比如数据类型的定义，语法结构，内置对象
* 在js中的顶层对象 window
* 在node中的顶层对象 global
    注意：在node中也没有什么window
    例子：ECMAScript/1.js
## process  他是一个全局对象(默认情况下，输入流是关闭的，要监听处理输入流数据，首先要开启输入流)
* exit 当 Node.js 进程因以下原因之一即将退出时，则会触发 'exit' 事件：
    显式调用 process.exit() 方法；
    Node.js 事件循环不再需要执行任何其他工作                                                               
* process.stdin 可读流
*  process.stdout 可写流
例子：process/1.js

## nodule 模板(一个文件就是一个模块,每个模块都有自己的作用域)注意：我们使用var来申明的一个变量，他并不是全局的，而是属于当前模块下
* 在一个模块中通过var定义的变量，其作用域范围是当前模块，外部不能够直接的访问,如果我们想一个模块能够访问另外一个模块中定义的变量，可以：
   1.把变量作为global对象的一个属性，但是这样的做法是推荐
   2.使用模块对象 module
* __filename : 当前文件被解析过后的绝对路径
* 模块加载系统
```python
模块加载机制： 
   路径
       绝对路径
       相对路径

require('b:/录制视频/NodeJS/课件/module/2.js');
require('2.js');    //加载node中的核心模块，或者是node_modules
```
```python
 1.首先按照加载的模块的文件名称进行查找
 2.如果没有找到，则会在模块文件名称后加上.js的后缀，进行查找
 3.如果还没有找到，则会在文件名称后加上.json的后缀，进行查找
 4.如果还没有，则会在文件名称后加上.node的后缀，进行查找

 文件名称 -> .js -> .json -> .node
require('./2');
require('./3');
```
    例子：module/1,2,3,4.js
* module 保存提供和当前模块有关的一些信息
    在这个module对象，有一个子对象：exports 对象,我们可以通过这个对象把一个模块中的局部变量对象进行提供访问,
    在模块作用域，还有一个内置的模块对象，exports，他其实就是module.exports
    例子：module/5.js
* __filename : 返回当前模块文件解析后的绝对路径，该属性其实并非全局的，而是模块作用域下的
* __dirname : 返回当前模块文件所在目录解析后的绝对路径，该属性也不是全局的，而是模块作用域下的
    例子：module/6.js
 
## Buffer 用于操作二进制数据流
* new Buffer(size) 新的所需长度Buffer
```python
const buf = new Buffer(10);
console.log(buf);
// Prints: <Buffer 00 00 00 00 00 00 00 00 00 00>
```
* new Buffer(buffer) 将传递的buffer数据复制到新Buffer实例上 
```python
const buf1 = new Buffer('buffer');
const buf2 = new Buffer(buf1);

buf1[0] = 0x61;

console.log(buf1.toString());
// Prints: auffer
console.log(buf2.toString());
// Prints: buffer
```
* new Buffer（string [，encoding]）(string 要编码的字符串 encoding 的编码string。默认值： 'utf8' )  创建一个新的Buffer包含string。该encoding参数标识了字符编码string。
```python
const buf1 = new Buffer('this is a tést');
const buf2 = new Buffer('7468697320697320612074c3a97374', 'hex');
console.log(buf1.toString());
// Prints: this is a tést
console.log(buf2.toString());
// Prints: this is a tést
console.log(buf1.toString('ascii'));
// Prints: this is a tC)st
```
* buf.write（string [，offset [，length]] [，encoding]）写入string到buf在offset根据所述字符编码 encoding。的length参数是要写入的字节的数目。如果buf没有足够的空间来容纳整个字符串，则只会string写入部分字符串。但是，不会写入部分编码的字符。
```python
    string 要写入的字符串buf。
    offset 开始写入之前要跳过的字节数string。 默认值： 0。
    length 要写入的字节数。默认值： buf.length - offset。
    encoding 的字符编码string。默认值： 'utf8'

var str = 'miaov';
console.log( new Buffer(str) );
var bf = new Buffer(5);
bf.write( str );
console.log(bf);
bf.write(str, 1);
bf.write(str, 1, 3);
console.log(bf);
```
* buf.toString（[encoding [，start [，end]]]）buf根据指定的字符编码解码为字符串 encoding。start并且end可以传递以仅解码的子集buf。

```python
encoding 要使用的字符编码。默认值： 'utf8'。
start 开始解码的字节偏移量。默认值： 0。
end 停止解码的字节偏移量（不包括在内）。 默认值： buf.length

var bf = new Buffer('miaov');
console.log( bf.toString() );
console.log( bf.toString('utf-8', 1, 3) );
```
* buf.toJSON（）返回的JSON表示形式buf
```python
var bf = new Buffer('miaov');
console.log( bf.toJSON() );
```
* Buffer.byteLength（string [，encoding]）返回字符串的实际字节长度
```python
string 计算长度的值。
encoding  If string是一个字符串，这是它的编码。 默认值： 'utf8'


var str1 = 'miaov';
console.log(str1.length);
console.log(Buffer.byteLength(str1));
```

## fileSystem
* fs.open(path,flags,[mode],callback)    --异步版打开一个文件
```python

var fs =require("fs");
 
/*
*   fs.open(path,flags,[mode],callback) -异步版打开一个文件
*       path：要打开的文件的路径
*       flags：打开文件的方式 读/写
*       mode：设置文件的模式 读/写/执行  (4/2/1)
*       callback：回调
*           err: 文件打开失败的错误保存在err里面，如果成功err为null
*           fd:被打开文件的标识
*   fs.openSync(path,flags,[mode])  -同步版打开一个文件
* */
 
fs.open("FileSystem.txt","r",function(err,fd){
    //console.log(err);
    //console.log(fd);
    if(err){
        console.log("文件打开失败")
    }else{
        console.log("文件打开成功");
        console.log(fd);
    }
```
* fs.openSync(path,flags,[mode])     --同步版打开一个文件
```python

var fs =require("fs");
var fd=fs.openSync("FileSystem.txt","r");
console.log(fd)
```
* fs.read(fd,buffer,offset,length,position,callback) 读取文件
```python

var fs = require('fs');

fs.open('1.txt', 'r', function(err, fd) {

    if (err) {
        console.log('文件打开失败');
    } else {

        //读取文件
        /*
        * fs.read(fd, buffer, offset, length, position, callback)
        *   fd : 通过open方法成功打开一个文件返回的编号
        *   buffer : buffer对象
        *   offset : 新的内容添加到buffer中的起始位置
        *   length ： 添加到buffer中内容的长度
        *   position ：读取的文件中的起始位置
        *   callback : 回调
        *       err
        *       buffer的长度
        *       buffer对象
        * */

        var bf1 = new Buffer('123456789');

        console.log(bf1);

        fs.read( fd, bf1, 0, 4, null, function( err, len, newBf ) {

            console.log( bf1 );
            console.log( len );
            console.log( newBf );

        } );

    }

});
```
* fs.write(fd, buffer, offset, length[, position], callback) 当我们要对打开的文件进行写操作的时候，打开文件的模式应该是读写方式
```python

var fs = require('fs');

fs.open('1.txt', 'r+', function(err, fd) {

    /*
    *
    * fs.write(fd, buffer, offset, length[, position], callback)
    *   fd : 打开的文件
    *   buffer : 要写入的数据
    *   offset : buffer对象中要写入的数据的起始位置
    *   length : 要写入的buffer数据的长度
    *   position : fd中的起始位置 
    *   callback : 回调
    * */

    if (err) {
        console.log('打开文件失败')
    } else {

        fs.write( fd, '1234', 5, 'utf-8' );

        fs.close( fd, function() {

        } );

    }

});
```

* fs.writeFile(文件名，数据，回调)/fs.appendFile(文件名，数据，回调) 向一个指定的文件中写入数据，如果该文件不存在，则新建，如果存在则新的内容会覆盖原有的文件内容

例子：fileSystem/5.js

* 更名/删除文件/文档
    更名
    ```python
        fs.rename('2.txt', '2.new.txt', function() {
            console.log(arguments);
        })
    ```
    删除文件
    ```python
        fs.unlink('2.txt', function(err) {
            if (err) {
                console.log('删除失败');
            } else {
                console.log('删除成功');
            }
        })
    ```

## http
*  http.createServer 简单服务配置
```python
var http = require("http");
var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        res.end("Hello world!");
    }
});

server.listen(8000);

req 对象代表了一个HTTP请求，其具有一些属性来保存请求中的一些数据
res 对象代表了当一个HTTP请求到来时，Express 程序返回的HTTP响应。
```
* http请求
    1.用户通过浏览器发送一个http的请求到指定的主机
    2.服务器接收到该请求，对该请求进行分析和处理
    3.服务器处理完成以后，返回对应的数据到用户机器
    4.浏览器接收服务器返回的数据，并根据接收到的进行分析和处理

* response.setHeader（name，value）
    为隐式标头设置单个标头值。如果此标头已存在于待发送标头中，则其值将被替换。在此处使用字符串数组来发送具有相同名称的多个标头。非字符串值将被存储而无需修改。因此，response.getHeader()可能会返回非字符串值。但是，非字符串值将转换为字符串以进行网络传输。
```python
res.setHeader('miaov', 'leo');
```
* response.writeHead（statusCode [，statusMessage] [，headers]）
    向请求发送响应标头。状态代码是一个3位HTTP状态代码，如404。最后一个参数headers是响应头。可选地，可以给出人类可读statusMessage的第二个参数
```python
statusCode <数字>
statusMessage <字符串>
headers <对象>

const body = 'hello world';
response
  .writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  })
  .end(body);
```
* server.listen（） 启动HTTP服务器侦听连接
