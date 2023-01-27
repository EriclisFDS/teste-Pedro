import { Link } from "react-router-dom";
import { useState } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { Options } from "./options/options";
import Logout from "./logout";


export default function Menu({ pageTitle }){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [currentTitle, setCurrentTitle] = useState(`${pageTitle}`);
    return(
        <div className="sticky top-0 z-40">
            <div className={`
                bg-stone-900
                h-16
                flex
                justify-start
                items-center
            `}>
                <Link to="#" onClick={showSidebar} className={`
                    ml-8
                    text-xl
                    bg-none
                    text-white
                    hover:bg-blue-500
                    p-5
                `}>
                    <FaIcons.FaBars />
                </Link>
                <h1 className="mx-auto text-white text-xl">
                    {currentTitle}
                </h1>
            </div>
            <nav className={`
                bg-stone-900
                w-64
                h-screen
                justify-center
                fixed
                top-0
                z-50
                ${sidebar ? "left-0 duration-300" : "-left-full duration-700"}
            `}>
                <ul className="w-full">
                    <li onClick={showSidebar} className={`
                        text-xl
                        h-14
                        w-14
                        flex
                        justify-center
                        items-center
                        hover:bg-blue-500
                        ml-7
                    `}>
                        <Link to="#" className="text-white">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {Options.map((item, index) => {
                        return (
                            <li key={index} className={`${item.cName}`}>
                                <Link to={item.path} className={`${item.cNameBtn}`} >
                                    {item.icon}
                                    <span className="ml-2">{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Logout/>
            </nav>
        </div>
        
    )
}