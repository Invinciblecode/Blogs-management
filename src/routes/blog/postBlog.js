import express from 'express'
const router = express.Router()
import Blog from '../../../models/blog.js'
router.post('/post/blog' ,async (req ,res) =>{
     const {title , author , body } = req.body
    const newblog = new Blog({
        title:title ,
        author:author, 
        body:body
    })
     await   newblog.save()
     res.json(newblog)
})



export default router