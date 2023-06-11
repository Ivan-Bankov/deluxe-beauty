import { NextFunction, Request, Response } from "express"
import { DB } from "../core/DB"
import { UserModel } from "../models/userModels"
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const db = new DB()
const userModel = new UserModel(db)
const salt = 10

export const verifyUser = (req: any, res: Response, next: NextFunction) => {
    const token = req.cookies.token
    if(!token) {
        return res.json({Error: "You are unauthenticated..."})
    } else {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error: any, decoded: any) => {
            if(error) {
                return res.json({Error: "Error in verifying the token..."})
            } else {
                req.username = decoded.username
                next()
            }
        })
    }
}

export const getUsername = (req: any, res: Response) => {
    return res.json({Status: "Success!", username: req.username})
}

export const registerUser = async (req: Request, res: Response) => {
    await bcrypt.hash(req.body.password.toString(), salt, (error: any, hashedPassword: any) => {
        if(error) return res.json({Error: "Couldn't hash password..."})
        const userInfo = [
            req.body.username,
            hashedPassword
        ]
        userModel.registerUser(req, res, userInfo)
    })
}

export const loginUser = async (req: Request, res: Response) => {
    await userModel.loginUser(req, res)
}

export const logoutUser = (req: Request, res: Response) => {
    res.clearCookie('token')
    return res.json({Status: "Success!"})
}

export const deleteUser = async (req: Request, res: Response) => {
    res.clearCookie('token')
    const username = req.params.username
    await userModel.deleteUser(req, res, username)
}

export const updateUser = async (req: Request, res: Response) => {
    const username = req.params.username
    await userModel.updateUsername(req, res, username)
}