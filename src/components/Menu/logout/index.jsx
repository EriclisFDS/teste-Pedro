import * as BiIcons from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Logout(){
    return(
        <div className="absolute bottom-0 left-0 ">
            <Link to="/" className="flex items-center text-white hover:bg-blue-500 px-8 py-6" >
                <BiIcons.BiLogOut className="mr-2" />
                <span>Logout</span>
            </Link>
        </div>
    )
}