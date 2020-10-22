## js简答题

1. ##### 对象组成都是采用键值对的形式，我们是否能把函数放到对象的属性值当中？该怎么做？

  可以。
  对象.键 = function(){};
2. ##### 能够使用什么方法遍历对象？如何遍历打印对象的属性名和属性值？

  遍历对象：
  for(var key in object) 
  遍历打印对象的属性名和属性值：
  for(var key in object) ----遍历object对象
  {
   console.log(key); ----打印对象的属性名
   console.log(object[key]); ----打印对象的属性值
  };
3. ##### 遍历对象的方法能否也拿来遍历数组？为什么？

  遍历对象的方法可以拿来遍历数组。
  原因：数组也属于一种对象。
4. ##### 我们知道给对象添加属性有三种方式，那么删除对象的属性能否也有三种方式或者更多呢？请说说你认为删除对象属性的方式有哪些

  '删除对象属性的方式':

  delete 对象.属性;

  delete 对象['属性'];

  var del = '对象的某属性名';

    delete 对象[del];


## js编程题

1. ##### 定义一个人的对象, 属性有姓名，年龄，性别，身高，方法有：能吃饭，能跑步，
 - 遍历对象，将对象的属性和值输出来，并且调用其中的一个方法，将结果在控制台输出
 - 将对象得`年龄`这个属性删除
 - 将对象的`身高`的值题换成"180cm"
 - 给对象添加属性`学号`，通过两种方式

 ```js
var coke = {
   name: '白宇',
   age: '30',
   sex: '男',
   height: '183',
   hobby: function () {
       console.log('吃饭,跑步');
   }
};
 2.
for (var key in coke) {
   console.log(key);
   console.log(coke[key]);
}
coke.hobby();
//将对象得`年龄`这个属性删除
delete coke.age;
//将对象的`身高`的值题换成"180cm"
coke.height = '180cm';
//给对象添加属性`学号`，通过两种方式
coke.id = 6; // 方式一
coke['id'] = 6 //法二  
// 重新打印对象
console.log(coke);
````

##### // 2. 定义一个车的对象，属性有颜色，大小，型号，方法有：能行驶

//   获取对象的`颜色`，在控制台输出
//   调用方法，在控制台输出格式要求`马路上正在行驶的是一辆xx色的xx型号的车`

 ```js
 var car = {
   color: '红',
   size: 'middle',
   type: 'Huracan',
   way: function () {
       return '能行驶'
   }
};
console.log(car.color);
console.log(`马路上正在${car.way()}的是一辆${car.color}色的${car.type}型号的车`);
 
 ```

 3. ##### 【冒泡排序】对下面的数组进行从小到大排序，不允许使用sort

```js
    var arr = [4,2,7,5,3,1,6,9,8]
    for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            var num = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = num;
        }
    }
}
console.log(arr);
```

4. ##### 【冒泡排序】对下面的数组进行从大到小排序，不允许使用sort

```js
    var arr = [4,2,7,5,3,1,6,9,8]
    for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
            var num = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = num;
        }
    }
}
console.log(arr);
```