exports.min = function min(array) {

    return Array.isArray(array) && array.length > 1 ? Math.min(...array) : 0;
}

exports.max = function max(array) {
    return Array.isArray(array) && array.length ? Math.max(...array) : 0;
}

exports.avg = function avg(array) {
    return Array.isArray(array) && array.length > 1 ? array.reduce((a, b) => a + b, 0) /  array.length : 0;
}
