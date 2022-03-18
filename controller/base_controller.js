// sundarkrizsh67@gmail.com
function response(res,code,success,message,data){
    return res.status(code).send({success:success,message:message,data:data})
}


const createOne = (collection) => (req, res) => {
    try {
        let data=req.body
        collection.createAdmin(data,(err,result)=>{
            if(err){
                response(res,400,'false','failed to create',[])
            }else{
                response(res,400,'true','created successfully',data)
            }
        })
    } catch (e) {
        response(res,500,null,'internal server error',null)
    }
}


const updateOne=(collection)=>(req,res)=>{
    try{
        let data={data:req.body,
        id:req.params.id}
        collection.updateOne(data,(err,result)=>{
            console.log(result)
            if(err){
                response(res,400,'false','failed',[])
            }else{
                response(res,200,'true','updated successfully',data)
            }
        })
    }catch(e){
        console.log(e.message)
        response(res,500,null,'internal server error',null)
    }
}


const deleteOne=(collection)=>(req,res)=>{
    try{
        let data={
            deleteFlag:1,
            id:req.params.id
        }
        collection.deleteAdmin(data,(err,result)=>{
            if(err){
                response(res,400,'false','unable to delete data',[])
            }else{
                response(res,200,'true','deleted successfully',[])
            }
        })
    }catch(e){
        console.log(e.message)
        response(res,500,null,'internal server error',null)
    }
}

module.exports={
    createOne,
    updateOne,
    deleteOne
    }