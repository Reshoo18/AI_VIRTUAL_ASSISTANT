import User from "../models/user.model.js"

const getCurrentUser=async(req,res)=>{

    try {
        const userId=req.userId
        
        const user= await User.findById(userId).select("-password")
        if(!user){
         return   res.status(400).json({message:"user not foundn "})
        }
        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        return res.status(400).jsom({message:"get gurrent user"})
    }
}

export default getCurrentUser