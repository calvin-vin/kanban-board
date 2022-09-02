import { useState, useEffect } from "react";

import AuthServices from "../../services/auth";
import TaskServices from "../../services/task";
import { getColor } from "../../utils/getColor";

import AddTaskIcon from "../../assets/AddTaskIcon";
import Task from "../Task";
import ModalSave from "../ModalSave";
import ModalDelete from "../ModalDelete";

const GroupTask = () => {
  const [groupTask, setGroupTask] = useState();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);

  const [groupId, setGroupId] = useState();
  const [currentTaskId, setCurrentTaskId] = useState();

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
    <>
      <div className="flex flex-col md:flex-row items-start mb-32 pt-20 px-10 md:px-0">
        {groupTask &&
          groupTask.map((tasks, id) => {
            let { bg, border, text } = getColor(id);
            return (
              <div
                className={`w-full sm:3/4 md:w-2/4 lg:w-1/4 mb-3 md:mb-0 flex flex-col items-start ${bg} border ${border} p-4 pt-[18px] rounded md:mx-2`}
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
                  setGroupId={setGroupId}
                  currentTaskId={currentTaskId}
                  setCurrentTaskId={setCurrentTaskId}
                  isShowMenu={isShowMenu}
                  setIsShowMenu={setIsShowMenu}
                  isFirst={id === 0}
                  isLast={id === groupTask.length - 1}
                  isSubmitted={isSubmitted}
                  isDeleted={isDeleted}
                  isUpdated={isUpdated}
                  setIsUpdated={setIsUpdated}
                  setIsShowModal={setIsShowModal}
                  setIsShowModalDelete={setIsShowModalDelete}
                />
                <button
                  className="flex"
                  onClick={() => {
                    setGroupId(tasks.id);
                    setCurrentTaskId(null);
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
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        groupId={groupId}
        currentTaskId={currentTaskId}
        setIsShowMenu={setIsShowMenu}
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
