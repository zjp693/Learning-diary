## js简答题

1. ##### 怎么定义一个二维数组？

- 给一个数组里面在添加一个[] 就是二维数组

##### 2数组的方法有哪些？请列举10个，并说明方法的作用

- join(): 将数组的元素组起一个字符串，以括号里的内容为分隔符，省略的话则用默认用逗号为分隔符
- push(): 可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。
- pop()：数组末尾移除最后一项，减少数组的 length 值，然后返回删除的值。
- shift()：删除原数组第一项，并返回删除元素的值；。
- unshift:将参数添加到原数组开头，并返回数组的长度 。
- sort()：按升序排列数组项——最小的值位于最前面，最大的值排在最后面。
- reverse()：反转数组项的顺序。
- concat() ：将两个数组连接起来；
- splice()：全能的数组方法，可以给数组 增、删、改。
- slice(): 切割数组，从数组中的下标开始，到结束位置，返回一个切割后的新数组

1. ##### 怎么获取二维数组里面的某一个元素，自己定义数组 

   let arr = [1, 2, 3, 4, 5, 6, [7, 8, 9, 10]] console.log(arr[6][2])

2. ##### 数组的长度和数组的下标(索引)的对应关系 

   下标从0开始，下标0对应数组中的第一个元素

## js编程题

1. ##### 定义数组 var arr = [1,2,666,3,4],

- ##### 1） 给数组最后添加1个元素 

- arr.push(5)

- ##### 2）给数组最前面添加1个元素 

- arr.unshift(5)

- ##### 3）将元素666删除之后，添加一个元素"拉拉"

-  arr.splice(2, 1, "拉拉")

1. ##### 定义数组var arr = [2,4,77,100,1]

- ##### 1）在控制台输出数组的最大值

```js
   var arr = [2, 4, 77, 100, 1];
   let max = arr[0];
   for (let i = 0; i < arr.length; i++) {
       if (max < arr[i]) {
           max = arr[i]
       }
   }
   console.log(max)
```

- ##### 2）在控制台输出数组的最小值

```js
   var arr = [2, 4, 77, 100, 1];
   let max = arr[0];
   for (let i = 0; i < arr.length; i++) {
       if (max > arr[i]) {
           max = arr[i]
       }
   }
   console.log(max)
```

1. ##### 定义数组var arr = [1,2,3,4,5,6,1,2,3,1,2],将数组重复的元素去重,(请使用2种方式实现)

```js
  //第一种
  var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1, 2]
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
      if (newarr.indexOf(arr[i]) == -1) {
          newarr.push(arr[i])
      }
  }
  console.log(newarr)
  //第二种
  var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1, 2]
  let newarr = new Set(arr)
  console.log(Array.from(newarr))
```

1. ##### 现有二维数组，var array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];
   
   - 1). 遍历打印二维数组的所有元素
   - 2). 计算二维数组中所有元素的和
   - 3). 求二维数组中所有元素的最大值。

```js
1.
var array = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]];
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j])
    }
}
2.
var array = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]];
let sum = 0
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        sum += array[i][j]
    }
}
console.log(sum)
3.
var array = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]];
let max = array[0][0]
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if (max < array[i][j]) {
            max = array[i][j]
        }
    }
}
console.log(max)
```