import styles from "./PageNotFound.module.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main className={styles.pageNotFound}>
      <p className={styles.title}>Oopsie!</p>
      <p className={styles.errorCode}>404 - Nie znaleziono strony</p>
      <Link to="/">
        <button>STRONA GŁÓWNA</button>
      </Link>
    </main>
  );
}

export default PageNotFound;
