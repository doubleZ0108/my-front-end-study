# JavaScript 芝士点🧀️

[TOC]

## 使用位置

- 把脚本置于<body>元素的底部，可改善显示速度，因为脚本编译会拖慢显示

  ```html
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body>
      
      <script>
      function myFunc(){
        
      }
      </script>
    </body>
  </html>
  ```

------

## 输出方式

- `window.alert()`: 写入警告框⚠️
- `document.write()`: 写入HTML输出
- `innerHTML`: 写入HTML元素
- `console.log()`: 写入浏览器控制台

------

## 变量

### 命名规则

除了常规的数字、字母、下划线，还可以使用$

例如`let $abc = 1;`, `let a$b = 2;`都是可以的

------

## 运算符

- 数字和字符串 + 会进行级联，结果仍是字符串

  `'8' + 3 + 5`: '835'

  `3 + 5 + '8'`: '88'

- 幂运算：`x**y` <=> `Math.pow(x,y)`

### 比较运算符

- `==`: 等于

- `===`: 值相等并且类型相同

- `!==`: 值不相等或类型不同

  ```javascript
  let x = 5;
  x == 5			//true
  x == '5'		//true
  x === 5			//true
  x === '5'		//false
  
  x != 5			//false
  x != '5'		//false
  x !== 5			//false
  x !== '5'		//true 	值不同 && 类型不同
  ```

- 对象无法进行比较，比较两个对象始终返回`false`

- 字符串和数字进行比较时，会把字符串转换成数值；空字符串转换为0；非数值字符串被转换为始终为`false`的`NaN`

- 在比较值之前应该将变量转换为合适的类型

  ```javascript
  age = Number(age);
  if(isNaN(age)){
    //输入错误
  }
  else{...}
  ```

### 类型运算符

- `typeof 变量`: 返回变量的类型
- `对象 instanceof 类`: 对象是否为对象类型的实例，返回true/false

------

## 数据类型

- 通过`new`声明变量，该变量会被创建为对象；避免字符串、数值、逻辑对象被声明为对象，会增加代码的复杂性并降低执行速度

  ```javascript
  let str = new String();
  let num = new Number();
  let bool = new Boolean();
  ```

  

- undefined与null值相等，但是类型不相等

  ```javascript
  undefined == null				//true
  undefined === null			//false
  ```

### 字符串

***字符串是不可变的，所有字符串方法都返回新字符串，不会修改原始字符串***

- 可以在字符串内使用引号，只要这些引号与包围字符串的引号不匹配；或直接使用转义字符比较稳妥

  ```javascript
  let str1 = "It's alright.";
  let str2 = 'He say "OK"';
  ```
  

#### 字符串函数

- `length`: 字符串长度

- `toUpperCase(), toLowerCase()`: 将字符串中所有字符转换为大/小写

- `replace(origin, dest)`: 用另一个值替换字符串中的指定值，**只替换首次匹配的项，不改变原字符串，大小写敏感**

  ```javascript
  let str = "Hello world Hello!";
  
  str.replace(/hello/i, "Goodbye");		//大小写不敏感的替换（⚠️正则表达式没有引号）
  str.replace(/Hello/g, "Goodbye");		//替换所有匹配项
  ```

- `concat(str1, str2, ...)`: 把字符串连接到后面，等价于 + 

- `trim()`: 删除字符串两端的空白符

- `split(分隔符)`: 将字符串转化为数组

  - `let arr = str.split('');`: 数组的每个元素是单个字符

**下标**

如果下标越界，`[]`返回`undefined`，`charAt()`返回空字符串

- `charAt(index)`: 返回字符串中指定下标的字符

- `charCodeAt(index)`: 返回unicode编码

- `str[index]`

  ⚠️：它让字符串看起来像数组，其实并不是，跟C语言不一样

  ⚠️：它是只读的，`str[0] = 'z'`不会产生错误，但是也不会工作

**搜索查找**

- `indexOf(str, pos)`: 从pos位置开始查找，返回指定文本str(可以是字符、字符串)首次出现的位置；如果没找到，则返回-1
- `search(str)`: 返回str匹配的位置

**提取子串**

- `slice(start, end)`: 返回从起始位置到终止位置的字符串切片，两个参数可以为负值
- `substring(start, end)`: 用法同slice()，不过不接受负值
- `substr(start, length)`: 第二个参数指定截取的长度，如果省略则截取剩余部分

------

### 数值

------

### 布尔值

------

### 数组

```javascript
let apple = ['iPhone','iPad','Mac'];
```

------

### 对象

```javascript
let people = {
  firstname: 'Zhang',
  lastname: 'Zhe',
  FullName: function () {
    return this.firstname + ' ' + this.lastname;    //this关键字
  }
}

/*访问对象属性*/
console.log(people["firstname"]);
console.log(people.firstname);

// /*访问对象方法*/
console.log(people.FullName());
```

------

### undefined

没有值的变量，其值是`undefined`，typeof返回也是`undefined`；可以使用`undefined`对变量进行清空

  ```javascript
let people;
console.log(people);				//undefined
console.log(typeof people);	//undefined
  ```

### null

null代表空值，但是数据类型是对象

```javascript
let people = null;
console.log(people);				//null
console.log(typeof people);	//object
```

------

## 函数

- (): 调用函数运算符

  ```javascript
  function myfunc() {
      return 'hello world';
  }
  
  console.log(myfunc());	//hello world
  console.log(myfunc);
  /*
  ƒ myfunc() {
      return 'hello world';
  }
  */
  ```

  


