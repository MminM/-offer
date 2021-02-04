/*
424. 替换后的最长重复字符 https://leetcode-cn.com/problems/longest-repeating-character-replacement/

给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k 次。在执行上述操作后，找到包含重复字母的最长子串的长度。

输入：s = "AABABBA", k = 1
输出：4
解释：将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。子串 "BBBB" 有最长重复字母, 答案为 4。

*/

// 我们更新右移位置的字符出现的次数，然后尝试用它更新重复字符出现次数的历史最大值，
// 最后我们使用该最大值计算出区间内非最长重复字符的数量，以此判断左指针是否需要右移即可。

// 2021-2-2 没写出来，超时了，此为官方题解
var characterReplacement = function(s, k) {
    const num = new Array(26).fill(0);
    const n = s.length;
    let maxn = 0, left = 0, right = 0;

    while (right < n) {
        num[s[right].charCodeAt() - 'A'.charCodeAt()]++;  // 当前字母所在num中，次数++
        maxn = Math.max(maxn, num[s[right].charCodeAt() - 'A'.charCodeAt()])
        if (right - left + 1 - maxn > k) {
            num[s[left].charCodeAt() - 'A'.charCodeAt()]--; // ???
            left++;
        }
        right++;
    }
    return right - left;
};
console.log(characterReplacement("ABAB",2))

// 2021-2-4


/**
 * 滑动窗口类问题
 *    是一类使用[双指针]技巧，通过两个变量在数组上同向交替移动解决问题的算法
 *    思考路径：先思考暴力解法，分析暴力解法的缺点，然后结合问题的特点，使用双指针技巧对暴力解法进行剪枝。
 * 
 * 「力扣」第 1004 题：最大连续 1 的个数 III；
 * 「力扣」第 1208 题：尽可能使字符串相等；
 * 「力扣」第 1493 题：删掉一个元素以后全为 1 的最长子数组。
 * 
 * 「力扣」第 3 题：无重复字符的最长子串；
 * 「力扣」第 209 题：长度最小的子数组；
 * 「力扣」第 76 题：最小覆盖子串；
 * 「力扣」第 438 题：找到字符串中所有字母异位词；
 * 「力扣」第 567 题：字符串的排列。

 */