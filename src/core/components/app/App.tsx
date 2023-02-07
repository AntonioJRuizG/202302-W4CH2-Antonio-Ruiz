import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import { Footer } from "../footer/footer";
import { Form1 } from "../form/form1";
import "./App.scss";
import { AppRouter } from "../app.router/app.router";

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: "Inicio", path: "/home" },
  { label: "Tareas", path: "/tasks" },
  { label: "Acerca de", path: "/about" },
];

export function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu options={menuOptions}></Menu>
      <Form1></Form1>
      <AppRouter menuOptions={menuOptions}></AppRouter>

      <Footer></Footer>
    </div>
  );
}
