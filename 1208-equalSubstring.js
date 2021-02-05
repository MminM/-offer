/*
    1208. 尽可能使字符串相等  https://leetcode-cn.com/problems/get-equal-substrings-within-budget/

    给你两个长度相同的字符串，s 和 t。
    将 s 中的第 i 个字符变到 t 中的第 i 个字符需要 |s[i] - t[i]| 的开销（开销可能为 0），也就是两个字符的 ASCII 码值的差的绝对值。
    用于变更字符串的最大预算是 maxCost。在转化字符串时，总开销应当小于等于该预算，这也意味着字符串的转化可能是不完全的。
    如果你可以将 s 的子字符串转化为它在 t 中对应的子字符串，则返回可以转化的最大长度。
    如果 s 中没有子字符串可以转化成 t 中对应的子字符串，则返回 0。

    输入：s = "abcd", t = "bcdf", cost = 3
    输出：3
    解释：s 中的 "abc" 可以变为 "bcd"。开销为 3，所以最大长度为 3。

    输入：s = "abcd", t = "cdef", cost = 3
    输出：1
    解释：s 中的任一字符要想变成 t 中对应的字符，其开销都是 2。因此，最大长度为 1

*/

/*
1.计算字符串s和t中每个字符的ASCII码，分别遍历计算差值
2.得到差值数组，寻找最大序列长度，使其之和小于等于cost

双指针法
*/

var equalSubstring = function(s, t, maxCost) {
    const n = s.length;
    const temp = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        temp[i] = Math.abs(s[i].charCodeAt() - t[i].charCodeAt());
    }
    let left = 0, right = 0, max = 0, maxLength = 0;
    while(right < n){
        max += temp[right];
        while(max > maxCost) {
            max -= temp[left];
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }
    return maxLength;
};
const s ="abcd", t = "bcdf", cost = 3;
console.log(equalSubstring(s,t,cost));

