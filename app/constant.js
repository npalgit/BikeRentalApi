exports.ageKeys = ['0-20','21-30','31-40','41-50','51-999'];
exports.divyCsv = 'Divvy_Trips_2019_Q2.csv';
exports.divyCsvColumnHeaders = {
    rentalID : '01 - Rental Details Rental ID',
    startTime : '01 - Rental Details Local Start Time',
    endTime : '01 - Rental Details Local End Time',
    bikeID : '01 - Rental Details Bike ID',
    durationInSeconds : '01 - Rental Details Duration In Seconds Uncapped',
    startStationID : '03 - Rental Start Station ID',
    startStationName : '03 - Rental Start Station Name',
    endStationID : '02 - Rental End Station ID',
    rentalEndStationName : '02 - Rental End Station Name',
    userType : 'User Type',
    memberGender : 'Member Gender',
    memberBirthdayYear : '05 - Member Details Member Birthday Year'
}

exports.divyJsonKeys = {
    station_id : 'station_id',
    external_id : 'external_id',
    name : 'name',
    lat : 'lat:',
    lon : 'lon',
    rental_methods : 'rental_methods:',
    capacity: 'capacity',
    electric_bike_surcharge_waiver : 'electric_bike_surcharge_waiver:',
    eightd_has_key_dispenser : 'eightd_has_key_dispenser',
    has_kiosk : 'has_kiosk'
}

exports.STANDARD_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    pragma: 'no-cache',
    'cache-control': 'no-cache'
}
