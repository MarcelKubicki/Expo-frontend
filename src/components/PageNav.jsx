import { Link, NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.header}>
      <h1 style={{ fontSize: "40px" }}>EXPO</h1>
      <div className={styles.nav}>
        <NavLink to="/" className={styles.navOption}>
          <p>Kalendarium</p>
        </NavLink>
        <NavLink to="/aboutUs" className={styles.navOption}>
          <p>O nas</p>
        </NavLink>
        <div>
          <Link to="/login">
            <button className={styles.loginBtn}>Zaloguj</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default PageNav;
