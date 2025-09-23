import express from "express";
import mongodb from "./db/mongodb.js";
import noteRouter from "./controllers/notes.js";
import userRouter from "./controllers/user.js";
import cors from "cors";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors({
    origin: "http://localhost:4000",
    credentials: true
}))

app.use("/", noteRouter)
app.use("/user", userRouter)

app.listen(3000, () => {
    console.log("Backend Express Listening in 3000");
})