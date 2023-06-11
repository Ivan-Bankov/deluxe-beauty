import { Request, Response } from "express"

export class ReservationModel {
    conn: any

    constructor(db: any) {
        this.conn = db.conn
    }

    async scheduleAppointment(req: Request, res: Response, reservationInfo: any) {
        return await this.conn.query("INSERT INTO reservations (`username`, `date`, `hour`,`service`) VALUES (?)", [reservationInfo], (error: any, result: any) => {
            if(error) return res.json({Error: "Failed to schedule appointment..."})
            return res.json({Status: "Successfully scheduled appointment!"})
        })
    }
}