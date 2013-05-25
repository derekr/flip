var test = require('tap').test;

var flip = require('../../lib/flip.js');

test('variant', function (t) {
    var variants = {
        awesome: ['astro'],
        favorite: []
    };

    flip.register('my-variant', flip.bundled.variant(variants));

    t.equals('awesome', flip.check('my-variant', 'astro'), 'astro should return awesome');
    t.notOk(flip.check('my-variant', 'drk'), 'drk should return false');
    
    t.end();
});
