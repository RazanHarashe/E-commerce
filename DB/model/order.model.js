import { string } from "joi";
import mongoose,{Schema,Types,model} from "mongoose";

const orderSchema = new Schema({
    userId: { 
        type: Types.ObjectId, ref: 'User',required:true,
     }, 
     Products:[{
        productId:{type:Types.ObjectId,ref:'product',required:true},
        quantity:{type:Number,default:1,required:true},
        unitPrice:{type:Number,required:true},
        finalPrice:{},
   
        }],
        finalPrice:{
            type:Number,
            required:true,
        },
        address:{
           type:String,
           required:true,
        },
        phoneNumber:{
            type:String,
            required:true,
        },
        couponId:{
            type:Number,
            required:true,
        },
        paymentType:{
            type:String,
            default:'cash',
            enum:['card','cash'],
        },
        status:{
            type:String,
            default:'pending',
            enum:['pending','cancelled','confirmed','oneWay','deliverd'],
        },

     reasonRejected:String,
     note:string,
     updatedBy:{type:Types.ObjectId,ref:'User',required:true},
 },
 {
     timestamps:true,
 }
     );

 const orderModel=mongoose.models.Order || model('Order',orderSchema);
 export default orderModel; 