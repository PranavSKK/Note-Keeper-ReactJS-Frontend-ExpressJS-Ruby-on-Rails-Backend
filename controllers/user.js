import express from "express";
import User from "../models/user.model.js";

const userRouter = express.Router()

userRouter.post("/signin", async (req,res)=>{
    let mobileNo = req.body.mobileNo
    let password = req.body.password

    const user = await User.findOne({mobileNo: mobileNo})
    if(user){
        res.status(200).json(user)
    }else{
        res.status(404).json("User Not Found Please Sign Up")
    }
});

userRouter.post("/signup", async(req,res)=>{
    console.log("fff")
    const body = {
        "name": req.body.name,
        "mobileNo": req.body.mobileNo,
        "password": req.body.password
    }
    const user = await User.create(body)
    if(user){
        res.status(200).json(user)
    }else{
        res.status(404).json("User Not Created Try again")
    }
});

export default userRouter;