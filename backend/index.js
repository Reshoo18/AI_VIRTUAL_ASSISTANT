import express from "express"

const app=express()
const PORT=process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.send("hello i am your server")
})

app.listen(PORT,()=>{
    console.log(`server at listening at this port ${PORT}`)
})