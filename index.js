
const express=require("express")
const app=express()
const path=require("path")
var bodyParser = require('body-parser')
port=3000;
//assests files
app.use(express.static("/assets"));
app.set('views',path.join(__dirname,"views"))
//middleware
app.use(bodyParser.urlencoded({ extended: true }));
//database
//request
app.get("/",(req,res)=>{
    res.send("login.html")
    console.log("aniket")
})
app.listen(port,()=>
{
console.log("connecting to the sever port")}
)