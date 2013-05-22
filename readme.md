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

## Tests

```
npm test
```

## TODO

* Include functions for common feature/varient creation
