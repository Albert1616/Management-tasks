import { Priority } from "@/state/api";
import { AlertCircle, AlertOctagon, AlertTriangle, Briefcase, Home, Layers3, Search, Settings, ShieldAlert, User, Users } from "lucide-react";

export const links_sidebar = [
    {
        "label": "Home",
        "href": "/",
        "icon": Home,
    },
    {
        "label": "Timeline",
        "href": "/timeline",
        "icon": Briefcase,
    },
    {
        "label": "Search",
        "href": "/search",
        "icon": Search,
    },
    {
        "label": "Settings",
        "href": "/settings",
        "icon": Settings,
    },
    {
        "label": "Users",
        "href": "/users",
        "icon": User,
    },
    {
        "label": "Teams",
        "href": "/teams",
        "icon": Users,
    },
];

export const lst_priorities = [
    {
        "label":"Urgent",
        "icon":AlertCircle,
        "href":`/priorityPage/${Priority.Urgent}`
    },
    {
        "label":"High",
        "icon":ShieldAlert,
        "href":`/priorityPage/${Priority.High}`
    },
    {
        "label":"Medium",
        "icon":AlertTriangle,
        "href":`/priorityPage/${Priority.Medium}`
    },
    {
        "label":"Low",
        "icon":AlertOctagon,
        "href":`/priorityPage/${Priority.Low}`
    },
    {
        "label":"Backlog",
        "icon":Layers3,
        "href":`/priorityPage/${Priority.Backlog}`
    },

]