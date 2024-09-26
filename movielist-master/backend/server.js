require('dotenv').config();
const express = require ('express')
const bodyParser = require('body-parser');


const app = express()

const port = process.env.port
const cors= require('cors')
const connectdb = require ('./config/db')
const movieRoute= require('./route/movieRoute')
const userRoute=require('./route/authClinet')
connectdb()
app.use(bodyParser.json());
app.use(express.json())
app.use(cors())

app.use('/movie',movieRoute)
app.use('/auth',userRoute)


 













app.listen(port,err=>{
    err?console.log(err):console.log(`go to the port => ${port}`)
})