## js解答题

1. ##### 字符串的特性是什么？

    String 类型是字符串的对象包装类型

2. ##### 使用字符串方法返回指定下标(索引) 对应的字符和不使用字符串方法返回字符的方式分别是什么？

   1. console.log(indexOf(1));
   2. console.log(str[1])

3. ##### 查看某个字符串是否存在于字符串中的某个方法是？

   其返回值为-1或者0分别代表的是什么？ charAt(); index是0 ~ str.length-1 ,如果指定的index值超出了该范围，则返回一个空字符串

4. ##### 截取字符的三种方法是什么，分别有什么不同？

    substring() 方法:string.substring(from, to) 方法从 from 位置截取到 to 位置，to 可选，没有设置时默认到末尾。

    substr() 方法:substr() 方法可在字符串中截取从开始下标开始的指定数目的字符。

    slice() 方法: slice(beginSlice, endSlice);

## js编程题

1. ##### 将字符串 var str="abcdefgh"进行反转，结果是 "hgfedcba"

```js
var str = "abcdefgh";
var newstr = '';
for (var i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
}
console.log(newstr)
```

1. ##### 截取字符串 “我爱中华人民共和国” 中 '中华' 输出到控制台中

```js
var str = '我爱中华人民共和国';
console.log(str.substr(2, 2));
```

1. ##### 获取url中的用户名和密码 https://www.test.com/login?name=zs&pwd=123,并且控制台输出对象的格式{name:'zs',pwd:123}

```js
var str = 'https://www.test.com/login?name=zs&pwd=123';
str = str.split('?')[1].split('&');
var obj = {};
for (var i = 0; i < str.length; i++) {
    var arr = str[i].split('=');
    obj[arr[0]] = arr[1];
}
console.log(obj);
```

1. ##### var str= 'qweqweoeqweroqweqweodfsfdo' 1)查找字符串中所有字母 'o'出现的位置 2)把字符串中的所有字母'o'替换成 '-';

```js
  var str = 'qweqweoeqweroqweqweodfsfdo';
  //   1)查找字符串中所有字母 'o'出现的位置
  for (var i = 0; i <= str.length; i++) {
      if (str[i] == 'o')
          console.log(i);
      var str = str.replace("o", "-");
  }
  console.log(str)
  //   2)把字符串中的所有字母'o'替换成 '-';
```

