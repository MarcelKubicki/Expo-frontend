import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import axios from "../axios";

const REGEX_USERNAME = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const REGEX_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
  const userRef = useRef(null);
  const errRef = useRef(null);

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [confPwd, setConfPwd] = useState("");
  const [validConfPwd, setValidConfPwd] = useState(false);
  const [confPwdFocus, setConfPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(function () {
    userRef.current.focus();
  }, []);

  useEffect(
    function () {
      const result = REGEX_USERNAME.test(username);
      console.log(`Valid username: ${result}`);
      console.log(`Username: ${username}`);
      setValidUsername(result);
    },
    [username]
  );

  useEffect(
    function () {
      setErrMsg("");
    },
    [username, password, confPwd]
  );

  useEffect(
    function () {
      const result = REGEX_PASSWORD.test(password);
      console.log(`Valid password: ${result}`);
      console.log(`Password: ${password}`);
      setValidPassword(result);
      const matchResult = password === confPwd;
      setValidConfPwd(matchResult);
    },
    [password, confPwd]
  );

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/signup",
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res.data);
      console.log(JSON.stringify(res));
      setSuccess(true);
      setUsername("");
      setPassword("");
      setConfPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username taken");
      } else {
        setErrMsg("Registration failed");
      }
      errRef.current.focus();
    }
  }

  return (
    <>
      <main className={styles.login}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Rejestracja</h2>

          <p className={errMsg ? styles.errMsg : styles.invisible} ref={errRef}>
            {errMsg}
          </p>

          <div className={styles.row}>
            <label htmlFor="username">Nazwa uzytkownika:</label>
            <input
              className={
                validUsername && username
                  ? styles.correct
                  : !validUsername && username
                  ? styles.incorrect
                  : ""
              }
              type="text"
              id="username"
              required
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              ref={userRef}
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
            />
            <p
              className={
                usernameFocus && username && !validUsername
                  ? styles.inputHint
                  : styles.invisible
              }
            >
              Wprowadz od 4 do 24 znakow <br />
              Musi zaczynac sie od litery <br />
            </p>
          </div>

          <div className={styles.row}>
            <label htmlFor="password">Hasło:</label>
            <input
              className={
                validPassword && password
                  ? styles.correct
                  : !validPassword && password
                  ? styles.incorrect
                  : ""
              }
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <p
              className={
                passwordFocus && !validPassword
                  ? styles.inputHint
                  : styles.invisible
              }
            >
              Wprowadz od 8 do 24 znakow <br />
              Musi zawierać wielkie i małe litery, cyfry i znaki specjalne{" "}
              <br />
              Dozwolone znaki specjalne: !@#$%
              <br />
            </p>
          </div>

          <div className={styles.row}>
            <label htmlFor="confirm_password">Zatwierdz Hasło:</label>
            <input
              className={
                validConfPwd && confPwd
                  ? styles.correct
                  : !validConfPwd && confPwd
                  ? styles.incorrect
                  : ""
              }
              type="password"
              id="confirm_password"
              required
              value={confPwd}
              onChange={(e) => setConfPwd(e.target.value)}
              onFocus={() => setConfPwdFocus(true)}
              onBlur={() => setConfPwdFocus(false)}
            />
            <p
              className={
                confPwdFocus && !validConfPwd
                  ? styles.inputHint
                  : styles.invisible
              }
            >
              Musi być zgodne z wprowadzonym wyzej hasłem
            </p>
          </div>

          <button
            disabled={
              !validUsername || !validPassword || !validConfPwd ? true : false
            }
          >
            Zarejestruj się
          </button>

          <p className={styles.question}>Posiadasz juz konto?</p>
          <Link to="/login">
            <p className={styles.question}>Zaloguj sie</p>
          </Link>
        </form>
      </main>
    </>
  );
}

export default Register;
