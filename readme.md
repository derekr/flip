# Flip

A simple singleton key-function store for registering feature toggles and varient values.

## Usage

Flip is a singleton, so everytime you `require('flip')` it will return the same instance. It's inspired by routes in express and template helpers in handlebars if you're familiar with either of those.

You'll want to `register` features somewhere in your server setup.
```js
var flip = require('flip');

flip.register('my-feature', function (subject) {
    return subject.isAdmin;
});
```

Then somewhere in your route or request handler you can `check` 
if the feature should be enabled.
```js
var flip = require('flip');

module.exports = function (req, res) {
    var templateContext = {
        'my-feature-enabled': flip.check('my-feature', req.user)
    };
};
```

You can also run checks asynchronously by providing a callback to the `check` function.
```js
var flip = require('flip');

module.exports = function (req, res) {
    flip.check('my-feature', req.user, function (myFeature) {
        var templateContext = {
            'my-feature-enabled': myFeature
        };
    });
};
```

## Bundled

Flip comes with a few baked `check` functions.

### Blessed List

Most times you just have a list of keys (users for example) that should have the 
feature enabled. In this case you can provide a list of the blessed users and be on your way.

```js
// Register a feature and provide a list of blessed users
flip.register('my-feature', flip.bundled.blessedList(['drk', 'astro']));

// Then provide the user in the check to see if the feature should be enabled
flip.check('my-feature', 'drk'); // true
flip.check('my-feature', 'bogus'); // false
```

### Varient

Another common use case is a/b testing or providing a varient per session. Here you can provide a hash of varients where the values are list of keys (users for example) for each varient.

```js
var varients = {
    awesome: ['astro'],
    favorite: ['drk']
};

flip.register('my-varient', flip.bundled.varient(varients));

// Check for varient for a given user
flip.check('my-varient', 'astro'); // 'awesome'
flip.check('my-varient', 'drk'); // 'favorite'
flip.check('my-varient', 'bogus'); // false (no varient has been assigned!)
``` 

In the last example — `'bogus'` — no varient has been assigned. You can handle the 
logic here for assigning a varient for `'bogus'` and then register the varient again. In this case the varients are stored in memory which isn't extremely useful, but no reason you couldn't use another store like redis.

## Tests

```
npm test
```

## TODO

* Include functions for common feature/varient creation
