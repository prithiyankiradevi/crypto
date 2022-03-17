const connection=require('../connection/connection')

class Admin{
    static adminLogin=(username,cb)=>{
        try{
        const query=`select * from admin where username="${username}"`
        connection.connect.query(query,(err,result)=>{
            if(err){
                cb(null,err)
            }else{
                cb(null,result)
            }
        })
        }catch(e){
           return err
        }
    }
}

module.exports= Admin