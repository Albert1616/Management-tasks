"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTasks = exports.updateTaskStatus = exports.createTask = exports.getTasks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { projectId } = req.query;
    try {
        const tasks = yield prisma.task.findMany({
            where: {
                projectId: Number(projectId)
            },
            include: {
                author: true,
                assignee: true,
                comments: true,
                attachments: true,
            }
        });
        res.status(200).json(tasks);
    }
    catch (error) {
        res.send(500).json({ message: `Error to retriving tasks for the specific id. ${error.message}` });
    }
});
exports.getTasks = getTasks;
// SHIFIT + TAB para recuar todos
//CTRL + ALT - para selecionar todos
//SHIFIT + ALT + RIGHT ARROW - para ir para fim o da linha
// {
//     "title":,
//     "description":, 
//     "status":,         
//     "priority":,       
//     "tags":,           
//     "startDate":,      
//     "dueDate":,        
//     "points":,         
//     "projectId":,     
//     "authorUserId":,
//     "assignedUserId":, 
// }
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, status, priority, tags, startDate, dueDate, points, projectId, authorUserId, assignedUserId, } = req.body;
    try {
        const newTask = yield prisma.task.create({
            data: {
                title,
                description,
                status,
                priority,
                tags,
                startDate,
                dueDate,
                points,
                projectId,
                authorUserId,
                assignedUserId,
            }
        });
        res.status(201).send(newTask);
    }
    catch (error) {
        res.send(500).json({ message: `Error to creating new project; ${error.message}` });
    }
});
exports.createTask = createTask;
const updateTaskStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const updatedTask = yield prisma.task.update({
            where: {
                id: Number(id) //task que possui esse id
            },
            data: {
                status: status //dado a ser atualizado
            }
        });
        res.status(200).send(updatedTask);
    }
    catch (error) {
        res.status(500).json({ message: `Error to updated task ${error.message}` });
    }
});
exports.updateTaskStatus = updateTaskStatus;
const getUserTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.query;
    try {
        const tasks = yield prisma.task.findMany({
            where: {
                OR: [
                    { assignedUserId: Number(userId) },
                    { authorUserId: Number(userId) }
                ]
            },
            include: {
                author: true,
                assignee: true
            }
        });
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: `Error to retring tasks of user: ${error}` });
    }
});
exports.getUserTasks = getUserTasks;
