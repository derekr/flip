// Export
var bundled = Object.create(null);

bundled.blessedList = function (blessed) {
    return function (key) {
        if (blessed.indexOf(key) > -1) return true;
        else return false;
    }
};

module.exports = bundled;
