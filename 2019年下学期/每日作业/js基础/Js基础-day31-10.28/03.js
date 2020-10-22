// 3、宠物编号 宠物名称    售价   产地

// p01      拉布拉多    2399   美国

// p02      京巴        1999   中国

// p03      金刚鹦鹉    6999   非洲

// p04      蓝孔雀      1599   非洲

// p05      田园犬      109    中国

// p06      德牧        3000   德国

 

// 创建一个宠物对象，

// 包含四个属性，分别是 宠物编号pid 宠物名称pname  售价price  

// 产地addr，值为上面的数据。

// 创建一个数组中，将对象添加到数组中。

// 1.创建函数 获取价格最低的宠物对象   function getMinPricePet(arr) // arr是宠物数组

// 2.创建函数 获取指定产地的宠物的平均价格 function getChinaAvgPrice(arr,addr) // arr是宠物数组 addr为产地名称


//步骤:
    //创建自定义构造函数 
    function getPet(pid,pname,price,addr){
        this.pid = pid;
        this.pname = pname;
        this.price = price;
        this.addr = addr;
    }

    //创建对象
    var Pet01 = new getPet("p01","拉布拉多",2399,"美国");
    var Pet02 = new getPet("p02","京巴",1999,"中国");
    var Pet03 = new getPet("p03","金刚鹦鹉",6999,"非洲");
    var Pet04 = new getPet("p04","蓝孔雀",1599,"非洲");
    var Pet05 = new getPet("P05","田园犬",109,"中国");
    var Pet06 = new getPet("p06","德牧",3000,"德国");

    
    //创建数组
    var arr = [Pet01,Pet02,Pet03,Pet04,Pet05,Pet06];



    //1.创建函数 获取价格最低的宠物对象   function getMinPricePet(arr)
    function getMinPricePet(arr){

        //定义变量  保存价格最低的宠物对象
        var pet = new Object();

        //定义变量  保存最小值
        var min = arr[0].price;

        //遍历数组arr 获取最小值
        for(let i = 0 ; i < arr.length ; i++){

            min = min < arr[i].price ? min : arr[i].price;
            
        }

        //遍历数组arr  判断最小值的对象
        for(let i = 0 ; i < arr.length ; i++){
            //判断如果 数组中对象的价格等于最小值
            if(arr[i].price == min){
                //将这个对象  赋值给 pet对象
                pet = arr[i];
            }
        }

        //返回宠物对象
        return pet;
    }


    //调用函数
   var pet = getMinPricePet(arr);

   console.log(pet);




   //2.创建函数 获取指定产地的宠物的平均价格 function getChinaAvgPrice(arr,addr)
   function getChinaAvgPrice(arr,addr){

        //定义计数器 保存有多少个宠物来自一个产地
        let count = 0;

        //定义和 sum  保存一共的价格
        let sum = 0;

        //遍历数组对象
        for(let i = 0 ; i < arr.length ; i++){
            
            //如果数组对象的产地 与 传递过来的 产地相同
            if(arr[i].addr === addr){
                //将售价保存给 sum
                sum += arr[i].price;
                //计数器自增
                count++;
            }
        }
        
        //计算平均值
        let avg = sum / count;

        //返回平均值
        return avg;
   }

   //调用方法
   var avg = getChinaAvgPrice(arr,"德国");
   
   //打印平均值
   console.log("指定产地的宠物平均价格为: "+avg);
   