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

- 严格模式：在js文件开头添加`"use strict";`

  - [ ] 不声明变量的情况下使用变量 `x = 5`
  - [ ] 删除变量 `delete x`，删除函数，删除不可删除的属性
  - [ ] 重复参数命名
  - [ ] 写入只读属性
  - [ ] 写入只能获取的属性
  - [ ] with语句
  - [ ] ······
  - [ ] 

------

## 输出方式

- `window.alert()`: 写入警告框⚠️
- `document.write()`: 写入HTML输出
- `innerHTML`: 写入HTML元素
- `console.log()`: 写入浏览器控制台

------

## 变量

### 定义

- `var`: 使用var声明变量时，在块{}中声明的变量可以在块外访问

  var声明的全局变量属于window对象，可使用window.全局变量名使用

  ```javascript
  var x = 10;
  //x的值为10
  {
    var x = 6;
    //x的值为6
  }
  //x的值为6
  ```

  ```javascript
  for(var i=0;i<10;++i){
    
  }
  //i的值为10
  ```

- `let`: let声明全局变量不属于window对象

  ```javascript
  let i = 100;
  for(let i=0;i<10;++i){
    
  }
  //i的值为100
  ```

- `const`: 不是定义常量值，而是定义对值的常量引用

  ```javascript
  /*将原始值赋给常量，就不能改变原始值*/
  const PI = 2.1415;
  PI = PI + 10;		//error
  
  /*可以更改常量对象的属性*/
  const people = {name:'zz',age:19};
  people.name = 'yT';		//可以更改属性
  people.score = 95.5;	//可以添加属性
  people = {name:'yT',age:19};		//error
  
  /*可以更改常量数组中的元素，但是不能为常量数组赋值*/
  ```

**同一作用域下：**

- [x] var重新声明var
- [ ] var重新声明let
- [ ] let重新声明var
- [ ] let重新声明let
- [ ] let重新声明变量
- [ ] const重新声明var或let
- [ ] const重新声明const
- var声明的变量会提升到顶端，let声明不可以；在声明let变量之前使用会导致`ReferenceError`

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

- `constructor`: 返回变量的构造器函数

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

- 所有JS对象都是从原型继承属性和方法，`Object.prototype`位于原型继承链的顶端

#### 对象创建

```javascript
let people = {
  firstname: 'Zhang',
  lastname: 'Zhe'，
  FullName: function () {
    return this.firstname + ' ' + this.lastname;    //this关键字
  }
};

let people = new Object();
people.firstname = 'Zhang';
people.lastname = 'Zhe';

/*访问对象属性*/
console.log(people["firstname"]);
console.log(people.firstname);

/*访问对象方法*/
console.log(people.FullName());
```

- 对象是易变的：它们通过引用来寻址，而非值；**把对象a赋给b，对b的任何修改都相当于直接对a的修改**

#### 遍历对象

```javascript
let people = {
  firstname: 'Zhang',
  lastname: 'Zhe'
};

for(attr in people){
  console.log(attr, people[attr]);
}
```

#### 添加属性

```javascript
people.newattr = 'new';
```

#### 删除属性

```javascript
delete people.属性名;
```

#### 对象访问器

```javascript
let people = {
  firstname: 'Zhang',
  lastname: 'Zhe',

  get FirstName(){    //不能和变量名一样
    return 'The first name is ' + this.firstname;
  },
  set LastName(value){
    this.lastname = value.toUpperCase();
  },
  
  get FullName() {
    return this.firstname + ' ' + this.lastname;    //this关键字
  }
};

/*设置属性值*/
people.lastname = 'zz';			//zz
people.LastName = 'abc';		//ABC

/*以属性形式访问方法*/
people.FullName;
```

#### 构造器

```javascript
function People(firstname, lastname) {
  this.firstName = firstname;
  this.LastName = lastname;
}

let zz = new People('Zhang','Zhe');
```

- 给某个实例化的对象添加属性或方法不会改变原始的类
- 不可以直接给原始的类添加方法和属性，要通过构造函数；或是使用`prototype`添加新属性（略）

