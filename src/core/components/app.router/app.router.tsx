import { Route, Routes } from "react-router-dom";
import { MenuOption } from "../app/App";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("../../../features/home/page/home"));

type AppRouterProps = {
  menuOptions: MenuOption[];
};
export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
      </Routes>
    </Suspense>
  );
}
