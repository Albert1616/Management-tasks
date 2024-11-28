import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Project{ //Inteface types for project
    id: number,
    name: string,
    description?:string,
    startDate?: string,
    endDate?: string
}

export enum Priority{ //Enum types
    Urgent = "Urgent",
    High = "High",
    Medium = "Medium",
    Low = "Low",
    Backlog = "Backlog"
}

export enum Status{
    ToDo = "To Do",
    WorkInProgress = "Work In Progress",
    UnderReview = "Under Review",
    Completed = "Completed"
}

export interface User{
    userId: number,
    username: string,
    email:string,
    profilePictureUrl: string,
    cognitoId: number,
    teamId: number
}

export interface Attachament{
    id: number,
    fileURL: string,
    fileName: string,
    taskId: number,
    uploadedById: number
}

export interface Comment{
    id:number,
    text:string,
    taskId:number,
    userId:number
}

export interface Task{
    id:number,
    title:string,         
    description?:string,
    status?:Status,         
    priority?: Priority,       
    tags?:string,           
    startDate?:string,      
    dueDate?:string,        
    points?:number,         
    projectId:number,     
    authorUserId?:number,
    assignedUserId?:number,

    author?: User;
    assignee?: User;
    comments?: Comment[];
    attachments?: Attachament[];
}

export interface SearchResults{
    tasks?: Task[],
    projects?: Project[],
    users?: User[]
}

export interface Team {
    id:number,           
    teamName:string,            
    productOwnerUserId:number,
    projectManagerUserId:number,
    //projectTeams         ProjectTeam[]
    user:User[]
  }

export const api = createApi({ //REDUX - ideal para usar em aplicações redux
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,}),
        reducerPath: "api",
        tagTypes:["Projects", "Tasks", "Search", "Users", "Teams"],
        endpoints: (build) =>({
            getProjects: build.query<Project[], void>({ //GET
                query: () => "Projects", //query usada
                providesTags: ["Projects"]
            }),
            createProject: build.mutation<Project, Partial<Project>>({
                query: (project) => ({ //project - Projeto passado
                    url: "projects", //url
                    method: "POST", //post
                    body: project //corpo da requisição
                }),
                invalidatesTags:["Projects"]
            }), //PATCH, DELETE, PUT, POST
            getTasks: build.query<Task[], { projectId: number }>({
                query: ({ projectId }) => `tasks?projectId=${projectId}`,
                providesTags: (result) =>
                  result
                    ? result.map(({ id }) => ({ type: "Tasks" as const, id }))
                    : [{ type: "Tasks" as const }],
              }),
              getTasksByUser:build.query<Task[], number>({
                query: (userId) => `tasks/user?userId=${userId}`,
                providesTags: (result, error, userId) =>
                    result ? 
                    result.map(({ id }) => ({ type: "Tasks", id }))
                    : [{type: "Tasks", id:userId}],
              }),
            search: build.query<SearchResults,string>({
                query: (query) => `search?query=${query}`,
            }),
            createTask: build.mutation<Task, Partial<Task>>({
                query: (task) =>({
                    url: "Tasks",
                    method: "POST",
                    body: task
                }),
                invalidatesTags:["Tasks"]
            }),
            updatedTaskStatus: build.mutation<Task, {taskId:number; status: string}>({
                query: ({taskId, status}) => ({
                    url: `tasks/${taskId}/status`, //params na url
                    method: "PATCH", //atualização
                    body: {status}
                }),
                invalidatesTags: (result, error, {taskId}) =>[
                    {type: "Tasks", id:  taskId}
                ]
            }),
            getUsers: build.query<User[], void>({
                query: () => "users",
                providesTags:["Users"]
            }),
            getTeams: build.query<Team[], void>({
                query: () => "/teams",
                providesTags: ["Teams"]
            })
        }), //define endpoints
})

export const { 
    useGetProjectsQuery, 
    useCreateProjectMutation, 
    useGetTasksQuery, 
    useUpdatedTaskStatusMutation, 
    useCreateTaskMutation, 
    useSearchQuery,
    useGetUsersQuery, 
    useGetTeamsQuery,
    useGetTasksByUserQuery } = api;