import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser" //for cookies 
const app = express()


// to config anything use- app.use({})
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))//to config cors

app.use(express.json({limit: "16kb"}))// to config data from form data(json)
app.use(express.urlencoded({extended: true, limit: "16kb"})) // to config url(link)
app.use(express.static("public"))// to store file or pdf which is available publicly
app.use(cookieParser())//to config cookies

//routes import
import userRouter from './routes/user.routes.js'


//routes declaration
app.use("/api/v1/users", userRouter)
export {app}
