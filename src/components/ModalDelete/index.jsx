import { useState } from "react";

import TaskServices from "../../services/task";
import AuthServices from "../../services/auth";

import Loader from "../Loader";
import CloseIcon from "../../assets/CloseIcon";
import ExclamationIcon from "../../assets/ExclamationIcon";

const ModalDelete = ({
  isShowModalDelete,
  setIsShowModalDelete,
  setIsDeleted,
  groupId,
  currentTaskId,
  setIsShowMenu,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleDelete = async () => {
    setIsLoading((isLoading) => !isLoading);

    const token = AuthServices.getToken();
    const response = await TaskServices.deleteTask(
      token,
      groupId,
      currentTaskId
    );

    if (!response.ok) {
      const json = await response.json();
      setError(json.message);
    } else {
      setIsShowModalDelete((isShowModalDelete) => !isShowModalDelete);
      setError("");
      setIsDeleted((isDeleted) => !isDeleted);
    }

    setIsLoading((isLoading) => !isLoading);
    setIsShowMenu((isShowMenu) => !isShowMenu);
  };

  return (
    // Modal Background
    <div
      className={`w-full h-full bg-modal-background flex justify-center items-center fixed top-0 bottom-0 z-30 ${
        isShowModalDelete ? "flex" : "hidden"
      }`}
    >
      {/* Modal Container */}
      <div className="w-[420px] h-[188x] rounded-[10px] bg-white shadow flex flex-col p-6">
        {/* Modal Header */}
        <div className="flex justify-between">
          {/* Modal Title */}
          <div className="flex">
            <ExclamationIcon />
            <span className="text-lg leading-7 font-bold text-neutral-100 ml-3">
              Delete Task
            </span>
          </div>
          <button
            className="bg-transparent border-0 text-2xl cursor-pointer"
            onClick={() =>
              setIsShowModalDelete((isShowModalDelete) => !isShowModalDelete)
            }
          >
            <CloseIcon />
          </button>
        </div>
        {error && (
          <p className="text-danger-main text-xs mt-4 text-center">{error}</p>
        )}
        {/* Modal Body */}
        <div className="mt-4">
          {/* Text */}
          <p className="text-left text-sm leading-6 text-neutral-90">
            Are you sure want to delete this task? your action can't be
            reverted.
          </p>
        </div>
        {/* Modal Footer */}
        <div className="flex justify-end items-center mt-4">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <button
                onClick={() =>
                  setIsShowModalDelete(
                    (isShowModalDelete) => !isShowModalDelete
                  )
                }
                className="px-4 py-1 shadow rounded-lg text-sm leading-6 font-bold text-neutral-100 mr-2.5"
              >
                Cancel
              </button>
              <button
                className="px-4 py-1 shadow rounded-lg text-sm leading-6 font-bold text-neutral-10 bg-danger-main mr-2.5"
                onClick={handleDelete}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
