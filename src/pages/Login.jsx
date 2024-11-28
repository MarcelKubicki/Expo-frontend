import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
function Login() {
  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email</label>
          <input type="email" />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Hasło</label>
          <input type="password" />
        </div>
        <button>Zaloguj się</button>
      </form>
    </main>
  );
}

export default Login;
