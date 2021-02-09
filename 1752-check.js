/**
 第227场周赛第一题：检查数组是否经排序和轮转得到的

 当时没有思路，看不懂题是什么意思，如何轮转，轮转位置个数如何计算，怎样才是一次正确的轮转，所以没有做出来

 今日看了题解，发现对于这类问题，可以简单的按照题意要求去做，它让满足什么样的条件，你就满足这样的条件，最后根据条件判断即可
 */

 var check = function(nums) {
     let origin = JSON.parse(JSON.stringify(nums));
     origin.sort((a,b) => a-b);
     const len = nums.length;
    
     for(let i=0; i<len; i++){
        let flag = true;
         for(let j=0; j<len; j++) {
            if(origin[j] != nums[(j+i) % len]){
                flag = false
                break;
            }
         }
        if(flag) return true;
     }
     return false;
 }

const nums = [3,4,5,1,2];
console.log(check(nums))