import { Outlet } from "react-router-dom";
import Header from "../components/custom/Header";
import { Suspense } from "react";
import Loader from "../components/custom/Loader";

export const AggregationLayout: React.FC = () => {
    return (<>
        <Header />

        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    </>);
}