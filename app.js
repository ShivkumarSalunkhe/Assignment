const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/StudentsDetails")

const User = require("./modles/Schema")
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json())
app.use(bodyParser.json())
 
//// READ ALL STUDENTS DATA ==>

app.get("/api/students", async(req,res)=>{
    try{
        const students = await User.find()
        res.json({
            status: "Success",
            students: students
        })

    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})


 
//// READ STUDENT DATA BY ID ==>

app.get("/api/students/:id", async (req,res)=>{
    try{
        const students = await User.find({_id: req.params.id});
        // console.log(req.params)
        res.json({
            status: "Success",
            students: students
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})


 
// CREATE STUDENTS DATA ==>

app.post("/api/students", async(req,res)=>{
    try{

        const students = await User.create(req.body);
        res.json({
            status: "Success",
            students
        })
    }catch(e){
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})


 
// UPDATE STUDENTS DATA ==>

app.put("/api/students/:id", async(req,res)=>{
    try{
  
        const students = await User.updateOne({id: req.params.id},req.body);
        res.json({
            status: "Success",
            students
        })
    }catch(e){
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})


// DELETE STUDENTS DATA ==>

app.delete("/api/students/:id", async(req,res)=>{
    try{
    
        const students = await User.deleteOne({id: req.params.id});
        res.json({
            status: "Success",
            students
        })
    }catch(e){
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})


app.get("*", (req,res)=>{
    res.status(404).send("Faild API")
})

app.listen(5000, ()=>console.log("Your server is up at 5000"))