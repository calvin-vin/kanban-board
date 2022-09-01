import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { TokenContext } from "../../App";
import AuthServices from "../../services/auth";

import Loader from "../../components/Loader";

const Register = ({ setToken }) => {
  const token = useContext(TokenContext);
  useAuth(token);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    pasword_confirmation: "",
  });
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading((isLoading) => !isLoading);
    const response = await AuthServices.register(formData);
    const json = await response.json();
    if (!response.ok) {
      setError(json.message);
    } else {
      setToken(json.auth_token);
    }
    setIsLoading((isLoading) => !isLoading);
  };

  return (
    <div className="bg-dark-main h-screen flex flex-col md:flex-row">
      {/* Site Logo */}
      <div className="w-1/2 md:h-screen flex m-auto">
        <h1 className="text-primary-main text-5xl font-semibold m-auto">
          To-Do List
        </h1>
      </div>
      {/* Form */}
      <div className="w-2/3 md:w-1/2 flex md:bg-dark m-auto md:h-screen">
        <form
          className="bg-dark-main w-full md:w-80 h-auto m-auto px-14 pt-8 pb-16 rounded"
          onSubmit={handleSubmit}
        >
          <h2 className="text-primary-main text-center text-xl mb-4">
            Register
          </h2>
          {/* error message */}
          {error && (
            <p className="text-danger-border text-center mb-4">{error}</p>
          )}
          <div className="mb-4">
            <input
              type="text"
              autoComplete="off"
              className="rounded outline-none py-1 px-2 bg-transparent border-primary-main border-b-2 placeholder:text-white placeholder:opacity-60 text-white w-full"
              placeholder="name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              autoComplete="off"
              className="rounded outline-none py-1 px-2 bg-transparent border-primary-main border-b-2 placeholder:text-white placeholder:opacity-60 text-white w-full"
              placeholder="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="rounded outline-none py-1 px-2 bg-transparent border-primary-main border-b-2 placeholder:text-white placeholder:opacity-60 text-white w-full"
              placeholder="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="rounded outline-none py-1 px-2 bg-transparent border-primary-main border-b-2 placeholder:text-white placeholder:opacity-60 text-white w-full"
              placeholder="password confirmation"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password_confirmation: e.target.value,
                })
              }
            />
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <button
              type="submit"
              className="bg-primary-main text-sm text-white w-full rounded mt-4 py-1 font-bold hover:opacity-90"
            >
              Register
            </button>
          )}
          <p className="text-white text-xs text-center mt-2">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
