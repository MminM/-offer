// 如何让初始数组等于另一个数组的前k个数
// 数组的深浅拷贝
// arr.sort()返回的是什么

// var medianSlidingWindow = function(nums, k) {   // 超出时间限制
//     const arr = new Array();       
//     const res = [];
//     for(let i=0; i<k; i++) {
//         arr.push(nums[i]);
//     }
//     copyArr=arr.slice(0);
//     copyArr.sort((a,b)=>a-b);
//     if(k%2==0){
//         let a = copyArr[k/2];
//         let b = copyArr[k/2-1];
//         res.push((a+b)/2);
//     }else {
//         res.push(copyArr[(k-1)/2]);
//     }
//     for(let i=k; i<nums.length; i++) {
//         arr.push(nums[i]);
//         arr.shift();
//         copyArr=arr.slice(0);
//         copyArr.sort((a,b)=>a-b);
//         if(k%2==0){
//             let a = copyArr[k/2];
//             let b = copyArr[k/2-1];
//             res.push((a+b)/2);
//         }else {
//             res.push(copyArr[(k-1)/2]);
//         }
//     }
//     return res;
// };

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