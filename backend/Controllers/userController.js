const User=require("../models/User");
exports.registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const user=new User({name,email,password});
        await user.save();
        res.status(201).json({message:"User registered successfully"});
    } catch (err) {
        res.status(500).json({message:err.message});
    }
};

exports.getUsers=async(req,res)=>{
    try{
        const users=await User.find();
        res.json(users)  ;
    }catch(err){
        res.status(500).json({message:err.message}); 
    }
};