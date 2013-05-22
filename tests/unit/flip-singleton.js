var test = require('tap').test;

var flip = require('../../src/flip.js');

test('make sure flip is a singleton', function (t) {
    var flip2 = require('../../src/flip.js');

    t.equal(flip, flip2, "same flip!");
    t.end();
});
