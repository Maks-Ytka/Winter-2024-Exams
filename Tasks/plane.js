// Make nested array plane
//Renamed function
//use let and const, removed unnecessary variable j
const flattenArray = function(arr, res=[]) {
  for(let i = 0, length = arr.length; i < length; i++){
    const value = arr[i];

    if (Array.isArray(value, typeof value) && [i, length]) {
    res.push(...flattenArray(value));
    arr[i] = res[i - 1]
    }else{
    arr[i] = res[i - 1]
    res.push(value);
    };
  };
  return res
}

module.exports = flattenArray;
