import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useEffect, useRef, useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import axios from "../axios";

function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef(null);
  const errRef = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [succes, setSuccess] = useState(false);

  useEffect(function () {
    userRef.current.focus();
  }, []);

  useEffect(
    function () {
      setErrMsg("");
    },
    [username, password]
  );

  async function handleSubmint(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        "/auth",
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(res?.data));
      const accessToken = res?.data?.accessToken;
      const roles = res?.data?.roles;
      setAuth({ username, password, roles, accessToken });
      console.log(username, password);
      setUsername("");
      setPassword("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  }

  return (
    <>
      <PageNav />
      <main className={styles.login}>
        <form className={styles.form} onSubmit={handleSubmint}>
          <h2>Logowanie</h2>

          <p className={errMsg ? styles.errMsg : styles.invisible} ref={errRef}>
            {errMsg}
          </p>

          <div className={styles.row}>
            <label htmlFor="username">Nazwa uzytkownika:</label>
            <input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              ref={userRef}
              autoComplete="off"
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="password">Hasło:</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button>Zaloguj się</button>

          <p className={styles.question}>Nie posiadasz jeszcze konta?</p>
          <Link to="/register">
            <p className={styles.question}>Zarejestruj sie</p>
          </Link>
        </form>
      </main>
    </>
  );
}

export default Login;
