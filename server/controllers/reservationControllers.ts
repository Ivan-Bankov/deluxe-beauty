import { Request, Response } from "express"
import { DB } from "../core/DB"
import { ReservationModel } from "../models/reservationModels"

const db = new DB()
const reservationModel = new ReservationModel(db)

export const scheduleAppointment = async (req: Request, res: Response) => {
    const reservationInfo = [
        req.body.username,
        req.body.date,
        req.body.hour,
        req.body.service,
    ]
    await reservationModel.scheduleAppointment(req, res, reservationInfo)
}