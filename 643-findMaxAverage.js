/*
给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

输入：[1,12,-5,-6,50,3], k = 4
输出：12.75
解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75

我的思路：k一定的情况下，平均数最大，即序列和最大
窗口不断向右滑动，并将当前和与上一次比较，若比上一次大，则替换，否则继续移动；直到末尾，输出Max
*/

var findMaxAverage = function(nums, k) {
    let Max = 0;
    const arr = new Array();
    for(let i=0; i<k; i++){
        arr.push(nums[i])
    }
    Max = Sum(arr);
    for(let i=k; i<nums.length; i++) {
        arr.push(nums[i]);
        arr.shift();
        temp = Sum(arr);
        if(temp>Max) {
            Max = temp;
        }
    }
    return Max/k

};

function Sum(arr) {
    let sum = 0;
    arr.forEach((item) => sum += item);
    return sum;
}

const nums = [1,12,-5,-6,50,3], k = 4;
console.log(findMaxAverage(nums,k));