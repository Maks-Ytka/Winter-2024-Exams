// Generate random password
//Renamed function and variables
let generatePassword = (alphabet, length) => {
  const maxIndex = alphabet.length;
  key = '';
  for (let i = 0; i < length; i++) {
    randomIndex = Math.floor(Math.random() * maxIndex);
    key = key + alphabet[randomIndex];
  }
  return key;
};

module.exports = generatePassword;
