const express  = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')


dotenv.config()

mongoose.connect(process.env.MONGO_URL,
     {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
     ()=>{console.log("Connected to MongoDB");})

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)

const PORT = process.env.PORT || 8000

if(process.env.NODE_ENV = "production"){
    app.use(express.static("client/build"))
}

app.listen(PORT, ()=>{
    console.log("backend server is running");
})