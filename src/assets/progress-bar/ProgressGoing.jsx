const ProgressGoing = ({ percentage }) => {
  return (
    <div className="flex w-full">
      {/* Bar */}
      <div className="bg-neutral-30 w-full max-w-[172px] h-4 rounded-full mr-3">
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
