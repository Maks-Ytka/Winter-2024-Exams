// Generate random password
//Renamed function and variables
//use const and let
const generatePassword = (alphabet, length) => {
  const maxIndex = alphabet.length;
  let key = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * maxIndex);
    key = key + alphabet[randomIndex];
  }
  return key;
};

module.exports = generatePassword;
