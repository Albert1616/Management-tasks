import { Router } from "express";
import { getUsers } from "../controller/UserController";

const route = Router();

route.get("/", getUsers);

export default route;