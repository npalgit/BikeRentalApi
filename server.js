
const express = require('express');
const app = express();
const apiRouter = require('./api_router_v1');
const service = require('./app/services');
const cluster = require('cluster');
const os = require('os');
const numCPU = os.cpus().length;

/*
if(cluster.isMaster) {
    for (let index = 0; index < numCPU; index++) {
        cluster.fork();
    }
} else {
    app.use(apiRouter);
    app.listen(8000,()=> {
        let tripDataPromise = service.trip.getTripData();
        service.trip.setTripDataPromise(tripDataPromise);
    });
}
*/
app.use(apiRouter);
app.listen(8000,()=> {
    let tripDataPromise = service.trip.getTripData();
    service.trip.setTripDataPromise(tripDataPromise);
});