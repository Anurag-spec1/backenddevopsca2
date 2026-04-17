import express from "express"

const app=express();
const port=3000
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})

app.get("/health",(req,res)=>{
    res.status(200).json({message:"Server is healthy "});
})