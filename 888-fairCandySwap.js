/*
888.公平的糖果棒交换  https://leetcode-cn.com/problems/fair-candy-swap/

爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 根糖果棒的大小，B[j] 是鲍勃拥有的第 j 根糖果棒的大小。
因为他们是朋友，所以他们想交换一根糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）
返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。
如果有多个答案，你可以返回其中任何一个。保证答案存在。

输入：A = [1,2,5], B = [2,4]
输出：[5,4]

*/

// 2021-2-1
// var fairCandySwap = function(A, B) {
//     let SumA = sum(A);
//     let SumB = sum(B);
//     let result = [];
//     for(let i=0; i<A.length; i++){
//         for(let j=0; j<B.length; j++){
//             if(SumA-A[i]+B[j]===SumB+A[i]-B[j]){
//                 result.push(A[i],B[j])
//                 return result;
//             }
//         }
//     }
//     return result;
// };
// function sum(arr) {
//     return arr.reduce(function(prev, curr, idx, arr){
//         return prev + curr;
//     });
// }
// console.log(fairCandySwap([1,2,5],[2,4]))

// 2021-2-4
// 经官方点拨，写出来的，有所提升
var fairCandySwap = function(A, B) {
    let SumA = sum(A);
    let SumB = sum(B);
    let result = [];
    let temp = 0;
    let delta = ((SumA-SumB)/2)
    for(let i=0; i<B.length; i++){
        temp = B[i] + delta
        if(A.indexOf(temp)!==-1){
            result = [temp ,B[i]]
            break;
        }
    }
    return result;
};
function sum(arr) {
    return arr.reduce((prev, curr, idx, arr) =>(prev + curr));
}
console.log(fairCandySwap([1,2,5],[2,4]))

// 官方题解
var fairCandySwap = function(A, B) {
    const sumA = _.sum(A), sumB = _.sum(B);
    const delta = Math.floor((sumA - sumB) / 2);
    const rec = new Set(A);
    var ans;
    for (const y of B) {
        const x = y + delta;
        if (rec.has(x)) {
            ans = [x, y];
            break;
        }
    }
    return ans;
};

