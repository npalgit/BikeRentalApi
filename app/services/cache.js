let _cache = {};

exports.setTripData = (cache) => {
    _cache = cache;
}

exports.getTripData = () => {
    return _cache;
}