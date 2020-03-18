const service = require('../services');
const utils = require('../utils/helper');
const constant = require('../constant');
const _ = require('lodash');

exports.CountAgeGroup = async (req, res) => {
    let stationIds = req.query.ids;
    stationIds = Array.isArray(stationIds) ? stationIds : stationIds.split(',');
    let date = new Date(req.query.date).getTime();
    let result = [];
    await service.trip.getTripDataPromise();
    let cache = service.cache.getTripData();
    stationIds.forEach(stationId => {
        let record = {};
        let data = cache[stationId];
        const condition = (item) => {
            let endDate = new Date(item[constant.divyCsvColumnHeaders.endTime].split(' ')[0]).getTime();
            return date == endDate;
        }
        let filteredResult = Array.from(utils.filter(data, condition));
        filteredResult.forEach(item => {
            processAgeCount(item, record)
        });       
        result.push({stationId, 'ageGroupCount': record});
    });
    res.json(result);
}

processAgeCount = (item, record) => {
    let age = new Date().getFullYear() - parseInt(item[constant.divyCsvColumnHeaders.memberBirthdayYear]);
    constant.ageKeys.forEach(ageKey => {
        let [low,heigh] = ageKey.split('-');
        if(age >= low && age <= heigh) {
            record[ageKey] = (record[ageKey] || 0) + 1
        }           
    });
    if(isNaN(age)) {
        record['Unknown'] = (record['Unknown'] || 0)+1
    }
}
exports.RecentTripData = async (req, res) =>  {
    let stationIds = req.query.ids.split(',');
    let topResults = [];
    await service.trip.getTripDataPromise();
    let cache = service.cache.getTripData();
    stationIds.forEach(stationId => {
        let data = cache[stationId];
        let sortedByDateDesc = _.sortBy(data, new Date(data['02 - Rental End Station ID']).getTime())
            .reverse();
         let topResultForEachRow =  Array.from(utils.filter(sortedByDateDesc, (item)=> true, 20))
        topResults = [...topResults, ...topResultForEachRow];
    });
    res.json(topResults);
}