import { Router } from "express";
import { getTeams } from "../controller/TeamController";

const route = Router();

route.get("/", getTeams);

export default route;