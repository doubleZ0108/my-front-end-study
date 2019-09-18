# JSON知识点🧀️

# Table of Contents

  * [语法](#语法)
  * [对象](#对象)
     * [访问对象](#访问对象)
     * [遍历对象](#遍历对象)
  * [数组](#数组)
     * [遍历数组](#遍历数组)
     * [嵌套数组](#嵌套数组)
  * [JavaScript使用JSON](#javascript使用json)
     * [发送数据](#发送数据)
     * [接收数据](#接收数据)

JavaScript对象标记法(JavaScript Object Notation)

- 数据在浏览器与服务器之间交换时只能是文本，**JSON格式是纯文本**
- 文本可以被任何语言作为数据读取和使用

------

## 语法

- 数据在  `键: 值`  当中

  - 键必须是字符串，由双引号包裹

  - 值：字符串/数字/JSON对象/数组/布尔/null (⚠️字符串必须由**双引号**包裹)

    ```json
    {"name": "double Z"}		//json
    ```

    ```javascript
    {name: 'double Z'}		//javascript
    ```

- 数据由逗号分隔

- 花括号表示对象

- 方括号表示数组

------

## 对象

### 访问对象

```javascript
myobj = {
  "name": "zz",
  "age": 19,
  "place":{
    "homeland": "Tonghua",
    "schoolland": "Shanghai"
  }
};

myobj.name
myobj["age"]

myobj.place.homeland
myobj.place["schoolland"]

/*修改对象值*/
myobj.place.schoolland = "Beijing";
/*删除对象属性*/
delete myobj.place.schoolland;
```
### 遍历对象

```javascript
for (let key in myobj){
  console.log(key, myobj[key]);		//for-in循环中要用括号标记法访问属性值
}
```

------

## 数组

### 遍历数组

```javascript
let myobj = {
  "name": 'zz',
  "school": ['SanXiao','ShiSanZhong','YiZhong','Tongji']
};

for(let i in myobj.school){
  console.log(myobj.school[i]);
}
```

### 嵌套数组

```javascript
let myobj =  {
  "cars": [
    { "name":"Porsche",  "models":[ "911", "Taycan" ] },
    { "name":"BMW", "models":[ "M5", "M3", "X5" ] },
    { "name":"Volvo", "models":[ "XC60", "V60" ] }
  ]
};

for(let i in myobj.cars){
  console.log("=====================");
  console.log(myobj.cars[i].name);
  for(let j in myobj.cars[i].models){
    console.log(myobj.cars[i].models[j]);
  }
  console.log("=====================");
}
```

------

## JavaScript使用JSON

### 发送数据

- `JSON.stringify()`: 将JS对象转换为字符串

  ```javascript
  let myobj = {name:'double Z', age:19};
  let myJSON = JSON.stringify(myobj);
  //将myJSON发送到服务器
  ```
  
  - 可以将`Date`对象直接转化为字符串
  
  - 会删除对象中所有函数（包括键和值），如果非要存函数的话
  
    ```javascript
    let obj = {age:19, myfunc:function(){/**/}};
    obj.myfunc = obj.myfunc.toString();
    let myJSON = JSON.stringify(obj);
    ```
  
  - 避免在JSON中使用函数，函数会失去作用域，应使用`eval()`

### 接收数据

- `JSON.parse()`: 将接收到的JSON文本转换为JS对象

  ```javascript
  //从服务器接受数据存储到myJSON
  let myobj = JSON.oarse(myJSON);
  ```
  
  - reviver：对每个JSON健值对进行检查
  
    ```javascript
    let myJSON =  '{ "name":"double Z", "birth":"2000-01-08", "city":"Shanghai"}';
    let myobj = JSON.parse(myJSON, function (key, value) {
      if(key=='birth'){
        return new Date(value);
      }else{
        return value;
      }
    });
    
    console.log(myobj.birth);
    ```

------

