import React from "react";
import * as AiIcons from "react-icons/ai";

const navText = "flex justify-start items-center py-2 pr-0 list-none h-16 w-full"

const navText2 = "flex items-center text-white decoration-none text-lg w-full h-full py-0 px-4 rounded hover:bg-blue-500"

export const Options = [
    {
       title: "Dash",
       path: "/charts",
       icon: <AiIcons.AiOutlineBarChart/>,
       cName: navText,
       cNameBtn: navText2
    },
    {
        title: "List",
        path: "/dataTable",
        icon: <AiIcons.AiOutlineTable/>,
        cName: navText,
        cNameBtn: navText2
     }
]