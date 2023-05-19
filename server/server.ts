const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
import { json } from 'express'
import { userRouter } from './routers/userRouter'
require('dotenv').config()

const app = express()
app.use(json())
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))
app.use(userRouter)

app.listen(3002, () => {
    console.log(`Listening...`)
});