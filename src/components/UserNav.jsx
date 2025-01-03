import { useState } from "react";
import styles from "./UserNav.module.css";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useAuth } from "../context/AuthProvider";

function UserNav({ username }) {
  const [extended, setExtended] = useState(false);
  const { setAuth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  async function handleLogout() {
    try {
      const res = await axiosPrivate.get("/auth/logout");
      console.log(res.data);
      setAuth({});
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      className={styles.userNavContainer}
      onClick={() => {
        setExtended((ext) => !ext);
      }}
    >
      <img src="/user.png" />
      {username}

      {extended && (
        <div className={styles.userNavPopup}>
          <Link className={styles.line} to="/profile">
            Podgląd profilu
          </Link>
          <Link className={styles.line}>Powiadomienia</Link>
          <div
            className={`${styles.line} ${styles.logout}`}
            onClick={handleLogout}
          >
            Wyloguj
          </div>
        </div>
      )}
    </div>
  );
}

export default UserNav;
