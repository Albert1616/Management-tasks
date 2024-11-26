"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TeamController_1 = require("../controller/TeamController");
const route = (0, express_1.Router)();
route.get("/", TeamController_1.getTeams);
exports.default = route;
