var fairCandySwap = function(A, B) {
    let SumA = sum(A);
    let SumB = sum(B);
    let result = [];
    for(let i=0; i<A.length; i++){
        for(let j=0; j<B.length; j++){
            if(SumA-A[i]+B[j]===SumB+A[i]-B[j]){
                result.push(A[i],B[j])
                return result;
            }
        }
    }
    return result;
};

function sum(arr) {
    return arr.reduce(function(prev, curr, idx, arr){
        return prev + curr;
    });
}
console.log(fairCandySwap([1,2,5],[2,4]))

