import express from 'express'
const router = express.Router()
import Blog from '../../../models/blog.js'
router.delete('/delete/blog/:blogid' , async (req, res) =>{
    const blogid = req.params.blogid
    await Blog.findByIdAndDelete(blogid)
    res.send('Blog deleted successfully')
})




export default router