import express from "express"
import { LogOut, signUp } from "../controllers/auth.contrpller"

const router=express.Router()
router.post("/signup",signUp)
router.post("/login",Login)
router.get("/logout",LogOut)


export default router