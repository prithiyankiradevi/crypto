const adminController=require('../controller/admin_controller')
const router=require('express').Router()

router.post('/login',adminController.adminLogin)
router.post('/create',adminController.createAdmin)
router.put('/update/:id',adminController.updateAdmin)
router.delete('/delete/:id',adminController.deleteAdmin)




module.exports=router
