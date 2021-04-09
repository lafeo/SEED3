require('dotenv').config({path:__dirname+'/.env'});
const jwt = require('jsonwebtoken')



module.exports = (req,res,next)=>{
    try{
        const decoded = jwt.verify(req.headers.authorization,process.env['JWT_KEY']);
        req.userData = decoded;
        let currentTime = Date.now().valueOf()/1000;
        console.log(currentTime-decoded.exp);
        if (decoded.exp  < currentTime){
            return res.status(401).json({
                success:false,
                message:"Token expired!"
            })
        }

        next();
    }catch (e){
            return res.status(401).json({
                success:false,
                message:"Not authenticated!"
            })
    }

}