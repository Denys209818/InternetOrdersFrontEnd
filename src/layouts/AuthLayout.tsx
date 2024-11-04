import { Outlet } from "react-router-dom";
import Header from "../components/custom/Header";

export const AuthLayout: React.FC = () => {
    return (<>
        <Header />

        <Outlet />
    </>);
}