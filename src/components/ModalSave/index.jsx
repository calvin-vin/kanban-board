const ModalSave = () => {
  return (
    // Modal Background
    <div className="w-full h-full bg-gray-600 fixed flex justify-center items-center">
      {/* Modal Container */}
      <div className="w-[420px] h-[311px] rounded-[10px] bg-white shadow flex flex-col p-6">
        {/* Modal Header */}
        <div className="flex justify-between">
          {/* Modal Title */}
          <div className="text-lg leading-7 font-bold text-neutral-100">
            Create Task
          </div>
          <button className="bg-transparent border-0 text-2xl cursor-pointer">
            <CloseIcon />
          </button>
        </div>
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
            />
          </div>
        </div>
        {/* Modal Footer */}
        <div className="flex justify-end items-center mt-6">
          <button className="px-4 py-1 shadow rounded-lg text-sm leading-6 font-bold text-neutral-100 mr-2.5">
            Cancel
          </button>
          <button className="px-4 py-1 shadow rounded-lg text-sm leading-6 font-bold text-neutral-10 bg-primary-main mr-2.5">
            Save Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSave;
