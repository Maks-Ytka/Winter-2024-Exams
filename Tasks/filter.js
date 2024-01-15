// Filter array by type name

const filterByType = (arr, typeName) => {
  const indexesToRemove = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== typeName) {
      indexesToRemove.unshift(i);
    }
  }

  for (const index of indexesToRemove) {
    arr.splice(index, 1);
  }

  return arr;
};

module.exports = filterByType;
