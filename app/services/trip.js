const csv = require('csv-parser');
const fs = require('fs');
const cacheService = require('./cache');
const constant = require('../constant');

let _tripDataPromise;

exports.setTripDataPromise = (tripDataPromise) => {
    _tripDataPromise = tripDataPromise;
}

exports.getTripDataPromise = () => {
    return _tripDataPromise;
}

exports.getTripData = ()=> {
    const readStream = fs.createReadStream(constant.divyCsv);
        return new Promise((resolve, reject)=>{
            readStream
            .pipe(csv())
            .on('data', (row)=> {
                let cache = cacheService.getTripData();
                cache[row[constant.divyCsvColumnHeaders.endStationID]] = ( cache[row[constant.divyCsvColumnHeaders.endStationID]] || [])
                .concat(row);
                cacheService.setTripData(cache);
            })
            .on('end',(data)=>{
                resolve();
            });
        })
    }