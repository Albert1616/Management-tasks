import { Router } from "express";
import { getProjects } from "../controller/ProjectController";

const router = Router();

router.get("/projects", getProjects)

export default router;