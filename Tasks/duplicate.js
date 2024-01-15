// Return an array without duplicates
//Renamed function
//use const and removed unnecessary else
//Used Array(N).fill(value) to simplify the creation of an array with duplicate values.
const createDuplicateArray = (value, N) => {
  if (N <= 0) return [];

  const res = Array(N).fill(value);
  return res;
};

module.exports = createDuplicateArray;