------

#### 日期

- `new Date()`: 用当前日期和时间创建日期对象
- `new Date(year,month,day,hours,minutes,seconds,milliseconds)`: 指定日期
- `new Date(milliseconds)`: 如果只有一个参数的话会将其视为毫秒，只从1970-1-1起算的偏移量

##### 输出格式

- `toString()`: Wed Sep 04 2019 18:17:49 GMT+0800 (中国标准时间)
- `toUTCString()`: Wed, 04 Sep 2019 10:17:49 GMT
- `toDateString()`: Wed Sep 04 2019

##### 格式化

| 类型     | 实例                         |
| -------- | ---------------------------- |
| ISO日期  | '2019-09-04'                 |
| 短日期   | '2019/09/04'                 |
| 长日期   | 'Sep 4 2019'                 |
| 完整日期 | 'Wednesday September 4 2019' |

- 无论输入格式如何，默认都是按照全文本字符串格式

##### 获取

使用时要先初始化一个日期时间对象

| 方法                | 描述                   | 取值范围            |
| ------------------- | ---------------------- | ------------------- |
| `getFullYear()`     | 年                     | 四位年份            |
| `getMonth()`        | 月                     | 0～11               |
| `getDate()`         | 日                     | 1～31               |
| `getDay()`          | 星期                   | 0～6（0表示星期日） |
| `getHours()`        | 小时                   | 0～23               |
| `getMinutes()`      | 分钟                   | 0～59               |
| `getSeconds()`      | 秒                     | 0～59               |
| `getMilliseconds()` | 毫秒                   | 0～999              |
| `getTime()`         | 从1970-1-1以来的毫秒数 |                     |

------

#### Math

- `Math.PI`: 3.141592653589793
- `Math.round()`: 返回x四舍五入最接近的整数
- `Math.pow(x,y)`
- `Math.sqrt()`
- `Math.abs()`
- `Math.ceil()`，`Math.floor()`
- `Math.min(参数1,参数2,...)`: 查找参数列表中最小的值
- `Math.random()`: 产生[0,1)间的随机数

##### 随机数

- `[min,max)`：`Math.floor(Math.random() * (max-min)) + min`
- `[min,max]`: `Math.floor(Math.random() * (max-min+1)) + min`

------

#### this

- 类的方法中：所有者对象
- 单独的情况：全局对象`[object Window]`
- 函数中：全局对象
  - 严格模式：undefined
- 事件中：接收事件的元素

##### 显示函数绑定

`call()`和`apply()`可以讲对象b作为参数调用对象a的方法

```javascript
let people1 = {
  name: 'zz',
  age: '18',
  message: function () {
    return this.name + ' ' + this.age;
  }
};

let people2 = {
  name: 'yT',
  age: 19
};

people1.message.apply(people2);		//yT 19
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

- 测试对象不存在且为空

  ```javascript
  if(typeof obj!=="undefined" && obj!==null){}
  ```

  

------

## 函数

- (): 调用函数运算符

  ```javascript
  function myfunc() {
      return 'hello world';
  }
  
  console.log(myfunc());	//hello world -> 调用函数
  console.log(myfunc);
  /*
  ƒ myfunc() {
      return 'hello world';
  }
  -> 返回函数定义
  */
  ```

```
  
- 如果调用函数时缺少一个参数，则这个缺失的参数会被设置为`undefined`

### 函数定义

- 用变量保存函数

  ```javascript
  let x = function(a,b){return a*b;};
  let y = x(3,4);
```

- Functiono构造器

  ```javascript
  var myFunc = new Function('a','b','return a*b;');
  let y = myFunc(3,4);
  ```

#### 自调用函数

声明完了马上调用，只能使用一次

```javascript
let y = (function(a,b){
  return a*b;
})(3,4);
```

#### 箭头函数

```javascript
const func = (x,y) => {return x*y;};
let y = func(3,4);		//函数表达式始终是常量值，所以使用const更安全
let y = func(3,4);
```

