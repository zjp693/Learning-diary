> 讲师：杨文林     助教：贾拉拉      学生：张建平               

## 课程概述

### 课程特点

  1.详细的学习数据库
  2.单词就比较多
  3.大量的练习
  4.设计数据库

### 为什么要学习MySQL

  1.因为99%的网站都需要数据库的支持(44%的网站都是MySQL数据库(市场占有率第一))
  2.MySQL免费
  3.SQL语句-->大部分数据库都支持SQL语句 

### 课程安排

  1.课程安排5-8天

### 学习方法

  1.大量的练习
  2.多看文档
  3.多背单词

## 数据库概述

### 数据库的概念

数据库(Database)是按照数据结构来组织、存储和管理数据的建立在计算机存储设备上的仓库。
数据库：存储数据的仓库

### 数据库分类

#### 网络数据库

网络数据库是指把数据库技术引入到计算机网络系统中，借助于网络技术将存储于数据库中的大量信息及时发布出去；而计算机网络借助于成熟的数据库技术对网络中的各种数据进行有效管理，并实现用户与网络中的数据库进行实时动态数据交互。

#### 层级数据库(DOM树，json、xml、mongodb(bson))

层次结构模型实质上是一种有根结点的定向有序树(在数学中"树"被定义为一个无回的连通图)。

#### 关系数据库

关系数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。
数据库的另外一种区分方式：基于存储介质

存储介质分为两种：磁盘和内存

关系型数据库：存储在磁盘中
非关系型数据库：存储在内存中

### 关系型数据库

关系模型的组成: 关系模型由关系数据结构、关系操作集合、关系完整性约束三部分组成。

`关系数据结构(表格结构)`：指的数据以什么方式来存储，是一种二维表的形式存储,关系型数据库是以表格(excel)的形式来存储数据的 --> 二进制

`关系操作集合(SQL语句)`：如何来关联和管理对应的存储数据，SQL指令

`关系完整性约束(数据之间的关系)`：数据内部有对应的关联关系，以及数据与数据之间也有对应的关联关系 

  表内约束：对应的具体列只能放对应的数据（不能乱放）
  表间约束：自然界各实体都是有着对应的关联关系（外键）

teacher: class(班级)
class:  学生
student:学生信息

### 典型关系型数据库

