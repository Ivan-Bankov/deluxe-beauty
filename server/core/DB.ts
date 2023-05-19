const mysql = require('mysql')
require('dotenv').config()

export class DB {
    public conn

    constructor() {
        this.conn = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'deluxebeauty'
        })
    }
}