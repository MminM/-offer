/*
480. 滑动窗口中位数  https://leetcode-cn.com/problems/sliding-window-median/

中位数是有序序列最中间的那个数。如果序列的长度是偶数，则没有最中间的数；此时中位数是最中间的两个数的平均数。

例如：

[2,3,4]，中位数是 3
[2,3]，中位数是 (2 + 3) / 2 = 2.5
给你一个数组 nums，有一个长度为 k 的窗口从最左端滑动到最右端。窗口中有 k 个数，每次窗口向右移动 1 位。你的任务是找出每次窗口移动后得到的新窗口中元素的中位数，并输出由它们组成的数组。

*/

// 如何让初始数组等于另一个数组的前k个数
// 数组的深浅拷贝
// arr.sort()返回的是什么

var medianSlidingWindow = function(nums, k) {   // 超出时间限制
    const arr = new Array();       
    const res = [];
    for(let i=0; i<k; i++) {
        arr.push(nums[i]);
    }
    deal(arr,k,res)
    for(let i=k; i<nums.length; i++) {
        arr.push(nums[i]);
        arr.shift();
        deal(arr,k,res)
    }
    return res;
};

function deal(arr,k,res){
    let copyArr=arr.slice(0);
    copyArr.sort((a,b)=>a-b);
    if(k%2==0){
        let a = copyArr[k/2];
        let b = copyArr[k/2-1];
        res.push((a+b)/2);
    }else {
        res.push(copyArr[(k-1)/2]);
    }
    return res;
}

// var medianSlidingWindow = function(nums, k) {   // 严重超出时间限制
//     const arr = new Array();       
//     const res = [];
//     let left = 0;
//     while(left<=nums.length-k){
//         for(let i=left; i<left+k; i++) {
//             arr.push(nums[i]);
//         }
//         arr.sort((a,b)=>a-b);
//         if(k%2==0){
//             let a = arr[k/2];
//             let b = arr[k/2-1];
//             res.push((a+b)/2);
//         }else {
//             res.push(arr[(k-1)/2]);
//         }
//     }
//     return res;
// };

const nums = [1,3,-1,-3,5,3,6,7];
let k = 3;
console.log(medianSlidingWindow(nums,k))