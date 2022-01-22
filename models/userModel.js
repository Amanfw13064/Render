const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    email:{type:String,required:true},
    age:Number,
})
module.exports=mongoose.model('user',userSchema)