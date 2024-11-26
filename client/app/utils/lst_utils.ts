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
        "href":"/urgent"
    },
    {
        "label":"High",
        "icon":ShieldAlert,
        "href":"/high"
    },
    {
        "label":"Medium",
        "icon":AlertTriangle,
        "href":"/medium"
    },
    {
        "label":"Low",
        "icon":AlertOctagon,
        "href":"/low"
    },
    {
        "label":"Backlog",
        "icon":Layers3,
        "href":"/backlog"
    },

]