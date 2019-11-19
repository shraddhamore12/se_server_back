const mysql=require("mysql");
var express=require("express");
var vehicleobj=express();

const connection=mysql.createConnection({
    host    :'localhost',
    user    :'root',
    password :'Manager@123',
    database :'test11'
});

var myData=[];
connection.connect();

vehicleobj.get("/",function(req,res){
    res.send("welcome")
});

vehicleobj.get("/vehicle",function(req,res){
    connection.query("select * from tbl_vehicle",function(err,result){
        if(err==null)
        {
            myData=result;
            res.contentType("application/json");
            res.send(JSON.stringify(myData));
        }
        else
        {
            res.send("Something wrong!!!");
        }
    });
});

vehicleobj.put("/:vehicleno",function(req,res){
    let eno=parseInt(req.params.vehicleno);
    let ename=req.body.vehiclename;
    let ecompany=req.body.company;
    let etype=req.body.type;
    let eprice=req.body.price;
    let edescription=req.body.description;

    connection.query(`update tbl_vehicle set vehiclename='${ename}',company='${ecompany}',type='${etype}',price='${eprice}',description='${edescription}' where vehicleno=${eno}`,function(err,result){
        if(err==null)
        {
            res.contentType("application/json");
            res.send(JSON.stringify(result));
        }
        else
        {
            res.send(err);
        }
    });
});

module.exports=vehicleobj;