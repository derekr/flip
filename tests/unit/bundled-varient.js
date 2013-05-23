var test = require('tap').test;

var flip = require('../../src/flip.js');

test('varient', function (t) {
    var varients = {
        awesome: ['astro'],
        favorite: []
    };

    flip.register('my-varient', flip.bundled.varient(varients));

    t.equals('awesome', flip.check('my-varient', 'astro'), 'astro should return awesome');
    t.notOk(flip.check('my-varient', 'drk'), 'drk should return false');
    
    t.end();
});
