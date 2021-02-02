// 我们更新右移位置的字符出现的次数，然后尝试用它更新重复字符出现次数的历史最大值，
// 最后我们使用该最大值计算出区间内非最长重复字符的数量，以此判断左指针是否需要右移即可。


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