### 函数参数

- js不会对接收到的参数进行数量检查和类型检查

  - 如果缺少参数，则剩余的形参为`undefined`

  - 如果传递的参数过多，则可以使用`arguments`对象找到这些参数

    ```javascript
    let x = mySum(1,45,-34,90,34,-56);
    
    function mySum() {
      let sum = 0;
      for(let i=0;i<arguments.length;++i){
        sum += arguments[i];
      }
    
      return sum;
    }
    ```

- **参数通过值传递，函数内的修改不会影响原值**

  **对象通过引用传递，调用的函数内会修改原始值的**

  ```javascript
  function myFunc(p) {
    p.name = 'yT';
    return;
  }
  
  let people = {
    name: 'zz',
    age: 19
  };
  
  myFunc(people);
  console.log(people);		//yT
  ```

### 方法重用

在不同对象上使用方法

- `call()`：接收参数列表
- `apply()`: 接收数组形式的参数

```javascript
let people = {
  FullName: function(age, city){
    return this.firstname + this.lastname + age + city;
  }
};

let p1 = {
  firstname: 'Zhang',
  lastname: 'Zheng'
};
let p2 = {
  firstname: 'Zhang',
  lastname: 'YiTeng'
};

/*调用*/
people.FullName.call(p1, 19, 'Tonghua');
people.FullName.apply(p2,[19, 'Taiyuan']);
```

------

## 逻辑

### switch

case🏷️使用`===`进行比较

------

## 循环

### for/in循环

```javascript
//例.遍历对象
let people = {
  name:'yT',
  age:19,
  school:'Tongji',
};

let x,y
for(x in people){
  console.log(x);
  console.log(people[x]);
}
```

------

## 正则表达式

`/pattern/modifiers`

| 修饰符 | 作用                   |
| ------ | ---------------------- |
| i      | 执行大小写不敏感的匹配 |
| g      | 执行全局匹配           |

| 表达式 | 作用                 |
| ------ | -------------------- |
| [abc]  | 匹配方括号之中的字符 |
| [0-9]  | 匹配0～9的数字       |
| (x\|y) | 匹配由 \| 分隔的选项 |

| 元字符 | 作用         |
| ------ | ------------ |
| \d     | 匹配数字     |
| \s     | 匹配空白字符 |
| \b     | 匹配单词边界 |

| 量词 | 作用                     |
| ---- | ------------------------ |
| n+   | 匹配包含至少一个n的字符  |
| n*   | 匹配包含0个或多个n的字符 |
| n?   | 匹配包含0个或1个n的字符  |

- `test()`: 返回true或false

  ```javascript
  let patt = /z+/i;
  let str = 'my name is double Z';
  patt.test(str);			//true
  ```

- `exec()`: 返回已找到的文本；如果未找到匹配，返回null

  ```javascript
  let patt = /[aeiou]/gi;
  let str = 'This Is A Sentece';
  
  let result;
  do{
    result = patt.exec(str);
    console.log(result);
  }while(result);
  ```

------

## 异常处理

### Error对象

| 属性    | 描述     |
| ------- | -------- |
| name    | 错误名   |
| message | 错误信息 |

| 错误名         | 描述                        |
| -------------- | --------------------------- |
| EvalError      | 在`eval()`函数中发生的错误  |
| RangeError     | 超出数字范围的错误          |
| ReferenceError | 非法引用                    |
| SyntaxError    | 语法错误                    |
| TypeError      | 类型错误                    |
| URIError       | 在`encodeURI()`中发生的错误 |

```javascript
/*范围错误*/
let num = 1;
try{
  num.toPrecision(500);		//toPrecision() argument must be between 1 and 100
}
catch(e){
  console.log(e.name, e.message);
}

/*引用错误*/
let x;
try{
  x = y + 1;		//y is not defined
}
catch(e){
  console.log(e.name, e.message);
}

/*类型错误*/
let a = 1;
try{
  a.toUpperCase();		//a.toUpperCase is not a function 整数不能转换成大些
}
catch(e){
  console.log(e.name, e.message);
}
```

