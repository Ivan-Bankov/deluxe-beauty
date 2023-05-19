import { Router } from "express";
import { deleteUser, getUsername, loginUser, logoutUser, registerUser, verifyUser } from "../controllers/userControllers";

export const userRouter = Router()

userRouter.get('/', verifyUser, getUsername)
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/logout', logoutUser)
userRouter.delete('/delete/:username', deleteUser)