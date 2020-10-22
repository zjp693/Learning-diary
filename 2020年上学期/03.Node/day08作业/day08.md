## 简答题

1. 创建数据库fullstack2019

```js
// 引入包
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fullstack2019', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('数据链接成功');
    })
    .catch(() => {
        console.log('数据库链接失败');

    })
```

============================Student集合================== 2. 创建集合Student,集合的规则要求如下:

> 姓名:字符出类型，长度最少2个字符，最大6个字符，必传 年龄:数字类型，最大年龄不能超过25岁，必传，提示年龄不能大于25岁 性别: 字符串类型，只能是男或者是女，枚举，必传， 业务爱好:draw,computer,sing,football,running

```js
// 创建约束
let StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        validate: {
            validator: v => {
                return v && v.length <= 6 && v.length >= 2
            },
            message: '你的名字不符合规则'
        },
        // 必传
        required: [true, '请传入用户名']
    },
    age: {
        type: Number,
        // 必传
        required: [true, '请输入年龄'],
        validate: {
            validator: v => {
                return v && v <= 25
            },
            message: '年龄不能超过25岁'
        }
    },
    sex: {
        type: String,
        enum: {
            values: ['男', '女'],
            message: '请输入正确的性别'
        }
    },
    hobbys: {
        enum: {
            values: ['draw', 'computer', 'sing', 'football', 'running']
        }
    }
})
let Student = new mongoose.model('Student', StudentSchema);
```

=============================增加操作============================= 3. 在Student的集合中插入文档

> 姓名:杨文林,年龄:19,性别:男,业务爱好：["draw","computer"] 姓名:贾拉拉,年龄:18,性别:女,业务爱好：["sing","draw","football"] 姓名:姚姚,年龄:24,性别:女,业务爱好：["football","computer","running"] 姓名:王凯,年龄:25,性别:男,业务爱好：["sing","computer"]

```js
// 添加
Student.create({
    name: '杨文林',
    age: '19',
    sex: '男',
    hobbys: ["draw", "computer"]
})
    .then((data) => {
        console.log(data);

    })
    .catch((err) => {
        for (let key in err.errors) {
            console.log(err.errors[key].properties.message);

        }
    })
Student.create({
    name: '贾拉拉',
    age: '18',
    sex: '女',
    hobbys: ["sing", "draw", "football"]
})
    .then((data) => {
        console.log(data);

    })
    .catch((err) => {
        for (let key in err.errors) {
            console.log(err.errors[key].properties.message);

        }
    })
Student.create({
    name: '姚姚',
    age: '24',
    sex: '女',
    hobbys: ["football", "computer", "running"]
})
    .then((data) => {
        console.log(data);

    })
    .catch((err) => {
        for (let key in err.errors) {
            console.log(err.errors[key].properties.message);

        }
    })
Student.create({
    name: '王凯',
    age: '25',
    sex: '男',
    hobbys: ["sing", "computer"]
})
    .then((data) => {
        console.log(data);

    })
    .catch((err) => {
        for (let key in err.errors) {
            console.log(err.errors[key].properties.message);

        }
    })
```

=============================Score集合==============================

1. 创建集合Score,集合的规则要求如下

> 姓名:字符出类型，长度最少2个字符，最大6个字符，必传 数学成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息 英语成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息 语文成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息

```js
// 创建Score约束
let ScoreSchema = new mongoose.Schema({
    name: {
        type: String,
        validate: {
            validator: v => {
                return v && v.length >= 6 && v.length <= 2
            },
            message: '您的名字不符合',
        },
        required: [true, '请输入名字']
    },
    math: {
        type: Number,
        validate: {
            validator: v => {
                return v && v <= 0 && v >= 100
            },
            message: '您的数学不符合'
        },
        required: [true, '请输入数学成绩']
    },
    english: {
        type: Number,
        validate: {
            validator: v => {
                return v && v <= 0 && v >= 100
            },
            message: '您传入的英语成绩不合格'
        },
        required: [true, '请输入英语成绩']
    },
    chinese: {
        type: Number,
        validate: {
            validator: v => {
                return v && v <= 0 && v >= 100
            },
            message: '您传入的语文成绩不合格'
        },
        required: [true, '请输入语文成绩']
    },

})
```

