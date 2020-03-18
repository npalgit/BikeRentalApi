const express = require('express');
const controller = require('./app/controllers');
const middleware  = require('./app/middleware');

const router = express.Router();

// TripData
router.get('/Trip/CountAgeGroup', middleware.validation.reqQueryValidator('ids'), middleware.validation.reqQueryValidator('date'), middleware.auth.jwtVerify, controller.trip.CountAgeGroup);
router.get('/Trip/RecentData', middleware.validation.reqQueryValidator('ids'), middleware.auth.jwtVerify, controller.trip.RecentTripData);

// Auth
router.get('/getAuthToken' , controller.auth.getAuthToken);

//station
router.get('/Station/:id', middleware.auth.jwtVerify, controller.station.getStationById);

module.exports = router;