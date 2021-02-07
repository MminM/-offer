



// 2021-2-7 
// 未思考到的点，在i>i+1时，可以将i直接转换，
// 然后再判断转换后，数组是否符合条件，如果符合则整体符合，
// 如果不符合则整体不符合，因为只可变动一次！！！

// var checkPossibility = function(nums) {
//     let count = 0;
//     for(let i=0; i<nums.length; i++) {
//         if(count>1){
//             return false;
//         }else{
//             if(nums[i]<=nums[i+1]) continue;
//             count +=1;
//             if(nums[i+2]-nums[i]>=0) {
//                 continue;
//             }else {
//                 return false;
//             }
//         }
//     }  
//     return true;
// };

var checkPossibility = function(nums) {
    for(let i=1; i<nums.length; i++) {
        const x = nums[i-1], y = nums[i]
        if(x>y){
            nums[i-1] = y;
            if(isSorted(nums)) return true;
            nums[i-1] = x;
            nums[i] = x;
            return isSorted(nums);
        }

    }  
    return true;
};

function isSorted(nums) {
    for(let i=1; i<nums.length; i++) {
        if(nums[i-1] > nums[i]) {
            return false;
        }
    }
    return true;
}

// !!!理清楚！！！
var checkPossibility = function(nums) {
    let count = 0;
    for(let i=0; i<nums.length; i++) {
        if(count>1){
            return false;
        }else{
            if(nums[i]<=nums[i+1]) continue;
            count +=1;
            if(nums[i+2]-nums[i]<0) return false;
        }
    }  
    return true;
};