- 抛出并捕获异常

  ```javascript
  try {
    if(text==''){
      throw 'empty string';
    }
    else if(isNaN(text)){
      throw 'not a number';
    }
  }
  catch (e) {
    console.log(e);
  }
  finally {
    console.log('无论如何都会执行这里的代码');
  }
  ```

------

## 表单

- 获取表单中某一项的值

  ```html
  <form name='nyForm' onsubmit='myFormSubmit();' method='post'>
    <input type='text' name='mynum' />
  </form>
  ```

  ```javascript
  let text = document.forms['myForm']['mynum'].value;
  ```

### 约束验证DOM

**obj的合法值属性**

| 属性                | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| checkValidity()     | 浏览器自动判断是否为有效输入，*如果放在form里则由浏览器自动输出提示信息* |
| setCustomValidity() | 设置`validationMessage`属性                                  |
| validationMessage   | 浏览器自己写的错误信息                                       |

**obj.validity的合法值属性**

| 属性            | 描述                                       |
| --------------- | ------------------------------------------ |
| customError     | 自定义的合法性消息                         |
| patternMismatch | 是否匹配其pattern属性                      |
| rangeOverflow   | 元素值是否大于max属性                      |
| rangeUnderflow  | 元素值是否小于min属性                      |
| stepMismatch    | 是否符合指定的间隔值                       |
| tooLong         | 元素值是否超过其maxLength属性              |
| typeMismatch    | type为email或url时，输入值是否为正确的类型 |
| valueMissing    | 元素是否没有值                             |
| valid           | 元素值是否为有效的                         |

```javascript
let numobj = document.forms['myform']['mynum'];

if(!numobf.checkValidity()){
  //放在表单里submit的信息，浏览器会自动输出提示信息
}
else{
  concole.log('数字正确.');
}
```

```javascript
let numobj = document.getElementById('mynum');

if(!numobj.checkValidity()){
  alert(numobj.validationMessage);		//浏览器自己写的错误信息
}
else{
  concole.log('数字正确.');
}
```

```javascript
let numobj = document.getElementById('mynum');

if(numobj.validity.rangeOverflow){
  alert('值太大');
}
else{
  console.log('数字正确.');
}
```

------

## HTML DOM

文档对象模型 Document Object Model

### DOM能力(动态)

- 改变HTML元素
- 改变HTML属性
- 改变CSS样式
- 删除HTML元素和属性
- 添加HTML元素和属性
- 响应事件
- 创建新事件

### DOM文档

文档对象是网页中所有其他对象的拥有者

### 查找

如果未找到元素，返回`null`

| 方法                                       | 作用                  |
| ------------------------------------------ | --------------------- |
| document.getElementById(id)                | 通过元素id查找元素    |
| document.getElementsByTagName(tagname)     | 通过标签名查找元素    |
| docnment.getElementsByClassName(classname) | 通过类名查找元素      |
| document.querySelectorAll(selector_name)   | 通过匹配指定CSS选择器 |

```javascript
/*返回所有p标签*/
document.getElementsByTagName('p');

/*例如查找class='intro'的所有<p>元素*/
document.querySelectorAll('p.intro');
```

### 改变

| 方法                           | 作用              |
| ------------------------------ | ----------------- |
| elem.innerHTML = html content  | 改变元素的HTML    |
| elem.attribute = value         | 改变属性值        |
| elem.setAttrubute(attr, value) | 改变属性值gaibian |
| elem.style.property = style    | 改变样式          |

```javascript
/*动态更改图片*/
//<img id="myimg" src="Resources/img/icon.jpg" />
document.getElementById('myimg').src = '././Resources/img/flower_icon.png';

/*改变文本颜色*/
document.getElementById('myp').style.color = 'red';

/*隐藏文本*/
elem.visibility = 'hidden';
/*显示文本*/
elem.visibility = 'visible';
```

### 添加和删除

