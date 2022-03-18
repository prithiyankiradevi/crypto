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
    };

    static createAdmin=(data,cb)=>{
        try{
        const query=`insert into admin set?`
        connection.connect.query(query,data,(err,result)=>{
            if(err){
                cb(null,err)
            }else{
                cb(null,result)
            }
        })
        }catch(e){
           return e
        }
    };

    static updateOne=(data,cb)=>{
        console.log(data)
        try{
        const query=`update admin set ${data.data} where id=${data.id}`
        console.log(query)
        connection.connect.query(query,(err,result)=>{

            console.log(result)
            if(err){
                cb(null,err)
            }else{
                cb(null,result)
            }
        })
        }catch(e){
           return e
        }
    };

    static deleteAdmin=(data,cb)=>{
        try{
            const query=`update admin set deleteFlag=${data.deleteFlag} where id=${data.id}`
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