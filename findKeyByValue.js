const findKeyByValue = function (bestTVShowsByGenre, value) {
  for (let i in bestTVShowsByGenre) {
    if (bestTVShowsByGenre[i] == value) {
      return i;
    }
  }
}

module.exports = findKeyByValue;