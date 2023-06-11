const mysql = require('mysql')
require('dotenv').config()

export class DB {
    public conn

    constructor() {
        this.conn = mysql.createPool({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE
        })
    }
}