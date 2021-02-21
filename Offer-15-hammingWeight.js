
// var hammingWeight = function(n) {
//     let arr = divideBy2(n).split("");
//     let res = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===1){
//             res += 1;
//         }
//     }
//     return res;
// };
//正整数转化为二进制
// var divideBy2 = function(decNumber) {
//     var decStack = [];
//     var rem;
//     var decString = '';

//     while (decNumber > 0) {
//         rem = decNumber % 2;
//         decStack.push(rem);
//         decNumber = Math.floor(decNumber / 2);
//     }

//     while (decStack.length != 0) {
//         decString += decStack.pop().toString();
//     }
//     return decString;
// }
// console.log(divideBy2(1))

// // 法一： 使用(n-1)&n 从右向左数，找到第一个1，把1后面的所有的数字都变为0 （包括1本身）
var hammingWeight = function(n) {
    let count = 0
    while(n!==0){
        n = ((n-1)&n)
        count++
    }
    return count
};
console.log(hammingWeight(00000000000000000000000000001011))
// // 法二：挪动n本身
// var hammingWeight = function(n) {
//     let count = 0
//     for(let i = 0;i<32;i++){
//         if((n>>i)&1){
//             count++
//         }
//     }
//     return count
// };
// // 法三：挪动1的位置
// var hammingWeight = function(n) {
// let count = 0;
// for (let i = 0; i < 32; i++) {
// 	if ((n & (1 << i)) === (1 << i)) {
// 		count++;
// 	}
// return count 
//  }
// };
