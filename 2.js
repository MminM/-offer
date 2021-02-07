// var minAbsDifference = function(nums, goal) {
//     if(goal<0){
//         if(nums.forEach(item => item>0)){
//             return Math.abs(goal)
//         }else{
//                 let sum = nums[0];
//     for(let i=1;i<nums.length; i++){
//         let temp = sum + nums[i]
//         if(sum>temp) sum += nums[i]
//     }
//     return Math.abs(sum - goal);
//         }

// }else {
//         let sum = 0;
//     let min = Math.abs(sum - goal);
//     for(let i=0;i<nums.length; i++){
//         let temp = 0;
//         sum += nums[i];
//         temp = Math.abs(sum - goal);
//         if(temp < min) {
//             min = temp;
//         }
//     }
//     return min
// }
// };


var minAbsDifference = function(nums, goal) {
    if(goal<0){
        if(nums.every(item => item>0)){
            return Math.abs(goal)
        }else{
                let sum = nums[0];

    let min = Math.abs(sum - goal);
    for(let i=1;i<nums.length; i++){
        let temp = sum + nums[i]
        if(sum>temp) sum += nums[i]
    }
    return Math.abs(sum - goal);
        }

}else {
        let sum = nums[0];
    let min = Math.abs(sum - goal);
    for(let i=1;i<nums.length; i++){
        let temp = sum + nums[i];
        if(temp<0 || sum < temp) sum += nums[i]; 
        

    }
    return Math.abs(sum - goal);
}
};
// console.log(minAbsDifference([1,2,3],-7))

