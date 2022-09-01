import AuthServices from "../../services/auth";

const Header = () => {
  return (
    <div className="shadow w-full h-16 flex items-center justify-between mb-6 fixed">
      <h1 className="text-lg leading-7 text-neutral-100 font-bold py-[18px] px-5">
        Product Roadmap
      </h1>
      <button
        onClick={AuthServices.logout}
        className="px-4 py-1 shadow rounded-lg text-sm leading-6 font-bold text-neutral-10 bg-primary-main mr-2.5"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
