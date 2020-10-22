// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
//  示例:
//  给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]



 
//  //先定义一个函数，和一个目标值 
//   var nums = [2, 7, 11, 15] 
//   var target = 9 
// //  // 准备一个空数组 
//   var arr = [] 
// //  // for循环依次遍历所有元素,直到倒数第二位 
//   for (var i = 0; i < nums.length - 1; i++) { 
// //  // 再循环出数组剩下的元素 
//   for (var j = i + 1; j < nums.length; j++) { 
// //  // 判断两两相加的和是否等于目标值 
//  if (nums[i] + nums[j] == target) { 
//  // 将索引加入新数组中 
//  arr.push(i) 
//  arr.push(j) 
//  } 
//  } 
//  } 
//  // 输出数组 
//  console.log(arr); 



var nums = [2, 7, 11, 15],  target = 9 ,arr = [] 
for(var i=0;i<nums.length-1;i++){
    for(var j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]==target){
            arr.push(i)
            arr.push(j)
        }
    }
}console.log(arr);



