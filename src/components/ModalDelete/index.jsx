import CloseIcon from "../../assets/CloseIcon";
import ExclamationIcon from "../../assets/ExclamationIcon";

const ModalDelete = () => {
  return (
    // Modal Background
    <div className="w-full h-full bg-[rgba(200,200,200)] fixed flex justify-center items-center">
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
          <button className="bg-transparent border-0 text-2xl cursor-pointer">
            <CloseIcon />
          </button>
        </div>
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
          <button className="px-4 py-1 shadow rounded-lg text-sm leading-6 font-bold text-neutral-100 mr-2.5">
            Cancel
          </button>
          <button className="px-4 py-1 shadow rounded-lg text-sm leading-6 font-bold text-neutral-10 bg-danger-main mr-2.5">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
