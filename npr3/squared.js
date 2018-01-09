var power = 2;
exports.squared = function (req) {
    return Math.pow(req, power);
}