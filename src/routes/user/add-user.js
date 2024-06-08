import express from 'express'
const router = express.Router()
import user from '../../../models/user.js'
router.post('/create/user' ,async (req , res) =>{
    const {username , password} = req.body
    const userid = await user.countDocuments({}) + 1
   const newuser = new user({
    userID:userid ,
    username:username , 
    password:password
   })
   await newuser.save()
   res.json(newuser)
})






export default router