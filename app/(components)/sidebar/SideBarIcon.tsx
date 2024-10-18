import { Icon, Link, LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

interface IconProps{
    label:string,
    Icon:LucideIcon,
    isCollapsed:boolean,
    href:string
}

const SideBarIcon = ({label, Icon, isCollapsed, href} : IconProps) =>{
    const pathName = usePathname();
    const isActive = pathName === href || (pathName === "/" && href === "/dashboard");
    const windownWidth = window.innerWidth;

    return (
        <Link href={href} className="w-full">
            <div className={`relative flex items-center gap-3 cursor-pointer transition-colors hover:bg-gray-100
            dark:bg-black dark:hover:bg-gray-700 
                ${isActive? "bg-gray-100 text-white dark:bg-gray-600 border-l-2 border-l-blue-400" : ""}`}>
                    <Icon className="w-6 h-6 text-gray-800 dark:text-white" />
                    <span className="font-medium text-gray-800 dark:text-gray-100">{label}</span>
            </div>
        </Link>
    )
}

export default SideBarIcon;