import express from "express";
import { addPost } from "../controllers/post.js";
import { register,login,logout } from "../controllers/auth.js";
const router = express.Router();
// router.get("/test",(req,res)=>{
//     res.json("This is all of my posts")
// })
//router.get("/test",addPost);
router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)
export default router;