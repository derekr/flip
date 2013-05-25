// Export
var bundled = Object.create(null);

bundled.blessedList = function (blessed) {
    return function (key) {
        if (blessed.indexOf(key) > -1) return true;
        else return false;
    }
};

bundled.varient = function (varients) {
    return function (key) {
        // TODO: improve using async
        for (var varient in varients) {
            var assigned = varients[varient];
            if (assigned.indexOf(key) > -1) return varient;
        }

        return false;
    }
};

module.exports = bundled;
