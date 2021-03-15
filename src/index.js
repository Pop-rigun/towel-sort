module.exports = function towelSort (matrix) {
  return Array.isArray(matrix) ? [].concat(...matrix.map((e, i) => {return i & 1 ? e.reverse() : e})) : [];
}
