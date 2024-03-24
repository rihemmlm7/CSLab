import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
export const signup =async(req,res)=>{
    const {
        username,email,password }= req.body;
        if(!username || !email ||!password || username === '' || email === '' || password=== '' ){
         return res.status(400).json({message:'all fields are required'});
        }

      {/* hash password */}
      const hashedPassword = bcryptjs.hashSync(password,10); 
        
        const newUser = new User({
            username,
            email,
            password:hashedPassword,
        });
        try{
             await newUser.save();
        {/* response to know if the data save it */}
        res.json('signup seccessful');
        }catch(error){
            res.status(500).json({message:error.message})
        }
       

}
