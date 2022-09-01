import { useState } from "react";

import TaskServices from "../../services/task";
import AuthServices from "../../services/auth";

import Loader from "../Loader";
import CloseIcon from "../../assets/CloseIcon";

const ModalSave = ({
  isShowModal,
  setIsShowModal,
  groupId,
  setIsSubmitted,
}) => {
  const formDataDefault = {
    name: "",
    progress_percentage: "",
  };

  const [formData, setFormData] = useState(formDataDefault);

  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading((isLoading) => !isLoading);

    const token = AuthServices.getToken();
    const response = await TaskServices.createTask(token, groupId, formData);
    const json = await response.json();
    if (!response.ok) {
      setError(json.message);
    } else {
      setIsShowModal((isShowModal) => !isShowModal);
      setFormData(formDataDefault);
      setError("");
      setIsSubmitted((isSubmitted) => !isSubmitted);
    }

    setIsLoading((isLoading) => !isLoading);
  };

  return (
    // Modal Background
    <div
      className={`w-full h-full bg-modal-background justify-center items-center fixed top-0 bottom-0 z-30 ${
        isShowModal ? "flex" : "hidden"
      }`}
    >
      {/* Modal Container */}
      <form
        onSubmit={handleSubmit}
        className="w-[420px] rounded-[10px] bg-white shadow flex flex-col p-6"
      >
        {/* Modal Header */}
        <div className="flex justify-between">
          {/* Modal Title */}
          <div className="text-lg leading-7 font-bold text-neutral-100">
            Create Task
          </div>
          <button
            className="bg-transparent border-0 text-2xl cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setIsShowModal((isShowModal) => !isShowModal);
            }}
          >
            <CloseIcon />
          </button>
        </div>
        {error && (
          <p className="text-danger-main text-xs mt-4 text-center">{error}</p>
        )}
        {/* Modal Body */}
        <div className="flex flex-col mt-6">
          {/* Input Group */}
          <div className="flex flex-col items-start">
            <label
              htmlFor="task_name"
              className="text-xs leading-5 text-neutral-90 font-bold mb-2"
            >
              Task Name
            </label>
            <input
              type="text"
              id="task_name"
              className="border-2 border-neutral-30 rounded-lg text-xs leading-5 text-neutral-90 px-4 py-2 w-full"
              placeholder="Type your Task"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          {/* Input Group */}
          <div className="flex flex-col items-start mt-4">
            <label
              htmlFor="progress"
              className="text-xs leading-5 text-neutral-90 font-bold mb-2"
            >
              Progress
            </label>
            <input
              type="text"
              id="progress"
              className="border-2 border-neutral-30 rounded-lg text-xs leading-5 text-neutral-90 px-4 py-2 w-1/3"
              placeholder="70%"
              value={formData.progress_percentage}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  progress_percentage: parseInt(e.target.value),
                })
              }
            />
          </div>
        </div>
        {/* Modal Footer */}
        <div className="flex justify-end items-center mt-6">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <button
                className="px-4 py-1 shadow rounded-lg text-sm leading-6 font-bold text-neutral-100 mr-2.5"
                onClick={() => setIsShowModal((isShowModal) => !isShowModal)}
              >
                Cancel
              </button>
              <button className="px-4 py-1 shadow rounded-lg text-sm leading-6 font-bold text-neutral-10 bg-primary-main mr-2.5">
                Save Task
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default ModalSave;
