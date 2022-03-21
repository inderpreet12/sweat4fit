var jwt = require('jsonwebtoken');
const JWT_SECRET = 'sweat4FitAPI';

const authUser = (req, res, next)=>{
    // Get the user from the JWT Token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({
            error: "Please authenticate using a valid token"
        })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.id;
        next();
    }
    catch (error) {
        res.send(401).send({
            error: "No token"
        })
    }

}

module.exports = authUser;