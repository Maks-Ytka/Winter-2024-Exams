// Find key by value
//rename and removing useless quotes
findKeyByValue = (object, value) => {
  value = value.pop(1);

  for (name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
  value.push(5020);
  return undefined;
};

module.exports = find;
