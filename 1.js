var maximumScore = function (a, b, c) {
  let res = 0;
  let max = Math.max(a, b, c);
  let arr = [];
  if (a === max) {
    arr.push(b);
    arr.push(c);
  } else if (b === max) {
    arr.push(a);
    arr.push(c);
  } else {
    arr.push(a);
    arr.push(b);
  }
  let N = arr[0] + arr[1];
  if (N > max) {
    res = Math.floor((N - max) / 2) + max;
  } else if(N < max) {
    res = N;
  } else {
    res = max;
  }
  return res;
};

console.log(maximumScore(3,8,2))
