import { useAuth } from "../context/AuthProvider";
import { axiosPrivate } from "../services/axios";
import { useRefreshToken } from "./useRefreshToken";
import { useEffect } from "react";

export function useAxiosPrivate() {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(
    function () {
      const requestIntercept = axiosPrivate.interceptors.request.use(
        (config) => {
          if (!config.headers["Authorization"]) {
            config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
          }
          return config;
        },
        (err) => Promise.reject(err)
      );

      const responseIntercept = axiosPrivate.interceptors.response.use(
        (response) => response,
        async (err) => {
          const prevRequest = err?.config;
          if (err?.response?.status === 403 && !prevRequest?.sent) {
            prevRequest.sent = true;
            const newAccessToken = await refresh();
            prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
            return axiosPrivate(prevRequest);
          }
          return Promise.reject(err);
        }
      );

      return () => {
        axiosPrivate.interceptors.request.eject(requestIntercept);
        axiosPrivate.interceptors.response.eject(responseIntercept);
      };
    },
    [auth, refresh]
  );

  return axiosPrivate;
}
