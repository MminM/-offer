/*
    05. 替换空格  https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/

    请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

    输入：s = "We are happy."
    输出："We%20are%20happy."
*/

var replaceSpace = function(s) {
    return s.split(" ").join("%20")
};

let s = "We are happy."
console.log(replaceSpace(s))