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

- **对象无法进行比较，比较两个对象始终返回`false`**

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

始终是64位浮点数

| 值     | 指数    | 符号 |
| ------ | ------- | ---- |
| 0~51位 | 52~62位 | 63位 |

- 整数被精确到15位
- 小数最多为17位

#### NaN

指某个值不是合法数

- 字符串作为除数得到的结果将是`NaN`；但是如果该字符串可以转化为数值，则仍然可以进行算术运算
- 可以通过`isNaN()`判断某个值是否是数

#### Infinity

超出最大可能数范围

- 除以0会生成`Infinity`

#### 进制

- 不要使用前导0写数字，有些版本会把该数解释称八进制
- `toString(进制)`: 把数输出成某个进制，但是结果是string类型

#### 数值方法

- `toString()`: 返回结果是string
- `toExponential(小数点后的位数)`: 将数值四舍五入并使用科学技术法表示；返回结果是string 
- `toFixed(小数点后的位数)`: 将数值四舍五入；返回结果是string
  - `toFixed(2)`: 适合处理金钱💰
- `toPrecision(有效数字位数)`: 将数值四舍五入；返回值是string

------

### 布尔值

------

### 数组

#### 数组创建

- 空数组

  ```javascript
  let arr = [];						//优
  let arr = new Array();	//差
  ```

- 普通数组

  ```javascript
  let Apple = ['iPhone','iPad','Mac'];		//优
  let Apple = new Array("iPhone",'iPad','Mac');		//差
  ```

- ⚠️尽量避免使用`new Array()`方式创建数组

  ```javascript
  let arr = new Array(40, 2);		//创建包含两个元素的数组
  let arr = new Array(40);		//创建包含40个empty元素的数组！！
  ```

#### 数组方法

- 遍历数组

  ```javascript
  for(let i=0;i<Apple.length;++i){
    console.log(Apple[i]);
  }
  
  /*
  forEach接受三个参数
  @param value: 该项的值
  @param index: 该项的索引
  @param arr: 数组本身
  */
  Apple.forEach(function (value,index,arr) {
    console.log(index + ':' + value);
  })
  ```

- `indexOf(item,start)`: 检索数组中是否有这个元素；返回第一次出现的位置；没找到返回-1

  - `lastIndexOf()`: 从结尾开始找

- `push(item)`: 在数组末端添加元素，返回新数组的长度

  - 如果直接使用`Apple[6] = 'iWatch'`，会在数组中创建三个为定义的洞

    ![image.png](https://upload-images.jianshu.io/upload_images/12014150-b085d6dbf566ba7c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- `pop()`: 从数组末端弹出一个元素并返回

- `unshift(item)`: 在数组头部添加元素，返回新数组的长度

- `shift()`: 从数组头部弹出一个元素并返回

- `splice(start, num, 添加项1,添加项2...)`: 从start前面开始删除掉num个元素，并在这个位置添加一些新项

  - `splice(0,2)`: 删除前两个元素
  - `splice(2,0,'aa','bb')`: 在第二个元素前插入两个元素

- `concat(arr2,arr3)`: 拼接多个数组并返回新数组

  ```javascript
  let Apple = ['iPhone','iPad','Mac'];
  let arr = ['1','2','3'];
  let buf = Apple.concat(arr, ['aa','bb']);
  ```

- `slice(start,end)`: 切片

- 将数组转换为字符串

  - `toString()`: 将数组转换为由数组值被逗号分隔的字符串
  - `join(ch)`: 效果同上，不过可以指定分隔字符；默认为逗号

- 排序

  - `sort()`: 按照字符串顺序对值进行排序

  - `reverse()`: 翻转数组使得实现降序排序

  - 自定义比较函数

    ```javascript
    newarr = arr.sort(function(a,b){
      return a.value >= b.value;
    });
    ```

  - 数组洗牌

    ```javascript
    arr.sort(function(a,b){return 0.5-Math.random();});
    ```

- `Math.max.apple(null,arr)`: 查找数组中的最大值

- 迭代方法

  - `map()`: 对每个数组元素执行函数创建新数组

    ```javascript
    let arr2 = arr.map(function (value) {
      return value**2;
    });
    ```

  - `filter()`: 创建满足条件的新数组

    ```javascript
    let arr2 = arr.filter(function (value) {
      return value > 33;
    });
    ```

  - `reduce()`: 在数组的每个元素上运行函数，以生成单个值；reduce接受一个初始值

    `reduceRight()`: 从右到左工作

    ```javascript
    let totalNum = arr.reduce(function(total, value){
      return total + value;
    }, 0);
    ```

  - `every()`: 检查所有数组值是否全部通过测试

    ```javascript
    let flag = arr.every(function (value) {
      return value>0;
    });
    ```

  - `some()`: 检查所有数组值是否有某些通过测试

  - `find(function)`: 查找通过测试函数的第一个数组的值

  - `findIndex()`: 查找通过测试函数的第一个数组的索引

#### 识别数组

数组的`typeof`是`object`，判断某个对象是否为数组： 

- `Array.isArray(Apple)`

- 自定义`myisArray()`: 准确的来说，对象原型包含单词“Array”则返回true

  ```javascript
  function myisArray(x){
    return x.constructor.toString().indexOf("Array") > -1;
  }
  ```

- `Apple instanceof Array`

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

  

