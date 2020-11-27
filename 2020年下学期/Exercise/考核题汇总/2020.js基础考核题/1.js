// //  * 已有数组var nums = [5,10,15],要求创建一个新数组
// //  *  1.新数组的长度和已知数组相同
// //  *  2.新数组每个元素的值，是已知对应位置元素的2倍
// //  *  3.在控制台中打印新数组的所有元素1、

// var nums = [5, 10, 15]
// var arr = []
// for (var i = 0; i < nums.length; i++) {
//     arr.push(nums[i] * 2)
// }
// console.log(arr);

// //	输入一个年份判断是否是闰年(能被400整除 或 被4整除同时不能被100整除)
// var year = 400
// if (year % 400 == 0 || (year % 4 == 0 && year % 10 != 0)) {
//     console.log(`${year}是闰年`);
// } else {
//     console.log(`${year}不是闰年`);
// }


// var url = 'https://www.baidu.com?username=lisi&age=28&email=120122@qq.com'
// // var one = url.split('?')
// // var two = one[1].split('&')
// // var obj = {}
// // // var key, value;
// // // console.log(two);
// // for (var i = 0; i < two.length; i++) {
// //     let key = two[i].split('=')[0]
// //     var value = two[i].split('=')[1]
// //     obj[key] = value
// // }
// // console.log(obj);

// var one = url.split('?')
// var two = one[1].split('&')
// var obj = {}
// for (var i = 0; i < two.length; i++) {
//     var key = two[i].split('=')[0]
//     var value = two[i].split('=')[1]
//     obj[key] = value

// }
// console.log(obj);



// var s = 3
// var jie = 1
// var num = 0
// for (var i = 1; i <= s; i++) {
//     jie *= i
//     num += jie
// }
// console.log(num);



// var colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
// var str = '#'

// for (var i = 0; i < 6; i++) {
//     str += colors[parseInt(Math.random() * 16)]
// }
// console.log(str);


// var str = "yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa odpsospoaioaoaoaoaoao";
// var sum = str.split(' ')
// var max = 0
// var word
// console.log(sum);
// for (var i = 0; i < sum.length; i++) {
//     if (sum[i].length > max)
//         max = sum[i].length
//     word = sum[i]
// }

// console.log(max, word);








/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 *你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 *
 *示例:
 *
 *给定 nums = [2, 7, 11, 15], target = 9
 *
 *因为 nums[0] + nums[1] = 2 + 7 = 9
 *所以返回 [0, 1]
 *
 */




// var nums = [2, 7, 11, 15]
// var target = 13

// function index(nums, target) {
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = 0; j < i; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
// }

// console.log(index(nums, target));












// function index(nums, target) {
//     // 双循环
//     for (let i = 0; i < nums.length; i++) {
//         // console.log(nums[i]);
//         for (let j = 0; j < i; j++) {
//             // 循环比较
//             if (nums[i] + nums[j] == target) {
//                 return [j, i];
//             }
//         }
//     }
// }
// for (var i = 0; nums.length; i++) {
//     for (var j = 0; j < i; j++) {
//         if (nums[i] + nums[j]= target) {
//             return [i, j]
//         }
//     }
// }


// var nums = [2, 7, 11, 15]
// target = 9
// let result = index(nums, target)
// let nums = [2, 7, 11, 15],
//     target = 9;
// let result = index(nums, target);
// console.log(result);





//  字符串查找,不使用indexOf,正则，substr,substring,contain,slice等现成的方法,实现如下效果：
//  a ="34",b="1234567"，返回2
//  a = '35', b= "1234567" 返回-1
//  a = "355", b = "12354355"  返回5

// function str(a, b) {
//     // 转数组
//     let arr = a.split("");
//     let brr = b.split("");
//     // 保存索引
//     let indexB;
//     for (let i = 0; i < brr.length; i++) {
//         if (brr[i] == arr[0]) {
//             // console.log(i);
//             indexB = i; //2
//         }
//     }
//     // 保存a字符串
//     let sumA = "";
//     for (let i = 0; i < arr.length; i++) {
//         sumA += arr[i];
//     }
//     // console.log(sumA);
//     // 保存b字符串
//     let sumB = "";
//     for (let i = indexB; i < arr.length + indexB; i++) {
//         sumB += brr[i];
//     }
//     // console.log(sumB);

//     //对比字符串差异
//     if (sumA == sumB) {
//         // console.log(1);
//         // console.log(indexB);
//         return indexB;
//     } else {
//         return -1;
//     }
// }

// let result = str("23", "1234567");
// console.log(result);
function fu(a, b) {
    for (var i = 0; i < b.length; i++) {
        var str = ''
        for (var j = i; j < a.length + i; j++) {
            str += b[j]
            console.log(str);
        }
        if (str == a) {
            return i
        }

    }
    return -1
}
console.log(fu("67", "1234567"));








// 官呈达
function getIndexOf(a, b) {
    for (let i = 0; i < b.length; i++) {
        let str = "";
        for (let j = i; j < a.length + i; j++) {
            str += b[j];
            // console.log(str);

        }
        if (str == a) {
            console.log(str, a);
            return i;
        }
    }
    return -1;
}
// 测试;
var indexOf = getIndexOf("34", "1234567");
console.log(indexOf); //2
// var indexOf = getIndexOf("35", "1234567");
// console.log(indexOf); //-1
// var indexOf = getIndexOf("355", "12354355");
// console.log(indexOf); //5
// var indexOf = getIndexOf("123", "120120123");
// console.log(indexOf); //6

function fn() {
    let date = new Date()
    // 调用当前时间数值化为字符串的方法
    // return date.toLocaleString()
    return date.toLocaleString()
}

console.log(fn());



function fu() {
    var data = new Date()
    return data.toLocaleTimeString()
} console.log(fu());