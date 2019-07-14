/*
* http://www.baidu.com
*
* 1.用户通过浏览器发送一个http的请求到指定的主机
* 2.服务器接收到该请求，对该请求进行分析和处理
* 3.服务器处理完成以后，返回对应的数据到用户机器
* 4.浏览器接收服务器返回的数据，并根据接收到的进行分析和处理
*
* 客户端    服务端
* 由客户端发送一个http请求到指定的服务端 -> 服务端接收并处理请求 -> 返回数据到客户端
*
* */
/*
* 搭建一个http的服务器，用于处理用户发送的http请求
* 需要使用node提供一个模块  http
* */

//加载一个http模块
var http = require('http');
//通过http模块下的createServer创建并返回一个web服务器对象
var server = http.createServer();

server.on('error', function(err){
    console.log(err);
});

server.on('listening', function() {
    console.log('listening...');
})

server.on('request', function(req, res) {
    console.log('有客户端请求了');

    //res.write('hello');

    res.setHeader('miaov', 'leo');

    res.writeHead(200, 'miaov', {
        //'content-type' : 'text/plain'

        'content-type' : 'text/html;charset=utf-8'
    });

    res.write('<h1>hello</h1>');

    res.end();

})

server.listen(8080, 'localhost');


