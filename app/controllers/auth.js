const jwt = require('jsonwebtoken');
const config = require('../config');

exports.getAuthToken =  (req, res)=> {
    let token = jwt.sign({username: config.userName},config.secret);
    res.json({'token':token});
}