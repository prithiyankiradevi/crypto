

con.connect((err)=>{
    if(err){throw err}
    console.log('connected')
    // var sql="insert into admin_Login (id,username,password) values (1,'firebee',123456)"

    // var sql="insert into admin_Login (id,username,password) values ?"
    // var values=[
    //     [1,'firebee',123456],
    //     [2,'admin',123456],
    //     [3,'super',123456]
    // ]
    // var create='create table admin_Login(id int NOT NULL ,username varchar(250)NOT NULL,password int NOT NULL)'
    var sql='select * from admin_Login where username="super"'
    con.query(sql,(err,data)=>{
        if(err){throw err}
        else{
            console.log(data)
        }
    })
})