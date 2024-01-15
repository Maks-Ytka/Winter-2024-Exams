// Count types in an array
//delete unnecessary lines
//change the name of the function and variable
//change 's' for 'arr'

countTypes = function (arr) {
  result = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (i of arr) {
    const t = typeof i;
    result[t]++;
  }

  return result;
};

module.exports = countTypes;
