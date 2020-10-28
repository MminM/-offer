var s = "We are happy."
//"We%20are%20happy."

/**
 * 
 * 方法一：for循环遍历将空格替换为指定字符
 * 方法二：正则
 */
var replaceSpace = function(s) {
    var arr = s.split("");
    var newArr = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] === " "){
            newArr.push("%20");
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr.join("");
};
var replaceSpace2 = function(s) {
    return s.split(" ").join("%20")
}
console.log(replaceSpace(s));
console.log(replaceSpace2(s));
console.log(s.replace(/ /g,"%20"));