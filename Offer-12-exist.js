/**
 * 剑指 Offer 12. 矩阵中的路径
 * 
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。
    [["a","b","c","e"],
    ["s","f","c","s"],
    ["a","d","e","e"]]
    但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。
 
    输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
    输出：true

*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// var exist = function(board, word) {
//     let row = board.length;
//     let col = board[0].length;
//     let arr = [];
//     for(let i=0; i<row; i++){
//         for(j=0; j< col; j++){
//             arr.push({'index':`${i}${j}`,'value':board[i][j],'isTrue':false})
//         }
//     }
//     for(let i=0;i<word.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j].value===word[i])
//         }  //不知道该怎么做了
//     }
// };


// 查阅题解---回溯算法
// var exist = function(board,word) {
//     let row = board.length;
//     let col = board[0].length;

//     var dfs = function(i,j,board,word,index) {
//         if(i<0 || i>=row || j<0 || j>=col || board[i][j] !== word[index]) return false;
//         if(index === word.length - 1) return true;
//         var tmp = board[i][j];
//         board[i][j] = '-';
//         var res = dfs(i-1,j.board,index+1) || dfs(i+1,j,board,index+1) || dfs(i,j-1,board,word,index+1) || dfs(i,j+1,board,word,index+1);
//         board[i][j] = tmp;
//         return res;
//     }
//     for(let i=0; i<row; i++){
//         for(let j=0; j<col; j++) {
//             if(dfs(i,j,board,word,0)) return true;
//         }
//     };
//     return false;
// }

var exist = function(board, word) {
    const row = board.length;
    const col = board[0].length;
    const k = 0;
    for(let i=0; i<row; i++) {
        for(let j=0; j<col; j++){
            if(findFun(board,word,i,j,k,row,col)) return true;
        }
    }
    return false;
}

function findFun(board,word,i,j,k,row,col) {
    if(i<0 || i>=row || j<0 || j>=col || board[i][j] != word[k]) 
        return false;

    if(k == word.length-1) 
        return true;
    let temp = board[i][j];
    board[i][j] = "-";
    let res = findFun(board,word,i-1,j,k+1,row,col) || findFun(board,word,i,j+1,k+1,row,col) || findFun(board,word,i+1,j,k+1,row,col) || findFun(board,word,i,j-1,k+1,row,col);
    board[i][j] = temp;
    return res;
}


let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";
console.log(exist(board,word))