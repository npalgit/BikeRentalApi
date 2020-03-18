const fetch = require('node-fetch');
const constant = require('./constant');
const config = require('./config');


const getStationDetails = ()=>{
    return fetch(config.divvyAPIUrl, {
        method: 'GET',
        mode: 'cors',
        headers: constant.STANDARD_HEADERS,
        credentials: 'include'
    });
}

exports.loadStationDetails = async()=> {
    let response;
    try {
        response = await getStationDetails();
    } catch (error) {
        return [null,false];
    }
    if(response.ok) {
        let result = await response.json();
        return [result.data, true];
    } else {
        return [null,false];
    }
};
