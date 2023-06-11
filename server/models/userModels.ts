import { Request, Response } from "express"
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

export class UserModel {
    conn: any

    constructor(db: any) {
        this.conn = db.conn
    }

    async registerUser(req: Request, res: Response, userInfo: any) {
        return await this.conn.query("INSERT INTO user_log_ins (`username`, `password`) VALUES (?)", [userInfo], (error: any, result: any) => {
                if(error) return res.json({Error: "Failed to register user..."})
                return res.json({Status: "Successfully registered user!"})
            })
    }

    async loginUser(req: Request, res: Response) {
        return await this.conn.query("SELECT * FROM user_log_ins WHERE username = ?", [req.body.username], (error: any, data: any) => {
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

    async deleteUser(req: Request, res: Response, username: any) {
        return await this.conn.query("DELETE FROM user_log_ins WHERE username = ?", [username], (error: any, result: any) => {
            if(error) return res.json({Error: "Couldn't delete user from database..."})
                return res.json({Status: "Success!"})
        })
    }

    async updateUsername(req: Request, res: Response, username: any) {
        return await this.conn.query("UPDATE user_log_ins SET username = ? WHERE username = ?", [req.body.username, username], (error: any, result: any) => {
            if(error) return res.json({Error: "Failed to update user..."})
            return res.json({Status: "Successfully updated user!"})
        })
    }
}