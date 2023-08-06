import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function BasicOutline() {

    return (
        <div>
            <NavBar />
            <Outlet />
        </div>

    )
}