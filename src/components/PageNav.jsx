import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import styles from "./PageNav.module.css";
import UserNav from "./UserNav";

function PageNav() {
  const { auth } = useAuth();

  return (
    <nav className={styles.header}>
      <Link to="/aboutUs" style={{ textDecoration: "none", color: "black" }}>
        <h1 style={{ fontSize: "40px" }}>EXPO</h1>
      </Link>
      <div className={styles.nav}>
        <NavLink to="/aboutUs" className={styles.navOption}>
          <p>O nas</p>
        </NavLink>
        <NavLink to="/" className={styles.navOption}>
          <p>Kalendarium</p>
        </NavLink>
        <NavLink to="/catalog" className={styles.navOption}>
          <p>Katalog wystawców</p>
        </NavLink>

        <div>
          {auth?.username ? (
            <UserNav username={auth.username} />
          ) : (
            <Link to="/login">
              <button className={styles.loginBtn}>Zaloguj</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default PageNav;
