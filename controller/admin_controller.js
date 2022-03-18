const adminModel=require('../model/admin_model')
const baseController=require('../controller/base_controller')
const jwt=require('jsonwebtoken')

const createAdmin=baseController.createOne(adminModel)

const adminLogin=(req,res)=>{
    let email=req.body.email
    let password=req.body.password
    adminModel.adminLogin(email,async(err,data)=>{
        if(err){ 
            res.status(400).send({success:'false',message:'failed'})
        }else if(data.length==0){
            res.status(200).send({success:'false',message:'email does not exists',data:[]})
        }
        else{
            if(data[0].password==password){
                const token=await jwt.sign({userId:data[0].id},process.env.SECRET_KEY)
                res.status(200).send({success:'true',message:'login successfully',data,token})
            }else{
                res.status(200).send({success:'false',message:'please provide valid email/password'})
            }
        }
    })
}

const updateAdmin=baseController.updateOne(adminModel)

const deleteAdmin=baseController.deleteOne(adminModel)

module.exports={
    createAdmin,
    adminLogin,
    updateAdmin,
    deleteAdmin
}