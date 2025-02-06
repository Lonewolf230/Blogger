const express=require('express')
const {signup,login,verifyUser,logout, deleteUser}=require('../controllers/authController')

const router=express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.post('/verify',verifyUser)
router.post('/logout',logout)
router.post('/delete',deleteUser)
module.exports=router