module.exports = function reverse (n) {
  const nString = n.toString();
  const result = parseInt(nString.split("").reverse().join(""));
return result;
}
