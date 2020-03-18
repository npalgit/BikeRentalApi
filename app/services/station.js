const api = require('../api');
const utils = require('../utils/helper');
const constant = require('../constant');

exports.getStationDetailsById = async(id)=> {
    return api.loadStationDetails()
    .then((result)=>{
        let [data,status] = result;
        if(status) {
            const condition = (item) => {
                let stationId = item[constant.divyJsonKeys.station_id];
                return id == stationId;
            }
            let filteredResult = Array.from(utils.filter(data.stations, condition));
            return[filteredResult, true];
        }
        result;
    });
}