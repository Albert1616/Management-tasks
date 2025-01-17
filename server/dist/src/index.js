"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//ROUTES
const ProjectsRoutes_1 = __importDefault(require("./routes/ProjectsRoutes"));
const ProjectsRoutes_2 = __importDefault(require("./routes/ProjectsRoutes"));
const TaskRoutes_1 = __importDefault(require("./routes/TaskRoutes"));
const SearchRoutes_1 = __importDefault(require("./routes/SearchRoutes"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const TeamsRoutes_1 = __importDefault(require("./routes/TeamsRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Home route");
});
app.use(ProjectsRoutes_1.default);
app.use("/projects", ProjectsRoutes_2.default);
app.use("/tasks", TaskRoutes_1.default);
app.use("/search", SearchRoutes_1.default);
app.use("/users", UserRoutes_1.default);
app.use("/teams", TeamsRoutes_1.default);
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));
