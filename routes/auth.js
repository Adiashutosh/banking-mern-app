const router = require("express").Router()
const User = require("../models/User")

//REGISTER A USER
router.post("/register", async (req, res)=>{
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        balance: req.body.balance
    })
    try{
        const user = await newUser.save()
        res.status(200).json(user) 
    }catch(err){
        console.log(err);
    }
})

//DELETE A USER
router.delete("/:id", async (req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        await user.deleteOne()
        res.status(200).json("User has been deleted")
    }catch(err){
        console.log(err);
    }
})

module.exports = router