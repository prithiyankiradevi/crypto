const connection=require('../connection/connection')

class Admin{
    static adminLogin=(email,cb)=>{
        try{
        const query=`select * from admin where email="${email}"`
        connection.connect.query(query,(err,result)=>{
            if(err){
                cb(null,err)
            }else{
                cb(null,result)
            }
        })
        }catch(e){
           return e
        }
    }
}

module.exports= Admin