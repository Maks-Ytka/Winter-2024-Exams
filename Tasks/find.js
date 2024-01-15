// Find key by value
//rename and removing useless quotes
//Use 'const'
//Type check.
const findKeyByValue = (object, value) => {
  for (const name in object) {
    if (object[name] === value) {
      if (typeof name === 'string') {
        return name;
      }
      if (typeof object === 'object') {
        return object;
      }
    }
  }

  return undefined;
};

module.exports = findKeyByValue;
