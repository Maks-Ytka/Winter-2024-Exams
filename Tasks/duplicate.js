// Return an array without duplicates
//Renamed function
//use const and removed unnecessary else
const createDuplicateArray = (value, N) => {
  if (N <= 0) return [];

  const res = Array(N).fill(value);
  return res;
};


module.exports = createArrayWithDuplicates;
