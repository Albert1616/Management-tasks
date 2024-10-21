"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProjectController_1 = require("../controller/ProjectController");
const router = (0, express_1.Router)();
router.get("/projects", ProjectController_1.getProjects);
exports.default = router;
