const service = require('../services');

exports.getStationById = async(req, res) => {
    let stationId = req.params.id;
    let [data, status] = await service.station.getStationDetailsById(stationId);
    if(status) {
        res.json(data);
    } else {
        return res.status(500)
        .json({'msg':'An error occurred while loading resources'});
    }
}