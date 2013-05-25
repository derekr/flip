// Export
var bundled = Object.create(null);

bundled.blessedList = function (blessed) {
    return function (key) {
        if (blessed.indexOf(key) > -1) return true;
        else return false;
    }
};

bundled.variant = function (variants) {
    return function (key) {
        // TODO: improve using async
        for (var variant in variants) {
            var assigned = variants[variant];
            if (assigned.indexOf(key) > -1) return variant;
        }

        return false;
    }
};

module.exports = bundled;
