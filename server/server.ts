const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
import { json } from 'express'
import { userRouter } from './routers/userRouter'
import { reservationRouter } from "./routers/reservationRouter";
require('dotenv').config()

const app = express()
app.use(json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(userRouter)
app.use(reservationRouter)

app.listen(3001, () => {
    console.log(`Listening...`)
});