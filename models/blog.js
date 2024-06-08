import mongoose from 'mongoose'
const Schema = mongoose.Schema
const blogSchema = new Schema({
    title:{
        type:String ,
        required:true
    } ,  
    body:{
        type:String , 
        required:true
    } ,
     author:{
        type:String , 
        required:true
    } ,
    postedat:{
        type:Date ,
        default:Date.now
    }
}, {timestamps:true})
const Blog = mongoose.model('Blog' , blogSchema)
export default Blog