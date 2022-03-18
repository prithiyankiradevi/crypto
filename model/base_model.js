const connection=require('../connection/connection')


// function result(code,status,message,data){
//     return res.status(code).send({success:status,message:message,data:data})
// }


const createOne=(collection,data,cb)=>{
    try{
        let query=`insert into ${collection} set ?`;
        connection.sql.query(query,data,(err,result)=>{
            if(err){
                cb(null,err)
                // result(400,'false','failed',[])
            }else{
                cb(null,result)
            //    result(200,'true','created successfully',output)
            }
        })
    }catch(e){
        return e
    }
}


const getOne=(collection,cb)=>{
    try{
        let query=`select * from ${collection}`
        connection.sql.query(query,(err,result)=>{
            if(err){
                cb(null,err)
                // result(400,'false','failed',[])
            }else{
                cb(null,result)
                // result(200,'true','fetch datas successfully',output)
            }
        })
    }catch(e){
        return e
    }
}



module.exports={
    createOne,
    getOne
}
