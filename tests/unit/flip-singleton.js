var test = require('tap').test;

var flip = require('../../lib/flip.js');

test('make sure flip is a singleton', function (t) {
    var flip2 = require('../../lib/flip.js');

    t.equal(flip, flip2, "same flip!");
    t.end();
});
