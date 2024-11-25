"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controller/UserController");
const route = (0, express_1.Router)();
route.get("/", UserController_1.getUsers);
exports.default = route;
