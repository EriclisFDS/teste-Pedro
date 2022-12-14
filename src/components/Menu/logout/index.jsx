import * as BiIcons from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Logout(){
    return(
        <div className="absolute bottom-8 left-6 ">
            <Link to="/" className="flex items-center" >
                <BiIcons.BiLogOut className="mr-2" />
                <span>Logout</span>
            </Link>
        </div>
    )
}