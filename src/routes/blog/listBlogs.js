import express from 'express'
import Blog from '../../../models/blog.js'
const router = express.Router()
router.get('/list/blogs' ,async (req , res) =>{
    const Blogs = await Blog.find()
    res.json(Blogs)
})



export default router