module.exports = (str, splitter = ' ', joiner = '-') =>
  str.split(splitter).join(joiner)
