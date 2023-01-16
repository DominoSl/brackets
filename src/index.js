module.exports = function check(str, bracketsConfig) {
  const config = {};

  for (const pair of bracketsConfig) {
    config[pair[0]] = pair[1];
  }

  const result = [];

  for (const bracket of str) {
    if (bracket === config[result[result.length - 1]]) {
      result.pop();
    } else {
      result.push(bracket);
    }
  }

  return result.length === 0;
}