=============================增加操作=============================== 5. 在Score的集合中插入文档

> 姓名:杨文林,英语成绩：88，数学成绩：99，语文成绩：80， 姓名:贾拉拉,英语成绩：79，数学成绩：88，语文成绩：90， 姓名:姚姚,英语成绩：90，数学成绩：90，语文成绩：90， 姓名:王凯,英语成绩：98，数学成绩：90，语文成绩：99

```js
let Score = new mongoose.model('Score', ScoreSchema);
Score.create({
    name: '杨文林',
    english: 88,
    math: 99,
    chinese: 80
})
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        for (let key in err.errors) {
            console.log(err.errors[key].properties.message);
        }
    })
Score.create({
    name: '贾拉拉',
    english: 79,
    math: 88,
    chinese: 90
})
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        for (let key in err.errors) {
            console.log(err.errors[key].properties.message);
        }
    })
Score.create({
    name: '姚姚',
    english: 90,
    math: 90,
    chinese: 90
})
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        for (let key in err.errors) {
            console.log(err.errors[key].properties.message);
        }
    })
Score.create({
    name: '王凯',
    english: 98,
    math: 90,
    chinese: 99
})
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        for (let key in err.errors) {
            console.log(err.errors[key].properties.message);
        }
    })
```

1. 查询所有学生的信息

```
Student.find()
    .then((data) => {
        console.log(data);

    })
    .catch((err) => {
        console.log(err);
    })
```

1. 查询年龄大于18岁小于24岁的学生的信息

```js
Student.find({
    age: {
        $gt: 18,
        $lt: 25,
    }
})
    .then((data) => {
        console.log(`年纪大于18小于24的有${data}`);
    })
```

1. 查询年龄19岁并且喜欢计算机的男生的信息

```js
Student.find({
    age: 19,
    hobbys: {$in:['computer']}
})
    .then((data) => {
        console.log(`19岁并且喜欢计算机的男生的信息有${data}`);

    })
```

1. 查询班级中年龄最大的学生的信息

```js
Student.find().sort('age').then((data) => {
    let arr = []
    for (let key in data) {
        arr.push(data[key])
    }
    console.log(arr[arr.length - 1]);
})
```

1. 查询年龄是18岁的学生的姓名

```js
Student.find({
    age: 18
}).then((data) => {
    console.log(data[0].name);
})
```

1. 查询总人数(提示count)

```js
 Student.find().count()
  .then(data => console.log(data))
```

1. 查询显示第二页的数据，每页显示2条

```js
Student.find().skip(2).limit(2).then((data) => {
    console.log(data);
})
```

1. 查询业余爱好里面包含sing的学生的信息

```js
Student.find({
    hobbys: { $in: ['sing'] }
}).then((data) => {
    console.log(data);
})
```

1. 对数学成绩降序输出

``` js
Score.find().sort('-math').then((data) => {
    console.log(data);
})
```

1. 查询姓名是王凯的各科成绩

```js
Score.find({
    name:'王凯'
}).then((data) => {
    console.log(data);
    
})
```

===============================更新操作===============================

1. 将姓名是姚姚的学生的年龄更改为23

```js
Student.updateOne({
    name: "姚姚"
}, {
    age: 23
}).then(result => console.log(result))
```

1. 将所有学生的年龄更改为18

```js
Student.updateMany({

}, {
    age: 18
}).then(data => console.log(data)
)
```

1. 将王凯的数学成绩更新为100分

```js
Score.updateMany({
    name: '王凯'
}, {
    math: 100
}).then(data => console.log(data)
)
```

==================================删除操作============================= 

19. 删除年龄小于20的学生的信息

    ```js
    Student.deleteMany({
      age: {
        $lt: 20
      }
    })
      .then(data => console.log(data))	
    ```

    

20. 删除姓名是贾拉拉的这条数据

    ```js
    Score.findOneAndDelete({
      name: '贾拉拉'
    })
      .then(data => console.log(data))
    ```

    