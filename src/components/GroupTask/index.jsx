import AddTaskIcon from "../../assets/AddTaskIcon";
import Task from "../Task";

const GroupTask = () => {
  return (
    <div className="flex">
      <div className="w-full sm:w-3/4 md:w-2/4 lg:w-1/4 mx-3 flex flex-col items-start bg-primary-surface border border-primary-main p-4 pt-[18px] rounded">
        <h2 className="bg-primary-surface border border-primary-main py-[2px] px-2 rounded text-xs leading-5 text-primary-main inline">
          Group Task 1
        </h2>
        <h3 className="mt-2 font-bold">Januari - March</h3>
        <Task />
        <div className="flex">
          <AddTaskIcon />
          <span className="text-xs leading-5 ml-2">New Task</span>
        </div>
      </div>
    </div>
  );
};

export default GroupTask;
