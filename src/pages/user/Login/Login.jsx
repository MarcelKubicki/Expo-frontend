import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import axios from "../../../services/axios";
import styles from "./Login.module.css";

function Login() {
  const { setAuth, setProfileInfo } = useAuth();
  const userRef = useRef(null);
  const errRef = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
        "http://127.0.0.1:8000/api/v1/auth/login",
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const resProfile = await axios.get(
        `/exhibitors/user_profile/${res?.data?.user?.id}`
      );
      setProfileInfo(resProfile?.data);

      console.log(JSON.stringify(res?.data));
      console.log(JSON.stringify(resProfile?.data));

      const userId = Number(res?.data?.user?.id);
      const accessToken = res?.data?.access_token;
      const refreshToken = res?.data?.refresh_token;
      const roles = res?.data?.user?.roles;
      setAuth({ userId, username, password, roles, accessToken, refreshToken });

      console.log(username, password);
      setUsername("");
      setPassword("");

      if (roles.includes("admin")) {
        navigate("/adminPanel");
      } else {
        navigate(from, { replace: true });
      }
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
  );
}

export default Login;
