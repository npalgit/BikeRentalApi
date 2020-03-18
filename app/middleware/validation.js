exports.reqQueryValidator = (param) =>{
    return (req, res, next) => {
        if(!req.query[param]) {
            return res.status(400)
                .json({'msg': `${param} is a required querystring parameter`});
        }
        next();
    }
}