// Sum all numbers from an array
//Renamed function, change 'k' to 'sum', 's' to 'arr'
//chang 'for...of' for 'const', fixed unnecessary operators
const sumArray = (arr) => {
  let sum = 0;

  for (const num of arr) {
    if (typeof num === 'number') {
      sum += num;
    }
  }

  return sum;
};

module.exports = sumArray;
