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
