'use client'

import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from 'next/link'
import { useDispatch } from "react-redux";
import { setIsSideBarCollapsed } from "@/state";

interface IconProps{
    label:string,
    Icon:LucideIcon,
    isCollapsed:boolean,
    href:string
}

const SideBarIcon = ({label, Icon, isCollapsed, href} : IconProps) =>{
    const pathName = usePathname();
    const dispatch = useDispatch();
    const isActive = pathName === href || (pathName === "/" && href === "/dashboard");
    const windownWidth = window.innerWidth;

    return (
        <Link href={href} className="w-full" onClick={() => dispatch(setIsSideBarCollapsed(false))}>
            <div className={`relative flex items-center gap-3 cursor-pointer transition-colors hover:bg-gray-100
            dark:bg-black dark:hover:bg-gray-700 px-6 py-3
                ${isActive? "bg-gray-100 text-white dark:bg-gray-600" : ""}`}>
                    {isActive&& <div className="absolute top-0 left-0 h-full w-[4px] bg-blue-400"/>}
                    <Icon className="w-6 h-6 text-gray-800 dark:text-white" />
                    <span className="font-medium text-gray-800 dark:text-gray-100">{label}</span>
            </div>
        </Link>
    )
}

export default SideBarIcon;