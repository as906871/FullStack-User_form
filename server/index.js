const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql= require("mysql2");
const cors = require("cors");

const db= mysql.createPool({
    host: "localhost",
    user:"root",
    password:"12345",
    database:"ttl"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/post",(req,res)=>{
    const {first, last, phone, email, notes, timing, dep, drs, loc} = req.body;
    const sqlInsert= "INSERT INTO ttl (first, last, phone, email, notes, timing, dep, drs, loc) VALUES (?,?, ? ,? ,?, ?,?,?,?)";
    db.query(sqlInsert,[first, last, phone, email, notes, timing, dep, drs, loc], (error,result)=>{
        if(error){
            console.log(error);
        }
    })
});

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})