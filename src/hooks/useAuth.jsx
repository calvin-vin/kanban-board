import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = (token) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (token) {
      return navigate("/");
    }
  }, [token, navigate]);
};

export default useAuth;
