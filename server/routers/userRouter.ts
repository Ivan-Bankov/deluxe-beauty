import { Router } from "express";
import { changeUsername, deleteUser, getUsername, loginUser, logoutUser, registerUser, updateUser, verifyUser } from "../controllers/userControllers";

export const userRouter = Router()

userRouter.get('/', verifyUser, getUsername)
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/logout', logoutUser)
userRouter.delete('/delete/:username', deleteUser)
userRouter.get('/user-profile/edit-profile/:username', changeUsername)
userRouter.put('/update/:username', updateUser)