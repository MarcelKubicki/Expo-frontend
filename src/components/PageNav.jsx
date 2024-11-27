import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.header}>
      <h1 style={{ fontSize: "40px" }}>EXPO</h1>
      <div className={styles.nav}>
        <div className={styles.navOption}>
          <p>Kalendarium</p>
        </div>
        <div className={styles.navOption}>
          <p>O nas</p>
        </div>
        <div className={styles.logiOption}>
          <button className={styles.loginBtn}>Login</button>
        </div>
      </div>
    </nav>
  );
}

export default PageNav;
