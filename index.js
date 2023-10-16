const express=require("express")
const app=express()
app.listen(5003,()=>{
    console.log("App listen")
})
app.get("/one",(req,res)=>{
    res.status(200).send({message:"hi"})
})