import { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { adminRoutes, authRoutes, mainRoutes } from "./routes/routes";
import { AuthLayout } from "./layouts/AuthLayout";

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
              </Routes>
            </HashRouter>
        </Suspense>
    );
}