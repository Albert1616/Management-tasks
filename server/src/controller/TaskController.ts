import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getTasks = async(
    req: Request,
    res: Response
):Promise<void> =>{
    const { projectId } = req.query;
    try{
        const tasks = await prisma.task.findMany({
            where:{
                projectId: Number(projectId)
            },
            include:{
                author: true,
                assignee: true,
                comments: true,
                attachments: true,
            }
        })
        res.status(200).json(tasks);
    }catch(error:any){
        res.send(500).json({message:`Error to retriving tasks for the specific id. ${error.message}`})
    }
}
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

export const createTask = async(
    req: Request,
    res: Response
):Promise<void> =>{
    const {
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
    } = req.body;
    try{
        const newTask = await prisma.task.create({
            data:{
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
    }catch(error:any){
        res.send(500).json({message:`Error to creating new project; ${error.message}`});
    }
}

export const updateTaskStatus = async(
    req: Request,
    res: Response
):Promise<void> =>{
    const {id} = req.params;
    const {status} = req.body;
    try{
        const updatedTask = await prisma.task.update({ //update = patch
            where:{
                id: Number(id) //task que possui esse id
            },
            data: {
                status: status //dado a ser atualizado
            }
        })
        res.status(200).send(updatedTask);
    }catch(error:any){
        res.status(500).json({message:`Error to updated task ${error.message}`});
    }
}