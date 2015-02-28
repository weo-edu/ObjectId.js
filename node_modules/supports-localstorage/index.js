var storageName = 'localStorage';
var testKey = 'supports-localStorage_test';

var memo;

module.exports = function() {
  // We can memoize this since supporting localstorage or not
  // is invariant once we are in a particular environment
  if(memo === undefined) {
    var storage = window[storageName];

    if(storage) {
      try {
        storage.setItem(testKey, true);
        storage.removeItem(testKey);
        memo = true;
      } catch(e) {
        memo = false;
      }
    } else
      memo = false;
  }

  return memo;
};