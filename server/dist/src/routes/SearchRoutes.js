"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SearchController_1 = require("../controller/SearchController");
const route = (0, express_1.Router)();
route.get("/", SearchController_1.search);
exports.default = route;
