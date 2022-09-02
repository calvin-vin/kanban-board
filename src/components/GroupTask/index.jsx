import { useState, useEffect } from "react";

import AddTaskIcon from "../../assets/AddTaskIcon";
import AuthServices from "../../services/auth";
import TaskServices from "../../services/task";
import Task from "../Task";
import ModalSave from "../ModalSave";
import ModalDelete from "../ModalDelete";

const GroupTask = () => {
  const [groupTask, setGroupTask] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const token = AuthServices.getToken();

    const getGroupTask = async () => {
      const res = await TaskServices.getGroupTasks(token);
      const data = await res.json();
      setGroupTask(data);
    };

    getGroupTask();
  }, []);

  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [groupId, setGroupId] = useState();
  const [currentTaskId, setCurrentTaskId] = useState();

  return (
    <>
      <div className="flex items-start mb-32">
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
                <Task
                  groupId={tasks.id}
                  isSubmitted={isSubmitted}
                  isDeleted={isDeleted}
                  setIsShowModalDelete={setIsShowModalDelete}
                  currentTaskId={currentTaskId}
                  setCurrentTaskId={setCurrentTaskId}
                  setGroupId={setGroupId}
                  isShowMenu={isShowMenu}
                  setIsShowMenu={setIsShowMenu}
                  isFirst={id === 0}
                  isLast={id === groupTask.length - 1}
                  isUpdated={isUpdated}
                  setIsUpdated={setIsUpdated}
                />
                <button
                  className="flex"
                  onClick={() => {
                    setGroupId(tasks.id);
                    setIsShowModal((isShowModal) => !isShowModal);
                  }}
                >
                  <AddTaskIcon />
                  <span className="text-xs leading-5 ml-2">New Task</span>
                </button>
              </div>
            );
          })}
      </div>

      <ModalSave
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        groupId={groupId}
        setIsSubmitted={setIsSubmitted}
      />

      <ModalDelete
        isShowModalDelete={isShowModalDelete}
        setIsShowModalDelete={setIsShowModalDelete}
        setIsDeleted={setIsDeleted}
        groupId={groupId}
        currentTaskId={currentTaskId}
        setIsShowMenu={setIsShowMenu}
      />
    </>
  );
};

export default GroupTask;
