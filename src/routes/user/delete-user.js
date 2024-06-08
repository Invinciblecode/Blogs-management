import express from 'express'
import user from '../../../models/user.js'
const router = express.Router()


router.delete('/delete/user/:userid' ,async (req,res) =>{
    const userid = req.params.userid
    await user.findByIdAndDelete(userid)
    res.send('user deleted successfully')
})



export default router