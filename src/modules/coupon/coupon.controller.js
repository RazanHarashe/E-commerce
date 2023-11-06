import couponModel from "../../../DB/model/coupon.model.js";

export const createCoupon=async(req,res)=>{
    const {name,amount}=req.body;
   
    if(await couponModel.findOne({name})){
        return res.status(409).json("Coupon already exists");
    }
    const coupon=await couponModel.create(req.body);
    return res.status(201).json({message:"success",coupon});

} 

export const getCoupons = async(req,res)=>{
    const coupons= await couponModel.find({});
    return res.status(200).json({message:"success",coupons});
}

export const updateCoupon = async(req,res)=>{
    const coupon= await couponModel.findById(req.params.id);
    if(!coupon){
        return res.status(404).json('No Coupon Found');
        }
    if(req.body.name){
        if(await couponModel.findOne({name:req.name}).select('name')){
            return res.status(409).json({message:`copon ${req.body.name} already exists`})
        }
        coupon.name=req.body.name;
    }
    if(req.body.amount){
        coupon.amount=req.body.amount;
    }
    await coupon.save();
    return res.status(200).json({message:"success",coupon});
}
export const softDelete = async (req,res) =>{
    const {id}=req.params;
    const coupon= await couponModel.findOneAndUpdate({_id:id,isDelete:false},
        {isDelete:true},
        {new:true});
        if (!coupon) {
            return res.status(400).json({message:"can't delete this copon"});
            }
            return res.status(200).json({message:" success"});
}

export const hardDelete = async (req,res) =>{
    const {id}=req.params;
    const coupon= await couponModel.findOneAndDelete({_id:id});
        if (!coupon) {
            return res.status(400).json({message:"can't delete this copon"});
            }
            return res.status(200).json({message:" success"});
}

export const restore = async (req,res) =>{
    const {id}=req.params;
    const coupon= await couponModel.findOneAndUpdate({_id:id,isDelete:true},
        {isDelete:false},
        {new:true});
        if (!coupon) {
            return res.status(400).json({message:"can't restore this copon"});
            }
            return res.status(200).json({message:" success"});
}
