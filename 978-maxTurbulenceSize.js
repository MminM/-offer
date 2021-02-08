/*
978. 最长湍流子数组  https://leetcode-cn.com/problems/longest-turbulent-subarray/

当 A 的子数组 A[i], A[i+1], ..., A[j] 满足下列条件时，我们称其为湍流子数组：

若 i <= k < j，当 k 为奇数时， A[k] > A[k+1]，且当 k 为偶数时，A[k] < A[k+1]；
或 若 i <= k < j，当 k 为偶数时，A[k] > A[k+1] ，且当 k 为奇数时， A[k] < A[k+1]。
也就是说，如果比较符号在子数组中的每个相邻元素对之间翻转，则该子数组是湍流子数组。

返回 A 的最大湍流子数组的长度。

输入：[9,4,2,10,7,8,8,1,9]
输出：5
解释：(A[1] > A[2] < A[3] > A[4] < A[5])

输入：[4,8,12,16]
输出：2

输入：[100]
输出：1
*/

// 2021-2-8  没得思路，一会再来看！！又是一个题目都看不懂的
var maxTurbulenceSize = function(arr) {
    let len = arr.length;
    let res = 1;
    let left =0, right = 0;
    while(right < len-1) {
        if(left === right) {
            if(arr[left] === arr[left + 1]){
                left++;
            }
            right++;
        }else {
            if(arr[right-1]<arr[right] && arr[right]>arr[right+1]){
                right++;
            }else if(arr[right-1]>arr[right] && arr[right]<arr[right+1]){
                right++;
            }else {
                left = right;
            }
        }
        res = Math.max(res,right-left+1);
    }
    return res;
};

console.log(maxTurbulenceSize([9,4,2,10,7,8,8,1,9]))