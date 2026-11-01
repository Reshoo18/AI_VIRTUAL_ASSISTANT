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
  } catch (error) {
    
  }

}