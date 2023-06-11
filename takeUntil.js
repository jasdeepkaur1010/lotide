const takeUntil = function(array, callback) {
  let c = 0;
  let results = [];
  array.forEach(function (a, b) {
    if(callback(a)) {
      c = b;
    }
  
  });
  array.map(function(a, b) {
    if( b < c) {
      results.push(array[b]);
    }
  })
  return results;
  }

module.exports = takeUntil;
