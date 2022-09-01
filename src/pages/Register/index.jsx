const Register = () => {
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
        <form className="bg-dark-main w-full md:w-80 h-auto m-auto px-14 pt-8 pb-16 rounded">
          <h2 className="text-primary-main text-center text-xl mb-4">
            Register
          </h2>
          <div className="mb-4">
            <input
              type="text"
              autoComplete="off"
              className="rounded outline-none py-1 px-2 bg-transparent border-primary-main border-b-2 placeholder:text-white placeholder:opacity-60 text-white w-full"
              placeholder="name"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              autoComplete="off"
              className="rounded outline-none py-1 px-2 bg-transparent border-primary-main border-b-2 placeholder:text-white placeholder:opacity-60 text-white w-full"
              placeholder="email"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="rounded outline-none py-1 px-2 bg-transparent border-primary-main border-b-2 placeholder:text-white placeholder:opacity-60 text-white w-full"
              placeholder="password"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="rounded outline-none py-1 px-2 bg-transparent border-primary-main border-b-2 placeholder:text-white placeholder:opacity-60 text-white w-full"
              placeholder="password confirmation"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-main text-sm text-white w-full rounded mt-4 py-1 font-bold hover:opacity-90 disabled:cursor-not-allowed"
          >
            Register
          </button>
          <p className="text-white text-xs text-center mt-2">
            Already have an account?{" "}
            <button to="/login" className="font-semibold">
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
