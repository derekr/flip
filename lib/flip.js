var bundled = require('./bundled.js');

/**
 * Flip is a singleton key value store of 
 * registered features and feature check callbacks.
 */
function Flip () {
    this.features = Object.create(null);
}

Flip.prototype.bundled = bundled;

/**
 * Check if the feature is enabled for the given subject.
 * Passes the subject to the registered feature callback.
 *
 * @param {String} Name of feature of varient.
 * @param {Object} Subject (user, request, session...)
 *
 * @return {Object}
 */
Flip.prototype.check = function (name, subject, callback) {
    var result = this.features[name](subject);
    if (typeof callback === 'undefined') return result;
    callback(null, result);
};

/**
 * Register a new feature or varient.
 *
 * @param {String} Name of feature of varient.
 * @param {Function} Returns (bool for features and object for varients)
 */
Flip.prototype.register = function (name, checkFn) {
    this.features[name] = checkFn;
};

// Export single instance
module.exports = new Flip();
