import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import styles from "./AdminPage.module.css";

function AdminPage() {
  return (
    <main className={styles.adminPage}>
      <AdminNav />
      <Outlet />
    </main>
  );
}

export default AdminPage;
