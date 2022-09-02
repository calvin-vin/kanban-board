import IncompleteIcon from "./IncompleteIcon";

const ProgressIncomplete = () => {
  return (
    <div className="flex w-full">
      {/* Bar */}
      <div className="bg-neutral-30 w-full max-w-[172px] h-4 rounded-full mr-3">
        <div className={`bg-danger-main rounded-full w-[40%] h-full`}></div>
      </div>
      {/* Icon */}
      <IncompleteIcon />
    </div>
  );
};

export default ProgressIncomplete;
