var vehicleobj=require("./vehicle");
var express = require("express");

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use("/",vehicleobj);
app.use("/vehicle",vehicleobj);

app.listen(3539, function(){
    console.log("Server Started on port  " + 3539 );
})
