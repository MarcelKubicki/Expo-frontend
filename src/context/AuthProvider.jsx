import { createContext, useContext, useState } from "react";
import { useAxiosPrivate } from "../hooks/useAxiosPrivate";
import axios from "../services/axios";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [profileInfo, setProfileInfo] = useState({});
  const axiosPrivate = useAxiosPrivate();

  async function handleLogout() {
    try {
      const res = await axios.get("/auth/logout", {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      });
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
