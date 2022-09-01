import IncompleteIcon from "./IncompleteIcon";

const ProgressIncomplete = ({ percentage }) => {
  return (
    <div className="flex">
      {/* Bar */}
      <div className="bg-neutral-30 w-44 h-4 rounded-full mr-3">
        <div
          className={`bg-danger-main rounded-full w-[${percentage}%] h-full`}
        ></div>
      </div>
      {/* Icon */}
      <IncompleteIcon />
    </div>
  );
};

export default ProgressIncomplete;
