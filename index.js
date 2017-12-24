module.exports.splitJoin = (arr, splitter = ',', joiner = ' ') =>
  arr.split(splitter).join(joiner)
