import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import styles from "./PageNav.module.css";
import UserNav from "./UserNav";
import { useDarkMode } from "../hooks/useDarkMode";
import { FaSun, FaMoon } from "react-icons/fa6";

function PageNav() {
  const { auth } = useAuth();
  const { isDark, setIsDark } = useDarkMode();

  return (
    <header className={styles.header}>
      <Link to="/aboutUs" style={{ textDecoration: "none", color: "black" }}>
        <h1 style={{ fontSize: "40px" }}>EXPO</h1>
      </Link>

      <nav className={styles.nav}>
        <NavLink to="/aboutUs" className={styles.navOption}>
          <p>O nas</p>
        </NavLink>
        <NavLink to="/" className={styles.navOption}>
          <p>Kalendarium</p>
        </NavLink>
        <NavLink to="/catalog" className={styles.navOption}>
          <p>Katalog wystawców</p>
        </NavLink>

        <button
          className={styles.themeBtn}
          onClick={() => setIsDark((theme) => !theme)}
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>

        <div>
          {auth?.username ? (
            <UserNav username={auth.username} />
          ) : (
            <Link to="/login">
              <button className={styles.loginBtn}>Zaloguj</button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default PageNav;
