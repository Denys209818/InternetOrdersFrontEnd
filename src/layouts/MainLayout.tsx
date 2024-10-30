import { Outlet } from "react-router-dom";
import Header from "../components/custom/Header";

export const MainLayout: React.FC = () => {
    return (<>
        <Header />

        <Outlet />
    </>);
}