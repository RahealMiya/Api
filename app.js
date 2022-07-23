const Express =require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const Cors=require("cors")

const app=Express()
app.use(Cors())
app.use(Express.json({extended:false}))


app.get("/addcourse",(req,res)=>{
    res.send("Welcome to add course")
})
app.get("/viewcourse",(req,res)=>{
    res.send("Welcome to view Course")
})
app.get("/searchcourse",(req,res)=>{
    res.send("Welcome to search course")
})
app.get("/updatecourse",(req,res)=>{
res.send("Welcome to update course")
})
app.get("/deletecourse",(req,res)=>{
    res.send("welcome to delete course")
})

app.listen(3000,()=>{
    console.log("server running on http://localhost:3000")
})