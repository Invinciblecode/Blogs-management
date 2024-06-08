import express from 'express'
import mongoose from 'mongoose'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import ejs from 'ejs'
import user from '../models/user.js'
// user route
import addUserRoute from "./routes/user/add-user.js"
import editUserRoute from './routes/user/edit-user.js'
import deleteUserRoute from './routes/user/delete-user.js'
// blog route  
import postBlogRoute from './routes/blog/postBlog.js'
import listBlogsRoute from './routes/blog/listBlogs.js'
import editBlogRoute from './routes/blog/editBlog.js'
import deleteBlogRoute from './routes/blog/deleteBlog.js'
const PORT = process.env.PORT || 3000

//middleware
// user
app.use(express.json())
app.use(addUserRoute)
app.use(editUserRoute)
app.use(deleteUserRoute) 
// blog 
app.use(postBlogRoute)
app.use(listBlogsRoute)
app.use(editBlogRoute)
app.use(deleteBlogRoute)





mongoose.connect(process.env.DBURL)
.then( () =>{
    console.log('connected to the database')
})
.catch( (err) =>{
    console.log(err)
})







app.listen( PORT , () =>{
    console.log('server is running on port 3000')
})