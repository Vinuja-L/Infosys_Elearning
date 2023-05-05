const {verify} =require ("jsonwebtoken")

/**
 * This middleware is responsible for validating the JWT token.
 * it will check an access token exists in the header if not it will return an error message.
 * if an token exists the function attempts to verify the token using the verify method from the jsonwebtoken package
 */

const validateToken =(req,res,next) => {
    const accessToken = req.header("accessToken");
    if (!accessToken) return res.json ({error:"user not logged in"});
    try{
        const validToken =verify(accessToken,"importantsecret");

        if(validToken) {
            return next();
        }
    }catch (err){
        return res.json({error:err});
    }
    
};
module.exports ={validateToken};
