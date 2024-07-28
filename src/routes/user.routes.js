import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"
import {registerUser} from "../controllers/user.controller.js";

const router = Router()

//to make route

router.route("/register").post(
    upload.fields([//single upload(multer)
        {
            name: "avatar",// in frontend also we will nave {avatar} only..
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )

    router.route("/login").post(loginUser)

    //secured routes
router.route("/logout").post(verifyJWT,  logoutUser)


export default router