import express from "express"
import {  Login, Logout, Register } from "../controllers/auth.controller.js"
// import { authenticate } from "../middleware/authenticate.js"

const AuthRoute = express.Router()

AuthRoute.post("/register",Register)
AuthRoute.post("/login",Login)
// AuthRoute.post("/google-login",GoogleLogin)
AuthRoute.get('/logout', Logout)

export default AuthRoute
