import { Outlet } from "react-router-dom";
import PageNav from "../components/PageNav";

function UserLayout() {
  return (
    <>
      <PageNav />
      <Outlet />
    </>
  );
}

export default UserLayout;
