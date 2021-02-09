// var subarraysWithKDistinct = function(A, K) {
//     let res = 0;
//     let len = A.length;
//     for(let i=0;i<len; i++){
//         let count = 0;
//         let arr = [];
//         for(let j=i; j<len; j++){ 
//             if(arr.indexOf(A[j])!== -1){
//                 if(count === K){
//                     res++;
//                     arr.push(A[j]);
//                 }
//                 arr.push(A[j]);
//             }else{
//                 if(count<K){
//                     arr.push(A[j]);
//                     count++;
//                 }
//                 // break;
//             }
            
//         }
//         if(arr.length>0) {
//             res++;
//         }
//     }
//     return res;
// };

var subarraysWithKDistinct = function(A, K) {
    const n = A.length;
    const num1 = new Array(n + 1).fill(0);
    const num2 = new Array(n + 1).fill(0);
    let tot1 = 0, tot2 = 0;
    let left1 = 0, left2 = 0, right = 0;
    let ret = 0;
    while (right < n) {
        if (num1[A[right]] == 0) {
            tot1++;
        }
        num1[A[right]]++;
        if (num2[A[right]] == 0) {
            tot2++;
        }
        num2[A[right]]++;
        while (tot1 > K) {
            num1[A[left1]]--;
            if (num1[A[left1]] == 0) {
                tot1--;
            }
            left1++;
        }
        while (tot2 > K - 1) {
            num2[A[left2]]--;
            if (num2[A[left2]] == 0) {
                tot2--;
            }
            left2++;
        }
        ret += left2 - left1;
        right++;
    }
    return ret;
};


let A = [2,1,1,1,2], K = 1;
console.log(subarraysWithKDistinct(A,K))


// while循环要记得结束；for循环判断放里面；已达成count和累加后 不可直接再最后算一次,break的放置
