/*
    1423. 可获得的最大点数   https://leetcode-cn.com/problems/maximum-points-you-can-obtain-from-cards/

    几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。
    每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。
    你的点数就是你拿到手中的所有卡牌的点数之和。
    给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。


    输入：cardPoints = [1,2,3,4,5,6,1], k = 3
    输出：12
    解释：第一次行动，不管拿哪张牌，你的点数总是 1 。但是，先拿最右边的卡牌将会最大化你的可获得点数。最优策略是拿右边的三张牌，最终点数为 1 + 6 + 5 = 12 。

    输入：cardPoints = [2,2,2], k = 2
    输出：4
    解释：无论你拿起哪两张卡牌，可获得的点数总是 4 。
*/

// 2021-2-6
var maxScore = function(cardPoints, k) {
    const len = cardPoints.length;
    if(len <= k) {
        return max(cardPoints);
    }
    let i = 0, j = len-1, sum = 0;
    while(k>0){
        if(cardPoints[i]>cardPoints[j]){
            sum += cardPoints[i];
            i++;
            k--;
        }else if(cardPoints[i]<cardPoints[j]){
            sum += cardPoints[j];
            j--;
            k--;
        }else {   // 当二者相等时，需要进一步判断倒数第二个的大小  有问题！
            sum += cardPoints[i];
            i++;
            j--;
            k--;
        }
    }
    return sum;
};
//  不可根据当前大小就判定整体一定大，

function max(arr) {
    return arr.reduce((item,prev) => item += prev)
}

let cardPoints = [2,2,2], k = 2;
console.log(maxScore(cardPoints,k))