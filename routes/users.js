const router = require("express").Router()
const User = require("../models/User")
const Transaction = require("../models/Transaction")

//GET ALL USERS
router.get("/allUsers", async(req,res)=>{
    try{
        var data = await User.find()
        res.status(200).json(data)
    }catch(err){
        console.log(err)
    }
})

//SEND AN AMOUNT AND GET ITS TRANSACTION DETAILS
router.put("/transferAmount", async (req,res)=>{
   
    try{
        
        const user = await User.findById(req.body.userId)
        const clientUser = await User.findOne({name : req.body.clientName})
        const netBalance = Number(user.balance)- Number(req.body.amount)
        const netClientBalance = Number(clientUser.balance)+Number(req.body.amount)
        await user.updateOne({$set : {balance : netBalance}})
        await clientUser.updateOne({$set: {balance: netClientBalance}})

        const newTransaction = new Transaction({
            from: user.name,
            to: clientUser.name,
            amount: req.body.amount

        })

            try{
                const transaction = await newTransaction.save()
                res.status(200).json(transaction)
                console.log(req.body)
            }catch(err){
                console.log(err);
            }
        res.status(200).json("Transaction Successful")
        
    }catch(err){
        console.log(err);
    }
})

//GET ALL TRANSACTIONS
router.get("/allTransactions",async (req,res)=>{
    try{
        var data = await Transaction.find()
        res.status(200).json(data)
    }catch(err){
        console.log(err)
    }
})

module.exports = router