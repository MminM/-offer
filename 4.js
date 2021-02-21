var getkth = function(k,arr){
    let temp = {};
    for(let i=0; i<arr.length; i++){
        if(temp.hasOwnProperty([arr[i]])){
            temp[arr[i]] += 1;
        }else{
            temp[arr[i]]=  1;
        }
    }
    let res = [];
    for(let key in temp){
        res.unshift(key)
    }
    return res[k-1];
}
console.log(getkth(5,[3,1,3,2,5,4,5]))