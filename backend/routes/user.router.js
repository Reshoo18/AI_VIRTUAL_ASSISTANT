import express from "express"
import { Login, LogOut, signUp } from "../controllers/auth.contrpller"

const authRouter=express.authRouter()
authRouter.post("/signup",signUp)
authRouter.post("/login",Login)
authRouter.get("/logout",LogOut)


export default authRouter