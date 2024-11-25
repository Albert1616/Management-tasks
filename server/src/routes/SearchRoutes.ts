import { Router } from "express";
import { search } from "../controller/SearchController";

const route = Router();

route.get("/", search);

export default route;