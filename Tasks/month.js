// Get month number
// Rename variables
// Use const
//
const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',
];

const getMonthNumber = (input) => {
  const length = monthNames.length;
  for (let i = 0; i < length; i++) {
    if (input.toLowerCase().startsWith(monthNames[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthNumber;