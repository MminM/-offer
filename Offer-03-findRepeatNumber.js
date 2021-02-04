/*
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
*/

var findRepeatNumber = function(nums) {
    const map = {};
     for (const num of nums) {
         if (!map[num]) {
             map[num] = true;
         } else {
             return num;
         }
     } 
 };

var findRepeatNumber = function(nums) {
    const res = [];
    for(let i=0; i<nums.length; i++){
        if(res.indexOf(nums[i])===-1){  // 运行时间的增长原因是在此么？
            res.push(nums[i])
        }else {
            return nums[i]
        }
    }
 };

 const nums = [2, 3, 1, 0, 2, 5, 3];

 console.log(findRepeatNumber(nums))