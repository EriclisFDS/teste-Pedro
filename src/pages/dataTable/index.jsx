import Menu from "../../components/Menu";
import TableComponent from "./tableComponent";

export default function DataTable(){
    return(
        <div>
            <Menu pageTitle={"List"}/>
            <TableComponent />
        </div>

    )
}