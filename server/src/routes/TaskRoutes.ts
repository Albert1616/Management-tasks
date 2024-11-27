import { Router } from "express";
import { createTask, getTasks, getUserTasks, updateTaskStatus } from "../controller/TaskController";

const route = Router();

route.get("/", getTasks);
route.post("/", createTask);
route.patch("/:id/status", updateTaskStatus); //Param in route
route.get("/user", getUserTasks)

export default route;