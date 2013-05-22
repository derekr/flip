/**
 * Flip is a singleton key value store of 
 * registered features and feature check callbacks.
 */
function Flip () {
    this.features = Object.create(null);
}

/**
 * Check if the feature is enabled for the given subject.
 * Passes the subject to the registered feature callback.
 */
Flip.prototype.check = function (name, subject, callback) {
    var result = this.features[name](subject);
    if (typeof callback === 'undefined') return result;
    callback(null, result);
};

Flip.prototype.register = function (name, checkFn) {
    this.features[name] = checkFn;
};

// Export single instance
module.exports = new Flip();
