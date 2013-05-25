var test = require('tap').test;

var flip = require('../../lib/flip.js');

test('verify registered feature', function (t) {
    flip.register('my-feature', function (subject) {
        return;
    });

    t.ok(flip.features['my-feature'], 'feature was registered');
    t.end();
});
