import mongoose,{Schema,Types,model} from "mongoose";

const subcategorySchema = new Schema({
   name:{
        type:String,
        required:true,
        unique:true
    },
    slug:{
        type:String,
        required:true,
    },
    image:{
        type:Object,
        required:true,
    },
    status:{
        type:String,
        default:'Active',
        enum:['Active','Inactive']
    },
    categoryId:{type:Types.ObjectId,ref:'Category',required:true},
    createdBy:{type:Types.ObjectId,ref:'User'},
    updatedBy:{type:Types.ObjectId,ref:'User'},
},
{
    timestamps:true}
    );

const subcategoryModel=mongoose.models.subcategory || model('subcategory',subcategorySchema);
export default subcategoryModel; 