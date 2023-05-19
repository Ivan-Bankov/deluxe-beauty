import { NextFunction, Request, Response } from "express"
import { DB } from "../core/DB"
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const db = new DB()
const salt = 10

export const verifyUser = (req: any, res: Response, next: NextFunction) => {
    const token = req.cookies.token
    if(!token) {
        return res.json({Error: "You are unauthenticated..."})
    } else {
        jwt.verify(token, 'jwt_secret_key', (error: any, decoded: any) => {
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

export const registerUser = (req: Request, res: Response) => {
    const registerUser = "INSERT INTO user_log_ins (`username`, `password`) VALUES (?)"
    bcrypt.hash(req.body.password.toString(), salt, (error: any, hashedPassword: any) => {
        if(error) return res.json({Error: "Couldn't hash password..."})
        const userInfo = [
            req.body.username,
            hashedPassword
        ]
        db.conn.query(registerUser, [userInfo], (error: any, result: any) => {
            if(error) return res.json({Error: "Failed to register user..."})
            return res.json({Status: "Successfully registered user!"})
        })
    })
}

export const loginUser = (req: Request, res: Response) => {
    const loginUser = "SELECT * FROM user_log_ins WHERE username = ?"
    db.conn.query(loginUser, [req.body.username], (error: any, data: any) => {
        if(error) return res.json({Error: "Couldn't log in user..."})
        if(data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (error: any, response: any) => {
                if(error) return res.json({Error: "Password hashes mismatch..."})
                if(response) {
                    const username = data[0].username
                    const token = jwt.sign({username}, process.env.JWT_SECRET_KEY, {expiresIn: '1d'})
                    res.cookie('token', token)
                    return res.json({Status: "Successfully logged in user!"})
                } else {
                    return res.json({Error: "Wrong password..."})
                }
            })
        } else {
            return res.json({Error: "No such user..."})
        }
    })
}

export const logoutUser = (req: Request, res: Response) => {
    res.clearCookie('token')
    return res.json({Status: "Success!"})
}

export const deleteUser = (req: Request, res: Response) => {
    res.clearCookie('token')
    const username = req.params.username
    const deleteUser = "DELETE FROM user_log_ins WHERE username = ?"
    db.conn.query(deleteUser, [username], (error: any, result: any) => {
        if(error) return res.json({Error: "Couldn't delete user from database..."})
            return res.json({Status: "Success!"})
    })
}

