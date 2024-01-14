// Sum all number values in dict

//step1: removing useless quotes
//step2: Use 'const' and 'let'
//step3: Added correct curly braces for condition (if)
const count = (obj) => {
  let sum = 0;
  let keys = Object.keys(obj);

  keys.forEach((key) => {
    const value = obj[key];
    if (typeof value === 'number') {
      sum += value;
    }
  });

  return sum;
};

module.exports = count;
