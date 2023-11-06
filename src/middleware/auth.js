import jwt from "jsonwebtoken";
import userModel from "../../DB/model/user.model.js";
export const auth=()=>{
    return async(req,res,next)=>{
        const {authorization}=req.headers;
        if(!authorization?.startsWith(process.env.BERERKEY)){
            res.status(400).json({message:"Invalid authorization"});
        }
        const token =authorization.split(process.env.BERERKEY)[1];
        const decoded=jwt.verify(authorization,process.env.LOGINSECRET);
        if(!decoded){
            res.status(400).json({message:"Invalid authorization"});
        }
        const user=await userModel.findById(decoded.id).select("userName role");
        if(!user){
            res.status(400).json({message:"not registerd user"});
        }
        if(user.role=='User'){
            return res.status(403).json({message:"not auth user"});
        }
        next();
    }
}