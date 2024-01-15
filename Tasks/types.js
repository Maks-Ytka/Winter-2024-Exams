// Count types in an array
//delete unnecessary lines
//change the name of the function and variable
//change 's' for 'arr'
//use const

const countTypes = function (arr) {
  const result = {
    number: 0,
    string: 0,
    boolean: 0,
  };

  for (const item of arr) {
    const type = typeof item;

    if (result.hasOwnProperty(type)) {
      result[type]++;
    }
  }
  return result;
};

module.exports = countTypes;
