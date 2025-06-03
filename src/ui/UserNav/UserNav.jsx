import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../context/AuthProvider";
import styles from "./UserNav.module.css";

function UserNav({ username }) {
  const { handleLogout } = useAuth();

  return (
    <div className={styles.userNavContainer}>
      <div className={styles.userNavTrigger}>
        <FaUserCircle />
        <span>{username}</span>
      </div>

      <div className={styles.userNavPopup}>
        <Link className={styles.line} to="/profile">
          Podgląd profilu
        </Link>
        <Link to="/notifications" className={styles.line}>
          Powiadomienia
        </Link>
        <div
          className={`${styles.line} ${styles.logout}`}
          onClick={handleLogout}
        >
          Wyloguj
        </div>
      </div>
    </div>
  );
}

export default UserNav;
