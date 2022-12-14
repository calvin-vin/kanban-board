const login = async (data) => {
  const res = await fetch(`${process.env.REACT_APP_URL_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res;
};

const register = async (data) => {
  const res = await fetch(`${process.env.REACT_APP_URL_API}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res;
};

const logout = () => {
  localStorage.removeItem("token");
  return (window.location.href = "/login");
};

const getToken = () => {
  return JSON.parse(localStorage.getItem("token"));
};

const AuthServices = {
  login,
  register,
  logout,
  getToken,
};

export default AuthServices;
