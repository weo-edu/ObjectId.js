var expect = require('chai').expect;

// Simulate browser
global.window = {};

describe('supports-localStorage', function() {
  var supportsLocalstorage =

  beforeEach(function() {
    supportsLocalstorage = require('../');
  });

  // supports-localStorage memoizes itself, so need to clear
  // the require cache each time to test properly
  afterEach(function() {
    Object.keys(require.cache).forEach(function(key) {
      delete require.cache[key];
    });
  });

  it('should report false localStorage is undefined', function() {
    expect(supportsLocalstorage()).to.be.false;
  });

  var mock = {
    setItem: function() {},
    removeItem: function() {}
  };

  it('should report true localStorage is defined and does not throw an exception', function() {
    window.localStorage = mock;
    expect(supportsLocalstorage()).to.be.true;
  });

  it('should report false if setItem throws an exception', function() {
    window.localStorage = mock;
    mock.setItem = function() { throw new Error; };
    expect(supportsLocalstorage()).to.be.false;
  })
});