import express from 'express'
import mongoose from 'mongoose'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
// blog routes
import postBlogRoute from './routes/blog/postBlog.js'
import listBlogsRoute from './routes/blog/listBlogs.js'
import editBlogRoute from './routes/blog/editBlog.js'
import deleteBlogRoute from './routes/blog/deleteBlog.js'
const PORT = process.env.PORT || 3000
//middlewares - routes
app.use(express.json())
app.use(postBlogRoute)
app.use(listBlogsRoute)
app.use(editBlogRoute)
app.use(deleteBlogRoute)

//database
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