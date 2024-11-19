import { Suspense } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { adminRoutes, authRoutes, mainRoutes, menuRoutes } from "./routes/routes";
import { AuthLayout } from "./layouts/AuthLayout";
import { MenuLayout } from "./layouts/MenuLayout";
import NotFountPage from "./components/NotFoundPage";

export const Root: React.FC = () => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <HashRouter>
              <Routes>
                <Route path='/admin' element={<MainLayout />}>
                    {adminRoutes.map((el, ind) => {
                      return (
                        <Route 
                          path={el.path}
                          element={<el.component/>}
                          key={'adminRoute' + ind}
                        />)
                    })}
                </Route>

                <Route path='/auth' element={<AuthLayout />}>
                    {authRoutes.map((el, ind) => {
                      return (
                        <Route 
                          path={el.path}
                          element={<el.component/>}
                          key={'authRoute' + ind}
                        />)
                    })}
                    <Route index element={<Navigate to={'login'} />} />
                </Route>
                
                <Route path='/' element={<MainLayout />}>
                  {mainRoutes.map((el, ind) => {
                    return (
                      <Route 
                        path={el.path}
                        element={<el.component/>}
                        key={'mainRoute' + ind}
                      />)
                  })}
                </Route>

                <Route path='/' element={<MenuLayout />}>
                  {menuRoutes.map((el, ind) => {
                    return (
                      <Route 
                        path={el.path}
                        element={<el.component/>}
                        key={'menuRoute' + ind}
                      />)
                  })}
                </Route>

                <Route path="*" element={<NotFountPage />} />
              </Routes>
            </HashRouter>
        </Suspense>
    );
}