const adminController=require('../controller/admin_controller')
const router=require('express').Router()

router.post('/login',adminController.adminLogin)


module.exports=router
