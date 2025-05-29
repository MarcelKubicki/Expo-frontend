import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { FaSun, FaMoon } from "react-icons/fa6";

import { useAuth } from "../../context/AuthProvider";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import UserNav from "../UserNav/UserNav";
import styles from "./PageNav.module.css";

function PageNav() {
  const { auth } = useAuth();
  const { isDark, setIsDark } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 990;

  if (isMobile)
    return (
      <>
        <header className={styles.headerMobile}>
          <div className={styles.basicHeaderMobile}>
            <button
              className={styles.menuBurger}
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              <MdOutlineMenu />
            </button>
            <Link
              to="/aboutUs"
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => setIsOpen(false)}
            >
              <h1>EXPO</h1>
            </Link>

            <button
              className={styles.themeBtn}
              onClick={() => setIsDark((theme) => !theme)}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </header>

        <nav className={`${styles.navMobile} ${isOpen ? styles.active : ""}`}>
          <NavLink
            to="/aboutUs"
            className={styles.navMobileOption}
            onClick={() => setIsOpen(false)}
          >
            <p>O nas</p>
          </NavLink>
          <NavLink
            to="/"
            className={styles.navMobileOption}
            onClick={() => setIsOpen(false)}
          >
            <p>Kalendarium</p>
          </NavLink>
          <NavLink
            to="/catalog"
            className={styles.navMobileOption}
            onClick={() => setIsOpen(false)}
          >
            <p>Katalog wystawców</p>
          </NavLink>

          <div>
            {auth?.username ? (
              <UserNav username={auth.username} />
            ) : (
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <button className={styles.loginBtn}>Zaloguj</button>
              </Link>
            )}
          </div>
        </nav>
      </>
    );

  return (
    <header className={styles.header}>
      <Link to="/aboutUs" style={{ textDecoration: "none", color: "black" }}>
        <h1>EXPO</h1>
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
