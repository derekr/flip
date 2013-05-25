var test = require('tap').test;

var flip = require('../../lib/flip.js');

test('blessed list', function (t) {
    flip.register('my-feature', flip.bundled.blessedList(['drk']));

    t.ok(flip.check('my-feature', 'drk'), 'drk was in the blessed list');
    t.notOk(flip.check('my-feature', 'bogus'), 'bogus was not in the blessed list');
    t.end();
});
