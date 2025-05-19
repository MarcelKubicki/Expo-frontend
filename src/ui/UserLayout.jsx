import { Outlet } from "react-router-dom";
import PageNav from "./PageNav/PageNav";

function UserLayout() {
  return (
    <>
      <PageNav />
      <Outlet />
    </>
  );
}

export default UserLayout;
