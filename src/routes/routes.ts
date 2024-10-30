import React from "react";

export interface RouteType {
    path: string;
    component: React.FC<any>
}

const MainPage = React.lazy(() => import("../components/MainPage"));
const CatalogPage = React.lazy(() => import("../components/CatalogPage"));
const CardPage = React.lazy(() => import("../components/CardPage"));
const AuthPage = React.lazy(() => import("../components/AuthPage"));

const LoginPageAdmin = React.lazy(() => import("../components/admin/LoginPage"));
const MainPageAdmin = React.lazy(() => import("../components/admin/MainPage"));

export const mainRoutes: RouteType[] = [
    { path: '/catalog', component: CatalogPage },
    { path: '/product', component: CardPage },
    { path: '/auth', component: AuthPage },
    { path: '/', component: MainPage },
];

export const adminRoutes: RouteType[] = [
    { path: 'login', component: LoginPageAdmin },
    { path: '', component: MainPageAdmin },
];