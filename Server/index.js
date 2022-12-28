import express from 'express'
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from 'cors'
import Route from './routes/route.js'

const app=express()

dotenv.config()
const Database=process.env.DB_connection

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(Database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const PORT=8000
app.use("/",Route)

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
