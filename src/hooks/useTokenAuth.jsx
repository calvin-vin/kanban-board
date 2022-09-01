import { useEffect } from "react";

const useTokenAuth = (setToken) => {
  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    if (userToken) {
      setToken(userToken);
    }
  }, [setToken]);
};

export default useTokenAuth;
