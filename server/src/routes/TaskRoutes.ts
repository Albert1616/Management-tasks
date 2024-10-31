import { Router } from "express";
import { createTask, getTasks, updateTaskStatus } from "../controller/TaskController";

const route = Router();

route.get("/", getTasks);
route.post("/", createTask);
route.patch("/:id/status", updateTaskStatus); //Param in route

export default route;