import { useState, useEffect } from "react";

import TaskServices from "../../services/task";
import AuthServices from "../../services/auth";

import ProgressGoing from "../../assets/progress-bar/ProgressGoing";
import ProgressIncomplete from "../../assets/progress-bar/ProgressIncomplete";
import ProgressComplete from "../../assets/progress-bar/ProgressComplete";
import OptionIcon from "../../assets/OptionIcon";
import SeparatorIcon from "../../assets/SeparatorIcon";
import TrashIcon from "../../assets/sidebar/TrashIcon";
import MoveLeftIcon from "../../assets/sidebar/MoveLeftIcon";
import MoveRightIcon from "../../assets/sidebar/MoveRightIcon";
import EditIcon from "../../assets/sidebar/EditIcon";
import NoTask from "../NoTask/NoTask";

const Task = ({ groupId, isSubmitted }) => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    const token = AuthServices.getToken();

    const getTasks = async () => {
      const res = await TaskServices.getTasks(token, groupId);
      const data = await res.json();
      setTasks(data);
    };

    getTasks();
  }, [groupId, isSubmitted]);
  return (
    <div className="w-full">
      {tasks && !tasks.length && <NoTask />}
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task) => {
          return (
            <div
              className="mt-2 mb-3 bg-neutral-20 border border-neutral-40 rounded p-4 pb-5 w-full"
              key={task.id}
            >
              <div className="flex flex-col items-start">
                <p className="text-sm leading-6 text-neutral-90 font-bold text-start">
                  {task.name}
                </p>
                <div className="mt-2">
                  <SeparatorIcon />
                </div>
                <div className="flex justify-between items-center mt-3 w-full relative">
                  {!task.progress_percentage ? (
                    <ProgressIncomplete />
                  ) : task.progress_percentage >= 100 ? (
                    <ProgressComplete />
                  ) : (
                    <ProgressGoing percentage={task.progress_percentage} />
                  )}
                  <OptionIcon />
                  {/* Dropdown */}
                  {/* <div className="dropdown-menu">
            <ul>
              <li className="flex items-center mb-3 group">
                <MoveRightIcon />
                <span className="text-sm leading-6 font-semibold ml-[28px] group-hover:text-primary-main">
                  Move Right
                </span>
              </li>
              <li className="flex items-center mb-3 group">
                <MoveLeftIcon />
                <span className="text-sm leading-6 font-semibold ml-[28px] group-hover:text-primary-main">
                  Move Left
                </span>
              </li>
              <li className="flex items-center mb-3 group">
                <EditIcon />
                <span className="text-sm leading-6 font-semibold ml-[22px] group-hover:text-primary-main">
                  Edit
                </span>
              </li>
              <li className="flex items-center mb-3 group">
                <TrashIcon />
                <span className="text-sm leading-6 font-semibold ml-[22px] group-hover:text-danger-main">
                  Delete
                </span>
              </li>
            </ul>
          </div> */}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Task;
