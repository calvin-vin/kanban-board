const ProgressGoing = ({ percentage }) => {
  return (
    <div className="flex">
      {/* Bar */}
      <div className="bg-neutral-30 w-44 h-4 rounded-full mr-3">
        <div
          className={`bg-primary-main rounded-full w-[${percentage}%] h-full`}
        ></div>
      </div>
      {/* Text */}
      <p className="percent text-xs leading-4 text-neutral-70">30%</p>
    </div>
  );
};

export default ProgressGoing;
