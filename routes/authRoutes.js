import express from "express"
import { registerNewUser, login, editUserDetails } from "../controller/authcontroller.js"
import { verifyTokenFromHeaders } from "../middleWare/authMiddleware.js";


const router = express.Router();
//TODO:write and import functions from authController for respective endPoint
router.post("/register", registerNewUser)
router.post("/login", login)
router.put("/edit/:userId", verifyTokenFromHeaders, editUserDetails)
const authRoutes = router;


export default authRoutes;




