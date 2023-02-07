import { Route, Routes } from "react-router-dom";
import { MenuOption } from "../app/App";
import { Suspense, lazy } from "react";

type AppRouterProps = {
  menuOptions: MenuOption[];
};
export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes></Routes>
    </Suspense>
  );
}
