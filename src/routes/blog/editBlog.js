import express from "express";
import Blog from "../../../models/blog.js";
const router = express.Router()
router.patch('/edit/blog/:blogid' , async (req , res) =>{
    const userid = req.params.blogid
    const editedinfo = req.body
    const editedblog = await Blog.findByIdAndUpdate(userid , editedinfo , {new:true})
    res.json(editedblog)
})




export default router