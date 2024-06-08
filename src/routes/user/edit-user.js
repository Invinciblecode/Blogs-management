import express from 'express'
import user from '../../../models/user.js'
const router = express.Router()
router.patch('/edit/user/:userid' ,async (req , res) =>{
    const userid=req.params.userid
    const updatedData = req.body 
    const editeduser = await user.findByIdAndUpdate(userid , updatedData , {new:true})
    res.json(editeduser)


})


export default router