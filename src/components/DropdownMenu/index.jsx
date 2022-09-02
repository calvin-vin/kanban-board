import { useState } from "react";

import TaskServices from "../../services/task";
import AuthServices from "../../services/auth";

import TrashIcon from "../../assets/sidebar/TrashIcon";
import MoveLeftIcon from "../../assets/sidebar/MoveLeftIcon";
import MoveRightIcon from "../../assets/sidebar/MoveRightIcon";
import EditIcon from "../../assets/sidebar/EditIcon";

const DropdownMenu = ({
  isShowMenu,
  idTask,
  currentTaskId,
  setIsShowModalDelete,
  isFirst,
  isLast,
  groupId,
  setIsShowMenu,
  setIsUpdated,
  setIsShowModal,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleMoveToRight = async () => {
    setIsLoading((isLoading) => !isLoading);
    const token = AuthServices.getToken();
    const response = await TaskServices.moveTaskToRight(
      token,
      groupId,
      currentTaskId
    );

    if (response.ok) {
      setIsUpdated((isUpdated) => !isUpdated);
    }
    setIsShowMenu((isShowMenu) => !isShowMenu);
    setIsLoading((isLoading) => !isLoading);
  };

  const handleMoveToLeft = async () => {
    setIsLoading((isLoading) => !isLoading);
    const token = AuthServices.getToken();
    const response = await TaskServices.moveTaskToLeft(
      token,
      groupId,
      currentTaskId
    );

    if (response.ok) {
      setIsUpdated((isUpdated) => !isUpdated);
    }
    setIsShowMenu((isShowMenu) => !isShowMenu);
    setIsLoading((isLoading) => !isLoading);
  };
  return (
    <>
      <div
        className={`absolute top-8 bg-white rounded pt-3.5 pb-[2px] px-6 w-full max-w-[320px] shadow z-10 ${
          isShowMenu && idTask === currentTaskId ? "block" : "hidden"
        }`}
      >
        <ul>
          <li className="mb-3">
            <button
              className="flex items-center group disabled:cursor-not-allowed"
              disabled={isLast || isLoading}
              onClick={handleMoveToRight}
            >
              <MoveRightIcon />
              <span className="text-sm leading-6 font-semibold ml-[28px] group-hover:text-primary-main group-disabled:text-neutral-70">
                Move Right
              </span>
            </button>
          </li>
          <li className="mb-3">
            <button
              className="flex items-center group disabled:cursor-not-allowed"
              disabled={isFirst || isLoading}
              onClick={handleMoveToLeft}
            >
              <MoveLeftIcon />
              <span className="text-sm leading-6 font-semibold ml-[28px] group-hover:text-primary-main group-disabled:text-neutral-70">
                Move Left
              </span>
            </button>
          </li>
          <li className="mb-3">
            <button
              className="flex items-center group"
              onClick={() => setIsShowModal((isShowModal) => !isShowModal)}
            >
              <EditIcon />
              <span className="text-sm leading-6 font-semibold ml-[22px] group-hover:text-primary-main">
                Edit
              </span>
            </button>
          </li>
          <li className="mb-3">
            <button
              className="flex items-center group"
              onClick={() => {
                setIsShowModalDelete((isShowModalDelete) => !isShowModalDelete);
              }}
            >
              <TrashIcon />
              <span className="text-sm leading-6 font-semibold ml-[22px] group-hover:text-danger-main">
                Delete
              </span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
