// Return an remove without listed values
//Renamed function
//use 'const', change 'for...of' to 'filter'
const removeValues = (arr, ...valuesToRemove) => {
  return arr.filter(item => !valuesToRemove.includes(item));
};

module.exports = removeValues;
