import { createContext, useContext, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [profileInfo, setProfileInfo] = useState({});
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
    <AuthContext.Provider
      value={{ auth, setAuth, profileInfo, setProfileInfo, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