| 方法                         | 作用         |
| ---------------------------- | ------------ |
| document.createElement(elem) | 创建HTML元素 |
| document.appendChild(elem)   | 添加HTML元素 |
| document.removeChild(elem)   | 删除HTML元素 |
| document.replaceChild(elem)  | 替换HTML元素 |

### 添加事件处理程序

| 方法                        | 作用                            |
| --------------------------- | ------------------------------- |
| elem.onclick = function(){} | 向元素的onclick事件添加处理程序 |

### HTML对象(少部分)

| 属性                     | 描述                      |
| ------------------------ | ------------------------- |
| document.documentElement | 完整文档                  |
| document.bodu            | 文档的body部分            |
| document.domain          | 文档服务器的域名          |
| document.anchors         | 拥有name属性的所有<a>标签 |
| document.forms           | 所有<form>元素            |
| document.images          | 所有<img>元素             |
| document.cookie          | 文档的cookie              |
| document.URL             | 文档e的完整URL            |
| document.lastModified    | 文档更新的日期和时间      |
| document.readyState      | 文档的(加载)状态          |

### DOM  动画

```javascript
let myframe = setInterval(frame, 5);

function frame(){
  if(/*测试是否完成*/){
    clearInterval(myframe);
  }else{
    /*改变元素样式*/
  }
}
```

### DOM 事件

- 页面加载/离开后

  常用来检查cookie

  ```javascript
  window.onload = function () {
  	if(navigator.cookieEnabled == true){
      //Cookie已启用
    }
  };
  
  window.onunload = function () {
    //alert('真的要退出么');  不会阻止用户退出
  };
  ```

- 图像加载后

- 鼠标事件

  - `onmousedown()`: 🖱️被点击(一直按住不放也是这个)

  - `onmouseup()`: 🖱️被释放

  - `onclick()`: 🖱️点击完成后触发

  - `onmouseover()`: 🖱️移至元素上

  - `onmouseout()`: 🖱️从元素上离开

    ```javascript
    //<div onmouseover="mymouseOver(this);" onmouseout="mymouseOut(this);">把鼠标移上来试试</div>
    
    function mymouseOver(elem){
      elem.style.backgroundColor = '#ADD8E6'
      elem.innerText = '🍒';
    }
    function mymouseOut(elem) {
      elem.style.backgroundColor = '#FFA07A'
      elem.innerText = '把鼠标移上来试试';
    }
    ```

- 输入字段被改变时

  ```javascript
  //<input type="text" onchange="UpperCase(this);" />
  
  function UpperCase(elem) {
    elem.value = elem.value.toUpperCase();
  }
  ```

- 提交表单

- 获得到焦点/失去焦点

  ```javascript
  //<input type="text" onfocusin="focusChange(this, true);" onfocusout="focusChange(this,false);"/>
  
  function focusChange(elem, focus_flag) {
    if(focus_flag){
      elem.style.backgroundColor = 'lightpink';
    }else{
      elem.style.backgroundColor = 'white';
    }
  }
  ```

- 键盘按键

### DOM 事件监听器

`addEventListener(event, function, useCapture)`: 为元素附加事件处理程序而不会覆盖已有的事件处理程序

`removeEventListener(event, function)`：删除指定的事件处理程序*(无法删除匿名函数指定的事件监听器，因为这两个参数是必须的)*

- `event`: 事件的类型(`click`,  `mousedown`, `mousemove`等)

- `function`: 事件发生是调用的函数

- `useCapture`: 布尔值，使用事件冒泡还是事件捕获

  ```javascript
  let x = document.getElementById('elem');
  x.addEventListener(
  	"click", function(){
      //TODO
    }
  );
  x.removeEventListener("click")
  
  ```

#### 在Windows对象上添加事件监听器

```javascript
/*调整浏览器大小时触发*/
window.addEventListener("resize", function () {
  console.log('window resize...');
});
```

#### 事件冒泡/捕获

