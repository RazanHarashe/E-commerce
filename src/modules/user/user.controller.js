import userModel from "../../../DB/model/user.model.js"
import XLSX from 'xlsx';
export const getProfile=async(req,res)=>{
    const user=await userModel.findById(req.user._id);
    return res.status(200).json({message:"success",user})
}

export const uploadUserExcel=async(req,res,next)=>{
    
    const woorkBook = XLSX.readFile(req.file.path);
    const woorkSheet = woorkBook.Sheets[woorkBook.SheetNames[0]];
    const users= XLSX.utils.sheet_to_json(woorkSheet);
    if(!await userModel.insertMany(users)){
        return next(new Error(`could not insert`,{cause:400}));
    }
    return res.status(201).json({message:"success"})
}

