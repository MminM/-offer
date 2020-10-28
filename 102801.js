// 二维数组中找到指定的数

var matrix =[
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];
var findNumberIn2DArray = function(matrix, target) {
    let i = matrix[0].length - 1,
        j = 0,
        len = matrix.length;
    while(i>=0 && j<len){
        if(matrix[j][i] == target){
            return true;
        }else if(matrix[j][i] > target){
            i-- ;
        }else{
            j++;
        }
    }
    return false;   
};
console.log(findNumberIn2DArray(matrix,18));
