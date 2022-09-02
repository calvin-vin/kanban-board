import { useState, useEffect } from "react";

import TaskServices from "../../services/task";
import AuthServices from "../../services/auth";

import ProgressGoing from "../../assets/progress-bar/ProgressGoing";
import ProgressIncomplete from "../../assets/progress-bar/ProgressIncomplete";
import ProgressComplete from "../../assets/progress-bar/ProgressComplete";
import OptionIcon from "../../assets/OptionIcon";
import SeparatorIcon from "../../assets/SeparatorIcon";
import NoTask from "../NoTask/NoTask";
import DropdownMenu from "../DropdownMenu";

const Task = ({
  groupId,
  isSubmitted,
  isDeleted,
  setIsShowModalDelete,
  currentTaskId,
  setCurrentTaskId,
  setGroupId,
  isShowMenu,
  setIsShowMenu,
  isFirst,
  isLast,
  isUpdated,
  setIsUpdated,
  setIsShowModal,
}) => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    const token = AuthServices.getToken();

    const getTasks = async () => {
      const res = await TaskServices.getTasks(token, groupId);
      const data = await res.json();
      setTasks(
        data.sort(function (a, b) {
          return new Date(b.updated_at) - new Date(a.updated_at);
        })
      );
    };

    getTasks();
  }, [groupId, isSubmitted, isDeleted, isUpdated]);
  return (
    <div className="w-full">
      {tasks && !tasks.length && <NoTask />}
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task, id) => {
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
                  {task.progress_percentage === null ? (
                    <ProgressIncomplete />
                  ) : task.progress_percentage >= 100 ? (
                    <ProgressComplete />
                  ) : (
                    <ProgressGoing percentage={task.progress_percentage} />
                  )}
                  <button
                    onClick={() => {
                      setIsShowMenu((isShowMenu) => !isShowMenu);
                      setCurrentTaskId(task.id);
                      setGroupId(task.todo_id);
                    }}
                  >
                    <OptionIcon />
                  </button>
                  <DropdownMenu
                    isShowMenu={isShowMenu}
                    idTask={task.id}
                    groupId={groupId}
                    currentTaskId={currentTaskId}
                    setIsShowModalDelete={setIsShowModalDelete}
                    setIsShowMenu={setIsShowMenu}
                    isLast={isLast}
                    isFirst={isFirst}
                    setIsUpdated={setIsUpdated}
                    setIsShowModal={setIsShowModal}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Task;
