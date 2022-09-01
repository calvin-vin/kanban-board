const ProgressGoing = ({ percentage }) => {
  const num = "90";
  return (
    <div className="flex">
      {/* Bar */}
      <div className="bg-neutral-30 w-44 h-4 rounded-full mr-3">
        <div
          className={`bg-primary-main rounded-full h-full`}
          style={{ width: `${parseInt(percentage).toString()}%` }}
        ></div>
      </div>
      {/* Text */}
      <p className="percent text-xs leading-4 text-neutral-70">
        {parseInt(percentage)}%
      </p>
    </div>
  );
};

export default ProgressGoing;
