import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authRouter from "./routes/user.router.js"
import cookieParser from "cookie-parser"

dotenv.config()
const app=express()
const PORT=process.env.PORT || 8000
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)

app.listen(PORT,()=>{
    connectDB()
    console.log(`server at listening at this port ${PORT}`)
})

