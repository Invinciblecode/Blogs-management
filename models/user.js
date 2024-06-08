import mongoose from 'mongoose'
const Schema = mongoose.Schema
const UserSchema = new Schema({
    userID:{
        type:Number ,
        requied:true
    },
    username:{ 
        type:String ,
        required:true
    } ,
    password:{
        type:String , 
        required:true
    }



}, {timestamps:true})
const user = mongoose.model('User' , UserSchema)
export default user