import { NavLink } from "react-router-dom";
import styles from "./AdminNav.module.css";
import { useAuth } from "../context/AuthProvider";

function AdminNav() {
  const { auth, handleLogout } = useAuth();

  return (
    <nav className={styles.adminNav}>
      <div className={styles.subpagesContainer}>
        <h1 className={styles.logo}>
          EXPO<span>adminPanel</span>
        </h1>
        <NavLink to="createEvent">Utwórz wydarzenie</NavLink>
        <NavLink to="profilesVerification">
          Weryfikacja profili wystawców
        </NavLink>
        <NavLink to="joinRequests">Prosby o dołączenie do wydarzenia</NavLink>
      </div>
      <div className={styles.accountContainer}>
        <div className={styles.profile}>
          <img src="/user.png" />
          <p>{auth.username}</p>
        </div>
        <button onClick={handleLogout}>Wyloguj</button>
      </div>
    </nav>
  );
}

export default AdminNav;
