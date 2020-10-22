// 请编程实现数组最大的与第一个元素交换，最小的与最后一个元素交换，然后打印数组内容, 
//var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]
var array = [10,1,3,50,5];
		function max(array){
        	var num = array[0];
        	for(var i=0;i<array.length;i++){
            	if(num < array[i]){
                	num = array[i]
            	}
        	}
        	return num;
    	}
		console.log(max(array));
		function min(array){
        	var num = array[0];
        	for(var j=0;j<array.length;j++){
            	if(num > array[j]){
                	num = array[j]
            	}
        	}
        	return num;
    	}
		console.log(min(array));