import genToken from "../config/token.js"
import User from "../models/user.model.js"


const signUp=async(req,res)=>{
  try {
      const {name,email,password}=req.body

      const emailExist=await User.findOne({email})

      if(emailExist){
        return  res.status(400).json({message:"email has already exist"})
      }

      if(password.length<6){
        return res.status(400).json({message:"password must be in 6 character"})
      }

      const hashedPassword=await bcrypt.hash(password,10)

      const user=await User.create({
        name,password:hashedPassword,email
      })
      const token=await genToken(user._id)
      res.cookie("token",token,{
        httpOnly:true,
        maxAge:7*24*60*60*1000,
        sameSite:"strict",
        secure:false
      }

      )
      res.status(201).json(user)
  } catch (error) {
      res.status(500).json({message:`signup error ${error}`})
  }

}


const Login=async(req,res)=>{
  try {
      const {email,password}=req.body

      const user =await User.findOne({email})

      if(!user){
        return  res.status(400).json({message:"email does't exist"})
      }


      const isMatch=await bcrypt.compare(password,user.password)

      if(!isMatch){
        return res.status(400).json({message:"incorrect password"})
      }


      const token=await genToken(user._id)
      res.cookie("token",token,{
        httpOnly:true,
        maxAge:7*24*60*60*1000,
        sameSite:"strict",
        secure:false
      }

      )
      res.status(201).json(user)
  } catch (error) {
      res.status(500).json({message:`signup error ${error}`})
  }

}