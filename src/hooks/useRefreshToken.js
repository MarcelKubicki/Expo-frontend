import axios from "../services/axios";
import { useAuth } from "../context/AuthProvider";

export function useRefreshToken() {
  const { auth, setAuth } = useAuth();

  async function refresh() {
    const res = await axios.get("auth/refresh_token", {
      headers: { Authorization: `Bearer ${auth?.refreshToken}` },
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(res.data.access_token);

      return { ...prev, access_token: res.data.access_token };
    });
    return res.data.access_token;
  }
  return refresh;
}
