/*
    06. 从尾到头打印链表  https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/

    输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
    
    输入：head = [1,3,2]
    输出：[2,3,1]
*/

// var reversePrint = function(head) {
//     const arr = [];
//     for(let i=head.length-1; i>=0; i--){
//         arr.push(head[i])
//     }
//     return arr;
// };
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reversePrint = function(head) {
    const newArr = [];
    while(head != null){
        newArr.unshift(head.val);
        head = head.next;
    }
    return newArr;
};
const head = [1,3,2];
console.log(reversePrint(head))