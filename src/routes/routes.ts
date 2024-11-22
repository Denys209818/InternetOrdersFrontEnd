import React from "react";
import { сatalogLoader } from "../components/CatalogPage/loaders/CatalogLoader";

export interface RouteType {
    path: string;
    component: React.FC<any>;
    loader?: () => any; 
}

const MainPage = React.lazy(() => import("../components/MainPage"));
const CatalogPage = React.lazy(() => import("../components/CatalogPage"));
const CardPage = React.lazy(() => import("../components/CardPage"));
const MenuPage = React.lazy(() => import("../components/MenuPage"));
const AuthPage = React.lazy(() => import("../components/AuthPage"));
const OrderPage = React.lazy(() => import("../components/OrderPage"));

const LoginPageAdmin = React.lazy(() => import("../components/admin/LoginPage"));
const MainPageAdmin = React.lazy(() => import("../components/admin/MainPage"));

export const mainRoutes: RouteType[] = [
    { path: '/catalog', component: CatalogPage, loader: сatalogLoader },
    { path: '/product', component: CardPage },
    { path: '/order', component: OrderPage },
    { path: '/', component: MainPage },
];

export const menuRoutes: RouteType[] = [
    { path: '/menu', component: MenuPage },
];

export const authRoutes: RouteType[] = [
    { path: ':modeType', component: AuthPage },
];

export const adminRoutes: RouteType[] = [
    { path: 'login', component: LoginPageAdmin },
    { path: '', component: MainPageAdmin },
];