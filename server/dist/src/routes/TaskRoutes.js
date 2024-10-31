"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TaskController_1 = require("../controller/TaskController");
const route = (0, express_1.Router)();
route.get("/", TaskController_1.getTasks);
route.post("/", TaskController_1.createTask);
route.patch("/:id/status", TaskController_1.updateTaskStatus); //Param in route
exports.default = route;
