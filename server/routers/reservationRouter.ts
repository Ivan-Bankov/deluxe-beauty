import { Router } from "express";
import { scheduleAppointment } from "../controllers/reservationControllers";

export const reservationRouter = Router()

reservationRouter.post('/scheduleAppointment', scheduleAppointment)