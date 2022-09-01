import { useState, useEffect } from "react";

import AddTaskIcon from "../../assets/AddTaskIcon";
import AuthServices from "../../services/auth";
import TaskServices from "../../services/task";
import Task from "../Task";

const GroupTask = () => {
  const [groupTask, setGroupTask] = useState();
  const [task, setTask] = useState();

  useEffect(() => {
    const token = AuthServices.getToken();

    const getGroupTask = async () => {
      const res = await TaskServices.getGroupTasks(token);
      const data = await res.json();
      setGroupTask(data);
    };

    getGroupTask();
  }, []);

  return (
    <div className="flex">
      {groupTask &&
        groupTask.map((tasks, id) => {
          let bg, border, text;
          if (id % 4 === 0) {
            bg = "bg-primary-surface";
            border = "border-primary-main";
            text = "text-primary-main";
          } else if (id % 4 === 1) {
            bg = "bg-secondary-surface";
            border = "border-secondary-border";
            text = "text-secondary-main";
          } else if (id % 4 === 2) {
            bg = "bg-danger-surface";
            border = "border-danger-border";
            text = "text-danger-main";
          } else if (id % 4 === 3) {
            bg = "bg-success-surface";
            border = "border-success-border";
            text = "text-success-main";
          }
          return (
            <div
              className={`mt-20 w-full sm:w-3/4 md:w-2/4 lg:w-1/4 mx-3 flex flex-col items-start ${bg} border ${border} p-4 pt-[18px] rounded`}
              key={tasks.id}
            >
              <h2
                className={`${bg} border ${border} py-[2px] px-2 rounded text-xs leading-5 ${text} inline`}
              >
                {tasks.title}
              </h2>
              <h3 className="mt-2 font-bold">{tasks.description}</h3>
              <Task />
              <div className="flex">
                <AddTaskIcon />
                <span className="text-xs leading-5 ml-2">New Task</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default GroupTask;
