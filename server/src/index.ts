import bodyParser, { json } from "body-parser";
import express from "express";
import dotenv from "dotenv"
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

//ROUTES
import router from "./routes/ProjectsRoutes";
import ProjectRoutes from "./routes/ProjectsRoutes";
import TaskRoutes from "./routes/TaskRoutes";
import SearchRoutes from "./routes/SearchRoutes";
import UserRoutes from "./routes/UserRoutes";
import TeamRoutes from "./routes/TeamsRoutes";

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
app.use("/projects", ProjectRoutes);
app.use("/tasks", TaskRoutes);
app.use("/search", SearchRoutes);
app.use("/users", UserRoutes);
app.use("/teams", TeamRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port: ${port}`));