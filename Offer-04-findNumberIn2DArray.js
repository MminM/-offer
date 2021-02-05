/*
    04. 二维数组中的查找  https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/

    在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。


    [
        [1,   4,  7, 11, 15],
        [2,   5,  8, 12, 19],
        [3,   6,  9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ]
    给定 target = 5，返回 true。
    给定 target = 20，返回 false。
*/

// 2021-2-5
var findNumberIn2DArray = function(matrix, target) {
    if (matrix.length == 0 || matrix[0].length == 0) {  // 一定要加上这个判断
        return false;
    }
    let Row = matrix.length;
    let Col = matrix[0].length;
    for(let i=0; i<Row; i++){
        for(let j=Col-1; j>=0; j--){
            if(matrix[i][j]>target){
                continue;
            }else if(matrix[i][j]===target){
                return true;
            }else {
                break;
            }
        }
        
    }
    return false;
};

const matrix  =   [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
const target = 20;
console.log(findNumberIn2DArray(matrix,target))
