const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();
app.use(express.json())
app.use(cors())
dotenv.config();
//connect to mongodb
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('connected to mongodb')).catch((err) => console.log("failed to connect"))

app.listen(9000,()=>{
    console.log('server is running on port 9000')
})