import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useUnauth = (token) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token, navigate]);
};

export default useUnauth;
