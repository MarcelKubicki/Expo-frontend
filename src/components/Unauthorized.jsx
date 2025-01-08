import styles from "./Unauthorized.module.css";
import { useNavigate } from "react-router-dom";

function Unauthorized() {
  const navigate = useNavigate();

  return (
    <main className={styles.unauthorized}>
      <div>
        <p className={styles.title}>HALT!</p>
        <p className={styles.description}>
          Nie masz tu wstępu koleszko, wracaj skąd przybyłeś
        </p>

        <button onClick={() => navigate(-1)}>POWRÓT</button>
      </div>
      <img src="/halt.svg" />
    </main>
  );
}

export default Unauthorized;
