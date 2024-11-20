import { Route, Navigate, createRoutesFromElements, createHashRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { adminRoutes, authRoutes, mainRoutes, menuRoutes } from "./routes/routes";
import { AuthLayout } from "./layouts/AuthLayout";
import { MenuLayout } from "./layouts/MenuLayout";
import NotFountPage from "./components/NotFoundPage";
import { AggregationLayout } from "./layouts/AggregationLayout";
import { Suspense } from "react";
import Loader from "./components/custom/Loader/Loader";

export const Root: React.FC = () => {
    const routes = createRoutesFromElements(
      <>
        <Route path='/admin' element={<MainLayout />}>
          {adminRoutes.map((el, ind) => {
            return (
              <Route
                path={el.path}
                element={<el.component />}
                key={'adminRoute' + ind}
              />)
          })}
        </Route>

        <Route path='/auth' element={<AuthLayout />}>
          {authRoutes.map((el, ind) => {
            return (
              <Route
                path={el.path}
                element={<el.component />}
                key={'authRoute' + ind}
              />)
          })}
          <Route index element={<Navigate to={'login'} />} />
        </Route>

        <Route path='/' element={<AggregationLayout />}>
          <Route element={<MainLayout />}>
            {mainRoutes.map((el, ind) => {
              return (
                <Route
                  path={el.path}
                  element={<el.component />}
                  key={'mainRoute' + ind}
                  loader={el.loader}
                />)
            })}
          </Route>

          <Route element={<MenuLayout />}>
            {menuRoutes.map((el, ind) => {
              return (
                <Route
                  path={el.path}
                  element={<el.component />}
                  key={'menuRoute' + ind}
                />)
            })}
          </Route>

          <Route path="*" element={<NotFountPage />} />
        </Route>
      </>
    );

    const router = createHashRouter(routes);

    return (
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    );
}