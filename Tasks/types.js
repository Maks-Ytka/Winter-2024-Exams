// Count types in an array
//delete unnecessary lines
//change the name of the function and variable

countTypes = function (s) {
  result = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (i of s) {
    const t = typeof i;
    result[t]++;
  }

  return result;
};

module.exports = countTypes;
