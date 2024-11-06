import { Outlet } from "react-router-dom";
import Header from "../components/custom/Header";

export const MenuLayout: React.FC = () => {
    return (<>
        <Header />

        <Outlet />
    </>);
}