- 冒泡：先处理最内侧元素的事件，再依次处理外侧的(默认情况 -> useCapture设为false)
- 捕获：先处理最外侧元素的事件，再依次处理内侧的(useCapture设为true)

### DOM 导航🧭

|       节点属性        |
| :-------------------: |
|     `parentNode`      |
| `childNodes[nodenum]` |
|     `firstChild`      |
|      `lastChild`      |
|     `nextSibling`     |
|   `previousSibling`   |

⚠️元素节点不包含该标签中的文本

**`innerHTML` <=> 访问首子节点的`nodeValue`**

> 例. <p id='elem'>text</p>
>
> ```javascript
> let x = document.getElementById('elem');
> 
> x.innerHTML <=> x.childNodes[0].nodeValue <=> x.firstChild.nodeValue
> ```

| 名称      | 作用                   |
| --------- | ---------------------- |
| nodeName  | 节点的名称**(只读的)** |
| nodeValue | 节点的值               |
| nodeType  | 节点的类型**(只读的)** |

```javascript
//<p id='elem' class='para'>this is a text</p>
let x = document.getElementById('elem');
let x_attr_class = x.getAttributeNode('class');
let x_text = x.firstChild;

/*nodeName*/
x.nodeName		//P		元素节点返回大写的标签名
x_attr_class.nodeName		//class		属性节点返回属性名
x.firstChild.nodeName		//#text		文本节点总是#text
document.nodeName		//#document		文档节点总是#document

/*nodeValue*/
x.nodeValue		//null		元素节点为null
x_attr_class.nodeValue		//para		属性节点返回属性值
x.text.nodeValue		//this is a text		文本节点返回文本
```

| 属性值             | 类型 | 例子                     |
| ------------------ | ---- | ------------------------ |
| ELEMENT_NODE       | 1    | <p>text</p>              |
| ATTRIBUTE_NODE     | 2    | class='container'        |
| TEXT_NODE          | 3    | this is a text           |
| COMMENT_NODE       | 4    | <!-- this is comment --> |
| DOCUMENT_NODE      | 5    | <html>的父               |
| DOCUMENT_TYPE_NODE | 6    | <!DOCTYPE html>          |

### DOM 节点

#### 创建HTML元素

```html
<div id="container">
    <p id="child">text</p>
</div>
```

```javascript
let container = document.getElementById('container');
let child = document.getElementById('child');

let para = document.createElement('p');
let node = document.createTextNode('这里是文本');
```

- `appendChild()`: 追加新元素作为父元素的最后一个子

  ```javascript
  para.appendChild(node);
  container.appendChild(para);
  ```

- `insertBefore()`: 指定在某个儿子元素之前插入

  ```javascript
  para.appendChild(node);
  container.insertBefore(para, child);
  ```

#### 删除HTML元素

`removeChild()`

⚠️HTML加载完之后元素的`firstChild`和`lastChild`是一段空白

```html
<div id="container">
    <p id="child">text</p>
</div>
```

![image.png](https://upload-images.jianshu.io/upload_images/12014150-b9d213b553b0d35f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```javascript
/*删除第一个子*/
function removefirstChild_btnClick() {
  let container = document.getElementById('container');
  let firstChild = container.firstChild;

  container.removeChild(firstChild);
}
```

```javascript
/*通过自己找到父节点并删除自己*/
//不可以在不引用父节点的情况下删除该元素
function removebyitself_btnClick() {
  let child = document.getElementById('container');
  let parent = child.parentNode;

  parent.removeChild(child);
}
```

### DOM 集合

`getElementByTagName()`方法返回`HTML Collection`对象，类似于数组，但并不是数组，可以遍历列表并通过索引访问元素，但不能使用其他的数组方法

```javascript
let myCollection = document.getElementByTagName('p');
for(let i=0;i<myCollection.length;++i){
  myCollection[i].style.backgroundColor = 'red'.
}
```



------

## JSON

- `JSON.parse()`: 将接收到的JSON文本转换为JS对象
- `JSON.stringify()`: 将JS对象转换为字符串
