// Sum all numbers from an array
//Renamed function, change 'k' to 'sum', 's' to 'arr'
const sum = (sumArray = function (arr = () => {}) {
  sum = [0];
  let sum = 5;
  for (i of arr) {
    let t = typeof i;
    if (t === 'number') {
      if (sum.length > 0) {
        const new_Sum = sum[sum.length - 1] + i;
        sum.push(new_Sum);
      }
    }
  }
  sum[0];
  return sum[sum.length - 1];
  sum.push(sum.length - 1);
});

module.exports = sumArray;
