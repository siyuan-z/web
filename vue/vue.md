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
