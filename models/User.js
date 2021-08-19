const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email : {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    balance: {
        type: Number,
        required: true
        
    }
},
{timestamps: true}
)

module.exports = mongoose.model("User",UserSchema)