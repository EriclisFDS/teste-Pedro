import { Link } from "react-router-dom";
import { useState } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { Options } from "./options/options";


export default function Menu(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return(
        <div>
            <div className={`
                bg-gray-500
                h-16
                flex
                justify-start
                items-center
            `}>
                <Link to="#" className={`
                    ml-8
                    text-xl
                    bg-none
                `}>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={`
                bg-red-500
                w-64
                h-screen
                justify-center
                fixed
                top-0
                ${sidebar ? "left-0 duration-300" : "-left-full duration-700"}
            `}>
                <ul className="w-full items-center justify-center">
                    <li className={`
                        text-xl
                        h-14
                        w-14
                        flex
                        justify-center
                        items-center
                        hover:bg-blue-500
                    `}>
                        <Link to="#" className="">
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </Link>
                    </li>
                    {Options.map((item, index) => {
                        return (
                            <li key={index} className={`${item.cName}`}>
                                <Link to={item.path} className={`${item.cNameBtn}`}>
                                    {item.icon}
                                    <span className="ml-2">{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
        
    )
}