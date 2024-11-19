import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export const MainLayout: React.FC = () => {
    return (<>
        <Outlet />

        <Footer />
    </>);
}