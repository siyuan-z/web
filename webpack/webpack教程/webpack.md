## 安装webpack
* 新建一个文件,例如:webpack-demo
    命令行: npm init(一直回车，知道输入yes); 目录中出现package.json.
* 安装webpack 
    npm i -D webpack
    注意：webpack 4x以上，webpack将命令相关的内容都放到了webpack-cli(npm install --save-dev  webpack-cli)

## enter 入口：起点或是应用程序的起点入口。从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行
```python
entry: {
  home: "./home.js",
  about: "./about.js",
  contact: "./contact.js"
}
```

## output 出口：位于对象最顶级键(key)，包括了一组选项，指示 webpack 如何去输出、以及在哪里输出你的「bundle、asset 和其他你所打包或使用 webpack 载入的任何内容」
```python
 //webpakc如何输出的目标路径
     output: {
      // 所有输出文件的目标路径
         // 必须是绝对路径（使用 Node.js 的 path 模块）
     path : path.resolve(__dirname,"dist"),
     //输出文件的名字
     filename : 'bundle.js',
     },
```

## moudel 模板：决定了如何处理项目中的不同类型的模块
    注意：loader的作用
        1，识别文件类型，来确定具体处理该数据的loader(Rule.test属性)
        2，使用相关的loader对文件进行相关的操作转换(Rule.use属性
```python
module: {
        loaders: [
            {
                test: /\.js$/,  //表示匹配规则，是一个正则表达式
                loader: 'babel?presets=es2015'//表示针对匹配文件将使用处理的loader
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'autoprefixer']
	        },
            {
                test: /\.less/,
                loaders: ['style', 'css', 'autoprefixer', 'less'],
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                loader: 'file-loader?name=[hash].[ext]'
	        },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=12000&name=[hash].[ext]'
	        }
        ]
    },
```

## plugins 插件：当多个 bundle 共享一些相同的依赖 注意:（loader不能做的处理都能交给plugin来做）
```python
plugins: [
			  new webpack.optimize.CommonsChunkPlugin('common.js') //将公用模块，打包进common.js
	  ]
```
## 