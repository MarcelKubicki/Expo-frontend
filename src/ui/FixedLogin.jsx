import { useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import { useAuth } from "../context/AuthProvider";
import { Outlet } from "react-router-dom";

function FixedLogin() {
  const { auth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();

  useEffect(function () {
    async function refreshTokenVerify() {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (!auth?.accessToken) {
      refreshTokenVerify();
    } else {
      setIsLoading(false);
    }
  }, []);

  return <>{isLoading ? <p>Loading</p> : <Outlet />}</>;
}

export default FixedLogin;
