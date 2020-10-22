## 简答题

1. 创建数据库quanzhan12
```js
// 1.连接数据库
// 1.引入mongoose这个包
const mongoose = require('mongoose');
// 2.使用mongoose的包的connect方法来连接数据库

// mongoose.connect('mongodb://IP或域名/数据库名称')
mongoose.connect('mongodb://localhost/db_student', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("数据库连接成功1111") })
    .catch((err) => { console.log(err, '数据库连接失败') });
```
============================================class集合==============================

2. 创建集合class,集合的规则要求如下
> 姓名:字符串类型
> 年龄:数字类型
> 性别: 数字类型
> 业务爱好:数组类型
```js
let classSchema = new mongoose.Schema({
    // 字段: 数据类型
      name: String,
    age: Number,
    gender: String,
    hobbies: Array
})
```
============================================增加操作===============================

3. 在class的集合中插入文档
>姓名:zhangsan,年龄:22,性别:0,业务爱好：["draw","computer"]
>姓名:jialala,年龄:18,性别:1,业务爱好：["sing","draw","football"]
>姓名:yaoyao,年龄:24,性别:1,业务爱好：["football","computer","running"]
>姓名:yangwenlin,年龄:19,性别:0,业务爱好：["sing","computer"]
```js
// 应用规则
let Class = new mongoose.model('Class', classSchema);

Class.create({
    name: 'zhangsan',
    age: 22,
    gender: '0',
    hobbies: ['draw', 'computer']
},
    {
        name: 'jialala',
        age: 18,
        gender: '1',
        hobbies: ['sing', 'draw', 'computer']
    }, {
    name: 'yaoyao',
    age: 24,
    gender: '1',
    hobbies: ['football', 'computer', 'running']
}, {
    name: 'yangwenlin',
    age: 19,
    gender: '0',
    hobbies: ['sing', 'computer']
})

```
============================================查询操作===============================
4. 查询所有人的信息
```js
Class.find()
    // 成功时的回调
    .then((data) => console.log(data))
    // 失败时的回调
    .catch((err) => console.log(err))
```
============================================score集合==============================

5. 创建集合score,集合的规则要求如下
> 姓名:字符串类型
> 数学成绩: 数字类型
> 英语成绩: 数字类型
> 语文成绩: 数字类型
```js
let scoreSchema = new mongoose.Schema({
    // 字段: 数据类型
    name: String,
    Math: Number,
    English: Number,
    Chinese: Number
})
```
============================================增加操作===============================

6. 在score的集合中插入文档
>姓名:zhangsan,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:jialala,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:yaoyao,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:yangwenlin,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
```js
let Score = new mongoose.model('score', scoreSchema);

Score.create({
    name: 'zhangsan',
    Math: 82,
    English: 66,
    Chinese: 78
},
    {
        name: 'jialala',
        Math: 82,
        English: 66,
        Chinese: 78
    }, {
    name: 'yaoyao',
    Math: 82,
    English: 66,
    Chinese: 78
}, {
    name: 'yangwenlin',
    Math: 82,
    English: 66,
    Chinese: 78
})
```
============================================查询操作===============================
7. 查询所有成绩
```js
Score.find()
    // 成功时的回调
    .then((data) => console.log(data))
    // 失败时的回调
```

============================================老师集合==============================

8. 创建集合teacher,集合的规则要求如下
> 姓名:字符串类型
> 性别: 数字类型
> 年龄: 数字类型
> 新资: 数字类型
```js
let teacherSchema = new mongoose.Schema({
    // 字段: 数据类型
    name: String,
    Math: Number,
    English: Number,
    Chinese: Number
})
```
============================================增加操作===============================
9. 在teacher的集合中插入文档
这个你自己定义，插入3条文档就可以
```js
let Teacher = new mongoose.model('Teacher', teacherSchema);

Teacher.create({
    name: 'zhangsan',
    Math: 82,
    English: 66,
    Chinese: 78
},
    {
        name: 'jialala',
        Math: 82,
        English: 66,
        Chinese: 78
    }, {
    name: 'yaoyao',
    Math: 82,
    English: 66,
    Chinese: 78
}, {
    name: 'yangwenlin',
    Math: 82,
    English: 66,
    Chinese: 78
})
```
============================================查询操作===============================

10. 查询所有老师的信息
```js
Teacher.find()
    // 成功时的回调
    .then((data) => console.log(data))

```