小型关系型数据库：Microsoft Access，SQLite(缓存数据量特别小的地方)
中型关系型数据库：SQL Server(收费 微软的 c# visual studio)，Mysql(Oracle(甲骨文) 肯定有免费版本、收费版本) 主要用在中小型企业(95%)
大型关系型数据库：Oracle(甲骨文)，DB2(IBM) 主要用在 银行等大型企业(5%)

### 数据库的作用

* 可以持久化数据到本地
* 结构化查询

### 数据库的常见概念

* DB: 数据库，存储数据的容器
* DBMS: 数据库管理系统，又称为数据库软件或数据库产品，用于创建或管理DB
* SQL: 结构化查询语言，用于和数据库同学的语言，不是某个数据库软件特有的，而是几乎所有的主流数据库软件通用的语言

### 数据库存储数据的特点

* 数据存放到表中，然后表再存放到库中
* 一个库中可以有多张表，每张表具有唯一的表名用来标识自己
* 表中有一个或多个列，列又称为“字段”，相当于java中的“属性”
* 表中的每一行数据，相当于java中的“对象”

### 常见的数据库管理系统

mysql、oracle、db2、sqlserver

### SQL介绍

#### SQL基本介绍

结构化查询语言(Structured Query Language)简称SQL，是一种特殊目的的`编程`语言，是一种数据库查询和程序设计语言，用于存取数据以及查询、更新和管理关系数据库系统；同时也是数据库脚本文件的扩展名。
SQL就是专门为关系型数据库而设计出来的。

#### SQL语句分类

数据查询语言（DQL:Data Query Language）：专门用于查询数据：代表指令为select/show

数据操作语言（DML：Data Manipulation Language）:专门用于写数据：代表指令为insert，update和delete

事务处理语言（TP/cL）：专门用于事务安全处理：transaction

数据控制语言（DCL）：专门用于权限管理：代表指令为grant和revoke

数据定义语言（DDL）：专门用于结构管理：代表指令create和drop（alter）

#### MySQL介绍

MySQL是一个关系型数据库管理系统，由瑞典MySQL AB 公司开发，目前属于 Oracle 旗下产品。MySQL 是最流行的关系型数据库管理系统之一，在 WEB 应用方面，MySQL是最好的 RDBMS (Relational Database Management System，关系数据库管理系统) 应用软件。

## 数据库的基本操作(重点)

### 控制mysql服务的启动和停止

启动和停止: 我的电脑-->鼠标右键选中管理--服务-->mysql 
启动: net start mysql  
停止: net stop mysql
查看版本: mysql --version

### 命令行方式登录mysql系统

语法: mysql    -h主机地址   -P端口   -u用户名   -p密码

### 命令行方式退出mysql系统

语法: exit;
语法: quit或着\q;
按键: ctrl+c



## 数据库一级的操作（重点）

#### 查看mysql中的数据库

命令: show databases;

#### 在mysql中创建数据库

命令: create database 数据库名字 charset 字符集名称;

#### 在mysql中删除数据库

命令: drop database 数据库名字;

#### 选择即将要操作的数据库

命令: use 数据库名称

#### 修改数据库

方法1: 删除之后 重新创建
方法2:修改字符集: alter database 数据库名字 charset = 字符集;



## 数据表一级的操作

#### 显示要操作的数据库的所有表

命令: show tables;

#### 显示表的结构

命令: desc 表的名字

## MySQL中关于表的操作

### 创建表

```sql
/*
 # 表的创建
   语法: create table 表名 (
    字段名 字段类型 [约束],
    ...
    字段名 字段类型 [约束],
    字段名 字段类型 [约束]
   );
 # 表的创建的需求: 创建一个学生信息表(姓名,年龄，性别)
*/

CREATE TABLE test.t_stuinfo (
id INT ,# int代表的是整数
stuname VARCHAR(20), -- varchar 相当于js中的字符串，20代表字符串的长度
birthday DATETIME , --  日期时间
gender CHAR -- 字符就是一个字符(a b c '中' '男' '女') 字符串 大于等于2个字符的叫字符串
);
```

## 条件查询

#### 用途

1.一般用在搜索
2.选择一类数据

#### 语法

```sql
 select 查询列表 from 表名 where 筛选条件
```

#### 分类

1.按条件表达式查询(条件运算符: > < >= <= !=(不等于, <>) =(等于,在mysql中 安全等于 <=> ) )

#### 案例

```sql
# 案例(按条件表达式查询):
-- 1.找出王者荣耀中 hp_max 大于8000的英雄信息
SELECT * FROM heros WHERE hp_max > 8000;

-- 2.找出王者荣耀中 mp_growth 不为0的英雄信息、
SELECT * FROM heros WHERE mp_growth != 0;
SELECT * FROM heros WHERE mp_growth <> 0;

-- 3.找出mp_5s_growth为1.5的英雄名字和职业(role_main);
SELECT `name`,role_main,mp_5s_growth FROM heros WHERE mp_5s_growth =1.5;
```

2.按逻辑表达式查询(逻辑运算符: not(!) and(&&) or(||))

#### 案例

```sql
# 案例(按逻辑表达式查询):
-- 找出hp_max最大血量在8000-10000之间的英雄信息(名字 职业 最大血量)
SELECT `name`,role_main,hp_max FROM heros WHERE hp_max >8000 && hp_max <10000;
SELECT `name`,role_main,hp_max FROM heros WHERE hp_max >8000 AND hp_max <10000;
SELECT `name`,role_main,hp_max FROM heros WHERE hp_max BETWEEN 8000 AND 10000 ;

-- 找出hp_max最大血量不在8000-10000之间的或者是射手的英雄信息
SELECT `name`,role_main,hp_max FROM heros WHERE !(hp_max >8000 && hp_max <10000) OR role_main = '射手';

-- 找出最大血量 低于6000的 射手的英雄信息
SELECT `name`,`hp_max`,`role_main`FROM heros WHERE hp_max < 6000 AND `role_main` = '射手';
-- 找出最大血量低于6000 且defense_start < 90的英雄信息
SELECT `name`,`hp_max`,`role_main`FROM heros WHERE hp_max < 6000 AND defense_start < 90;
```

 3.模糊查询(like、between and、in、is null)

### 排序查询

#### 用途

经过排序 显示数据(按照价格排序 按照销量排序 按时间排序)

#### 语法:

select  查询列表 from 表 [where 筛选条件] order by 排序列表 [asc || desc]

asc: 升序(从小往大) 如果不写 代表升序
desc: 降序(从大往小)
排序列表 可以是一个字段 也可以是 多个

#### 函数

### 字符函数

#### 字符函数(length()、concat()、substr()、instr()、trim()、upper()、lower()、 lpad()、rpad()、replace())

#### 案例:

```sql
-- 1.打印'太乙真人'的字符串长度(length());
SELECT LENGTH('太乙真人') AS output; # 12 在mysql中一个中文字符代表三个
SELECT LENGTH('a') AS output; # 12 在mysql中一个英文字符代表一个

-- 2.打印英雄的 attack_range和英雄姓名(concat())
SELECT CONCAT(attack_range,`name`) FROM heros; 

-- 3.获取‘不知火舞’的后两个字 打印 火舞(SUBSTR(字符串,从哪个地方开始取))
-- 在mysql中 下标(索引)从1开始 不是从0开始
SELECT SUBSTR('不知火舞',3);

-- 4.去除字符串两边的空格(trim())
SELECT LENGTH(TRIM('     于文文      '));
SELECT TRIM('b' FROM 'bbbbbbb于文文bbbbbb');

-- 5.小写变大写(upper()) 大写变小写(lower())
SELECT UPPER('hello') AS '大写';
SELECT LOWER('HELLO') AS '小写';

-- 6.instr()返回某一个字符串的子串的索引 如果没有 返回0
SELECT INSTR('杨过爱上了小龙女','小龙女');

-- 7.lpad(原始字符串,填充完总共需要多少位,填充字符)左填充、rpad()右填充
SELECT LPAD('于文文',5, '*');
SELECT RPAD('于文文',5, '*');

-- 8.替换replace(原始字符串，要被替换掉的，要替换成什么)
SELECT REPLACE('我最喜欢的明星是宋轶','宋轶','于文文')AS 'star';
```

### 数学函数

```sql
-- 1.round(数字,小数点后保留几位) 四舍五入
SELECT ROUND(1.64);
SELECT ROUND(1.65);
SELECT ROUND(-1.45);
SELECT ROUND(1.456, 2);

-- 2.ceil(数字)向上取整(往大取)
SELECT CEIL(-1.01);
SELECT CEIL(1.0000);

-- 3.floor(数字) 向下取整(往小取)
SELECT FLOOR(-8.2);

-- 4.truncate(数字,保留小数点后几位)截断
SELECT TRUNCATE(1.6445,1);

-- 5.mod()取余
SELECT MOD(10,3);
```

### 日期函数

#### 日期函数(now() curdate() curtime() year() month())

```sql
-- 1.返回msyql所在的电脑的当前日期+时间
SELECT NOW();
-- 2.返回当前系统的日期
SELECT CURDATE();

-- 3.返回当前系统的时间
SELECT CURTIME();
-- 4.返回指定的年或月
SELECT YEAR(NOW()) AS '年';
SELECT MONTH(NOW()) AS '月份';

-- 5.返回xxxx年xx月xx日
SELECT DATE_FORMAT(NOW(), '%Y年%m月%d日');
```

### 流程控制函数

```sql
# 流程控制函数(if)
-- 语法: IF(条件表达式,表达式为true执行这里,表达式为false执行这里)
SELECT IF(9>5,'是','否')AS '三元运算';
```

### 聚合函数

```sql
# 聚合函数(分组函数)

-- 功能: 主要是做统计，又称为分组函数或者是统计函数
-- 内容: sum()求和函数 avg()求平均值函数 max()最大值 min()最小值 count()计数
-- 特点: 1.sum() avg()用于处理数值 max() min() count()用于处理任何数据
--       2.聚合函数都是忽略null值
--       3.可以distinct配合使用去重
--       4.group by

# 案例:
-- 1.求王者荣耀中所有英雄的血量的和(sum())
SELECT SUM(hp_max)AS '最高总血量' FROM heros;
-- 2.求王者荣耀中所有英雄的血量的平均数(avg())
SELECT AVG(hp_max)AS '最高平均血量' FROM heros;

-- 3.查看王者荣耀中最高和最低血量是多少
SELECT MAX(hp_max) '最高血量', MIN(hp_max) '最低血量' FROM heros;
-- 4.查看王者荣耀中 大于平均血量的英雄信息(Invalid use of group function 非法的 请使用分组函数)
SELECT COUNT(*) FROM heros WHERE hp_max >  AVG(hp_max);# 错误的

-- 5.查看王者荣耀中 射手的数量
SELECT `name` FROM heros WHERE role_main ='射手';
```

### 分组排序

#### 分组查询(很重要)

#### 语法:

```sql
-- select 聚合函数，列(要求必须出现在group by后面)
-- from 表
-- [where 筛选条件]
-- group by 分组列表
-- [order by 排序列表 升降序]

# 注意: 查询列表必须特殊，要求是分组函数和group by函数出现的字段
# 特点:
-- 1.分组查询中的筛选条件分为两类(筛选的情况不同)
-- 1.1 分组前筛选: 原始表 group by 子句前面 where
-- 1.2 分组后筛选：分组后的结果集 group by子句后面 having
-- 2.group by子句支持单个字段分组 多个字段也可以分组
-- 3.需要排序的话就放在group by 后面进行排序就可以了

# 案例:
-- select 聚合函数，列(要求必须出现在group by后面)  from 表  group by 分组列表
-- 1.查询近战远战attack_range中开始攻击力(attack_start)最高的
SELECT MAX(attack_start),attack_range FROM heros GROUP BY attack_range;
-- 2.查询role_assist(职业)中的英雄数量
--  COUNT(*) 查询行数
SELECT COUNT(*),role_main FROM heros GROUP BY role_main;
-- select * from heros where role_main='辅助';

-- 3.查询名字(name)为两个字的英雄的平均血量(hp_max)
-- Unknown column 'name' in 'having clause'having里面找不到name字段-
-- having是动态的(虚表) where是静态的(实表) 涉及到别名
SELECT AVG(hp_max),LENGTH(`name`) AS cc FROM heros GROUP BY LENGTH(`name`)HAVING cc=6;

-- 4.查询有生日的英雄的最高攻击力(attack_max) 按照职业进行分组(找的是每组的第一个)
SELECT MAX(attack_max) ,role_main,birthdate FROM heros WHERE NOT(birthdate IS NULL)GROUP BY role_main;

-- 5.查询哪种职业的英雄数量大于10
SELECT COUNT(*)AS `数量`,role_main FROM heros GROUP BY role_main HAVING 数量 >6 ;
-- 6.查看王者荣耀中 大于平均血量的英雄数量
```

### 分页查询(做分页的)

#### 功能: 又称为统计函数 聚合函数，主要作用就是统计 分组

#### 内容: max(字段) min(字段) count(字段|*)计数  sum()求和函数 avg()平均函数

#### 特点:

```
-- 	1.sum() 和avg()只能用于处理数值类型的数据
-- 	2.max() min() count()能处理任何数据
-- 	3.以上函数都是可以忽略null值的
-- 	4.以上函数还可以和distinct结合使用
```

#### 案例:

```sql
-- 1.查询企业中所有职员的薪资总和
SELECT SUM(salary) FROM employees;
-- 2.查询企业中国所有员工的薪资总和和平均薪资
SELECT COUNT(employee_id),SUM(salary),AVG(salary) FROM employees;

-- 3.查询企业中所有员工的最高和最低工资
SELECT MAX(salary),MIN(salary) FROM employees;
-- 4.统计一下企业中领取薪水的人数,薪资分布情况
SELECT COUNT(salary),COUNT(DISTINCT salary) FROM employees;

-- 5.统计员工的平均薪资 员工的id(员工的id和聚合函数在一起使用的并没有什么意义)
SELECT AVG(salary),employee_id FROM employees;
```

### 分组查询

#### 语法:

```sql
-- select (查询列表) from (表) where (筛选条件) group by (分组列表(可以是多个字段)) having (筛选条件) order by (排序字段) asc||desc
-- 注意: select后面是啥 那么表(虚表、实表)中就显示啥
```

#### 执行顺序

```sql
-- 1. from子句(看看有没有此表)
-- 2. where子句(看看表里面有没有符合条件的数据 找出来)-- 这里的字段都是实表中的字段  
-- 3. group by(把这些符合条件的数据根据分组字段进行分组)
-- 4. having(把分完组的数据进行进一步筛选) -- 这里的字段都是虚表里面的字段
-- 5. select(显示出来)
-- 6. order by(显示出来的时候 有序输出就可以了)
```

#### 特点:

```sql
-- 1.select后面的查询列表,如果group by中出现的字段必须在select后面的查询列表中出现
-- 2.能用where的绝不用having查询(where的效率要比having要高)
-- 3.分组的种类
-- 3.1 分组前筛选(实表筛选) where
-- 3.2 分组后筛选(虚表筛选) having
-- 4.分组字段可以是一个 也可以是多个
-- 5.分组筛选完还可以排序
```

#### 案例(只要出现每个(分别)都要分组 根据什么字段分组看`每个`后的字段):

```sql
-- 1.查询每个职位的最高工资
-- `每个`这样的字后面 比如: 职位就是分组条件 `的`这个字的后面就是select的字段
SELECT MAX(salary),job_id FROM employees GROUP BY job_id;
-- 2.查询每个地区的部门个数
-- 分组条件: location_id  select后面:count(department_id) 
SELECT COUNT(department_id),location_id FROM departments GROUP BY location_id;

-- 3.查询邮箱中包含o字符的，每个部门的平均工资
SELECT AVG(salary),department_id FROM employees WHERE email LIKE '%o%'  GROUP BY department_id;
-- 4.查询有奖金的每个领导手下的员工的最高工资
SELECT MAX(salary),manager_id FROM employees WHERE NOT(commission_pct IS NULL) GROUP BY manager_id;
SELECT MAX(salary),manager_id FROM employees WHERE commission_pct IS NOT NULL GROUP BY manager_id;

-- 5.查询每个部门的员工人数找出员工人数大于2的部门，
SELECT COUNT(*), department_id FROM employees GROUP BY department_id HAVING COUNT(*) >2;
-- 6.查询领导编号>102的每个领导属下的最低工资>5000的领导编号
-- 6.0 查询每个领导属下的最低工资
SELECT MIN(salary),manager_id FROM employees GROUP BY manager_id;
-- 6.1 查询每个领导编号>102的属下的最低工资
SELECT MIN(salary),manager_id FROM employees WHERE manager_id > 102 GROUP BY manager_id;

-- 6.2 查询每个领导编号>102的属下的最低工资>5000
SELECT MIN(salary),manager_id FROM employees WHERE manager_id > 102 GROUP BY manager_id HAVING MIN(salary) > 5000;
SELECT MIN(salary),manager_id FROM employees  GROUP BY manager_id HAVING manager_id > 102 AND MIN(salary) > 5000;

-- 7.按员工姓名的长度进行分组，查询每一组的员工个数，筛选员工个数大于5的】
SELECT COUNT(*),LENGTH(last_name) FROM employees  GROUP BY LENGTH(last_name)HAVING COUNT(*) > 5;

-- 8.查询每个部门每个职位的平均工资
SELECT AVG(salary),department_id,job_id FROM employees GROUP BY department_id,job_id;

-- 9.查询每个部门每种职位的员工的平均信息，并将大于8000的薪资按照顺序排列
SELECT AVG(salary) 平均薪资,department_id,job_id FROM employees GROUP BY department_id,job_id HAVING 平均薪资 >8000 ORDER BY 平均薪资 DESC;
```

### 分页查询

#### 含义: 如果数据量特别大，当要显示的数据一页显示不全的时候，就需要分页

#### 语法:

```sql
-- select (查询列表) from (表) where (筛选条件) group by (分组列表(可以是多个字段)) having (筛选条件) order by (排序字段) asc||desc limit (offset(从哪里开始),size(拿多少条));
```

#### 特点:

```sql
-- 1.limit子句要放在所有子句的后面
-- 2.公式: limit (page-1)*size,size
```

#### 案例:

```sql
-- 1.查询前20条员工信息
SELECT * FROM employees LIMIT 0,20;
-- 2.查询第11条--第25条
SELECT * FROM employees LIMIT 10,15;
-- 3.查询有奖金的员工信息，并且显示工资较高的前十名
SELECT * FROM employees WHERE commission_pct IS NOT NULL  ORDER BY salary DESC LIMIT 0,10;
```

# Navicat快捷键：

| 快捷键        | 功能                                                         |
| ------------- | ------------------------------------------------------------ |
| ctrl+F        | 搜索本页数据                                                 |
| Ctrl+Q        | 打开查询窗口                                                 |
| Ctrl+/        | 注释sql语句                                                  |
| Ctrl+Shift +/ | 解除注释                                                     |
| Ctrl+R        | 运行查询窗口的sql语句                                        |
| Ctrl+Shift+R  | 只运行选中的sql语句                                          |
| F6            | 打开一个mysql命令行窗口                                      |
| Ctrl+L        | 删除一行                                                     |
| Ctrl+N        | 打开一个新的查询窗口                                         |
| Ctrl+W        | 关闭一个查询窗口                                             |
| Ctrl+D        | 表的数据显示显示页面切换到表的结构设计页面，但是在查询页面写sql时是复制当前行 |


​	
​	

​	