import bodyParser, { json } from "body-parser";
import express from "express";
import dotenv from "dotenv"
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/routes";

dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.get("/" ,(req,res) =>{
    res.send("Home route")
})

app.use(router);

const port = process.env.PORT || 8000;

app.listen(3333, () => console.log(`Server is running on port: ${port}`));