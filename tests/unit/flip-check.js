var test = require('tap').test;

var flip = require('../../lib/flip.js');

flip.register('my-feature', function (subject) {
    return true;
});

test('sync check', function (t) { 
    t.ok(flip.check('my-feature', {}), 'sync test is chill');
    
    t.end();
});


test('async check', function (t) {
    flip.check('my-feature', {}, function (err, enabled) {
        t.ok(enabled, 'async test is chill');

        t.end();
    });
});
