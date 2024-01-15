// Get one random element from an array
//Renamed function
//remove unnecessary variable assignment
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

module.exports = getRandomElement;
