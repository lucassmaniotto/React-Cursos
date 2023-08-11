import { Outlet } from "react-router-dom";
import { Nav } from "../../components/Nav";

export const DefaultPage = () => {
  return (
    <main>
      <Nav />
      <Outlet />
    </main>
  );
};
