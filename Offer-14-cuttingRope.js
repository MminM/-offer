

// 超时
// var cuttingRope = function(n) {
//     if(n===0) return 0
//     if(n===1 || n===2) return 1
//     if(n===3) return 2
//     let max = n
//     for(let i=1; i<Math.floor(n); i++){
//         let temp = 0
//         if(n-i>3){
//             temp = i*cuttingRope(n-i);
//         }else{
//             temp = i*(n-i)
//         }
//         if(temp>max){
//             max = temp;
//         }
//     }
//     return max;
// };



var cuttingRope = function(n) {
    if(n===0) return 0
    if(n===1 || n===2) return 1
    if(n===3) return 2
    /*
    据 数学证明：
    当 n >= 3时，因数 拆分成 3 的计算结果 较大
    当 n < 3时，因数越大，计算结果越大
    */
    let max = 1;
    while(n>4){
        max = max * 3
        n -= 3;
    }
    max = max * n
    return max;
};

// 14-2 取模
var cuttingRope = function(n) {
    if(n===0) return 0
    if(n===1 || n===2) return 1
    if(n===3) return 2
    /*
    据 数学证明：
    当 n >= 3时，因数 拆分成 3 的计算结果 较大
    当 n < 3时，因数越大，计算结果越大
    */
    let max = 1;
    while(n>4){
        max = max * 3 % 1000000007
        n -= 3;
    }
    max = max * n % 1000000007
    return max;
};
console.log(cuttingRope(10))