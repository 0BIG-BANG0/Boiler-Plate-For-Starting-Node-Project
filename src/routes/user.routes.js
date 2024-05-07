import express from 'express'
import UserController from "../controller/user.controller.js";

//Initilize Express Router
const userRouter = express.Router();
//initilize the  User Controller
const userController = new UserController


userRouter.get('/register',userController.getRegister)
userRouter.get('/login',userController.getLogin)
userRouter.post('/register',userController.postRegister)
userRouter.post('/login',userController.postLogin)
userRouter.get('/logout',userController.logout)

export default userRouter;