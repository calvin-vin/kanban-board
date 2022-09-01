const login = async (data) => {
  const res = await fetch(
    "https://todos-project-api.herokuapp.com/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return res;
};

const register = async (data) => {
  const res = await fetch("https://todos-project-api.herokuapp.com/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res;
};

const AuthServices = {
  login,
  register,
};

export default AuthServices;
