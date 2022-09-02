import CompleteIcon from "./CompleteIcon";

const ProgressComplete = () => {
  return (
    <div className="flex w-full">
      {/* Bar */}
      <div className="bg-neutral-30 w-full max-w-[172px] h-4 rounded-full mr-3">
        <div className="bg-success-main rounded-full w-full h-full"></div>
      </div>
      {/* Icon */}
      <CompleteIcon />
    </div>
  );
};

export default ProgressComplete;
