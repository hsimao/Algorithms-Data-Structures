// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // const strMap = str.split("").reduce((acc, it) => {
  //   acc[it] = acc[it] + 1 || 1;
  //   return acc;
  // }, {});

  const strMap = {};
  for (let val of str) {
    strMap[val] = strMap[val] + 1 || 1;
  }

  let maxNum = 0;
  let maxStr = "";
  for (let key in strMap) {
    if (strMap[key] > maxNum) {
      maxStr = key;
      maxNum = strMap[key];
    }
  }

  return maxStr;
}

module.exports = maxChar;
