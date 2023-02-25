import express from 'express';
import { getUser,addUser } from '../controller/user_controller.js';
const router=express.Router();

router.get("/login",getUser);
router.post("/signup",addUser);


export default router;