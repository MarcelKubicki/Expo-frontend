import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [profileInfo, setProfileInfo] = useState({});

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, profileInfo, setProfileInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
